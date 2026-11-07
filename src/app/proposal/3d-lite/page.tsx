import type { Metadata } from 'next'
import ProposalTwinEmbed from '@/components/ProposalTwinEmbed'
import '../proposal-twin.css'

export const metadata: Metadata = {
  title: '3D Lite demo',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.wowdesign.io/proposal/3d-lite' },
}

/** Laurent logo-free lighter 3D — URL path says 360; UI is the massing / drag-to-rotate lite. */
const PROJECT_URL = 'https://app.planpoint.io/demo/planpoint360?lang=English'

export default function Proposal3dLitePage() {
  return <ProposalTwinEmbed projectUrl={PROJECT_URL} title="3D Lite demo" layout="flow" />
}
