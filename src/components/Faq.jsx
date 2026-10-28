import { useState } from 'react'
import { faqs } from '../data'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="preguntas">
      <div className="container faq">
        <div>
          <p className="overline" data-reveal>Preguntas frecuentes</p>
          <h2 data-reveal style={{ '--d': 1 }}>Lo que todos <em>nos preguntan.</em></h2>
        </div>
        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = index === open
            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} data-reveal style={{ '--d': index }}>
                <button className="faq__question" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  {item.q}<span aria-hidden="true" />
                </button>
                <div className="faq__answer"><p>{item.a}</p></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
