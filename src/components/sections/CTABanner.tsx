import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="section-pad bg-[var(--color-brand-dark)]">
      <div className="container-wide">
        <div className="gradient-border card-border p-12 md:p-16 text-center max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-medium text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Stop Sending PDFs.<br />Start Selling Units.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg mb-10 max-w-xl mx-auto">
            Replace static brochures with a presales system built to accelerate sales — combining a digital twin, live inventory sync, and qualified buyer data delivered directly to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/carry-cost-calculator"
              className="px-8 py-3.5 rounded-lg bg-[var(--color-brand-blue)] text-white font-medium hover:bg-blue-500 transition-colors"
            >
              Carry Cost Calc
            </Link>
            <Link
              href="/book-a-demo"
              className="px-8 py-3.5 rounded-lg border border-[var(--color-brand-border)] text-white font-medium hover:border-white/20 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <p className="mt-6 text-xs text-[var(--color-brand-muted)]">
            Built for 10–50 unit developments. Launched in 6–8 weeks.
          </p>
        </div>
      </div>
    </section>
  )
}
