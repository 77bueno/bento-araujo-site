import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook } from 'lucide-react'
import logo from '../images/logobea.png'

const navLinks = [
  { to: '/',            label: 'Home' },
  { to: '/sobre',       label: 'O Escritório' },
  { to: '/areas',       label: 'Áreas' },
  { to: '/equipe',      label: 'Equipe' },
  { to: '/localizacao', label: 'Localização' },
  { to: '/contato',     label: 'Contato' },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin,  label: 'LinkedIn',  href: '#' },
  { icon: Facebook,  label: 'Facebook',  href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/">
            <img src={logo} alt="Bento & Araújo e Associados" className="footer-logo" />
          </Link>
        </div>

        <nav className="footer-nav">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>

        <div className="footer-social">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} aria-label={label}>
              <Icon size={18} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Bento &amp; Araújo e Associados. Todos os direitos reservados.</p>
          <p className="footer-legal">
            Este site tem caráter meramente informativo, em conformidade com o Código de Ética da OAB.
          </p>
        </div>
      </div>
    </footer>
  )
}
