# Phase 12: Hezpo Analytics Dashboard SOP

## Goal

Build one weekly and monthly tracking rhythm for Hezpo Hair Website analytics without changing website functionality, adding a backend, or changing page content.

This SOP defines what to track, where to collect it, and how to review performance across website traffic, blog content, product pages, lead generation, and Google Search Console.

## Tracking Sources

| Area | Primary Source | Notes |
| --- | --- | --- |
| Website traffic | Metricool | Use for visits, unique visitors, top pages, and high-level traffic review. |
| Blog performance | Metricool and Search Console | Use Metricool for page views; use Search Console for organic query signals. |
| Product pages | Metricool | Track product page visits and engagement signals by URL. |
| Lead generation | Metricool, WhatsApp link clicks, inquiry form intent | Track click volume and channel intent. No backend lead database is added in this phase. |
| Search Console | Google Search Console | Track indexed pages, impressions, clicks, click-through rate, and top queries. |

## KPI Dashboard Structure

### 1. Website

| KPI | Definition | Source | Review Frequency | Owner Note |
| --- | --- | --- | --- | --- |
| Visits | Total sessions or visits to the website. | Metricool | Weekly, Monthly | Track total demand and trend direction. |
| Unique Visitors | Estimated distinct visitors. | Metricool | Weekly, Monthly | Use to compare reach against repeat activity. |
| Top Pages | Most visited URLs. | Metricool | Weekly, Monthly | Identify pages carrying traffic and pages needing improvement. |

Required dashboard view:
- Total visits for the period
- Unique visitors for the period
- Top 10 pages by visits
- Week-over-week and month-over-month traffic movement

### 2. Blog

| KPI | Definition | Source | Review Frequency | Owner Note |
| --- | --- | --- | --- | --- |
| Top Articles | Blog posts ranked by traffic. | Metricool | Weekly, Monthly | Identify article topics with strongest demand. |
| Page Views | Views per blog URL. | Metricool | Weekly, Monthly | Use to prioritize internal links, product CTAs, and future content clusters. |

Required dashboard view:
- Top 10 blog articles by page views
- Blog total page views
- Blog page views as a percentage of total website visits
- Articles with rising organic interest

### 3. Product Pages

Track the current product pages:

| Product | URL | KPI Focus |
| --- | --- | --- |
| Hermoso Professional Extra Hold Hair Spray 420ml | `/products/hermoso-hair-spray` | Product page visits, WhatsApp ask clicks, traffic source, related blog paths. |
| HSIS Hair Clay | `/products/hsis-hair-clay` | Product page visits, WhatsApp ask clicks, traffic source, related blog paths. |

Required dashboard view:
- Product page visits by product
- Product page share of total website visits
- Top traffic sources to each product page
- Product page to WhatsApp click movement, where available

### 4. Lead Generation

| KPI | Definition | Source | Review Frequency | Owner Note |
| --- | --- | --- | --- | --- |
| WhatsApp Clicks | Clicks on WhatsApp CTAs or WhatsApp inquiry links. | Metricool or link click tracking | Weekly, Monthly | Main conversion signal before backend lead capture exists. |
| Wholesale Leads | WhatsApp or form inquiries with wholesale intent. | Inquiry message text and page source | Weekly, Monthly | Track from `/wholesale` and related CTAs. |
| Dealer Leads | WhatsApp or form inquiries with dealer/distributor intent. | Inquiry message text and page source | Weekly, Monthly | Track from `/dealer` and related CTAs. |
| Salon Leads | WhatsApp or form inquiries with salon/professional intent. | Inquiry message text and page source | Weekly, Monthly | Track from `/salon` and related CTAs. |

Required dashboard view:
- Total WhatsApp clicks
- WhatsApp clicks by page or CTA source, where available
- Wholesale lead count
- Dealer lead count
- Salon lead count
- Lead notes: product asked, quantity, location, buyer type, follow-up status

### WhatsApp Click Tracking Parameters

Every website WhatsApp CTA should include these URL parameters:

| Parameter | Purpose | Example |
| --- | --- | --- |
| `text` | Pre-filled WhatsApp message. | `Hi Hezpo, I want to ask about wholesale MOQ and bulk pricing.` |
| `source` | Identifies website-origin clicks. | `website` |
| `page` | Identifies the page or CTA location. | `product-hermoso` |
| `type` | Identifies inquiry intent. | `wholesale` |

Current tracking map:

| CTA Source | `source` | `page` | `type` | Use In Reports |
| --- | --- | --- | --- | --- |
| Home WhatsApp | `website` | `home` | `consumer` or `contact` | Measure general homepage WhatsApp demand. |
| Product Hermoso WhatsApp | `website` | `product-hermoso` | `consumer` | Measure Hermoso Hair Spray product interest. |
| Product HSIS WhatsApp | `website` | `product-hsis` | `consumer` | Measure HSIS Hair Clay product interest. |
| Wholesale WhatsApp | `website` | `wholesale` | `wholesale` | Measure reseller, MOQ, and bulk pricing intent. |
| Dealer WhatsApp | `website` | `dealer` | `dealer` | Measure dealer and distributor application intent. |
| Salon WhatsApp | `website` | `salon` | `salon` | Measure salon pricing, demo, and professional program intent. |
| Contact WhatsApp | `website` | `contact` | `contact`, `consumer`, `wholesale`, `dealer`, or `salon` | Measure contact page inquiry intent. |
| Global Header WhatsApp | `website` | `global-header` | `contact` | Separate persistent header clicks from page-body CTAs. |
| Global Footer WhatsApp | `website` | `global-footer` | `contact` | Separate persistent footer clicks from page-body CTAs. |
| Blog Article WhatsApp | `website` | `blog-[slug]` | `consumer` | Measure blog-assisted product advice clicks. |

Metricool observation SOP:

1. Open Metricool for Hezpo Hair Website.
2. Go to website analytics and review outbound link clicks or clicked URLs.
3. Filter or search clicked URLs containing `wa.me` or the configured WhatsApp phone number.
4. Group WhatsApp clicked URLs by `page=` value.
5. Group the same clicks by `type=` value to classify lead intent.
6. Record weekly counts in the Lead Generation table.
7. Record monthly trend in the Monthly Lead Generation KPI table.
8. If Metricool exports full clicked URLs, split query parameters into columns: `source`, `page`, `type`, and `text`.
9. Treat `source=website` as the verified website-origin click marker.
10. Treat clicks without these parameters as unclassified legacy or external WhatsApp clicks.

Lead classification rules:
- Wholesale Lead: asks about MOQ, bulk price, reseller price, product catalog, carton quantity, or wholesale supply.
- Dealer Lead: asks about becoming dealer, distributor, area opportunity, territory, or long-term channel partnership.
- Salon Lead: asks about salon pricing, barber use, professional use, demo, training, or retail counter program.
- General WhatsApp Click: click or conversation that does not clearly fit wholesale, dealer, or salon intent.

### 5. Search Console

| KPI | Definition | Source | Review Frequency | Owner Note |
| --- | --- | --- | --- | --- |
| Indexed Pages | Pages indexed by Google. | Search Console | Weekly, Monthly | Check that important pages are indexable. |
| Impressions | Times Hezpo pages appeared in Google Search. | Search Console | Weekly, Monthly | Early signal of SEO reach. |
| Clicks | Organic search clicks to Hezpo pages. | Search Console | Weekly, Monthly | Main SEO traffic KPI. |
| Top Queries | Queries generating impressions and clicks. | Search Console | Weekly, Monthly | Use for blog topics, product page copy, and FAQ expansion. |

Required dashboard view:
- Indexed page count
- Total impressions
- Total clicks
- Average CTR
- Average position
- Top 20 queries
- Top 10 organic landing pages

## Weekly Tracking Template

Use this table every week. Suggested review day: Monday, reviewing the previous Monday to Sunday period.

### Weekly Summary

| Field | Entry |
| --- | --- |
| Week Covered |  |
| Prepared By |  |
| Review Date |  |
| Main Win |  |
| Main Issue |  |
| Next Action |  |

### Website

| KPI | This Week | Previous Week | Change | Notes |
| --- | ---: | ---: | ---: | --- |
| Visits |  |  |  |  |
| Unique Visitors |  |  |  |  |
| Top Page 1 |  |  |  |  |
| Top Page 2 |  |  |  |  |
| Top Page 3 |  |  |  |  |

### Blog

| Article URL | Page Views | Previous Week | Change | Action |
| --- | ---: | ---: | ---: | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

### Product Pages

| Product Page | Visits | Previous Week | WhatsApp Clicks | Notes |
| --- | ---: | ---: | ---: | --- |
| Hermoso Hair Spray |  |  |  |  |
| HSIS Hair Clay |  |  |  |  |

### Lead Generation

| Lead KPI | Count | Previous Week | Change | Notes |
| --- | ---: | ---: | ---: | --- |
| WhatsApp Clicks |  |  |  |  |
| Wholesale Leads |  |  |  |  |
| Dealer Leads |  |  |  |  |
| Salon Leads |  |  |  |  |

### Search Console

| KPI | This Week | Previous Week | Change | Notes |
| --- | ---: | ---: | ---: | --- |
| Indexed Pages |  |  |  |  |
| Impressions |  |  |  |  |
| Clicks |  |  |  |  |
| Average CTR |  |  |  |  |
| Average Position |  |  |  |  |

### Top Weekly Queries

| Query | Impressions | Clicks | CTR | Average Position | Action |
| --- | ---: | ---: | ---: | ---: | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

### Weekly Action Log

| Action | Owner | Due Date | Status |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## Monthly Tracking Template

Use this table at the end of each month to summarize trend, channel performance, and next-month priorities.

### Monthly Summary

| Field | Entry |
| --- | --- |
| Month Covered |  |
| Prepared By |  |
| Review Date |  |
| Biggest Growth Signal |  |
| Biggest Conversion Signal |  |
| Biggest SEO Opportunity |  |
| Next Month Priority |  |

### Website Monthly KPI

| KPI | This Month | Previous Month | Change | Notes |
| --- | ---: | ---: | ---: | --- |
| Visits |  |  |  |  |
| Unique Visitors |  |  |  |  |
| Top Pages |  |  |  |  |
| Traffic Source 1 |  |  |  |  |
| Traffic Source 2 |  |  |  |  |
| Traffic Source 3 |  |  |  |  |

### Blog Monthly KPI

| Rank | Article URL | Page Views | Search Console Clicks | Notes |
| ---: | --- | ---: | ---: | --- |
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |

### Product Page Monthly KPI

| Product Page | Visits | Share of Website Visits | WhatsApp Clicks | Main Insight |
| --- | ---: | ---: | ---: | --- |
| Hermoso Hair Spray |  |  |  |  |
| HSIS Hair Clay |  |  |  |  |

### Lead Generation Monthly KPI

| Lead Type | Count | Previous Month | Change | Quality Notes |
| --- | ---: | ---: | ---: | --- |
| WhatsApp Clicks |  |  |  |  |
| Wholesale Leads |  |  |  |  |
| Dealer Leads |  |  |  |  |
| Salon Leads |  |  |  |  |

### Search Console Monthly KPI

| KPI | This Month | Previous Month | Change | Notes |
| --- | ---: | ---: | ---: | --- |
| Indexed Pages |  |  |  |  |
| Impressions |  |  |  |  |
| Clicks |  |  |  |  |
| Average CTR |  |  |  |  |
| Average Position |  |  |  |  |

### Top Monthly Queries

| Rank | Query | Impressions | Clicks | CTR | Average Position | Content Action |
| ---: | --- | ---: | ---: | ---: | ---: | --- |
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |

### Monthly Decision Log

| Decision | Reason | Owner | Follow-Up Date |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## Operating SOP

1. Open Metricool and record website, blog, product page, and WhatsApp click metrics.
2. Open Google Search Console and record indexing, impressions, clicks, CTR, position, top queries, and top landing pages.
3. Classify WhatsApp conversations into general, wholesale, dealer, or salon intent.
4. Fill the weekly template every Monday.
5. Fill the monthly template after month-end.
6. Compare current period against the previous period.
7. Choose no more than three next actions per review cycle.
8. Do not change website content or functionality from this SOP alone; create a separate content or development task if action is needed.

## Dashboard Naming Convention

Use consistent labels across Metricool exports, Search Console exports, and manual reports:

- Website Visits
- Website Unique Visitors
- Website Top Pages
- Blog Top Articles
- Blog Page Views
- Product Page Visits - Hermoso Hair Spray
- Product Page Visits - HSIS Hair Clay
- WhatsApp Clicks
- Wholesale Leads
- Dealer Leads
- Salon Leads
- Search Console Indexed Pages
- Search Console Impressions
- Search Console Clicks
- Search Console Top Queries
