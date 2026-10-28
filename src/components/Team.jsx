import Photo from './Photo'
import { team } from '../data'

export default function Team() {
  return (
    <section className="section" id="equipo">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="overline" data-reveal>Equipo</p>
            <h2 data-reveal style={{ '--d': 1 }}>Especialistas que <em>te explican</em> antes de empezar.</h2>
          </div>
          <p className="section-head__aside" data-reveal style={{ '--d': 2 }}>
            Cada doctora y doctor se actualiza cada año en técnicas mínimamente invasivas.
          </p>
        </div>
        <div className="team">
          {team.map((member, index) => (
            <article key={member.name} className="member" data-reveal style={{ '--d': index }}>
              <div className="member__photo">
                <Photo id={member.photo} alt={member.name} sizes="(max-width: 700px) 90vw, 30vw" position="center 20%" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
