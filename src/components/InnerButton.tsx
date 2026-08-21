type InnerButtonProps = {
  href: string
  label: string
  cta?: string
  className?: string
  target?: string
  rel?: string
}

export default function InnerButton({ href, label, cta, className, target, rel }: InnerButtonProps) {
  return (
    <a data-cta={cta} href={href} target={target} rel={rel} className={className ?? 'inner-button w-inline-block'}>
      <div className="primary-button-border-wrap">
        <div className="inner-button-wrap">
          <div className="inner-button-text-wrap">
            <div className="inner-button-text">{label}</div>
            <div className="inner-button-hover-text">{label}</div>
          </div>
          <div className="inner-button-star-wrap">
            <img loading="lazy" src="/images/inner-button-arrow.svg" alt="" className="inner-button-star" />
          </div>
          <div className="inner-button-hover-bg"></div>
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
