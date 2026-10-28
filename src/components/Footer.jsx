import { business, navLinks } from '../data'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__big">{business.name}<em>.</em></p>
        <div className="footer__row">
          <nav>
            {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
        <div className="footer__row footer__row--meta">
          <span>&copy; {CURRENT_YEAR} {business.name} {business.descriptor}. Sitio demo · Fotografía: Unsplash.</span>
          <span>Diseño y desarrollo por <strong>W-DEVs</strong></span>
        </div>
      </div>
    </footer>
  )
}
