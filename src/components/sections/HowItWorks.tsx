import Link from 'next/link'

const STEPS = [
  {
    num: '01',
    title: 'Connect Your CRM',
    body: 'We securely connect to your existing CRM and map your unit data, pricing, and availability. From day one, your presales system reflects live data automatically.',
  },
  {
    num: '02',
    title: 'Build The Digital Twin',
    body: 'We build your digital twin — configuring interactive floor plans, live unit availability, and buyer flows — wrapped in a complete branded presales experience.',
  },
  {
    num: '03',
    title: 'Launch And Test',
    body: 'We launch your presales system and test every workflow — ensuring buyer inquiries and unit interactions flow directly into your sales team.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-[var(--color-brand-mid)]">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-4">
            How it works
          </span>
          <h2
            className="text-4xl md:text-5xl font-medium text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            We Handle Everything. You Get Buyers.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg">
            You provide the floorplans and CRM access. We handle the build, configuration, and launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {STEPS.map((step) => (
            <div key={step.num} className="relative">
              {/* Step number */}
              <div
                className="text-6xl font-medium text-gradient mb-6 leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
                aria-hidden
              >
                {step.num}
              </div>
              <h3
                className="text-xl font-medium text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-[var(--color-brand-muted)] mb-8">
          Typical launch timeline: <span className="text-white font-medium">6–8 weeks.</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/carry-cost-calculator"
            className="px-6 py-3 rounded-lg bg-[var(--color-brand-blue)] text-white font-medium hover:bg-blue-500 transition-colors"
          >
            Carry Cost Calc
          </Link>
          <Link
            href="/book-a-demo"
            className="px-6 py-3 rounded-lg border border-[var(--color-brand-border)] text-white font-medium hover:border-white/20 transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
