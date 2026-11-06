import TwinOptionCards from '@/components/TwinOptionCards'

/** How it works: same options angle as proposal, with prices, no live links. */
export default function OfferSection() {
  return (
    <TwinOptionCards
      id="the-offer"
      tagline="Your options"
      title="Open each building. Live."
      description={
        <>
          Website, follow-up, and the full sales system on every option.
          <br />
          Choose 360, 3D Lite, or Immersive 3D.
        </>
      }
      showPrices
      showLiveButtons={false}
      ctaHref="/book-a-demo"
      ctaLabel="Book a Demo"
      cta="Offer - Book a Demo"
      timeline="Full system included. Plus $2,500/mo. We keep it running. Your sales team sells. Live in 6–8 weeks."
    />
  )
}
