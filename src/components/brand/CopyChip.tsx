'use client'

import { useState } from 'react'

export default function CopyChip({ value, label }: { value: string; label?: string }) {
  const [done, setDone] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setDone(true)
      window.setTimeout(() => setDone(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <button type="button" className="sg-copy" onClick={copy} title={`Copy ${label || value}`}>
      <code>{label || value}</code>
      <span className="sg-copy-hint">{done ? 'Copied' : 'Copy'}</span>
    </button>
  )
}
