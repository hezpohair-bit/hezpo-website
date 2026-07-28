import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

export function safeSlug(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function detectWorkbookExtension(buffer, suggestedName = '') {
  const lower = suggestedName.toLowerCase();
  if (lower.endsWith('.xlsx') || lower.endsWith('.xlsm')) return path.extname(lower);
  if (lower.endsWith('.xls')) return '.xls';
  if (lower.endsWith('.csv')) return '.csv';

  if (buffer.length >= 4 && buffer[0] === 0x50 && buffer[1] === 0x4b) return '.xlsx';
  if (
    buffer.length >= 8 &&
    buffer[0] === 0xd0 && buffer[1] === 0xcf && buffer[2] === 0x11 && buffer[3] === 0xe0
  ) return '.xls';

  const sample = buffer.subarray(0, 512).toString('utf8');
  if (sample.includes(',') || sample.includes('\t')) return '.csv';
  return '.bin';
}

export function validateWorkbookBuffer(buffer, extension) {
  const errors = [];
  if (!Buffer.isBuffer(buffer)) errors.push('NOT_A_BUFFER');
  if (buffer.length < 256) errors.push('FILE_TOO_SMALL');

  if (extension === '.xlsx' || extension === '.xlsm') {
    if (!(buffer[0] === 0x50 && buffer[1] === 0x4b)) errors.push('INVALID_XLSX_SIGNATURE');
  } else if (extension === '.xls') {
    const validOle = buffer[0] === 0xd0 && buffer[1] === 0xcf && buffer[2] === 0x11 && buffer[3] === 0xe0;
    if (!validOle) errors.push('INVALID_XLS_SIGNATURE');
  } else if (extension === '.csv') {
    const text = buffer.subarray(0, Math.min(buffer.length, 2048)).toString('utf8');
    if (!text.includes(',') && !text.includes('\t') && !text.includes(';')) errors.push('INVALID_CSV_CONTENT');
  } else {
    errors.push('UNSUPPORTED_FILE_TYPE');
  }

  return { ok: errors.length === 0, errors };
}

export function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

export async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

export async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
