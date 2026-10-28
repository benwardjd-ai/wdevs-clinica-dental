import { useState } from 'react'
import Photo from './Photo'
import { treatments } from '../data'

export default function Treatments() {
  const [active, setActive] = useState(0)

  return (
    <section className="section" id="tratamientos">
      <div className="container">
        <div className="section-head">
          <p className="overline" data-reveal>Tratamientos</p>
          <h2 data-reveal style={{ '--d': 1 }}>Cada sonrisa merece un plan <em>propio.</em></h2>
        </div>

        <div className="treatments">
          <ol className="treatments__list">
            {treatments.map((item, index) => (
              <li
                key={item.title}
                className={`treatment ${index === active ? 'treatment--active' : ''}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                data-reveal
                style={{ '--d': index }}
              >
                <span className="treatment__index">{String(index + 1).padStart(2, '0')}</span>
                <div className="treatment__body">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <span className="treatment__price">{item.from}</span>
              </li>
            ))}
          </ol>

          <div className="treatments__preview" aria-hidden="true">
            {treatments.map((item, index) => (
              <div key={item.title} className={`preview ${index === active ? 'preview--active' : ''}`}>
                <Photo id={item.photo} alt="" sizes="(max-width: 900px) 0px, 36vw" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
