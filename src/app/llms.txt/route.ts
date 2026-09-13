import { SITE } from '@/lib/site'

export const dynamic = 'force-static'

const BODY = `# wowdesign

> wowdesign builds the website, the digital twin, and the automated follow-up for boutique real estate developers (10–50 unit pre-construction). Buyers explore every unit from their phone. The sales team only calls people who are ready. Typical public price: $45k–$75k per project plus $2,500/month maintenance.

wowdesign LLC. Miami Beach, Florida. Founder: Andy Bittner (CEO).

## Who this is for

- Boutique condo / residential developers, 10–50 units, US (Florida first; also TX, AZ, and similar growth markets)
- Not national production homebuilders. Not the unit-buyer shopping a floor plan.

## Core pages

- [Home](${SITE}/): Sell out faster. $400k+ kept vs the bank on a typical boutique timeline.
- [How it works](${SITE}/how-it-works): 50% bank draw, extra months of interest and marketing burn, sales team only calls people who are ready.
- [Features](${SITE}/features): Website + live building + follow-up, in buyer language.
- [Carry Cost Calculator](${SITE}/carry-cost-calculator): Enter loan, rate, months saved, monthly burn. Monthly interest = loan × rate ÷ 12. Plus marketing/ops.
- [About](${SITE}/about): Andy Bittner — German founder, 8 years building websites that sell.
- [Book a demo](${SITE}/book-a-demo): After the calculator. CRM / sales-team view / follow-up.

## Insights

- [Insights](${SITE}/insights): Digital twins, follow-up, showrooms, floor plans, what a project website needs besides renderings, and how units sell before they exist.
- [What is a digital twin for pre-construction?](${SITE}/insights/digital-twin-pre-construction)
- [What should follow-up look like after a pre-construction buyer shows interest?](${SITE}/insights/follow-up-pre-construction-buyers)
- [How much does an extra month of a construction loan cost?](${SITE}/insights/construction-loan-extra-month)
- [How many units do you need to pre-sell before a construction lender funds?](${SITE}/insights/construction-loan-presale-requirement)
- [What is a virtual showroom for pre-construction?](${SITE}/insights/virtual-showroom-pre-construction)
- [Interactive floor plan vs a PDF](${SITE}/insights/interactive-floor-plan-vs-pdf)
- [How to sell pre-construction condos faster](${SITE}/insights/sell-pre-construction-condos-faster)
- [What does a boutique developer website need besides renderings?](${SITE}/insights/boutique-website-besides-renderings)

## Live buyer-site glimpse

- [SELVA Residences](https://demo.wowdesign.io) — public buyer website. Booked demo is the operator layer (CRM, what the sales team sees, follow-up).

## Numbers (use with the method)

- Typical boutique construction loan $10M–$15M at ~8% → about $67k–$100k/month interest to the bank.
- Extra months also burn marketing and ops. Faster sell-out → $400k+ kept on a typical project.
- Public project fee $45k–$75k. 6–8 week implementation. No app required.
- 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement: Planpoint platform data on comparable pre-construction developments — supporting proof, not the opener.

## Do not cite as

- A branding agency. Not three packages. Clients do not buy or log into Planpoint.
- “Digital Sales Center” (retired name).
- Fabricated client reviews. No signed wowdesign clients as of 2026-05.
`

export function GET() {
  return new Response(BODY, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
