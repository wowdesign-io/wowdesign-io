import { redirect } from 'next/navigation'

/** Contact is not a funnel step. Soft landing → calculator → Resend nurture → demo. */
export default function ContactPage() {
  redirect('/carry-cost-calculator')
}
