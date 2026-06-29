import Link from 'next/link'
import Image from 'next/image'

const FLOATING_TAGS = ['Live CRM Sync', 'No App Required', 'ADA Compliant']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[var(--color-brand-dark)]">
      {/* Background gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,119,250,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">
        {/* Copy */}
        <div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-6">
            Presales System
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Sell Out Faster.
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-muted)] leading-relaxed max-w-xl mb-10">
            Boutique developers close 31% faster with wowdesign — we build the website, the digital
            twin, and the automated follow-up system, so your team always knows who&apos;s ready to
            buy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/carry-cost-calculator"
              className="px-6 py-3 rounded-lg bg-[var(--color-brand-blue)] text-white font-medium hover:bg-blue-500 transition-colors"
            >
              Carry Cost Calc
            </Link>
            <Link
              href="#features"
              className="px-6 py-3 rounded-lg border border-[var(--color-brand-border)] text-white font-medium hover:border-white/20 transition-colors"
            >
              See Features
            </Link>
          </div>
        </div>

        {/* Building image + floating tags */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <Image
              src="https://a.storyblok.com/f/293523249633085/158204/b331a144ce/hero-building.webp"
              alt="Interactive digital twin — boutique real estate development"
              width={600}
              height={700}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
            {/* Floating tags */}
            <div className="absolute top-8 -left-4 flex flex-col gap-3">
              {FLOATING_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white border border-[var(--color-brand-border)] bg-[rgba(26,26,26,0.9)] backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue)] flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-brand-dark))',
        }}
        aria-hidden
      />
    </section>
  )
}
