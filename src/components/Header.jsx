import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import logo from '../images/logobea.png'

const navLinks = [
  { to: '/',        label: 'Home',             end: true },
  { to: '/sobre',   label: 'O Escritório' },
  { to: '/areas',   label: 'Áreas de Atuação' },
  { to: '/equipe',  label: 'Equipe' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={close}>
          <img src={logo} alt="Bento & Araújo e Associados" className="header-logo" />
        </NavLink>

        <nav className={`nav${isOpen ? ' open' : ''}`}>
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => isActive ? 'active' : undefined}
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contato" className="nav-cta" onClick={close}>
            Fale Conosco
          </NavLink>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(o => !o)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  )
}
