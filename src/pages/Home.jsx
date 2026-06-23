import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Scale, Briefcase, Heart, Building2 } from 'lucide-react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FadeIn from '../components/FadeIn'

const stats = [
  { num: '15+', label: 'anos de experiência' },
  { num: '1.200+', label: 'casos atendidos' },
  { num: '8', label: 'áreas de atuação' },
  { num: '95%', label: 'clientes que indicam' },
]

const featuredAreas = [
  { icon: Scale,     title: 'Direito Civil',       desc: 'Contratos, responsabilidade civil, indenizações e questões patrimoniais.' },
  { icon: Briefcase, title: 'Direito Trabalhista',  desc: 'Defesa de empregados e empregadores, acordos e ações na Justiça do Trabalho.' },
  { icon: Heart,     title: 'Família e Sucessões',  desc: 'Divórcio, guarda, pensão, inventário, testamentos e partilha de bens.' },
  { icon: Building2, title: 'Direito Empresarial',  desc: 'Constituição de empresas, contratos, societário e consultoria preventiva.' },
]

const ABOUT_IMG = 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=900&auto=format&fit=crop&q=80'
const JUSTICE_IMG = 'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1920&auto=format&fit=crop&q=80'

function AnimatedStats() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`home-stats-row${visible ? ' visible' : ''}`} ref={ref}>
      {stats.map(({ num, label }, i) => (
        <div key={label} className="home-stat" style={{ transitionDelay: `${i * 0.1}s` }}>
          <span className="stat-num">{num}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Sobre com foto */}
      <section className="section">
        <div className="container about-img-grid">
          <FadeIn>
            <div className="about-img-wrapper">
              <img
                src={ABOUT_IMG}
                alt="Biblioteca jurídica — Bento & Araújo e Associados"
                className="about-img"
                loading="lazy"
              />
              <div className="about-img-badge">
                <span className="about-img-badge-num">15+</span>
                <span className="about-img-badge-label">anos de<br />excelência</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="section-eyebrow">O Escritório</p>
              <h2>Tradição, técnica e proximidade com o cliente</h2>
              <p>
                O <strong>Bento &amp; Araújo e Associados</strong> é um escritório de advocacia
                full service que une rigor técnico e atendimento humano. Atuamos de forma
                preventiva e contenciosa, sempre buscando a melhor estratégia para cada cliente.
              </p>
              <p>
                Acreditamos que a boa advocacia começa pela escuta. Cada caso é conduzido com
                atenção individual, comunicação transparente e total comprometimento com os resultados.
              </p>
              <AnimatedStats />
              <Link to="/sobre" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Conheça nossa história
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Banner dramático — Compromisso */}
      <section
        className="justice-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(8,18,28,.88), rgba(8,18,28,.94)), url('${JUSTICE_IMG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container justice-banner-inner">
          <FadeIn>
            <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Nosso Compromisso</p>
            <h2 className="justice-title">
              "Cada caso é tratado com a seriedade e o rigor<br />
              que os seus direitos merecem."
            </h2>
            <p className="justice-sub">— Bento &amp; Araújo e Associados, desde 2009</p>
          </FadeIn>
        </div>
      </section>

      {/* Áreas preview */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div className="section-head">
              <p className="section-eyebrow">Áreas de Atuação</p>
              <h2>Como podemos ajudar você</h2>
              <p className="section-sub">
                Atuação completa nas principais áreas do Direito para pessoas e empresas.
              </p>
            </div>
          </FadeIn>

          <div className="cards">
            {featuredAreas.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <article className="card">
                  <div className="card-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/areas" className="btn btn-outline">Ver todas as 8 áreas →</Link>
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />

      {/* CTA final */}
      <section className="section cta-strip">
        <div className="container">
          <FadeIn>
            <h2>Pronto para resolver seu caso?</h2>
            <p>
              Agende uma consulta com nossa equipe e encontre a melhor solução
              jurídica para a sua situação.
            </p>
            <Link to="/contato" className="btn btn-primary">Fale conosco agora</Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
