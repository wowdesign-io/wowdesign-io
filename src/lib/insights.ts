import type { FaqItem } from './schema'

export function getInsight(slug: string) {
  const article = INSIGHTS.find((item) => item.slug === slug)
  if (!article) throw new Error(`Unknown insight: ${slug}`)
  return article
}

export type InsightFigure = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type InsightSource = {
  label: string
  url: string
  note?: string
}

export type InsightWorkedExample = {
  title: string
  rows: string[]
  note: string
}

export type InsightArticle = {
  slug: string
  tag: string
  h1: string
  description: string
  answer: string
  datePublished: string
  dateModified: string
  faqs: FaqItem[]
  /** ≤3 bullets, ≤60 words total. Renders nothing when empty. */
  takeaways?: string[]
  pullQuote?: string
  figures?: InsightFigure[]
  workedExample?: InsightWorkedExample
  sources?: InsightSource[]
  /** Per-post CTA lead-in. Falls back to shared calc copy. */
  ctaLead?: string
  /** Per-post CTA headline. Falls back to “Stop Funding the Bank…”. */
  ctaTitle?: string
  /** Override related-questions module; else defaults in insights-related.ts */
  related?: string[]
  /** Absolute or site-path OG image. Falls back to default OG. */
  ogImage?: string
}

/** Hub / lists: newest first (datePublished, then dateModified). */
export function insightsByNewest(): InsightArticle[] {
  return [...INSIGHTS].sort((a, b) => {
    const byPublished = b.datePublished.localeCompare(a.datePublished)
    if (byPublished !== 0) return byPublished
    const byModified = b.dateModified.localeCompare(a.dateModified)
    if (byModified !== 0) return byModified
    return a.slug.localeCompare(b.slug)
  })
}

/**
 * Hub card order: construction-loan / presale cluster first, then sales process, then product.
 * Unlisted slugs append newest-first at the end.
 */
const HUB_ORDER: string[] = [
  'construction-loan-extra-month',
  'construction-loan-presale-requirement',
  'why-construction-lenders-care-about-presales',
  'how-fast-pre-sell-construction-loan-draw',
  'what-counts-qualifying-presale-construction-loan',
  'how-long-sell-out-20-40-unit-condo',
  'sell-pre-construction-condos-faster',
  'sell-last-units-pre-construction-condo',
  'keep-pre-construction-buyers-from-backing-out',
  'follow-up-pre-construction-buyers',
  'what-sales-team-should-know-before-calling',
  'interactive-floor-plan-vs-pdf',
  'virtual-showroom-pre-construction',
  'digital-twin-pre-construction',
  'boutique-website-besides-renderings',
]

export function insightsForHub(): InsightArticle[] {
  const bySlug = new Map(INSIGHTS.map((a) => [a.slug, a]))
  const ordered: InsightArticle[] = []
  for (const slug of HUB_ORDER) {
    const article = bySlug.get(slug)
    if (article) {
      ordered.push(article)
      bySlug.delete(slug)
    }
  }
  for (const article of insightsByNewest()) {
    if (bySlug.has(article.slug)) ordered.push(article)
  }
  return ordered
}

/** Body word counts from page.tsx (JSX stripped). Hub read time = body + answer + FAQs ÷ 200. */
const INSIGHT_BODY_WORDS: Record<string, number> = {
  'construction-loan-extra-month': 402,
  'construction-loan-presale-requirement': 925,
  'digital-twin-pre-construction': 492,
  'follow-up-pre-construction-buyers': 482,
  'interactive-floor-plan-vs-pdf': 454,
  'sell-pre-construction-condos-faster': 453,
  'virtual-showroom-pre-construction': 465,
  'boutique-website-besides-renderings': 510,
  'how-long-sell-out-20-40-unit-condo': 605,
  'what-sales-team-should-know-before-calling': 535,
  'keep-pre-construction-buyers-from-backing-out': 553,
  'why-construction-lenders-care-about-presales': 557,
  'how-fast-pre-sell-construction-loan-draw': 574,
  'sell-last-units-pre-construction-condo': 568,
  'what-counts-qualifying-presale-construction-loan': 530,
}

/** Minutes at ~200 wpm. Floor 3. */
export function insightsReadMinutes(article: InsightArticle): number {
  const meta = [article.answer, ...(article.takeaways ?? []), ...article.faqs.flatMap((f) => [f.q, f.a])]
  const metaWords = meta.reduce((n, text) => n + text.trim().split(/\s+/).filter(Boolean).length, 0)
  const bodyWords = INSIGHT_BODY_WORDS[article.slug] ?? 500
  return Math.max(3, Math.round((bodyWords + metaWords) / 200))
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'construction-loan-extra-month',
    tag: 'Construction loan',
    h1: 'How much does an extra month of a construction loan cost?',
    description:
      'On a typical boutique $10M–$15M construction loan at about 8%, the bank takes $67k–$100k a month in interest. Marketing and ops keep running until units are gone. Run your numbers.',
    answer:
      'On a typical boutique $10M–$15M construction loan at about 8%, monthly interest is about $67k–$100k. That is loan × rate ÷ 12. Extra months also burn marketing and ops. Three extra months on a $12M loan at 8% is $240k in interest before you add burn.',
    datePublished: '2026-09-08',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'How do you calculate monthly construction-loan interest?',
        a: 'Monthly interest is loan amount × (annual rate ÷ 100) ÷ 12. A $12M loan at 8% is $80,000 a month to the bank.',
      },
      {
        q: 'Does that number include marketing and ops?',
        a: 'Interest is only the bank line. Ads, brokers, and ops keep running until units are gone. Add that monthly burn on top. The calculator models both.',
      },
      {
        q: 'How much is three extra months on a $10–15 million loan?',
        a: 'At 8%, three months of interest is about $200k–$300k. Add marketing and ops for those months. That is the $400k+ on a typical boutique timeline when sell-out slips.',
      },
    ],
  },
  {
    slug: 'digital-twin-pre-construction',
    tag: 'Digital twin',
    h1: 'What is a digital twin for pre-construction?',
    description:
      'In pre-construction sales, a digital twin is the live building on the project website: every unit, live price, live availability. Before anything is built. It is not a BIM model for the construction team, and it is not a scan of a finished space.',
    answer:
      'In pre-construction sales, a digital twin is the live building a buyer can walk on their phone before a brick is laid. Every unit. Live price. Live availability. Architects often mean a BIM model for the build. That is a different job.',
    datePublished: '2026-09-08',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'Is a digital twin the same as a 3D rendering?',
        a: 'No. A rendering is a still of the look. A digital twin has to answer which unit, at what price, and whether it is still open.',
      },
      {
        q: 'Is a digital twin the same as a 3D scan of a finished building?',
        a: 'No. A scan is of a space that already exists. Pre-construction needs units that do not exist yet.',
      },
      {
        q: 'Is a digital twin the same as a virtual showroom?',
        a: 'Close, but not the same phrase. Virtual showroom is the sales gallery on the website. Digital twin is the live building inside it. Floors, units, price, availability.',
      },
    ],
  },
  {
    slug: 'follow-up-pre-construction-buyers',
    tag: 'Follow-up',
    h1: 'What should follow-up look like after a pre-construction buyer shows interest?',
    description:
      'After a pre-construction buyer shows interest, follow-up should go out the same night with the unit they looked at, not a generic pack on Monday. During the build they need something to come back to. The sales team should already know which unit before they call.',
    answer:
      'Follow-up is what happens after a buyer shows interest. The same night, not Monday. They should get the unit they looked at, not a generic pack. During the build they need that unit to still be there. Your sales team should already know which one before they call.',
    datePublished: '2026-09-08',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'When should follow-up go out after a unit request?',
        a: 'The same night. A buyer who looked at 11pm is cold by Monday if nothing came back.',
      },
      {
        q: 'What should the follow-up actually include?',
        a: 'The unit they picked, live availability, and a way back into it. A PDF from month one will not hold them through the build.',
      },
      {
        q: 'What should the sales team know before they call?',
        a: 'Which unit. How far the buyer went. Whether they are still looking. Calling without that is a cold call with a nicer title.',
      },
    ],
  },
  {
    slug: 'construction-loan-presale-requirement',
    tag: 'Presale',
    h1: 'How many units do you need to pre-sell before a construction lender funds?',
    description:
      'US construction lenders commonly want 50–70% of project revenue under qualifying contracts before they fund. That is not a unit count, and not Fannie Mae’s 50% test for unit-buyer mortgages.',
    answer:
      'US construction lenders commonly want 50–70% of project revenue under contract before they fund. Count dollars from contracts the lender will take, not a round unit count, and not a reservation without a deposit. Fannie Mae’s 50% conveyed or under-contract test is about unit-buyer mortgages. It is not the construction draw.',
    datePublished: '2026-09-08',
    dateModified: '2026-11-08',
    ctaLead: 'If the dollar line is still open, those months are already on the loan.',
    ctaTitle: 'Run the months against your construction loan.',
    takeaways: [
      'Construction lenders typically want 50–70% of project revenue under qualifying contracts, not a unit count.',
      'Fannie Mae’s 50% test is for unit-buyer mortgages. It is not the construction draw.',
      'Convert the percent to dollars, keep only contracts the lender will take, then map the stack.',
    ],
    pullQuote: 'Count dollars from contracts the lender will take, not a round unit count.',
    workedExample: {
      title: 'Illustrative: dollars, then units',
      rows: [
        'Sell-out revenue $14.4M. Lender wants 60% under qualifying contracts. Line = $8.64M, not 17 of 28 units.',
        '14 studios at $400k = $5.6M. That is 50% of a 28-unit stack and 39% of revenue. Missed the line.',
        '4 penthouses at $900k plus 8 mid-floor at $520k = $7.76M. That is 43% of units and 54% of revenue. Still short.',
        'Gap = $8.64M - $7.76M = $880k. About two more mid-floor contracts at $520k.',
      ],
      note: 'Illustrative arithmetic. Method: (lender percent × sell-out revenue) − qualifying contract revenue already in. Then map leftover dollars onto units still open.',
    },
    sources: [
      {
        label: 'Fannie Mae Selling Guide, Full Review for units in new and newly converted condo projects (08/05/2026)',
        url: 'https://selling-guide.fanniemae.com/sel/b4-2.2-03/full-review-additional-eligibility-requirements-units-new-and-newly-converted-condo-projects',
        note: 'At least 50% of the total units in the project or subject legal phase must have been conveyed or be under contract for sale to principal-residence or second-home purchasers. The project or phase must be substantially complete. This is unit-buyer mortgage eligibility, not the construction draw. Construction-lender 50–70% of revenue remains a market pattern, not a statute.',
      },
    ],
    faqs: [
      {
        q: 'What is the typical presale percentage for a construction loan in Florida?',
        a: 'Many Florida construction lenders still look for roughly 50–70% of revenue under contract. Your term sheet is the number that counts. The range is a market pattern, not a statute.',
      },
      {
        q: 'Is Fannie Mae’s 50% the same test as a construction lender’s presale?',
        a: 'No. Fannie’s 50% is share of units conveyed or under contract to principal-residence or second-home purchasers, so unit-buyers can get those mortgages. The project or phase must also be substantially complete. Construction lenders want a share of project revenue under qualifying contracts. Keep them separate.',
      },
      {
        q: 'Can you hit 50% of units and still miss the construction draw?',
        a: 'Yes. If cheaper units sell first, unit count runs ahead of revenue. Illustrative: 14 studios at $400k on a $14.4M sell-out is 50% of a 28-unit stack and only 39% of revenue. Convert the lender percent to dollars, then map the stack.',
      },
      {
        q: 'What counts as a qualifying presale for a construction loan?',
        a: 'Usually a binding purchase contract with a deposit the lender will recognize, not a reservation or a letter of intent. Related-party and bulk contracts are often excluded. Ask the lender in writing. The 50–70% line is percent of revenue from those contracts, not a unit count.',
      },
    ],
  },
  {
    slug: 'virtual-showroom-pre-construction',
    tag: 'Virtual showroom',
    h1: 'What is a virtual showroom for pre-construction?',
    description:
      'A virtual showroom for pre-construction is the sales gallery on the website: every unit from a phone, live price and availability, then the sales team only calls people who are ready.',
    answer:
      'A virtual showroom for pre-construction is the sales gallery on the website. Buyers walk floors and pick a unit from their phone with live price and availability. Follow-up runs so your sales team only calls people who are ready.',
    datePublished: '2026-09-08',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'How does a virtual showroom work for pre-construction sales?',
        a: 'The buyer opens the project site, explores units that are not built yet, sees live price and availability, and leaves a trail your sales team can use. No app. No waiting until Monday.',
      },
      {
        q: 'Is this the same as a 3D scan of a finished building?',
        a: 'No. A scan is of a space that already exists. Pre-construction needs a live inventory of units that do not exist yet, wired to price and availability.',
      },
      {
        q: 'Do boutique residential projects need enterprise sales-gallery software?',
        a: 'Usually not. Those stacks are built for bigger operators. A boutique residential project needs buyers to pick a unit on the site, and a sales team that already knows who is ready.',
      },
    ],
  },
  {
    slug: 'interactive-floor-plan-vs-pdf',
    tag: 'Floor plan',
    h1: 'Interactive floor plan vs a PDF',
    description:
      'A PDF floor plan is a static file. An interactive floor plan lets a buyer click a unit, see live availability and price, and leave a trail your sales team can use before they call.',
    answer:
      'A PDF floor plan is a file. An interactive floor plan lets a buyer click a unit, see live availability and price, and leave a trail. Your sales team then calls people who already picked something, not people who only opened a file.',
    datePublished: '2026-09-08',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'What can a buyer do on an interactive floor plan that they cannot do on a PDF?',
        a: 'Click a specific unit, see if it is still available, see the price, and show your sales team which one they want. A PDF cannot do any of that without a callback.',
      },
      {
        q: 'Is this stacking-plan software like Spark.re?',
        a: 'No. Spark.re is inventory and CRM for the sales team. The interactive floor plan is what the buyer uses on the project website. They are different jobs.',
      },
      {
        q: 'Does this replace renderings?',
        a: 'No. Renderings still sell the look. The floor plan has to answer which unit, at what price, and whether it is still open.',
      },
    ],
  },
  {
    slug: 'sell-pre-construction-condos-faster',
    tag: 'Sell-out',
    h1: 'How to sell pre-construction condos faster',
    description:
      'Sell pre-construction faster by letting buyers pick a unit tonight, sending follow-up automatically, and giving the sales team the picture before they call. Extra months of loan interest plus marketing burn are the cost of delay.',
    answer:
      'Sell pre-construction condos faster by letting buyers pick a unit from their phone, running follow-up the same night, and giving your sales team the picture before they call. Extra months cost loan interest plus marketing burn. About $67k–$100k a month to the bank on a typical boutique loan.',
    datePublished: '2026-09-08',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'How long does it take to sell out a 20–40 unit condo building?',
        a: 'It depends on price, location, and whether buyers can commit before the sales office is open. The number that matters is extra months of interest and marketing. Run the calculator for your loan.',
      },
      {
        q: 'How do you keep pre-construction buyers from backing out during the build?',
        a: 'They need something to come back to: their unit, live availability, and a sales team that already knows what they picked. A PDF they got in month one will not hold them.',
      },
      {
        q: 'What does a boutique developer website need besides renderings?',
        a: 'Live units, live price, a way to pick one tonight, and a path into the tools the sales team already uses. Renderings without that do not tell your sales team who is ready.',
      },
    ],
  },
  {
    slug: 'boutique-website-besides-renderings',
    tag: 'Website',
    h1: 'What does a boutique developer website need besides renderings?',
    description:
      'A boutique developer website still needs renderings for the look. It also needs live units, live price, a way to pick one tonight, and a path into the tools the sales team already uses.',
    answer:
      'Renderings sell the look. A boutique residential project website also needs live units, live price, a way to pick one tonight, and a path into the tools the sales team already uses. Pictures without that do not tell anyone who is ready, and extra months of the loan keep running.',
    datePublished: '2026-09-13',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'What does a boutique developer website need besides renderings?',
        a: 'Live units, live price, a way to pick one tonight, and a path into the tools the sales team already uses. Renderings still sell the look. They do not tell anyone who is ready.',
      },
      {
        q: 'Do renderings still matter on a boutique residential project site?',
        a: 'Yes. They sell the look of a building that does not exist yet. The site still has to answer which unit, at what price, and whether it is still open.',
      },
      {
        q: 'Is this the same as a digital twin or a virtual showroom?',
        a: 'Close, but not the same phrase. The showroom is the gallery they land on. The twin is the live building inside it. This page is the checklist for the website around both, not only the pictures.',
      },
    ],
  },
  {
    slug: 'how-long-sell-out-20-40-unit-condo',
    tag: 'Timeline',
    h1: 'How long does it take to sell out a 20–40 unit condo building?',
    description:
      'There is no honest single month-count for every 20–40 unit condo. Time two clocks: 50–70% of revenue under contract so the lender funds, then the last unit so the loan comes off. Extra months are about $67k–$100k of interest on a typical boutique loan.',
    answer:
      'There is no honest single month-count for every 20–40 unit condo. Price, location, and whether buyers can commit before a sales office exists all move it. Time two clocks: the lender’s 50–70% under contract, then the last unit. Extra months cost about $67k–$100k in interest on a typical boutique loan.',
    datePublished: '2026-09-20',
    dateModified: '2026-10-25',
    faqs: [
      {
        q: 'How long does it take to sell out a 20–40 unit condo building?',
        a: 'There is no honest single month-count. Time two clocks: 50–70% of revenue under contract so the lender funds, then the last unit. Extra months cost about $67k–$100k of interest on a typical boutique $10M–$15M loan at about 8%. Method: loan × rate ÷ 12.',
      },
      {
        q: 'What is the difference between the lender’s presale line and selling out?',
        a: 'The presale line is usually 50–70% of project revenue under qualifying contracts. That is when many construction lenders fund. Selling out is the last unit. Both clocks burn extra months if they slip. Fannie Mae’s 50% test is a third clock, for unit-buyer mortgages.',
      },
      {
        q: 'Can you use a published units-per-month rate instead?',
        a: 'Not as a rule for your building. Comps in your submarket are evidence for your lender. A number copied from a different project is a guess. Use extra months of interest on your loan as the scoreboard. Run the calculator.',
      },
    ],
  },
  {
    slug: 'what-sales-team-should-know-before-calling',
    tag: 'Sales team',
    h1: 'What should a sales team know before they call a condo buyer?',
    description:
      'Before they pick up, the sales team should already know which unit the buyer looked at, whether it is still open and at what price, how far they went, and whether they came back. A name and a phone number is not that briefing.',
    answer:
      'Before they pick up, the sales team should already know which unit the buyer looked at, whether it is still open and at what price, how far they went, and whether they came back. A name and a phone number is not that picture. Calling without it is a cold call.',
    datePublished: '2026-10-04',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'What should a sales team know before they call a condo buyer?',
        a: 'Which unit they looked at, whether it is still open and at what price, how far they went, and whether they came back. A name and a phone number is not that picture.',
      },
      {
        q: 'Is a CRM contact enough before the call?',
        a: 'No. A CRM row with a name and “interested” is a contact. The sales team still needs the unit in the tools they already use. Otherwise the first minute is “so what were you looking at?”',
      },
      {
        q: 'Why does this matter on a boutique residential project?',
        a: 'Cold calls stretch sell-out. Extra months on a typical boutique $10M–$15M loan at about 8% are about $67k–$100k of interest. Method: loan × rate ÷ 12.',
      },
    ],
  },
  {
    slug: 'keep-pre-construction-buyers-from-backing-out',
    tag: 'During the build',
    h1: 'How to keep pre-construction buyers from backing out during the build',
    description:
      'A reserved buyer still has to live through the build. They stay if they can come back to their unit (live price, live availability) and a sales team that already knows which one. A PDF from week one will not hold them.',
    answer:
      'A buyer who reserved in month one still has to live through the build. They stay if they can come back to their unit (live price, live availability) and a sales team that already knows which one. A PDF from the first week will not hold them. A cancellation is another month of the loan.',
    datePublished: '2026-10-11',
    dateModified: '2026-10-20',
    faqs: [
      {
        q: 'How to keep pre-construction buyers from backing out during the build?',
        a: 'Their unit stays on the site. Live price, still open. Follow-up does not stop after the first night. The sales team already knows which unit before they call. A PDF from week one will not hold them.',
      },
      {
        q: 'Is same-night follow-up enough to hold them through the build?',
        a: 'It starts the picture. The months of the build still need the live unit and a sales team that knows which one. Follow-up that dies after night one is how they go cold in month four.',
      },
      {
        q: 'What does a cancellation cost on a boutique construction loan?',
        a: 'You spend the month again. On a typical boutique $10M–$15M loan at about 8%, monthly interest is loan × rate ÷ 12. about $67k–$100k. A walk-away that was in the 50–70% revenue count is a hole in the draw.',
      },
    ],
  },
  {
    slug: 'why-construction-lenders-care-about-presales',
    tag: 'Lenders',
    h1: 'Why do construction lenders care about presales?',
    description:
      'Construction lenders fund the build and get repaid when units close. Qualifying presales prove demand so they are not financing unsold inventory. Until that line you keep paying interest and marketing with no draw.',
    answer:
      'Construction lenders fund the build. They get repaid when units close. Qualifying presales. Binding contracts with deposits they will count. Prove demand so they are not financing unsold inventory. Until that line, you keep paying interest and marketing with no draw. The 50–70% of revenue they often want is that test, not a unit count.',
    datePublished: '2026-10-18',
    dateModified: '2026-10-20',
    ctaLead: 'Leftover inventory is months of interest. Put your loan numbers on the calculator.',
    ctaTitle: 'What does waiting on the draw cost you?',
    faqs: [
      {
        q: 'Why do construction lenders care about presales?',
        a: 'Qualifying presales. Contracts and deposits they will count. Prove demand so they are not financing unsold inventory. Until that line you keep paying interest and marketing with no draw.',
      },
      {
        q: 'Is this the same as Fannie Mae’s 50%?',
        a: 'No. Fannie’s 50% is whether unit-buyers can get those mortgages. Construction lenders care about leftover risk on the build: share of project revenue under qualifying contracts. Keep them separate.',
      },
      {
        q: 'What does missing the presale line cost?',
        a: 'You keep paying the loan and the ads with no draw. On a typical boutique $10M–$15M loan at about 8%, monthly interest is loan × rate ÷ 12. about $67k–$100k.',
      },
    ],
  },
  {
    slug: 'how-fast-pre-sell-construction-loan-draw',
    tag: 'Presale pace',
    h1: 'How fast do you need to pre-sell to hit a construction loan draw?',
    description:
      'Pace to the draw is remaining qualifying revenue divided by months left on the term sheet. Not a units-per-month sticker from another building. Convert the lender percent to dollars, then to contracts they will count.',
    answer:
      'You do not need a published units-per-month rate. You need qualifying contracts, at the prices in your stack, fast enough to hit the lender\'s share of project revenue before the window on the term sheet closes. Convert the percent to dollars, then to contracts they will count. Soft holds do not count.',
    datePublished: '2026-10-20',
    dateModified: '2026-11-01',
    faqs: [
      {
        q: 'How fast do you need to pre-sell to hit a construction loan draw?',
        a: 'Fast enough that qualifying contracts, at the prices in your stack, hit the lender\'s share of project revenue before the window on the term sheet closes. Convert the percent to dollars, then to contracts they will count. Soft holds do not count.',
      },
      {
        q: 'Can you use a units-per-month absorption rate?',
        a: 'Not as a rule for your building. Comps in your submarket are evidence for your lender. A number copied from a different project is a guess. Pace is remaining qualifying dollars divided by months left on the sheet.',
      },
      {
        q: 'How do you convert the presale percent into a monthly pace?',
        a: 'Take the percent on your term sheet, multiply by project sell-out revenue, keep only contracts the lender will count, then divide by months left. Example: 50% of a $12M sell-out is $6M. Six months left is about $1M a month in qualifying contracts.',
      },
    ],
  },
  {
    slug: 'sell-last-units-pre-construction-condo',
    tag: 'Last units',
    h1: 'How do you sell the last units in a pre-construction condo?',
    description:
      'The last units are leftover views and leftover prices after the first wave is gone. They sell when what is still open stays live on the site, and the sales team calls people who already looked at those leftovers.',
    answer:
      'The last units are leftover views and leftover prices after the first wave is gone. They do not sell from a PDF of floors that already closed. Keep what is still open live on the site. The sales team should call people who already looked at those leftovers, not a month-one list.',
    datePublished: '2026-10-25',
    dateModified: '2026-10-25',
    faqs: [
      {
        q: 'How do you sell the last units in a pre-construction condo?',
        a: 'Keep what is still open live on the site at today’s price. The ones that closed stay closed. The sales team calls people who already looked at a leftover unit, not a list from the launch party.',
      },
      {
        q: 'Why do the last units stall after the first wave?',
        a: 'The first wave takes the best views, friends and family, and early prices. A PDF from month one still shows floors that already closed. A buyer in month seven cannot tell what is actually open.',
      },
      {
        q: 'What do leftover units still cost after the construction draw?',
        a: 'After the lender funds, leftover revenue is still on the loan. Method: (1 − lender percent) × project revenue. A $12M sell-out with a 50% line still has $6M to close.',
      },
    ],
  },
  {
    slug: 'what-counts-qualifying-presale-construction-loan',
    tag: 'Qualifying presale',
    h1: 'What counts as a qualifying presale for a construction loan?',
    description:
      'A qualifying presale is a binding purchase contract with a deposit the construction lender will recognize, from a buyer they will count. Reservations and related-party deals usually drop out. The 50–70% line is percent of revenue from those contracts.',
    answer:
      'A qualifying presale is a binding purchase contract with a deposit the construction lender will recognize, from a buyer they will count. Reservations, letters of intent, and related-party deals usually drop out. Ask the lender in writing. The 50–70% line is percent of revenue from those contracts, not a unit count.',
    datePublished: '2026-11-01',
    dateModified: '2026-11-01',
    faqs: [
      {
        q: 'What counts as a qualifying presale for a construction loan?',
        a: 'Usually a binding purchase contract with a deposit the lender will recognize, from a buyer they will count. Reservations, letters of intent, and related-party deals usually drop out. Ask the lender in writing. The 50–70% line is percent of revenue from those contracts, not a unit count.',
      },
      {
        q: 'Do reservations count toward the construction loan presale?',
        a: 'Usually not. A reservation or letter of intent can convert. Until it is a binding contract with a held deposit, it does not move the construction draw. Ask whether those are in or out on your sheet.',
      },
      {
        q: 'How do you score qualifying presales against the revenue line?',
        a: 'Keep only contracts that survive the filter, sum those prices, and divide by project sell-out revenue. Example: ten qualifying contracts at $4.2M on a $12M sell-out is 35%, not a unit count.',
      },
    ],
  },
]
