import HomePage from '../page'
import Hero3D from '@/components/hero3d/Hero3D'

export const metadata = {
  title: 'hero lab — wowdesign',
  robots: { index: false, follow: false },
}

// The whole homepage, with the old hero building image swapped for the live 3D scene.
export default function HeroLabPage() {
  return <HomePage heroVisual={<Hero3D />} />
}
