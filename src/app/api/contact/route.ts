import { NextResponse } from 'next/server'

const NOTIFY_TO = 'andy@wowdesign.io'
const FROM = 'wowdesign Site <andy@wowdesign.io>'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()
    const company = String(body.company || '').trim()

    if (!name) {
      return NextResponse.json({ error: 'Name required' }, { status: 400 })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    if (!message) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY missing')
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        reply_to: email,
        subject: `Contact form: ${name}${company ? ` (${company})` : ''}`,
        text: [
          'New contact form message on wowdesign.io',
          '',
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || '(none)'}`,
          `When: ${new Date().toISOString()}`,
          '',
          'Message:',
          message,
        ].join('\n'),
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('[contact] Resend error', res.status, detail)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
