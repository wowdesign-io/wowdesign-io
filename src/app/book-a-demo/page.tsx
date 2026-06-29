import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Book a Demo | wowdesign',
  description:
    'See the presales system live — the website, the digital twin, and the automated follow-up in a 30-minute walkthrough on a live project.',
}

const faqs = [
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
    q: "Do we need all our final 3D renders finished before we start?",
    a: 'No. We can begin with architectural floorplans and preliminary renders. The digital twin can evolve as final assets become available.',
  },
  {
    q: "Why shouldn't we just have our branding agency build this?",
    a: 'Branding agencies specialize in visual identity and marketing materials. Our presales system requires interactive 3D infrastructure, live CRM synchronization, performance optimization, and compliance integration. We focus specifically on building sales infrastructure for real estate developers.',
  },
  {
    q: 'Is this overkill for a smaller project?',
    a: 'Our systems are designed specifically for 10–50 unit developments. The digital twin infrastructure, live CRM synchronization, and automated follow-up are sized exactly for boutique projects — not enterprise complexity.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function BookADemo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-brand-dark text-white">
        {/* Hero */}
        <section className="px-6 pt-24 pb-12 text-center max-w-3xl mx-auto">
          <h1
            className="text-5xl font-medium leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            See the System Live.
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Book a 30-minute walkthrough. See the digital twin, floor plan viewer, and automated
            follow-up running on a real project — then decide.
          </p>
          <p className="text-sm text-gray-500">
            Built for 10–50 unit developments. Launched in 6–8 weeks.
          </p>
        </section>

        {/* Cal.com embed */}
        <section className="px-6 pb-16 max-w-4xl mx-auto">
          <Script src="https://asset.cal.com/embed/embed.js" strategy="afterInteractive" />
          <div
            id="my-cal-inline"
            style={{ width: '100%', height: '700px', overflow: 'scroll' }}
          />
          <Script id="cal-init" strategy="afterInteractive">{`
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]);} else p(cal, ar); return; } p(cal, ar); };
            })(window, "https://asset.cal.com/embed/embed.js", "init");
            Cal("init", {origin:"https://cal.com"});
            Cal("inline", {
              elementOrSelector:"#my-cal-inline",
              calLink: "wowdesign/book-a-demo",
              layout: "month_view",
              theme: "dark",
              config: { color: "#2E77FA" }
            });
            Cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#2E77FA"}},"hideEventTypeDetails":false,"layout":"month_view"});
          `}</Script>
        </section>

        {/* FAQ */}
        <section className="px-6 pb-24 max-w-3xl mx-auto">
          <h2
            className="text-3xl font-medium mb-10 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-white/10 pb-6">
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {q}
                </h3>
                <p className="text-gray-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
