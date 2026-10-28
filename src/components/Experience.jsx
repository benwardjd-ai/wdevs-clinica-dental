import CountUp from './CountUp'
import Photo from './Photo'
import { experience, photos, stats } from '../data'

export default function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="experience__media">
        <Photo id={photos.clinic} alt="Consultorio dental moderno y luminoso" sizes="100vw" />
      </div>
      <div className="container experience__panel">
        <div className="experience__card" data-reveal>
          <p className="overline overline--light">La experiencia Clara</p>
          <h2>Sin prisas. <em>Sin sorpresas.</em></h2>
          <ol className="steps">
            {experience.map((item, index) => (
              <li key={item.step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.step}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="container">
        <ul className="stats">
          {stats.map((stat, index) => (
            <li key={stat.label} data-reveal style={{ '--d': index }}>
              <strong><CountUp value={stat.value} suffix={stat.suffix} /></strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
