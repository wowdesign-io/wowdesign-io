import type { Metadata } from 'next'
import WebflowScripts from '@/components/WebflowScripts'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesDeepDive from '@/components/FeaturesDeepDive'
import ProposalDemos from '@/components/ProposalDemos'
import SiteChrome from '@/components/SiteChrome'
import { SITE } from '@/lib/site'
import '@/app/how-it-works-headings.css'
import './proposal.css'

const PROPOSAL_DESC =
  "Sell out faster. Buyers pick a unit tonight. Your sales team knows who's ready. Investment and live building options."

export const metadata: Metadata = {
  title: 'Proposal',
  description: PROPOSAL_DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/proposal` },
  openGraph: { description: PROPOSAL_DESC },
  twitter: { description: PROPOSAL_DESC },
}

const STRATEGY = 'https://cal.com/wowdesign/strategy-call'

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
      <SiteChrome current="none" pageClass="page-proposal" funnel>
        <PageHero
          tagline="Proposal"
          title="Sell Out Faster."
          description="Every extra month is $67k–$100k — loan interest plus marketing burn. Buyers pick a unit tonight. Your sales team knows who's ready."
          ctaLabel="Strategy Call"
          ctaHref={STRATEGY}
          ctaData="Proposal - Hero Strategy"
          ctaTarget="_blank"
          ctaRel="noopener noreferrer"
          timeline={
            <>
              $45k–$65k + $2,500/mo.
              <br />
              Live in 6–8 weeks.
            </>
          }
          taglineIcon={proposalIcon}
        />
        <ProblemSection calcNewTab />
        <HowItWorksSection
          tagline="What you get"
          title="Website. Digital twin. Follow-up."
          description="One system — buyers pick a unit tonight, follow-up runs, your sales team only calls people who are ready."
          cta="Proposal - System Strategy"
          ctaHref={STRATEGY}
          ctaLabel="Strategy Call"
          ctaTarget="_blank"
          ctaRel="noopener noreferrer"
        />
        <ProposalDemos />
        <FeaturesDeepDive
          calcNewTab
          hideTwinFeature
          ctaHref={STRATEGY}
          ctaLabel="Strategy Call"
          ctaKind="Strategy"
        />
        <PageCta
          ctaData="Proposal CTA - Strategy"
          href={STRATEGY}
          label="Strategy Call"
          target="_blank"
          rel="noopener noreferrer"
          title={
            <>
              Next step: Strategy Call.
              <br />
              Lock the fit for your project.
            </>
          }
          lead="You've seen the system. We'll map investment and timeline to your building."
          timeline={
            <>
              $45k–$65k + $2,500/mo.
              <br />
              Live in 6–8 weeks.
            </>
          }
        />
      </SiteChrome>
      <WebflowScripts />
    </>
  )
}
