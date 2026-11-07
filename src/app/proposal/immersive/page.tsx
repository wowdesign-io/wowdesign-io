import type { Metadata } from 'next'
import ProposalTwinLaunch from '@/components/ProposalTwinLaunch'
import '../proposal-twin.css'

export const metadata: Metadata = {
  title: 'Immersive 3D demo',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.wowdesign.io/proposal/immersive' },
}

/** Top-level twin on our DNS — root proxies to Planpoint Immersive via middleware. */
const DEMO_URL = 'https://3dimmersive.wowdesign.io/'

export default function ProposalImmersivePage() {
  return (
    <ProposalTwinLaunch
      demoUrl={DEMO_URL}
      title="Immersive 3D demo"
      note="Opening the live twin… Best in Chrome."
    />
  )
}
