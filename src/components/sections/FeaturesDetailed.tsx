import Image from 'next/image'
import Link from 'next/link'

const FEATURES = [
  {
    tagline: 'Interactive Digital Twin',
    heading: 'A live, explorable replica of your development.',
    body: 'Static images can\'t answer buyer questions. A digital twin lets prospects explore units, views, and surroundings directly on their phone — before they ever schedule a visit.',
    bullets: ['360° Building Rotation', 'Real-Time Pricing Per Unit', 'Neighborhood Context', 'Live Unit Availability'],
    image: 'https://a.storyblok.com/f/293523249633085/72635/6f7cacc5c2/feature-digital-twin.avif',
  },
  {
    tagline: 'CRM Integration',
    heading: 'Your CRM, Connected Both Ways.',
    body: 'We connect your CRM directly to your presales system — syncing live inventory, pricing, and availability to buyers while pushing every buyer interaction back into your team\'s workflow automatically.',
    bullets: [
      'Native Spark.re, Salesforce, HubSpot, Yardi and more',
      'Sold Units Come Off Market the Moment They Close',
      'Price Changes & Status Updates Reflect in Real Time',
      'Every Lead Routes Directly Into Your CRM — No Manual Entry',
    ],
    image: 'https://a.storyblok.com/f/293523249633085/42447/787a01ec39/feature-crm-sync.avif',
  },
  {
    tagline: 'Lead Capture',
    heading: 'Unit-Specific Lead Capture.',
    body: 'Generic contact forms create noise. Our system tells your sales team exactly which unit and floorplan a buyer explored — before they even pick up the phone.',
    bullets: ['Unit-Specific Inquiries', 'Leads sent directly to CRM', 'Automated Brochure Delivery', 'Filters For Serious Buyers'],
    image: 'https://a.storyblok.com/f/293523249633085/46642/15716bba68/feature-leads.avif',
  },
  {
    tagline: 'Analytics',
    heading: 'Buyer Analytics & Heatmaps.',
    body: 'Most developers have no idea which units are generating interest until buyers start calling. Our presales system tracks every view, click, and session — so your team always knows where demand is.',
    bullets: ['Unit Popularity Rankings', 'Floor & Building Heatmaps', 'Bedroom Type Demand Breakdown', 'Spot Slow-Moving Units Early'],
    image: 'https://a.storyblok.com/f/293523249633085/22836/5803d5ac66/feature-analytics.avif',
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden>
      <circle cx="8" cy="8" r="8" fill="rgba(46,119,250,0.15)" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#2E77FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FeaturesDetailed() {
  return (
    <section className="section-pad bg-[var(--color-brand-dark)]">
      <div className="container-wide space-y-32">
        {FEATURES.map((f, i) => (
          <div
            key={f.tagline}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            {/* Copy */}
            <div>
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-4">
                {f.tagline}
              </span>
              <h3
                className="text-3xl md:text-4xl font-medium text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {f.heading}
              </h3>
              <p className="text-[var(--color-brand-muted)] mb-8 leading-relaxed">{f.body}</p>
              <ul className="space-y-3 mb-10">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-white">
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/carry-cost-calculator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-brand-border)] text-white text-sm font-medium hover:border-white/20 transition-colors"
              >
                Carry Cost Calc →
              </Link>
            </div>

            {/* Screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]">
              <Image
                src={f.image}
                alt={f.heading}
                width={640}
                height={440}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
