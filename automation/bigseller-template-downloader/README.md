# BigSeller Official Template Downloader

Read-only Playwright automation for downloading the latest official Excel templates from the authenticated BigSeller account.

## Downloads

The runner targets these current BigSeller menu flows:

1. Shopee Draft > Import to Create Products > Download a Template
2. Inventory > Merchant SKU > Import & Export > Update / Import Merchant SKU > Download a Template
3. Inventory > Merchant SKU > Import & Export > Store SKU Mapping > Download Import Template
4. Inventory > Inventory List > Import & Export > Import Merchant SKU > Download a Template

The fourth workbook is the inventory-update template that contains fields such as Safety Stock and Shelf. Depending on the BigSeller account/UI version, it may also contain cost-related fields.

## Safety boundary

This project only:

- opens BigSeller using a cloned Edge/Chrome profile;
- navigates read-only pages;
- downloads template files;
- saves screenshots, HTML, interactives, and a Playwright trace when a selector fails;
- validates the downloaded file signature, size, and SHA-256 hash.

It does **not** upload a workbook, change stock, change cost, change price, publish products, delete data, submit forms, or bypass CAPTCHA/2FA.

## One-command local run

From the repository root on the user's Windows computer:

```powershell
powershell -ExecutionPolicy Bypass -File .\automation\bigseller-template-downloader\scripts\run.ps1
```

The script automatically:

1. installs Node.js LTS with `winget` when Node is missing;
2. installs Playwright dependencies;
3. clones the most recently used Edge profile (Chrome fallback);
4. finds the most recent BigSeller URL from the cloned browser history;
5. downloads and validates all four templates.

For visible troubleshooting:

```powershell
powershell -ExecutionPolicy Bypass -File .\automation\bigseller-template-downloader\scripts\run.ps1 -Headed -Discover
```

## Output

```text
downloads/YYYY-MM-DD/                  timestamped archive
templates/latest/                      stable latest filenames
templates/latest/manifest.json         download result, bytes, hashes and source URLs
artifacts/<run-id>/trace.zip            Playwright trace
artifacts/<run-id>/*.png                screenshots on discovery/failure
artifacts/<run-id>/*-interactives.json  visible button/link inventory
```

These runtime folders are ignored by Git.

## Exit codes

- `0`: all four templates downloaded and validated
- `1`: selector/download/file-validation failure
- `2`: BigSeller login session expired or CAPTCHA/login is required

`AUTH_REQUIRED` is the only normal blocker that cannot be solved safely by the automation. The runner never reads or stores the BigSeller password.

## Environment overrides

```powershell
$env:BIGSELLER_HOME_URL = 'https://...'
$env:BIGSELLER_HEADED = '1'
$env:BIGSELLER_DISCOVER = '1'
```

The browser/profile can also be selected through `run.ps1`:

```powershell
.\scripts\run.ps1 -Browser edge -ProfileDirectory 'Profile 1'
```

## Validation

```powershell
npm test
node --check .\src\download-templates.mjs
```

## Codex operating loop

Codex should run the normal command first. If a selector fails, it should inspect the newest artifacts and `trace.zip`, update only `config/targets.json` or the smallest necessary selector helper, rerun, and continue until all four manifest entries are `SUCCESS`. It must not ask the user to manually download the templates.
