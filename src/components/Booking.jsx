import { useState } from 'react'
import { business, timeSlots, treatments } from '../data'
import { buildWhatsAppLink } from '../lib/whatsapp'

const DAYS_AHEAD = 10

function nextWorkingDays() {
  const days = []
  const date = new Date()
  while (days.length < DAYS_AHEAD) {
    date.setDate(date.getDate() + 1)
    if (date.getDay() !== 0) days.push(new Date(date))
  }
  return days
}

const weekday = new Intl.DateTimeFormat('es-MX', { weekday: 'short' })
const longDate = new Intl.DateTimeFormat('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })

export default function Booking() {
  const [days] = useState(nextWorkingDays)
  const [day, setDay] = useState(0)
  const [slot, setSlot] = useState(timeSlots[1])
  const [treatment, setTreatment] = useState(treatments[0].title)
  const [name, setName] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const message = `Hola, soy ${name}. Me gustaría agendar ${treatment} el ${longDate.format(days[day])} a las ${slot} h.`
    window.open(buildWhatsAppLink(business.whatsapp, message), '_blank', 'noopener')
  }

  return (
    <section className="section booking-section" id="reservar">
      <div className="container booking">
        <div className="booking__intro">
          <p className="overline overline--light" data-reveal>Agenda</p>
          <h2 data-reveal style={{ '--d': 1 }}>Reserva tu valoración en <em>un minuto.</em></h2>
          <dl className="booking__info" data-reveal style={{ '--d': 2 }}>
            <div><dt>Dirección</dt><dd>{business.address}, {business.city}</dd></div>
            {business.hours.map((slotInfo) => (
              <div key={slotInfo.days}><dt>{slotInfo.days}</dt><dd>{slotInfo.time}</dd></div>
            ))}
            <div><dt>Teléfono</dt><dd><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a></dd></div>
          </dl>
        </div>

        <form className="booking__form" onSubmit={submit} data-reveal style={{ '--d': 1 }}>
          <fieldset>
            <legend>Tratamiento</legend>
            <select value={treatment} onChange={(e) => setTreatment(e.target.value)}>
              {treatments.map((item) => <option key={item.title}>{item.title}</option>)}
            </select>
          </fieldset>

          <fieldset>
            <legend>Día</legend>
            <div className="days" data-lenis-prevent>
              {days.map((date, index) => (
                <button type="button" key={date.toISOString()} className={`day ${index === day ? 'day--active' : ''}`} onClick={() => setDay(index)}>
                  <small>{weekday.format(date).replace('.', '')}</small>
                  <strong>{date.getDate()}</strong>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Horario</legend>
            <div className="slots">
              {timeSlots.map((time) => (
                <button type="button" key={time} className={`slot ${time === slot ? 'slot--active' : ''}`} onClick={() => setSlot(time)}>{time}</button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Tu nombre</legend>
            <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nombre y apellido" />
          </fieldset>

          <button className="btn btn--light btn--block" type="submit">Confirmar por WhatsApp</button>
          <p className="booking__note">Te responderemos en menos de 15 minutos en horario de atención.</p>
        </form>
      </div>
    </section>
  )
}
