# Codex Task: Install Selected Agency Agents

## Objective

Install a reviewed subset of `msitarzewski/agency-agents` into the current Windows user's Codex custom-agent directory without changing the Hezpo website, marketplace accounts, existing Hezpo prompts, or unrelated Codex agents.

## Important execution requirement

Run this task in **Codex on the user's Windows computer**. Do not treat installation inside a temporary cloud container as completion because `~/.codex/agents/` in a cloud task is not the user's persistent local Codex directory.

## Approved agents

Install only these eight agents:

1. Cross-Border E-Commerce Specialist
2. SEO Specialist
3. AEO Foundations Architect
4. Social Media Strategist
5. Video Optimization Specialist
6. Customer Service
7. Pricing Analyst
8. Analytics Reporter

Do not install all Agency Agents.

## Approved script

Review and run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install-agency-agents-codex.ps1
```

The script is designed to:

- clone the official `msitarzewski/agency-agents` repository into a temporary directory;
- generate Codex TOML files using the upstream conversion script;
- validate the exact internal `name` of every approved agent;
- copy only the approved eight TOML files to `$HOME\.codex\agents`;
- back up an existing same-name file before replacing it;
- leave unrelated files in `$HOME\.codex\agents` untouched;
- generate `INSTALL_REPORT.md` in this repository;
- remove its temporary clone after completion.

## Required checks

Before execution:

1. Confirm the current repository is `hezpohair-bit/hezpo-website`.
2. Confirm the checked-out branch is `agent/install-agency-agents-codex`.
3. Review the PowerShell script for unexpected marketplace, credential, deletion, or publishing actions.
4. Confirm Git for Windows and Git Bash are available.

After execution:

1. Confirm exactly these files exist in `$HOME\.codex\agents`:
   - `cross-border-e-commerce-specialist.toml`
   - `seo-specialist.toml`
   - `aeo-foundations-architect.toml`
   - `social-media-strategist.toml`
   - `video-optimization-specialist.toml`
   - `customer-service.toml`
   - `pricing-analyst.toml`
   - `analytics-reporter.toml`
2. Confirm each file contains `name`, `description`, and `developer_instructions`.
3. Confirm unrelated existing Codex agents were not removed or modified.
4. Confirm `INSTALL_REPORT.md` accurately lists all eight installed agents and the upstream source commit.
5. Run `git status --short`. The expected repository change after installation is `INSTALL_REPORT.md`; files copied to `$HOME\.codex\agents` are outside the repository and must not be committed.
6. Do not change website source code, dependencies, environment variables, or Vercel settings.

## Completion test

Restart or open a new Codex session, then verify that these requests can resolve the installed custom agents:

```text
Use the Cross-Border E-Commerce Specialist to review a Shopee Malaysia hair-care listing.
```

```text
Use Customer Service to draft a polite Malay reply to a buyer reporting a leaking bottle.
```

```text
Use the Pricing Analyst and Analytics Reporter to explain what data is needed to evaluate an SKU's margin and ROAS.
```

Do not access Shopee, TikTok Shop, BigSeller, Metricool, customer accounts, credentials, or live marketplace data during this installation test.

## Safety boundaries

This task must not:

- log in to a marketplace;
- publish or edit a listing;
- change price or inventory;
- send customer messages;
- approve refunds or disputes;
- bypass a CAPTCHA or platform restriction;
- delete or overwrite existing Hezpo prompts;
- install any Agency Agent outside the approved list.

## Final response expected from Codex

Report:

- whether installation succeeded;
- the exact installation directory;
- the eight installed filenames;
- whether any same-name files were backed up and where;
- the Agency Agents source commit;
- validation results;
- any blocker that prevented persistent local installation.
