const STATS = [
  { value: '31%', label: 'Faster Unit Absorption' },
  { value: '49%', label: 'More Qualified Leads' },
  { value: '3x', label: 'Buyer Engagement' },
  { value: '+73%', label: 'More Inquiries' },
]

export default function StatsTicker() {
  const doubled = [...STATS, ...STATS]

  return (
    <section className="border-y border-[var(--color-brand-border)] bg-[var(--color-brand-mid)] overflow-hidden py-6">
      <div
        className="flex gap-0 w-max animate-[marquee_20s_linear_infinite]"
        style={{
          animation: 'marquee 20s linear infinite',
        }}
      >
        {doubled.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-12 shrink-0"
          >
            <span
              className="text-3xl font-medium text-[var(--color-brand-blue)]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {s.value}
            </span>
            <span className="text-sm text-[var(--color-brand-muted)] whitespace-nowrap">
              {s.label}
            </span>
            <span className="w-px h-8 bg-[var(--color-brand-border)] ml-4" aria-hidden />
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-[rgba(255,255,255,0.3)] mt-4 container-wide">
        Based on Planpoint platform data across comparable pre-construction developments.
      </p>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
