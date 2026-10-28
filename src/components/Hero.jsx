import Photo from './Photo'
import { business, photos } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="overline" data-reveal>Odontología boutique · {business.city}</p>
          <h1 className="hero__title" data-reveal style={{ '--d': 1 }}>
            El arte de una sonrisa <em>serena.</em>
          </h1>
          <p className="hero__lead" data-reveal style={{ '--d': 2 }}>
            Tratamientos estéticos y preventivos en un espacio pensado para que te sientas en calma desde que cruzas la puerta.
          </p>
          <div className="hero__actions" data-reveal style={{ '--d': 3 }}>
            <a href="#reservar" className="btn btn--dark">Agendar valoración</a>
            <a href="#tratamientos" className="link-arrow">Ver tratamientos <span aria-hidden="true">&rarr;</span></a>
          </div>
          <div className="hero__rating" data-reveal style={{ '--d': 4 }}>
            <span className="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span><strong>{business.rating}</strong> de calificación · {business.reviews} reseñas</span>
          </div>
        </div>

        <div className="hero__media" data-reveal style={{ '--d': 2 }}>
          <div className="arch">
            <Photo id={photos.hero} alt="Doctora conversando con su paciente en el consultorio" sizes="(max-width: 900px) 90vw, 40vw" eager />
          </div>
          <div className="glass-card">
            <span className="glass-card__dot" />
            <div>
              <small>Próximo espacio disponible</small>
              <strong>Hoy · 17:30 h</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
