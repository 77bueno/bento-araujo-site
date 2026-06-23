import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import PageBanner from '../components/PageBanner'

const stats = [
  { num: '15+',  label: 'anos de experiência' },
  { num: '3',    label: 'áreas de atuação' },
  { num: '2011', label: 'atuando desde' },
]

const values = [
  { title: 'Ética e integridade', desc: 'Atuamos sempre dentro dos mais rígidos padrões éticos da profissão jurídica, com respeito ao cliente, à parte contrária e ao sistema de justiça.' },
  { title: 'Transparência', desc: 'Comunicação clara e honesta em todas as etapas: honorários, prazos, riscos e probabilidades de êxito são expostos sem rodeios.' },
  { title: 'Comprometimento', desc: 'Cada caso recebe atenção total. Nossos clientes contam com advogados dedicados do início ao encerramento do processo.' },
  { title: 'Excelência técnica', desc: 'Investimento contínuo em atualização e especialização para oferecer as melhores estratégias jurídicas disponíveis.' },
]

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
    <div className={`stats${visible ? ' visible' : ''}`} ref={ref}>
      {stats.map(({ num, label }) => (
        <div key={label} className="stat">
          <span className="stat-num">{num}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Sobre() {
  return (
    <>
      <PageBanner
        eyebrow="O Escritório"
        title="Bento & Araújo e Associados"
        subtitle="Advocacia com propósito, técnica e dedicação genuína a cada cliente."
      />

      {/* História */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="section-eyebrow">Nossa história</p>
            <h2>Mais de 15 anos construindo resultados</h2>
            <p>
              Fundado em 2011, o <strong>Bento &amp; Araújo e Associados</strong> nasceu da
              parceria entre dois advogados com visões complementares e um objetivo comum: oferecer
              advocacia de alta qualidade técnica com atendimento próximo e humanizado.
            </p>
            <p>
              Ao longo dos anos, o escritório consolidou sua reputação atuando nas áreas
              Criminal, Civil e Trabalhista, sempre pautando sua conduta pela ética e pela
              busca do melhor resultado para cada cliente.
            </p>
            <p>
              Com atendimento próximo e dedicado, o escritório acompanha cada processo de perto,
              mantendo o cliente sempre informado e bem orientado em todas as etapas.
            </p>
          </div>
          <AnimatedStats />
        </div>
      </section>

      {/* Missão e valores */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">Missão e Valores</p>
            <h2>O que nos guia</h2>
            <p className="section-sub">
              Nossa atuação é fundamentada em princípios que orientam cada decisão, cada estratégia
              e cada relacionamento com nossos clientes.
            </p>
          </div>

          <div className="values-grid">
            {values.map(({ title, desc }) => (
              <div key={title} className="value-card">
                <CheckCircle size={22} strokeWidth={1.8} className="value-icon" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe preview */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">Equipe</p>
          <h2>Conheça os sócios fundadores</h2>
          <p className="section-sub" style={{ maxWidth: '560px', margin: '0 auto 2rem' }}>
            Profissionais com trajetória consolidada, referências em suas especialidades
            e comprometidos com a causa de cada cliente.
          </p>
          <Link to="/equipe" className="btn btn-primary">Ver perfis da equipe</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-strip">
        <div className="container">
          <h2>Vamos conversar sobre o seu caso?</h2>
          <p>Entre em contato e agende uma consulta com um de nossos especialistas.</p>
          <Link to="/contato" className="btn btn-primary">Entrar em contato</Link>
        </div>
      </section>
    </>
  )
}
