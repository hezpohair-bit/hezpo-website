# AGENTS.md — Hezpo Website

This file defines the working rules for Codex agents in the Hezpo website repo.

## Project identity

Hezpo Website is a Next.js App Router site for a Malaysia hair care and hair styling product business. The site serves B2C shoppers, B2B wholesale customers, dealers/distributors, salons, and barbers.

Current public domain target: `https://www.hezpohair.com`.

Core stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- SEO metadata, sitemap, robots routes
- Vercel-ready marketing pages

## Real business workflow

The owner uses Codex for practical e-commerce execution, not theoretical refactors. Prefer work that directly improves:

- Product-page conversion
- Website trust and inquiry rate
- Shopee / TikTok / Google SEO support content
- Product image integration
- WhatsApp inquiry flow
- B2C / wholesale / dealer / salon routing
- Audit reports that explain exactly what changed, why, and how it was verified

## Important product and channel context

Known high-priority products and ranges include:

- TOPPIK Hair Building Fiber Black
- Hermoso Professional Extra Hold Hair Spray 420ml
- HSIS / HSSIS Hair Clay
- ALKEN shampoo / masque ranges
- Carexpert Argan Oil
- HEADS Hairloss Series
- V&G V-1248 Hair Straightener

Known sales/content channels:

- Website: `www.hezpohair.com`
- Shopee shops: iSalon and HezpoHair
- TikTok Shop: Hezpo.Shop
- Facebook, Instagram, TikTok, YouTube Shorts via Metricool-style publishing workflow

## Tool and plugin policy

Use the available tools deliberately:

- Use Chrome DevTools MCP for browser DOM, CSS, console, network, layout, performance, and real visual audit tasks.
- Use Playwright only when tests/config exist or when the task explicitly asks to create browser tests.
- Use Context7 when current Next.js, React, Tailwind, Vercel, or package behavior matters.
- Use the OpenAI Developer Docs MCP when working on OpenAI API, Codex, ChatGPT Apps SDK, MCP, plugins, or OpenAI-specific configuration.
- Do not install extra MCP servers, packages, or plugins unless the task has a clear business or engineering reason.

## Guardrails

Do not do these unless the user explicitly asks:

- Do not read, print, commit, or modify `.env.local`, secrets, tokens, API keys, Vercel tokens, Shopee credentials, TikTok credentials, or Metricool credentials.
- Do not make live changes inside Shopee Seller Centre, TikTok Shop, Metricool, Vercel, Google, or any seller/admin platform.
- Do not invent fake product images or point the site to image paths that do not exist.
- Do not fabricate product ingredients, certifications, medical claims, hair-growth claims, or clinical guarantees.
- Do not rewrite unrelated files during a focused task.
- Do not delete generated reports or business data unless the user asks.

## Coding style

Prefer small, surgical changes.

- Keep existing structure unless there is a strong reason to change it.
- Reuse `src/lib/site-data.ts` as the main source for product/site content when possible.
- Keep customer paths clear: B2C, Wholesale, Dealer, Salon.
- Keep copy practical and conversion-focused.
- For Malaysia-market copy, consider humidity, helmet hair, sweat, frizz, flat hair, salon trust, reseller margin, and product education.

## Validation checklist

Before finishing a code task, run the most relevant checks available:

```bash
npm run build
```

Also run when relevant:

```bash
npm run lint
npx playwright test
```

If Playwright is missing or there are no tests, report that clearly instead of pretending the test passed.

## Required response format for Codex work

Every completed Codex task should report:

1. What changed
2. Why it changed
3. Files changed
4. Commands run and exact results
5. Current `git status`
6. Risks / remaining manual steps
7. Suggested next step
