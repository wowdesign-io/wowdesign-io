import { ANDY, LOGO, SITE } from './site'

export type FaqItem = { q: string; a: string }

export function organizationGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE}/#org`,
        name: 'wowdesign',
        legalName: 'wowdesign LLC',
        description:
          'We build the website, the digital twin, and the automated follow-up system — so boutique developers keep $400k+ by selling out faster.',
        url: SITE,
        email: 'info@wowdesign.io',
        logo: { '@type': 'ImageObject', url: LOGO },
        sameAs: [
          'https://www.youtube.com/@andy_bittner',
          'https://www.linkedin.com/in/andy-bittner-wowdesign/',
          'https://www.instagram.com/wowdesign_miami',
        ],
        founder: { '@id': `${SITE}/about#andy` },
        employee: [
          { '@type': 'Person', name: 'Andy Bittner', jobTitle: 'Founder & CEO' },
          { '@type': 'Person', name: 'Ashekur Rahman', jobTitle: 'Developer' },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '407 Lincoln Rd Suite 6H PMB 1673',
          addressLocality: 'Miami Beach',
          addressRegion: 'FL',
          postalCode: '33139',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: 'wowdesign',
        publisher: { '@id': `${SITE}/#org` },
      },
    ],
  }
}

export function personAndy() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE}/about#andy`,
    name: ANDY.name,
    jobTitle: ANDY.jobTitle,
    url: `${SITE}/about`,
    image: ANDY.image,
    worksFor: { '@id': `${SITE}/#org` },
    sameAs: [...ANDY.sameAs],
  }
}

export function faqPage(url: string, items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function webApplicationCalc() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Carry Cost Calculator',
    url: `${SITE}/carry-cost-calculator`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Enter loan amount, interest rate, months saved, and monthly marketing/ops burn. See interest plus burn for those extra months on a boutique condo project.',
    publisher: { '@id': `${SITE}/#org` },
  }
}

export function howToRunCalc() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to run the construction-loan cost calculator',
    description:
      'See what extra months of construction-loan interest plus marketing and ops cost on your boutique project.',
    url: `${SITE}/carry-cost-calculator`,
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter the construction loan',
        text: 'Enter the construction loan amount in USD.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter the interest rate',
        text: 'Enter the annual interest rate as a percent.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose months saved',
        text: 'Select how many months faster you could sell out (2–6).',
      },
      {
        '@type': 'HowToStep',
        name: 'Add monthly burn',
        text: 'Add monthly marketing and ops spend that keeps running until units are gone. Leave 0 if you only want interest.',
      },
      {
        '@type': 'HowToStep',
        name: 'Read the total',
        text: 'Monthly interest is loan × rate ÷ 12. Total kept is that interest plus burn, times months saved.',
      },
    ],
  }
}

export function articleSchema(opts: {
  url: string
  headline: string
  description: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: ANDY.name,
      jobTitle: ANDY.jobTitle,
      url: `${SITE}/about`,
      image: ANDY.image,
    },
    publisher: { '@id': `${SITE}/#org` },
    mainEntityOfPage: opts.url,
  }
}

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'What does a project cost?',
    a: '$45k–$75k per project. Website, digital twin, and follow-up. 6–8 weeks for 10–50 unit buildings. The range is units, how far the twin goes, and how it lands in your sales team’s tools — not three packages. We run it under maintenance. You don’t buy or operate a separate viewer.',
  },
  {
    q: 'What is carry cost — and why does it matter?',
    a: 'Carry is what you spend every month until units are sold: loan interest plus marketing and ops burn. Not the interest alone. A typical boutique loan is $67k–$100k a month to the bank. Sell out months earlier and that money stays yours. That is the $400k+. Use the calculator to see your number.',
  },
  {
    q: 'What is the difference between a normal website and your presales system?',
    a: 'A traditional website is static visuals and a generic contact form. Our presales system lets buyers explore every unit from their phone with live price and availability, then follow-up runs so your sales team only calls people who are ready.',
  },
  {
    q: 'Do you integrate with our existing CRM?',
    a: 'Yes. We connect to Spark, Yardi, Salesforce, HubSpot, and others. Live unit data goes out to buyers. Buyer interest comes back into the tools your sales team already uses.',
  },
  {
    q: 'How long does it take to build and launch?',
    a: 'Most projects launch within 6–8 weeks depending on asset readiness and CRM setup. We handle the implementation. You provide floorplans, renders, and CRM access.',
  },
  {
    q: 'Does this replace our sales team?',
    a: 'No. It strengthens your sales team. Buyers arrive pre-educated. Your sales team sees which unit they want and how ready they are before the first call.',
  },
  {
    q: 'How do we track buyer interest?',
    a: 'We track which units buyers explore, view preferences, and floorplan interest. That data syncs into your CRM so your sales team has context before they call.',
  },
  {
    q: 'Can the system handle multiple phases and complex floorplans?',
    a: 'Yes. Multi-phase developments, varied floorplans, and live availability across buildings. Built for 10–50 unit boutique projects, not an enterprise stack you have to staff.',
  },
  {
    q: 'Do we need all our final 3D renders finished before we start?',
    a: 'No. We can begin with architectural floorplans and preliminary renders. The live building view can evolve as final assets become available.',
  },
  {
    q: 'Why shouldn’t we just have our branding agency build this?',
    a: 'Branding agencies specialize in visual identity and marketing materials. This is the website plus the live building plus follow-up, wired so your sales team knows who is ready. That is a different job than a brochure site.',
  },
  {
    q: 'Is this overkill for a smaller project?',
    a: 'It is built for 10–50 unit developments. Boutique projects feel extra months of interest and marketing burn the hardest. That is who it is for.',
  },
]

export const FEATURES_FAQS: FaqItem[] = HOME_FAQS.slice(2)

export const HOW_IT_WORKS_FAQS: FaqItem[] = [
  {
    q: 'Why do construction lenders care about presales?',
    a: 'Most US construction lenders will not fund until enough units are under contract — often 50–70% of project revenue. Until that happens you keep paying interest and marketing with no draw. Faster committed buyers means the loan can start sooner.',
  },
  {
    q: 'What is the 50% bank draw?',
    a: 'On many boutique projects the construction loan does not fully release until about half the units are pre-sold. You are paying until that line is hit. That is why sell-out speed is money, not a marketing metric.',
  },
  {
    q: 'How much is an extra month of construction-loan interest?',
    a: 'On a typical boutique $10M–$15M loan at about 8%, monthly interest is about $67k–$100k. Marketing and ops burn on top. Run the calculator with your loan and rate.',
  },
  {
    q: 'What should the sales team know before they call?',
    a: 'Which unit the buyer picked, how far they went on price and availability, and whether follow-up already went out. That is the picture the site should land in the tools they already use.',
  },
  {
    q: 'Does this replace the sales team?',
    a: 'No. Buyers arrive having already picked a unit. Your sales team only calls people who are ready.',
  },
]

export const CALC_FAQS: FaqItem[] = [
  {
    q: 'What numbers should I enter?',
    a: 'Your construction loan, the rate on the term sheet, how many months faster you could sell out (often 2–6), and what you actually spend each month on marketing and ops until sell-out. Leave burn at 0 for interest only.',
  },
  {
    q: 'Is this the same as a draw-schedule construction loan calculator?',
    a: 'No. Lender calculators model interest on money as you draw it during the build. This tool models extra months of sell-out delay — interest plus burn — on a boutique 10–50 unit project.',
  },
  {
    q: 'Where is the method for monthly interest?',
    a: 'Loan × rate ÷ 12. A $12M loan at 8% is $80,000 a month to the bank. The full write-up is on Insights — this page is the calculator.',
  },
  {
    q: 'What happens after I submit my email?',
    a: 'You get your result and join the wowdesign list. We send a short sequence, then you can book a demo of the sales-team layer behind the live buyer site.',
  },
]
