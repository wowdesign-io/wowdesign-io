import TwinOptionCards from '@/components/TwinOptionCards'

const STRATEGY = 'https://cal.com/wowdesign/strategy-call'

/** Proposal leave-behind: three live showcases with twin screenshots. */
export default function ProposalDemos() {
  return (
    <TwinOptionCards
      id="open-the-demos"
      tagline="Your options"
      title="Open each building. Live."
      description="Same website and follow-up on every option. The interactive building is what moves the number. Pick the depth that fits the project."
      showLiveButtons
      ctaHref={STRATEGY}
      ctaLabel="Strategy Call"
      cta="Proposal - Options Strategy"
      ctaTarget="_blank"
      ctaRel="noopener noreferrer"
      timeline="Plus $2,500/mo. We keep it running. Your sales team sells."
    />
  )
}
