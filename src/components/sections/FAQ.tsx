'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'What is the difference between a normal website and your presales system?',
    a: 'A traditional website is a digital brochure — static visuals and a generic contact form. Our presales system is an interactive digital twin that syncs live with your CRM, tracks unit-level buyer interest, and actively supports your sales team.',
  },
  {
    q: 'Do you integrate with our existing CRM?',
    a: 'Yes. We integrate directly with most modern real estate CRMs including Spark, Yardi, Salesforce, HubSpot, and others. We work within your existing workflow — no duplicate systems, no manual updates.',
  },
  {
    q: 'How long does it take to build and launch?',
    a: 'Most projects launch within 6–8 weeks depending on asset readiness and CRM setup. We handle the technical implementation — your team provides floorplans, renders, and CRM access.',
  },
  {
    q: 'Does this replace our sales team?',
    a: 'No. It strengthens your sales team. Our presales system qualifies buyers, tracks unit interest, and delivers better-informed leads — so your team can close faster.',
  },
  {
    q: 'How do we track buyer interest?',
    a: 'We track unit-level interactions — including which units buyers explore, view preferences, and floorplan interest. This data syncs directly into your CRM so your team sees context before making contact.',
  },
  {
    q: 'Can the system handle multiple phases and complex floorplans?',
    a: 'Yes. The system supports multi-phase developments, varied floorplans, and dynamic availability across buildings. It scales with your project without requiring enterprise-level complexity.',
  },
  {
    q: 'Do we need all our final 3D renders finished before we start?',
    a: 'No. We can begin with architectural floorplans and preliminary renders. The digital twin can evolve as final assets become available.',
  },
  {
    q: "Why shouldn't we just have our branding agency build this?",
    a: 'Branding agencies specialize in visual identity and marketing materials. Our presales system requires interactive 3D infrastructure, live CRM synchronization, performance optimization, and compliance integration. We focus specifically on building sales infrastructure for real estate developers.',
  },
  {
    q: 'Is this overkill for a smaller project?',
    a: 'Our systems are designed specifically for 10–50 unit developments. Our presales system requires digital twin infrastructure, live CRM synchronization, performance optimization, and compliance integration.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[var(--color-brand-border)]">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white">{q}</span>
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] transition-transform"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-[var(--color-brand-muted)] leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-pad bg-[var(--color-brand-mid)]">
      <div className="container-wide">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-4">
            FAQ
          </span>
          <h2
            className="text-4xl md:text-5xl font-medium text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-3xl">
          {FAQS.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
