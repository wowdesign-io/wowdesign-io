'use client'

import { useEffect } from 'react'

/**
 * Intercepts every footer Webflow newsletter form (`#wf-form-NL-Form`) and
 * POSTs to /api/newsletter (emails Andy). Shows the existing w-form-done /
 * w-form-fail UI — no Resend audience write yet.
 */
export default function NewsletterFormHandler() {
  useEffect(() => {
    function onSubmit(e: Event) {
      const form = e.target
      if (!(form instanceof HTMLFormElement)) return
      if (form.id !== 'wf-form-NL-Form' && form.getAttribute('data-name') !== 'NL-Form') return

      e.preventDefault()
      e.stopPropagation()

      const block = form.closest('.w-form')
      const done = block?.querySelector('.w-form-done') as HTMLElement | null
      const fail = block?.querySelector('.w-form-fail') as HTMLElement | null
      const submitBtn = form.querySelector('[type="submit"]') as HTMLInputElement | null

      const firstName =
        (form.querySelector('[name="nl_first_name"]') as HTMLInputElement | null)?.value?.trim() ||
        ''
      const email =
        (form.querySelector('[name="nl_email"]') as HTMLInputElement | null)?.value?.trim() || ''

      if (submitBtn) submitBtn.disabled = true
      if (fail) fail.style.display = 'none'

      fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      })
        .then(async (res) => {
          if (!res.ok) throw new Error('fail')
          form.style.display = 'none'
          if (done) done.style.display = 'block'
        })
        .catch(() => {
          if (fail) fail.style.display = 'block'
          if (submitBtn) submitBtn.disabled = false
        })
    }

    document.addEventListener('submit', onSubmit, true)
    return () => document.removeEventListener('submit', onSubmit, true)
  }, [])

  return null
}
