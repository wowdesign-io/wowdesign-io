import type { Metadata } from 'next'
import ProposalTwinLaunch from '@/components/ProposalTwinLaunch'
import '../proposal-twin.css'

export const metadata: Metadata = {
  title: '3D Lite demo',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.wowdesign.io/proposal/3d-lite' },
}

/** Top-level twin on our DNS — root proxies to Planpoint Lite via middleware. */
const DEMO_URL = 'https://3dlite.wowdesign.io/'

export default function Proposal3dLitePage() {
  return <ProposalTwinLaunch demoUrl={DEMO_URL} title="3D Lite demo" />
}
