# Hezpo Website

V1 website for Hezpo, a Malaysia hair care and hair styling product brand serving B2C, B2B wholesale, dealer/distributor and salon/professional customers.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- SEO metadata, sitemap and robots routes
- Vercel-ready static marketing pages

## Pages

- Home: four-way customer routing
- Products: product catalog
- Product detail: Hermoso Professional Extra Hold Hair Spray 420ml
- Product detail: HSIS Hair Clay
- B2C consumer page
- B2B wholesale page
- Dealer / distributor page
- Salon / professional page
- Blog / GEO SEO category structure
- FAQ
- About Us
- Contact

## Install

```bash
npm install
```

## Run Locally

Create `.env.local` first:

```bash
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/601159893039
```

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Create a new project in Vercel.
3. Select the GitHub repository.
4. Open Project Settings > Environment Variables.
5. Add `NEXT_PUBLIC_WHATSAPP_URL`.
6. Set the value to your WhatsApp link, for example `https://wa.me/601159893039`.
7. Keep the default Next.js settings.
8. Click Deploy.

## WhatsApp Setup

All WhatsApp buttons and inquiry form submissions use:

```bash
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/601159893039
```

Use international format without `+`, spaces or dashes.

Examples:

```bash
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/601159893039
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/60111222333
```

To change the WhatsApp number locally, update `.env.local`, stop the dev server, then run `npm run dev` again.

To change the WhatsApp number on Vercel, update `NEXT_PUBLIC_WHATSAPP_URL` in Vercel Environment Variables and redeploy.

## Update Brand Links

Edit `src/lib/site-data.ts`:

- Shopee URL
- TikTok Shop URL
- Email
- Product data
- FAQ content
- Blog categories

## Future Expansion

The structure is ready for:

- More product pages
- Blog article pages
- FAQ category pages
- Real product images
- Backend form handling
- Analytics and conversion tracking
