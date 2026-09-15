/** Brand radial glow — same primary/secondary sky as How it works. */
export default function SkyGlow() {
  return (
    <div className="sky-container" aria-hidden="true">
      <div className="primary-sky-circle"></div>
      <div className="secondary-sky-circle"></div>
    </div>
  )
}
