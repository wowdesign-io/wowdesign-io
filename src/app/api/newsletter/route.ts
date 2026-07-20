import { NextResponse } from 'next/server'

const NOTIFY_TO = 'andy@wowdesign.io'
const FROM = 'wowdesign Site <andy@wowdesign.io>'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const firstName = String(body.firstName || body.nl_first_name || '').trim()
    const email = String(body.email || body.nl_email || '').trim()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[newsletter] RESEND_API_KEY missing')
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const nameLine = firstName || '(no first name)'
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        subject: `Newsletter signup: ${nameLine} <${email}>`,
        text: [
          'New newsletter signup on wowdesign.io',
          '',
          `First name: ${nameLine}`,
          `Email: ${email}`,
          `When: ${new Date().toISOString()}`,
          '',
          'Add them to the Resend Newsletter audience when ready.',
        ].join('\n'),
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('[newsletter] Resend error', res.status, detail)
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[newsletter]', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
