import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsTicker from '@/components/sections/StatsTicker'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import Comparison from '@/components/sections/Comparison'
import Testimonials from '@/components/sections/Testimonials'
import FeaturesDetailed from '@/components/sections/FeaturesDetailed'
import HowItWorks from '@/components/sections/HowItWorks'
import Integrations from '@/components/sections/Integrations'
import TeamSection from '@/components/sections/TeamSection'
import CTABanner from '@/components/sections/CTABanner'
import FAQ from '@/components/sections/FAQ'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <StatsTicker />
        <FeaturesGrid />
        <Comparison />
        <Testimonials />
        <FeaturesDetailed />
        <HowItWorks />
        <Integrations />
        <TeamSection />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
