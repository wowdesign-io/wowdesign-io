import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'Integrations', href: '/#integrations' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-brand-border)] bg-[rgba(10,10,10,0.85)] backdrop-blur-md">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="https://a.storyblok.com/f/293523249633085/5035/dd517a1c93/wowdesign-logo.svg"
            alt="wowdesign"
            width={140}
            height={28}
            priority
            unoptimized
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
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

        <Link
          href="/book-a-demo"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-brand-blue)] text-white text-sm font-medium hover:bg-blue-500 transition-colors"
        >
          Book a Demo
        </Link>

        {/* Mobile CTA */}
        <Link
          href="/book-a-demo"
          className="md:hidden px-3 py-1.5 rounded-lg bg-[var(--color-brand-blue)] text-white text-sm font-medium"
        >
          Demo
        </Link>
      </div>
    </nav>
  )
}
