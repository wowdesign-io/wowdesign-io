import TwinOptionCards from '@/components/TwinOptionCards'

/** How it works: same option cards as /proposal, no live demo buttons. */
export default function OfferSection() {
  return (
    <TwinOptionCards
      id="the-offer"
      tagline="The offer"
      title="What a project costs."
      description="$45k–$65k per project, plus $2,500/mo. Same website and follow-up on every option. The interactive building is what moves the number."
      showLiveButtons={false}
      ctaHref="/carry-cost-calculator"
      ctaLabel="Carry Cost Calc"
      cta="Offer - Calc"
      timeline="Plus $2,500/mo. We keep it running. Your sales team sells. Live in 6–8 weeks."
    />
  )
}
