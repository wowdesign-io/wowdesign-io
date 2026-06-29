import Image from 'next/image'

const FEATURES = [
  {
    icon: 'https://a.storyblok.com/f/293523249633085/6907/f12b27a98f/icon-digital-twin.svg',
    title: 'Interactive Digital Twin',
    body: 'Buyers explore your development from any device — rotating the building, clicking into units, and seeing live availability — before they ever call your team.',
  },
  {
    icon: 'https://a.storyblok.com/f/293523249633085/2762/c18f029e08/icon-instant-mobile.svg',
    title: 'Instant Mobile Performance',
    body: 'Runs instantly on any smartphone. No apps. No pixel streaming. Just smooth performance.',
  },
  {
    icon: 'https://a.storyblok.com/f/293523249633085/625/7f3b1755ae/icon-sync.svg',
    title: 'Two-Way CRM Sync',
    body: 'Live unit data syncs out to buyers in real time. Every buyer interaction syncs back to your team automatically. No manual updates. No duplicate entry.',
  },
  {
    icon: 'https://a.storyblok.com/f/293523249633085/2121/8f3eec9c7a/unit-specific-leads.svg',
    title: 'Unit-Level Buyer Intent',
    body: 'Know exactly which unit a buyer explored before your team ever calls. No generic leads. No guesswork.',
  },
  {
    icon: 'https://a.storyblok.com/f/293523249633085/3315/6a828251ea/icon-dashboard.svg',
    title: 'Buyer Intelligence & Heatmaps',
    body: 'See which units are generating the most interest, which floors are hottest, and where demand is concentrated.',
  },
  {
    icon: 'https://a.storyblok.com/f/293523249633085/1925/ef8261f8c6/icon-ada-compliance.svg',
    title: 'Built-In ADA Protection',
    body: 'An accessibility mode instantly converts the experience into a compliant, screen-reader-friendly format.',
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="section-pad bg-[var(--color-brand-dark)]">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-4">
            Features
          </span>
          <h2
            className="text-4xl md:text-5xl font-medium text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Presales System.<br />Built to Close.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg">
            The website. The digital twin. The automated follow-up. One presales system built for boutique developers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-border p-6 hover:border-[rgba(255,255,255,0.15)] transition-colors"
            >
              <div className="w-10 h-10 mb-5 flex items-center justify-center">
                <Image src={f.icon} alt="" width={40} height={40} unoptimized />
              </div>
              <h3
                className="text-lg font-medium text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
