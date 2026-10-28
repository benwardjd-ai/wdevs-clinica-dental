import { useState } from 'react'
import { business, navLinks } from '../data'
import { useScrolled } from '../hooks/useScrolled'

export default function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="wordmark" onClick={close}>
          {business.name}<span>{business.descriptor}</span>
        </a>
        <nav className="nav" aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav__link" onClick={close}>{link.label}</a>
          ))}
          <a href="#reservar" className="btn btn--dark nav__cta" onClick={close}>Reservar cita</a>
        </nav>
        <a href="#reservar" className="btn btn--dark header__cta" onClick={close}>Reservar cita</a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}
