import Link from 'next/link'

const OTHERS = [
  'Static brochure websites',
  'Manual inventory management',
  'Disconnected CRM workflows',
  'Generic contact forms',
  'Slow, unqualified inquiries',
]

const WOWDESIGN = [
  'Interactive digital twin',
  'Instant loading on any smartphone',
  'Real-time CRM synchronization',
  'Live inventory & pricing control',
  'Unit-level buyer intent tracking',
  'Qualified leads delivered to your CRM',
  'Complete presales system',
]

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="9" fill="rgba(46,119,250,0.15)" />
      <path d="M5 9l3 3 5-6" stroke="#2E77FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.05)" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Comparison() {
  return (
    <section className="section-pad bg-[var(--color-brand-mid)]">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-4">
            Comparison
          </span>
          <h2
            className="text-4xl md:text-5xl font-medium text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            More Than a Website.<br />A Complete Presales System.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg">
            Traditional agencies deliver renderings. We deliver a live presales system connected directly to your CRM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Other agencies */}
          <div className="card-border p-8">
            <p className="text-sm font-medium text-[var(--color-brand-muted)] mb-6">Other Agencies</p>
            <ul className="space-y-4">
              {OTHERS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Cross />
                  <span className="text-sm text-[var(--color-brand-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* wowdesign */}
          <div className="card-border gradient-border p-8 bg-[rgba(46,119,250,0.04)]">
            <p className="text-sm font-medium text-white mb-6">wowdesign</p>
            <ul className="space-y-4">
              {WOWDESIGN.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/carry-cost-calculator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-brand-blue)] text-white font-medium hover:bg-blue-500 transition-colors"
          >
            See What It Costs to Wait →
          </Link>
        </div>
      </div>
    </section>
  )
}
