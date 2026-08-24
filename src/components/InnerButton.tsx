type InnerButtonProps = {
  href: string
  label: string
  cta?: string
  className?: string
  target?: string
  rel?: string
  /** Body CTAs only. Nav uses a different class set (`primary-button`) — never this component. */
  variant?: 'primary' | 'secondary'
}

function combo(base: string, isPrimary: boolean) {
  return isPrimary ? `${base} is-primary` : base
}

export default function InnerButton({
  href,
  label,
  cta,
  className,
  target,
  rel,
  variant = 'primary',
}: InnerButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <a
      data-cta={cta}
      href={href}
      target={target}
      rel={rel}
      className={[combo('inner-button', isPrimary), 'w-inline-block', className].filter(Boolean).join(' ')}
    >
      <div className={combo('primary-button-border-wrap', isPrimary)}>
        <div className={combo('inner-button-wrap', isPrimary)}>
          <div className="inner-button-text-wrap">
            <div className="inner-button-text">{label}</div>
            <div className="inner-button-hover-text">{label}</div>
          </div>
          <div className="inner-button-star-wrap">
            <img loading="lazy" src="/images/inner-button-arrow.svg" alt="" className="inner-button-star" />
          </div>
          <div className={combo('inner-button-hover-bg', isPrimary)}></div>
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
