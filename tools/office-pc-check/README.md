# Hezpo Office PC Check

Read-only Windows environment checker for the Hezpo office computer.

## Files

- `Hezpo_Office_PC_Check.ps1`
- `Run_Hezpo_PC_Check.bat`

## Checks

- Windows, CPU, RAM and C: free space
- Git, Git Bash, GitHub CLI
- Node.js, npm, Python, pip and Codex
- VS Code, uv, Docker, FFmpeg and Ollama
- `.codex` folder
- `hezpo-website` repository
- Eight project-level Codex agents
- GitHub CLI authentication

## Safety

- Read-only checks
- Does not read passwords, browser cookies, marketplace credentials, API keys or document contents
- Does not install or repair anything
- Does not modify Shopee, TikTok Shop, BigSeller, Metricool, prices, listings, inventory or refunds

## SHA-256

- `Hezpo_Office_PC_Check.ps1`: `7f6803e3a87d2659a3f96d0dcab38b0e3c58bcd5ca3b1240f2a5a03721ed2f4c`
- `Run_Hezpo_PC_Check.bat`: `21a4d8a9ee6dccd25e6d4d354c00111bcf9577fed9ce4a7d2bc1ff2d6bb0c7d7`

## Run

Place both files in the same folder and run `Run_Hezpo_PC_Check.bat`. The report is saved to the Windows Desktop as `HEZPO_PC_CHECK_*.md`.
