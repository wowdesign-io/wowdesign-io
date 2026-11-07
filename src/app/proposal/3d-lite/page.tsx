import type { Metadata } from 'next'
import ProposalTwinLaunch from '@/components/ProposalTwinLaunch'
import '../proposal-twin.css'

export const metadata: Metadata = {
  title: '3D Lite demo',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.wowdesign.io/proposal/3d-lite' },
}

/**
 * Full Planpoint demo path required so their Next router matches.
 * Host stays ours (3dlite.wowdesign.io); middleware injects the wowdesign bar.
 */
const DEMO_URL = 'https://3dlite.wowdesign.io/demo/planpoint360'

export default function Proposal3dLitePage() {
  return <ProposalTwinLaunch demoUrl={DEMO_URL} title="3D Lite demo" />
}
