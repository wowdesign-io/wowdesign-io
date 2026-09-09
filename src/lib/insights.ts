import type { FaqItem } from './schema'

export function getInsight(slug: string) {
  const article = INSIGHTS.find((item) => item.slug === slug)
  if (!article) throw new Error(`Unknown insight: ${slug}`)
  return article
}

export type InsightArticle = {
  slug: string
  tag: string
  h1: string
  title: string
  description: string
  answer: string
  datePublished: string
  dateModified: string
  faqs: FaqItem[]
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'construction-loan-extra-month',
    tag: 'Construction loan',
    h1: 'How much does an extra month of a construction loan cost?',
    title: 'Extra month of construction-loan cost',
    description:
      'On a typical boutique $10M–$15M construction loan at about 8%, the bank takes $67k–$100k a month in interest. Marketing and ops keep running until units are gone. Run your numbers.',
    answer:
      'On a typical boutique $10M–$15M construction loan at about 8%, monthly interest is about $67k–$100k. That is loan × rate ÷ 12. Extra months also burn marketing and ops. Three extra months on a $12M loan at 8% is $240k in interest before you add burn.',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
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
    title: 'Digital twin for pre-construction',
    description:
      'In pre-construction sales, a digital twin is the live building on the project website: every unit, live price, live availability — before anything is built. It is not a BIM model for the construction team, and it is not a scan of a finished space.',
    answer:
      'In pre-construction sales, a digital twin is the live building a buyer can walk on their phone before a brick is laid. Every unit. Live price. Live availability. Architects often mean a BIM model for the build. That is a different job.',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
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
        a: 'Close, but not the same phrase. Virtual showroom is the sales gallery on the website. Digital twin is the live building inside it — floors, units, price, availability.',
      },
    ],
  },
  {
    slug: 'follow-up-pre-construction-buyers',
    tag: 'Follow-up',
    h1: 'What should follow-up look like after a pre-construction buyer shows interest?',
    title: 'Follow-up for pre-construction buyers',
    description:
      'After a pre-construction buyer shows interest, follow-up should go out the same night with the unit they looked at — not a generic pack on Monday. During the build they need something to come back to. The sales team should already know which unit before they call.',
    answer:
      'Follow-up is what happens after a buyer shows interest — the same night, not Monday. They should get the unit they looked at, not a generic pack. During the build they need that unit to still be there. Your sales team should already know which one before they call.',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
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
    title: 'Construction loan presale requirement',
    description:
      'US construction lenders commonly want 50–70% of project revenue under contract before they fund. That is not the same as Fannie Mae’s 50% conveyed test for unit-buyer mortgages.',
    answer:
      'US construction lenders commonly want 50–70% of project revenue under contract before they fund. Count dollars under contract, not a round unit count. Fannie Mae’s 50% conveyed / under-contract test is about unit-buyer mortgages — not the same as the construction draw.',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
    faqs: [
      {
        q: 'What is the typical presale percentage for a construction loan in Florida?',
        a: 'Many Florida construction lenders still look for roughly 50–70% of revenue under contract. Your term sheet is the number that counts. The range is a market pattern, not a statute.',
      },
      {
        q: 'Is Fannie Mae’s 50% the same test as a construction lender’s presale?',
        a: 'No. Fannie’s 50% conveyed or under-contract test is about whether unit-buyers can get those mortgages. Construction lenders are deciding whether to fund the build. Keep them separate.',
      },
      {
        q: 'Why do construction lenders care about presales?',
        a: 'Presales prove demand and reduce the chance they are financing unsold inventory. Until that line is hit you keep paying interest and marketing with no draw.',
      },
    ],
  },
  {
    slug: 'virtual-showroom-pre-construction',
    tag: 'Virtual showroom',
    h1: 'What is a virtual showroom for pre-construction?',
    title: 'Virtual showroom for pre-construction',
    description:
      'A virtual showroom for pre-construction is the sales gallery on the website: every unit from a phone, live price and availability, then the sales team only calls people who are ready.',
    answer:
      'A virtual showroom for pre-construction is the sales gallery on the website. Buyers walk floors and pick a unit from their phone with live price and availability. Follow-up runs so your sales team only calls people who are ready.',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
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
        q: 'Do boutique 10–50 unit projects need enterprise sales-gallery software?',
        a: 'Usually not. Those stacks are built for bigger operators. A 10–50 unit project needs buyers to pick a unit on the site, and a sales team that already knows who is ready.',
      },
    ],
  },
  {
    slug: 'interactive-floor-plan-vs-pdf',
    tag: 'Floor plan',
    h1: 'Interactive floor plan vs a PDF',
    title: 'Interactive floor plan vs PDF',
    description:
      'A PDF floor plan is a static file. An interactive floor plan lets a buyer click a unit, see live availability and price, and leave a trail your sales team can use before they call.',
    answer:
      'A PDF floor plan is a file. An interactive floor plan lets a buyer click a unit, see live availability and price, and leave a trail. Your sales team then calls people who already picked something — not people who only opened a file.',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
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
    title: 'How to sell pre-construction condos faster',
    description:
      'Sell pre-construction faster by letting buyers pick a unit tonight, sending follow-up automatically, and giving the sales team the picture before they call. Extra months of loan interest plus marketing burn are the cost of delay.',
    answer:
      'Sell pre-construction condos faster by letting buyers pick a unit from their phone, running follow-up the same night, and giving your sales team the picture before they call. Extra months cost loan interest plus marketing burn — about $67k–$100k a month to the bank on a typical boutique loan.',
    datePublished: '2026-09-08',
    dateModified: '2026-09-08',
    faqs: [
      {
        q: 'How long does it take to sell out a 20–40 unit condo building?',
        a: 'It depends on price, location, and whether buyers can commit before the sales office is open. The number that matters is extra months of interest and marketing — run the calculator for your loan.',
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
]
