---
name: bigseller-template-downloader
description: Autonomously download and validate the latest official BigSeller Excel templates through read-only Playwright navigation using the user's cloned authenticated browser profile.
---

# BigSeller Template Downloader

Use this skill when the user asks Codex to obtain current BigSeller templates or refresh the local BigSeller template library without manual clicking.

## Project location

`automation/bigseller-template-downloader/`

## Execution

Run from repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\automation\bigseller-template-downloader\scripts\run.ps1
```

The runner clones the current Edge/Chrome profile, discovers the most recent BigSeller URL, downloads four official templates, validates their signatures, and writes a manifest with hashes.

## Failure recovery

For exit code `1`:

1. inspect the newest `automation/bigseller-template-downloader/artifacts/<run-id>/`;
2. inspect `trace.zip`, screenshots, HTML, and interactives JSON;
3. update `config/targets.json` labels first;
4. rerun tests and the downloader;
5. continue until four templates have `SUCCESS` status.

For exit code `2`, stop with `AUTH_REQUIRED`. Never bypass login CAPTCHA/2FA and never request or print credentials.

## Safety

This is download-only automation. Do not upload templates or click Save, Confirm, Publish, Update, Delete, Stock-In, Stock-Out, price, cost, inventory, mapping, ads, or campaign actions.
