import type { Metadata } from 'next'
import WebflowScripts from '@/components/WebflowScripts'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ProposalSignals from '@/components/ProposalSignals'
import ProposalDemos from '@/components/ProposalDemos'
import ProposalTimeline from '@/components/ProposalTimeline'
import SiteChrome from '@/components/SiteChrome'
import { SITE } from '@/lib/site'
import '@/app/how-it-works-headings.css'

export const metadata: Metadata = {
  title: 'Proposal',
  description:
    "Sell out faster. Buyers pick a unit tonight. Your sales team knows who's ready. Live demos and investment for partners.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/proposal` },
}

/** Phosphor clipboard-text duotone — Relume Phosphor set */
const proposalIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
    <g fill="currentColor">
      <path d="M200 40v176H56V40Z" opacity=".2"></path>
      <path d="M200 24H163.74a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 192H56V40h32v8a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-8h32Zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></path>
    </g>
  </svg>
)

export default function ProposalPage() {
  return (
    <>
      <SiteChrome current="none">
        <PageHero
          tagline="Proposal"
          title="Sell Out Faster."
          description={"For boutique 10–50 unit projects. Every extra month is $67k–$100k — loan interest plus marketing burn. Buyers pick a unit tonight. Your sales team knows who's ready. Share this page with partners who weren't on the call."}
          ctaLabel="Open the demos"
          ctaHref="#open-the-demos"
          ctaData="Proposal - Hero demos"
          timeline={
            <>
              Private handoff — not in the public nav.
              <br />
              Live demos · $45k / $55k / $65k · 6–8 weeks.
            </>
          }
          taglineIcon={proposalIcon}
        />
        <ProblemSection />
        <HowItWorksSection
          tagline="What you get"
          title="Website. Interactive building. Follow-up."
          description="One system so buyers can pick a unit tonight and your sales team only calls people who are ready."
          cta="Proposal - System demos"
          ctaHref="#open-the-demos"
          ctaLabel="Open the demos"
        />
        <ProposalSignals />
        <ProposalDemos />
        <ProposalTimeline />
        <PageCta
          ctaData="Proposal CTA - Demo"
          href="/book-a-demo"
          label="Book A Demo"
          title={
            <>
              Ready to talk next steps?
              <br />
              Book a demo — or reply Andy.
            </>
          }
          lead="Questions from partners? Send them this page, then book time."
          timeline={
            <>
              info@wowdesign.io
              <br />
              $45k / $55k / $65k + $2,500/mo · Live in 6–8 weeks.
            </>
          }
        />
      </SiteChrome>
      <WebflowScripts />
    </>
  )
}
