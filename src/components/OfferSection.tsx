import TwinOptionCards from '@/components/TwinOptionCards'

/** How it works: same option cards as /proposal, no live demo buttons. */
export default function OfferSection() {
  return (
    <TwinOptionCards
      id="the-offer"
      tagline="The offer"
      title="What a project costs."
      description="$45k–$65k per project, plus $2,500/mo. Website and follow-up on every option. You choose the interactive building — 360, 3D Lite, or Immersive 3D."
      showLiveButtons={false}
      ctaHref="/carry-cost-calculator"
      ctaLabel="Carry Cost Calc"
      cta="Offer - Calc"
      timeline="Website and follow-up included. Plus $2,500/mo. We keep it running. Your sales team sells. Live in 6–8 weeks."
    />
  )
}
