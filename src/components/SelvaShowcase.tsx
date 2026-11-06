import TwinOptionCards from '@/components/TwinOptionCards'

/**
 * Home: three ways to show the building — what buyers get.
 * No prices / no live links. Investment lives on /how-it-works.
 */
export default function SelvaShowcase() {
  return (
    <TwinOptionCards
      id="live-project"
      tagline="Digital twin"
      title="This is what buyers get."
      description={
        <>
          Website, follow-up, and the full sales system
          <br />
          on every option. The digital twin is 360, 3D Lite, or Immersive 3D.
        </>
      }
      showPrices={false}
      showLiveButtons={false}
      timeline=""
      ctaHref="/book-a-demo"
      ctaLabel="Book a Demo"
      cta="Home - Twins Book a Demo"
    />
  )
}
