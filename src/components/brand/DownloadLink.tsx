/** Static download link. Full = InnerButton primary. Compact = chip for tight rows. */
export default function DownloadLink({
  href,
  label,
  fileName,
  compact = false,
}: {
  href: string
  label: string
  fileName?: string
  compact?: boolean
}) {
  const downloadName = fileName || href.split('/').pop() || 'download'

  if (compact) {
    return (
      <a href={href} download={downloadName} className="sg-dl-chip">
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      download={downloadName}
      className="inner-button is-primary w-inline-block sg-download-btn"
    >
      <div className="primary-button-border-wrap is-primary">
        <div className="inner-button-wrap is-primary">
          <div className="inner-button-text-wrap">
            <div className="inner-button-text">{label}</div>
            <div className="inner-button-hover-text">{label}</div>
          </div>
          <div className="inner-button-star-wrap">
            <img loading="lazy" src="/images/inner-button-arrow.svg" alt="" className="inner-button-star" />
          </div>
          <div className="inner-button-hover-bg is-primary"></div>
        </div>
      </div>
      <div className="line-wrap-inner">
        <div className="inner-line-wrap _1">
          <div className="line"></div>
          <div className="line _2"></div>
        </div>
        <div className="inner-line-wrap _2">
          <div className="line _3"></div>
          <div className="line _4"></div>
        </div>
        <div className="inner-line-wrap _3">
          <div className="line _5"></div>
          <div className="line _6"></div>
        </div>
        <div className="inner-line-wrap _4">
          <div className="line _7"></div>
          <div className="line _8"></div>
        </div>
      </div>
    </a>
  )
}
