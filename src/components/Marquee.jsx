import { promises } from '../data'

export default function Marquee() {
  const items = [...promises, ...promises]
  return (
    <div className="marquee" aria-label="Lo que nos distingue">
      <div className="marquee__track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">{item}<i aria-hidden="true">&#10022;</i></span>
        ))}
      </div>
    </div>
  )
}
