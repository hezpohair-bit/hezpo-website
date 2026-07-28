# AGENTS.md — BigSeller Template Downloader

This directory is a read-only BigSeller browser automation project.

## Required outcome

Run Playwright against the user's cloned authenticated Edge/Chrome profile and download all four official current-account templates:

1. Shopee product import/create template
2. Merchant SKU import/update template
3. Bulk Store SKU to Merchant SKU mapping template
4. Inventory Safety Stock/Shelf update template

A run is complete only when `templates/latest/manifest.json` has four `SUCCESS` entries with non-zero bytes and SHA-256 hashes.

## Autonomous Codex loop

1. Run `powershell -ExecutionPolicy Bypass -File .\scripts\run.ps1` from this directory or the full path from repo root.
2. If the result is exit code `1`, inspect the newest `artifacts/<run-id>/` screenshot, HTML, interactives JSON, and trace.
3. Update the smallest relevant labels in `config/targets.json` first.
4. Change selector/navigation code only when label updates cannot solve the current DOM.
5. Rerun tests and the downloader.
6. Repeat until all four templates succeed.

Do not ask the user to click through BigSeller or manually download files. The only hard stop is `AUTH_REQUIRED`, CAPTCHA, or 2FA. Never attempt to bypass those controls.

## Strict write safety

Allowed:

- read browser history from the cloned local profile;
- navigate BigSeller menus;
- click buttons whose sole effect is downloading a template;
- save local files, screenshots, HTML, traces, and manifests.

Blocked:

- uploads;
- Save, Submit, Confirm, Publish, Update, Delete, Stock-In, Stock-Out, price, cost, inventory, mapping, authorization, ads, or campaign changes;
- reading or committing browser cookies, passwords, tokens, `.runtime`, downloads, or artifacts;
- bypassing CAPTCHA or 2FA.

## Cost rule for later workflows

BigSeller `Commodity Cost = 0` is not automatically `COST_MISSING`. Resolve cost in this order:

1. SQL exact SKU cost
2. SQL cost after approved SKU alias/mapping
3. bundle/BOM cost
4. BigSeller commodity/reference cost
5. manual Cost Master
6. otherwise `COST_MISSING`

The user reports roughly 70% SQL cost coverage, so SQL is the primary source. This downloader itself must not edit any cost.

## Validation

Run:

```powershell
npm test
node --check .\src\download-templates.mjs
```

Report exact exit codes, manifest counts, files written, and remaining blockers.
