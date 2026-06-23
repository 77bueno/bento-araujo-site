import { ChevronDown } from 'lucide-react'

const HERO_BG = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&auto=format&fit=crop&q=80'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(9,21,32,.93) 55%, rgba(9,21,32,.78) 100%), url('${HERO_BG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="container hero-inner">
        <p className="eyebrow">Advocacia &middot; Desde 2011</p>
        <h1>
          Defesa técnica e<br />
          <span className="hero-highlight">compromisso com seus direitos</span>
        </h1>
        <p className="hero-lead">
          Soluções jurídicas claras, estratégicas e personalizadas para pessoas e
          empresas. Atuação pautada pela ética, transparência e dedicação a cada caso.
        </p>
        <div className="hero-actions">
          <a href="/contato" className="btn btn-primary">Agendar consulta</a>
          <a href="/areas" className="btn btn-ghost">Conheça as áreas</a>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <ChevronDown size={26} />
      </div>
    </section>
  )
}
