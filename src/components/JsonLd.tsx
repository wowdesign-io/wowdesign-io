const SITE = 'https://www.wowdesign.io'
const LOGO = `${SITE}/images/wow-design-color-logo-dark.svg`

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sell Out Faster | Presales System for Boutique Real Estate Developers',
  description:
    "Boutique developers close 31% faster with wowdesign. We build the presales system — website, digital twin, and automated follow-up — so your team always knows who's ready to buy.",
  url: SITE,
  inLanguage: 'en',
  about: {
    '@type': 'Organization',
    name: 'wowdesign',
    legalName: 'wowdesign LLC',
    description:
      'We build the website, the digital twin, and the automated follow-up system — so boutique developers sell out 31% faster.',
    url: SITE,
    logo: {
      '@type': 'ImageObject',
      url: LOGO,
    },
    email: 'info@wowdesign.io',
    sameAs: [
      'https://www.youtube.com/@andy_bittner',
      'https://www.linkedin.com/in/andy-bittner-wowdesign/',
      'https://www.instagram.com/wowdesign_miami',
    ],
    member: [
      { '@type': 'Person', name: 'Andy', jobTitle: 'CEO & Founder' },
      { '@type': 'Person', name: 'Ashekur', jobTitle: 'Lead Systems Engineer' },
      { '@type': 'Person', name: 'Sofia', jobTitle: 'Digital Twin Architect' },
      { '@type': 'Person', name: 'Odule', jobTitle: 'CRM Integration Lead' },
      { '@type': 'Person', name: 'Mateo', jobTitle: 'Performance Engineer' },
    ],
  },
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'wowdesign Presales System',
    applicationCategory: 'BusinessApplication',
    description:
      'Interactive digital twin presales system for boutique real estate developers with live CRM synchronization, unit-level buyer intent tracking, and automated follow-up.',
    offers: {
      '@type': 'Offer',
      description: 'Complete presales system built for boutique developers',
    },
    featureList: [
      'Interactive Digital Twin',
      'Instant Mobile Performance',
      'Two-Way CRM Sync',
      'Unit-Level Buyer Intent',
      'Buyer Intelligence & Heatmaps',
      'Built-In ADA Protection',
    ],
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Claudia',
        jobTitle: 'Principal Developer, Fort Lauderdale',
      },
      reviewBody:
        "Every agency we talked to showed up with beautiful renders. Nobody talked about what happens when a buyer lands on the site at 11pm and wants to know if unit 4B is available. That's what this actually solves.",
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Thomas',
        jobTitle: 'VP of Sales, Tampa',
      },
      reviewBody:
        'Our team used to spend the first 20 minutes of every call figuring out what the buyer was actually interested in. Now that information is already there before anyone picks up the phone.',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Marcus',
        jobTitle: 'Managing Partner, Miami',
      },
      reviewBody:
        "We had a situation where two buyers were interested in the same unit and our website still showed it available after we'd taken it off market internally. That was the moment I knew we needed something better. Haven't had that problem since.",
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Elena',
        jobTitle: 'Principal, Brickell Development',
      },
      reviewBody:
        "We sent out probably 200 PDF packages last cycle. Maybe 15 people actually opened them. First month with the presales system we could see exactly who was looking at what. That's a different business.",
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Daniel',
        jobTitle: 'Director of Sales, Orlando',
      },
      reviewBody:
        "Pre-construction is a long game and buyers go cold. What I didn't expect was how much the digital twin keeps them engaged between first look and signing. It gives them something to come back to.",
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
