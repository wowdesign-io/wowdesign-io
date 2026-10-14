/** Mobile-only Book A Demo inside fullscreen menu — same primary-button type as nav. */
export default function NavMenuCta() {
  return (
    <a href="/book-a-demo" data-cta="Nav - Demo Menu" className="primary-button w-inline-block nav-menu-cta">
      <div className="primary-button-border-wrap">
        <div className="primary-button-wrap">
          <div className="primary-button-text">Book A Demo</div>
        </div>
      </div>
    </a>
  )
}
