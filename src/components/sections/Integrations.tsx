import Image from 'next/image'
import Link from 'next/link'

const LOGOS = [
  { name: 'Yardi', src: 'https://a.storyblok.com/f/293523249633085/1816/e8a283ca00/logo-yardi.svg' },
  { name: 'Meta', src: 'https://a.storyblok.com/f/293523249633085/6940/9e23549a97/logo-meta.svg' },
  { name: 'Google Ads', src: 'https://a.storyblok.com/f/293523249633085/6891/74a12590ec/logo-google-ads.svg' },
  { name: 'HubSpot', src: 'https://a.storyblok.com/f/293523249633085/4646/ba39a6a011/logo-hubspot.svg' },
  { name: 'ActiveCampaign', src: 'https://a.storyblok.com/f/293523249633085/9809/7884b35e40/logo-activecampaign.svg' },
  { name: 'Spark', src: 'https://a.storyblok.com/f/293523249633085/3402/812cf25617/logo-spark.svg' },
  { name: 'Calendly', src: 'https://a.storyblok.com/f/293523249633085/6615/778585fa73/logo-calendly.svg' },
  { name: 'Slack', src: 'https://a.storyblok.com/f/293523249633085/3656/e556a03e4b/logo-slack.svg' },
  { name: 'Claude', src: 'https://a.storyblok.com/f/293523249633085/6211/c415c143ea/logo-claude.svg' },
  { name: 'Twilio', src: 'https://a.storyblok.com/f/293523249633085/4255/59db0ed78b/logo-twilio.svg' },
  { name: 'Hotjar', src: 'https://a.storyblok.com/f/293523249633085/4994/0454ad66e2/logo-hotjar.svg' },
  { name: 'ChatGPT', src: 'https://a.storyblok.com/f/293523249633085/4705/f50748547d/logo-chatgpt.svg' },
  { name: 'Airtable', src: 'https://a.storyblok.com/f/293523249633085/10257/2fefdc144c/logo-airtable.svg' },
  { name: 'Salesforce', src: 'https://a.storyblok.com/f/293523249633085/11784/e80b7a2ba8/logo-salesforce.svg' },
  { name: 'n8n', src: 'https://a.storyblok.com/f/293523249633085/4034/64aa429772/logo-n8n.svg' },
  { name: 'Zapier', src: 'https://a.storyblok.com/f/293523249633085/4961/09e8be2968/logo-zapier.svg' },
  { name: 'Make', src: 'https://a.storyblok.com/f/293523249633085/4025/45a3e33f91/logo-make.svg' },
  { name: 'Airtable', src: 'https://a.storyblok.com/f/293523249633085/10257/2fefdc144c/logo-airtable.svg' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="section-pad relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://a.storyblok.com/f/293523249633085/50638/3e5225fa50/integrations-bg.webp"
          alt=""
          fill
          className="object-cover opacity-20"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-brand-dark)]/80" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-2xl mb-16">
          <h2
            className="text-4xl md:text-5xl font-medium text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Native To Your Existing Workflow.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg">
            We connect directly to the CRMs and platforms your sales team already uses — syncing unit availability, pricing, and buyer interactions automatically. No manual updates. No duplicate entry.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
          {LOGOS.map((logo) => (
            <div
              key={`${logo.name}-${logo.src}`}
              className="card-border flex items-center justify-center p-4 h-16 hover:border-[rgba(255,255,255,0.15)] transition-colors"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={32}
                className="w-auto h-6 object-contain opacity-60 hover:opacity-100 transition-opacity"
                unoptimized
              />
            </div>
          ))}
        </div>

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
