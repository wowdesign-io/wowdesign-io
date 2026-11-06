import TwinOptionCards from '@/components/TwinOptionCards'

const STRATEGY = 'https://cal.com/wowdesign/strategy-call'

/** Proposal leave-behind: three live showcases with twin screenshots. */
export default function ProposalDemos() {
  return (
    <TwinOptionCards
      id="open-the-demos"
      tagline="Your options"
      title="Open each building. Live."
      description="Website and follow-up on every option. Choose 360, 3D Lite, or Immersive 3D."
      showLiveButtons
      ctaHref={STRATEGY}
      ctaLabel="Strategy Call"
      cta="Proposal - Options Strategy"
      ctaTarget="_blank"
      ctaRel="noopener noreferrer"
      timeline="Website and follow-up included. Plus $2,500/mo. We keep it running. Your sales team sells."
    />
  )
}
