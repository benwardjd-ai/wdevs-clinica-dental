import { useEffect, useState } from 'react'
import { testimonials } from '../data'

const INTERVAL = 6000

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[index]

  return (
    <section className="section section--sand">
      <div className="container testimonial" data-reveal>
        <p className="overline">Lo que dicen nuestros pacientes</p>
        <blockquote key={index} className="testimonial__quote">
          <p>&ldquo;{current.quote}&rdquo;</p>
          <footer>{current.author} <span>· {current.treatment}</span></footer>
        </blockquote>
        <div className="dots" role="tablist">
          {testimonials.map((item, i) => (
            <button key={item.author} className={`dot ${i === index ? 'dot--active' : ''}`} onClick={() => setIndex(i)} aria-label={`Testimonio ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
