import type { Metadata } from 'next'
import ProposalTwinEmbed from '@/components/ProposalTwinEmbed'
import '../proposal-twin.css'

export const metadata: Metadata = {
  title: 'Immersive 3D demo',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.wowdesign.io/proposal/immersive' },
}

const PROJECT_URL = 'https://app.planpoint.io/demo/planpoint3d?lang=English'

export default function ProposalImmersivePage() {
  return (
    <ProposalTwinEmbed
      projectUrl={PROJECT_URL}
      title="Immersive 3D demo"
      note="Best in Chrome. If the view stays black, turn off Brave Shields or switch browser."
    />
  )
}
