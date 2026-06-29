import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Features', href: '/#features' },
      { label: 'Integrations', href: '/#integrations' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Book a Demo', href: '/book-a-demo' },
      { label: 'Carry Cost Calculator', href: '/carry-cost-calculator' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-mid)]">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://a.storyblok.com/f/293523249633085/5035/dd517a1c93/wowdesign-logo.svg"
                alt="wowdesign"
                width={130}
                height={26}
                unoptimized
              />
            </Link>
            <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed max-w-xs">
              We build the website, the digital twin, and the automated follow-up system for boutique real estate developers.
            </p>
            <p className="mt-4 text-xs text-[var(--color-brand-muted)]">
              407 Lincoln Rd, Suite 6H PMB 1673<br />
              Miami Beach, FL 33139
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-medium text-white mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--color-brand-muted)] hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-brand-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-brand-muted)]">
            © {new Date().getFullYear()} wowdesign LLC. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-brand-muted)]">
            Built for boutique real estate developers who need to sell out faster.
          </p>
        </div>
      </div>
    </footer>
  )
}
