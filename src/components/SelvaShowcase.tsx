import TwinOptionCards from '@/components/TwinOptionCards'

/**
 * Home: same priced twin row as /how-it-works, with Digital twin tagline + live demos.
 */
export default function SelvaShowcase() {
  return (
    <TwinOptionCards
      id="live-project"
      tagline="Digital twin"
      title="Same system. Three ways to show the building."
      description={
        <>
          Website, follow-up, and the full sales system on every option.
          <br />
          Choose 360, 3D Lite, or Immersive 3D.
        </>
      }
      showPrices
      showLiveButtons
      timeline="Full system included. Plus $2,500/mo. We keep it running. Your sales team sells. Live in 6–8 weeks."
      ctaHref="/book-a-demo"
      ctaLabel="Book a Demo"
      cta="Home - Twins Book a Demo"
    />
  )
}
