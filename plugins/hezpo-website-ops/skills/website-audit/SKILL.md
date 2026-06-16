---
name: hezpo-website-audit
description: Audit and improve the Hezpo Next.js website using browser checks, safe code changes, and clear verification reports.
---

# Hezpo Website Audit Skill

Use this skill when the user asks Codex to audit, debug, improve, or verify the Hezpo website.

## Goal

Improve website trust, conversion, SEO readiness, product clarity, WhatsApp inquiry flow, and real browser quality without creating fake assets or touching secrets.

## Standard workflow

1. Confirm the project root contains `package.json` and the expected Next.js app structure.
2. Read relevant files before editing. Common files include:
   - `src/lib/site-data.ts`
   - `src/app/**/page.tsx`
   - `src/components/**`
   - `README.md`
   - existing reports or test files
3. Use Chrome DevTools MCP for visual/browser issues:
   - DOM structure
   - CSS/layout problems
   - console errors
   - network errors
   - responsive checks
   - performance observations
4. Use Context7 when Next.js, React, Tailwind, or Vercel behavior needs current documentation.
5. Use OpenAI Developer Docs MCP for OpenAI/Codex/plugin/MCP/API work.
6. Make the smallest safe change that solves the requested problem.
7. Validate with:

```bash
npm run build
```

Also run when relevant:

```bash
npm run lint
npx playwright test
```

## Image policy

Do not invent product image paths. Only connect images that actually exist in the repo.

Preferred product image locations:

- `public/images/products/hermoso-hair-spray/`
- `public/images/products/hsis-hair-clay/`
- `public/images/products/toppik/`
- `public/images/products/alken/`
- `public/images/products/carexpert/`
- `public/images/products/heads/`
- `public/images/products/vg-v1248/`

If real images are missing, create or update a missing-image report instead of faking the integration.

## WhatsApp and external platform policy

- Do not read or modify `.env.local` unless explicitly requested.
- Do not expose WhatsApp numbers beyond what is already public in repo files.
- Do not make live changes in Shopee, TikTok Shop, Metricool, Vercel, Google, or any external admin platform unless explicitly requested.

## Product claim policy

Avoid unverified claims:

- No fake ingredients.
- No fake certifications.
- No guaranteed hair-growth claims.
- No clinical or medical claims unless verified source data is provided.

Prefer practical, compliant copy:

- Humidity support
- Styling hold
- Matte texture
- Easy product education
- Salon/reseller suitability
- Before/after framing without medical claims

## Report format

End every task with:

- What changed
- Why it changed
- Files changed
- Commands run and results
- `git status`
- Remaining risks / manual steps
- Suggested next step
