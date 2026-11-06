import TwinOptionCards from '@/components/TwinOptionCards'

/** How it works: same option cards as /proposal, no live demo buttons. */
export default function OfferSection() {
  return (
    <TwinOptionCards
      id="the-offer"
      tagline="The offer"
      title="What a project costs."
      description="$45k–$65k per project, plus $2,500/mo. Website, follow-up, and the full sales system on every option. Choose 360, 3D Lite, or Immersive 3D."
      showLiveButtons={false}
      ctaHref="/carry-cost-calculator"
      ctaLabel="Carry Cost Calc"
      cta="Offer - Calc"
      timeline="Full system included. Plus $2,500/mo. We keep it running. Your sales team sells. Live in 6–8 weeks."
    />
  )
}
