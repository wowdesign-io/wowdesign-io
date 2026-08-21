'use client'

import { FormEvent, useState } from 'react'
import '@/app/contact-form.css'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company'),
          message: data.get('message'),
        }),
      })

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}))
        throw new Error(payload.error || 'Something went wrong')
      }

      form.reset()
      setStatus('ok')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <section id="contact-form" className="section contact-us">
      <div className="container">
        <div className="contact-us-wrapper">
          <div className="contact-us-form-block w-form">
            <form className="contact-us-form" onSubmit={onSubmit}>
              <div className="contact-us-form-wrapper">
                <div className="contact-us-form-single">
                  <label className="contact-us-form-text-field" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    className="contact-us-form-input-field w-input"
                    maxLength={256}
                    name="name"
                    placeholder="Your name"
                    type="text"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="contact-us-form-single">
                  <label className="contact-us-form-text-field" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    className="contact-us-form-input-field w-input"
                    maxLength={256}
                    name="email"
                    placeholder="you@company.com"
                    type="email"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>
              <div className="contact-us-form-single">
                <label className="contact-us-form-text-field" htmlFor="contact-company">
                  Company
                </label>
                <input
                  id="contact-company"
                  className="contact-us-form-input-field w-input"
                  maxLength={256}
                  name="company"
                  placeholder="Optional"
                  type="text"
                  disabled={status === 'sending'}
                />
              </div>
              <div className="contact-us-textarea-wrapper">
                <label className="contact-us-form-text-field" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="contact-us-textarea w-input"
                  maxLength={5000}
                  name="message"
                  placeholder="What are you working on?"
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <button
                type="submit"
                className="contact-us-form-submit-button"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'ok' ? (
                <p className="contact-us-status">Got it — we&apos;ll reply at the email you left.</p>
              ) : null}
              {status === 'error' ? (
                <p className="contact-us-status is-error">
                  {error || 'Could not send. Email info@wowdesign.io instead.'}
                </p>
              ) : null}
            </form>
          </div>
          <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="contact-us-icon top-left" />
          <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="contact-us-icon top-right" />
          <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="contact-us-icon bottom-left" />
          <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="contact-us-icon bottom-right" />
        </div>
        <p className="contact-us-alt">
          Or email <a href="mailto:info@wowdesign.io">info@wowdesign.io</a>
        </p>
      </div>
      <div className="sky-container" aria-hidden="true">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
  )
}
