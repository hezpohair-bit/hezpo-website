import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import {
  detectWorkbookExtension,
  fileExists,
  safeSlug,
  sha256,
  validateWorkbookBuffer,
  writeJson,
} from './helpers.mjs';

const __filename = fileURLToPath(import.meta.url);
const projectDir = path.resolve(path.dirname(__filename), '..');
const args = new Set(process.argv.slice(2));
const headed = args.has('--headed') || process.env.BIGSELLER_HEADED === '1';
const discoverMode = args.has('--discover') || process.env.BIGSELLER_DISCOVER === '1';
const runStamp = new Date().toISOString().replace(/[:.]/g, '-');
const dayStamp = new Date().toISOString().slice(0, 10);
const archiveDir = path.join(projectDir, 'downloads', dayStamp);
const latestDir = path.join(projectDir, 'templates', 'latest');
const artifactDir = path.join(projectDir, 'artifacts', runStamp);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const labelRegex = (labels) => new RegExp(`^(?:${labels.map(escapeRegex).join('|')})$`, 'i');

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function getRecentBigSellerUrl(runtime) {
  if (process.env.BIGSELLER_HOME_URL) return process.env.BIGSELLER_HOME_URL;
  const historyPath = path.join(runtime.userDataDir, runtime.profileDirectory, 'History');
  if (!(await fileExists(historyPath))) return null;

  try {
    const { DatabaseSync } = await import('node:sqlite');
    const db = new DatabaseSync(historyPath, { readOnly: true });
    const rows = db.prepare(`
      SELECT url
      FROM urls
      WHERE url LIKE '%bigseller.com%'
        AND url NOT LIKE '%help.bigseller.com%'
      ORDER BY last_visit_time DESC
      LIMIT 30
    `).all();
    db.close();

    const preferred = rows
      .map((row) => row.url)
      .find((url) => !/login\.htm|signup|register/i.test(url));
    return preferred ?? rows[0]?.url ?? null;
  } catch (error) {
    console.warn(`[history] Could not read browser history: ${error.message}`);
    return null;
  }
}

async function firstVisible(locator) {
  const count = await locator.count();
  for (let index = 0; index < count; index += 1) {
    const candidate = locator.nth(index);
    try {
      if (await candidate.isVisible()) return candidate;
    } catch {
      // DOM changed while checking; continue.
    }
  }
  return null;
}

async function locateByLabels(page, labels) {
  const regex = labelRegex(labels);
  for (const role of ['button', 'link', 'menuitem', 'tab', 'option']) {
    const candidate = await firstVisible(page.getByRole(role, { name: regex }));
    if (candidate) return candidate;
  }

  const exactText = await firstVisible(page.getByText(regex));
  if (exactText) return exactText;

  for (const label of labels) {
    const containsText = await firstVisible(page.getByText(label, { exact: false }));
    if (containsText) return containsText;
  }
  return null;
}

async function clickAny(page, labels, context) {
  const locator = await locateByLabels(page, labels);
  if (!locator) throw new Error(`SELECTOR_NOT_FOUND: ${context}: ${labels.join(' | ')}`);
  await locator.scrollIntoViewIfNeeded().catch(() => {});
  await locator.click({ timeout: 12_000 });
  await page.waitForTimeout(700);
}

async function dismissOverlays(page) {
  await page.keyboard.press('Escape').catch(() => {});
  for (const labels of [
    ['Close', 'Cancel', '关闭', 'Tutup'],
    ['Got it', 'I know', '知道了', 'Faham'],
  ]) {
    const candidate = await locateByLabels(page, labels);
    if (candidate) await candidate.click({ timeout: 2_000 }).catch(() => {});
  }
}

async function isLoginPage(page, config) {
  if (/login\.htm|\/login(?:[/?#]|$)/i.test(page.url())) return true;
  if (await page.locator('input[type="password"]').first().isVisible().catch(() => false)) return true;
  if (await page.getByText(labelRegex(config.loginMarkers)).first().isVisible().catch(() => false)) {
    const hasAuthMarker = await page
      .getByText(labelRegex(config.authMarkers))
      .first()
      .isVisible()
      .catch(() => false);
    return !hasAuthMarker;
  }
  return false;
}

async function saveDiscovery(page, name) {
  const safeName = safeSlug(name);
  await fs.mkdir(artifactDir, { recursive: true });
  await page.screenshot({ path: path.join(artifactDir, `${safeName}.png`), fullPage: true }).catch(() => {});
  await fs.writeFile(path.join(artifactDir, `${safeName}.html`), await page.content(), 'utf8').catch(() => {});

  const candidates = await page
    .locator('a,button,[role="button"],[role="link"],[role="menuitem"],[role="tab"]')
    .evaluateAll((elements) =>
      elements.slice(0, 600).map((element) => ({
        tag: element.tagName,
        role: element.getAttribute('role'),
        text: (element.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 240),
        href: element.getAttribute('href'),
        ariaLabel: element.getAttribute('aria-label'),
        title: element.getAttribute('title'),
      })).filter((item) => item.text || item.ariaLabel || item.title || item.href)
    )
    .catch(() => []);
  await writeJson(path.join(artifactDir, `${safeName}-interactives.json`), candidates);
}

async function captureTemplateDownload(page, labels, task) {
  let responseAttachment = null;
  const responseHandler = async (response) => {
    if (responseAttachment) return;
    try {
      const headers = await response.allHeaders();
      const contentDisposition = headers['content-disposition'] ?? '';
      const contentType = headers['content-type'] ?? '';
      const looksLikeWorkbook =
        /attachment/i.test(contentDisposition) || /spreadsheet|excel|csv|octet-stream/i.test(contentType);
      if (!looksLikeWorkbook) return;
      const buffer = await response.body();
      if (buffer.length < 256) return;
      responseAttachment = {
        buffer,
        suggestedName: contentDisposition.match(/filename\*?=(?:UTF-8''|\")?([^";]+)/i)?.[1] ?? '',
        url: response.url(),
        source: 'response',
      };
    } catch {
      // Download event remains the primary path.
    }
  };

  page.on('response', responseHandler);
  const downloadPromise = page.waitForEvent('download', { timeout: 25_000 }).catch(() => null);
  try {
    await clickAny(page, labels, `${task.id}: download button`);
    const download = await downloadPromise;
    if (download) {
      const tempPath = await download.path();
      let buffer;
      if (tempPath) {
        buffer = await fs.readFile(tempPath);
      } else {
        const stream = await download.createReadStream();
        const chunks = [];
        for await (const chunk of stream) chunks.push(chunk);
        buffer = Buffer.concat(chunks);
      }
      return {
        buffer,
        suggestedName: download.suggestedFilename(),
        url: download.url(),
        source: 'download',
      };
    }

    for (let attempt = 0; attempt < 20 && !responseAttachment; attempt += 1) await sleep(500);
    if (responseAttachment) return responseAttachment;
    throw new Error(`DOWNLOAD_NOT_CAPTURED: ${task.id}`);
  } finally {
    page.off('response', responseHandler);
  }
}

async function processTemplate(page, task, startUrl) {
  console.log(`\n[template] ${task.id}`);
  await page.goto(startUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForTimeout(1_500);
  await dismissOverlays(page);

  for (let index = 0; index < task.navigation.length; index += 1) {
    await clickAny(page, task.navigation[index], `${task.id}: navigation ${index + 1}`);
  }
  for (let index = 0; index < task.actions.length - 1; index += 1) {
    await clickAny(page, task.actions[index], `${task.id}: action ${index + 1}`);
  }
  if (discoverMode) await saveDiscovery(page, `${task.id}-before-download`);

  const captured = await captureTemplateDownload(page, task.actions.at(-1), task);
  const extension = detectWorkbookExtension(captured.buffer, captured.suggestedName);
  const validation = validateWorkbookBuffer(captured.buffer, extension);
  if (!validation.ok) throw new Error(`INVALID_TEMPLATE_FILE: ${task.id}: ${validation.errors.join(',')}`);

  const archivePath = path.join(archiveDir, `${task.canonicalName}__${runStamp}${extension}`);
  const latestPath = path.join(latestDir, `${task.canonicalName}${extension}`);
  await fs.mkdir(archiveDir, { recursive: true });
  await fs.mkdir(latestDir, { recursive: true });
  await fs.writeFile(archivePath, captured.buffer);
  await fs.writeFile(latestPath, captured.buffer);

  const result = {
    id: task.id,
    description: task.description,
    status: 'SUCCESS',
    archivePath: path.relative(projectDir, archivePath),
    latestPath: path.relative(projectDir, latestPath),
    suggestedFilename: captured.suggestedName,
    extension,
    bytes: captured.buffer.length,
    sha256: sha256(captured.buffer),
    downloadUrl: captured.url,
    captureSource: captured.source,
    downloadedAt: new Date().toISOString(),
  };
  console.log(`[saved] ${result.latestPath} (${result.bytes} bytes)`);
  return result;
}

async function main() {
  const config = await readJson(path.join(projectDir, 'config', 'targets.json'));
  const runtimePath = path.join(projectDir, '.runtime', 'browser-profile.json');
  if (!(await fileExists(runtimePath))) {
    throw new Error('RUNTIME_PROFILE_MISSING: run scripts/run.ps1 so the browser profile can be cloned first');
  }
  const runtime = await readJson(runtimePath);
  const startUrl = (await getRecentBigSellerUrl(runtime)) ?? config.loginUrls[0];
  const manifest = {
    runId: runStamp,
    startedAt: new Date().toISOString(),
    mode: discoverMode ? 'DISCOVER' : 'DOWNLOAD',
    headed,
    browser: runtime.channel,
    browserProfile: runtime.profileDirectory,
    startUrl,
    templates: [],
  };

  await fs.mkdir(artifactDir, { recursive: true });
  let context;
  try {
    const launchOptions = {
      headless: !headed,
      acceptDownloads: true,
      viewport: { width: 1440, height: 1000 },
      args: [`--profile-directory=${runtime.profileDirectory}`],
    };
    if (runtime.channel === 'msedge' || runtime.channel === 'chrome') launchOptions.channel = runtime.channel;

    try {
      context = await chromium.launchPersistentContext(runtime.userDataDir, launchOptions);
    } catch (primaryError) {
      console.warn(`[browser] ${runtime.channel} launch failed; falling back to bundled Chromium: ${primaryError.message}`);
      delete launchOptions.channel;
      context = await chromium.launchPersistentContext(runtime.userDataDir, launchOptions);
    }

    await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
    const page = context.pages()[0] ?? (await context.newPage());
    page.setDefaultTimeout(12_000);
    page.setDefaultNavigationTimeout(60_000);

    console.log(`[browser] Opening ${startUrl}`);
    await page.goto(startUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.waitForTimeout(2_000);

    if (await isLoginPage(page, config)) {
      await saveDiscovery(page, 'auth-required');
      const error = new Error('AUTH_REQUIRED: BigSeller session is expired or the cloned browser profile is not logged in');
      error.code = 'AUTH_REQUIRED';
      throw error;
    }

    if (discoverMode) await saveDiscovery(page, 'authenticated-home');
    for (const task of config.templates) {
      try {
        manifest.templates.push(await processTemplate(page, task, startUrl));
      } catch (error) {
        console.error(`[failed] ${task.id}: ${error.message}`);
        await saveDiscovery(page, `${task.id}-failed`);
        manifest.templates.push({
          id: task.id,
          description: task.description,
          status: 'FAILED',
          error: error.message,
          failedAt: new Date().toISOString(),
        });
      }
    }

    manifest.finishedAt = new Date().toISOString();
    manifest.successCount = manifest.templates.filter((item) => item.status === 'SUCCESS').length;
    manifest.failureCount = manifest.templates.filter((item) => item.status === 'FAILED').length;
    await writeJson(path.join(archiveDir, `manifest-${runStamp}.json`), manifest);
    await writeJson(path.join(latestDir, 'manifest.json'), manifest);
    if (manifest.failureCount > 0) process.exitCode = 1;
  } catch (error) {
    manifest.finishedAt = new Date().toISOString();
    manifest.fatalError = error.message;
    await writeJson(path.join(artifactDir, 'fatal-error.json'), manifest);
    console.error(`\n[fatal] ${error.message}`);
    process.exitCode = error.code === 'AUTH_REQUIRED' ? 2 : 1;
  } finally {
    if (context) {
      await context.tracing.stop({ path: path.join(artifactDir, 'trace.zip') }).catch(() => {});
      await context.close().catch(() => {});
    }
  }
}

await main();
