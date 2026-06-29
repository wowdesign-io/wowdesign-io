import './theme.css'
import { Nav } from '@/components/v2/Nav'
import { Hero } from '@/components/v2/Hero'

export const metadata = {
  title: 'wowdesign — rebuild preview',
  robots: { index: false, follow: false },
}

export default function V2Page() {
  return (
    <div className="v2Root">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}
