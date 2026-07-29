# Codex Business Agent Test

Use the project-scoped Codex agents already installed under `.codex/agents/`.

## Objective

Test these three agents on realistic Hezpo business scenarios:

1. Customer Service
2. Pricing Analyst
3. Analytics Reporter

Do not modify website source code, marketplace accounts, listings, prices, inventory, campaigns, refunds, credentials, or customer messages.

Create one output file at the repository root:

`CODEX_BUSINESS_AGENT_TEST_RESULTS.md`

## Test 1 — Customer Service

Use the **Customer Service** agent.

Buyer message:

> Itchy to the skin and a little swollen and reddish especially for men because we do not have long hair. Even if not intentionally, the liquid touched the scalp.

Produce:

- One concise English reply suitable for Shopee chat.
- One concise Malay reply suitable for Shopee chat.
- A short internal note explaining the safety handling and what must not be claimed.

Requirements:

- Show empathy.
- Advise the buyer to stop using the product and rinse the affected area.
- Suggest appropriate medical advice if symptoms persist, worsen, or are significant.
- Do not diagnose.
- Do not blame the customer.
- Do not promise a refund without knowing the platform case status.

## Test 2 — Pricing Analyst

Use the **Pricing Analyst** agent.

Assume one unit has:

- Selling price: RM39.90
- Product cost: RM14.00
- Platform fee: 15% of selling price
- Advertising cost per order: RM4.50
- Packaging cost: RM1.20
- Seller shipping subsidy: RM2.00
- Return-loss allowance: 3% of selling price

Calculate and show formulas for:

- Platform fee
- Return-loss allowance
- Contribution profit per order
- Contribution margin percentage
- Break-even selling price using the same percentage-based fees
- Selling price required for a 25% contribution margin

Then give a practical pricing recommendation. Preserve all amounts in RM. Clearly state assumptions and rounding.

## Test 3 — Analytics Reporter

Use the **Analytics Reporter** agent.

Analyze this Hezpo snapshot:

- Total GMV: RM974,010.46
- Orders: 27,187
- Advertising spend: RM17,331.96
- Reported ads ROAS: 8.08
- Overall reported profit: RM643,074.60
- Reported profit rate: 65.68%
- Commodity cost equals zero on 715 rows
- Profit rate equals 100% on 716 rows
- 320 of 387 advertising records are mapped to SKUs
- 67 advertising records remain unmapped

Produce:

- Five key findings.
- Which metrics can be trusted now and which cannot.
- A prioritized action plan with owner, priority, action, and KPI.
- A short executive summary suitable for the business owner.
- Explicitly explain how missing costs can overstate profit.

Do not invent missing data.

## Output structure

The result file must use exactly these headings:

1. `# Codex Business Agent Test Results`
2. `## Customer Service Test`
3. `## Pricing Analyst Test`
4. `## Analytics Reporter Test`
5. `## Agent Test Verdict`

Under `Agent Test Verdict`, grade each agent as Pass, Partial, or Fail and explain why.

Report the files changed and commands run in the final Codex response.