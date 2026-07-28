# Codex Task: Download BigSeller Official Templates

Execute the autonomous loop defined in `AGENTS.md`.

Start with:

```powershell
powershell -ExecutionPolicy Bypass -File .\automation\bigseller-template-downloader\scripts\run.ps1
```

Success criteria:

- `templates/latest/manifest.json` exists;
- `successCount` is `4`;
- `failureCount` is `0`;
- all four files exist in `templates/latest/`;
- each manifest entry contains `bytes > 0` and a SHA-256 hash;
- no BigSeller write operation was performed.

If selectors fail, use the generated screenshots, HTML, interactives JSON, and trace to repair the flow and rerun automatically. Do not ask the user to download anything manually.
