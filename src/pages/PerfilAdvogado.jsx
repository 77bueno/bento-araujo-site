import { useParams, Navigate, Link } from 'react-router-dom'
import adv1 from '../images/adv1.png'
import adv2 from '../images/adv3.jpeg'
import { GraduationCap, Award, Scale } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import FadeIn from '../components/FadeIn'

const lawyers = {
  'samuel-jose-da-silva': {
    initials: 'SS',
    name: 'Dr. Samuel José da Silva',
    photo: adv1,
    role: 'Sócio Fundador',
    oab: 'OAB/SP 305.899',
    motto: '"A defesa dos direitos começa com escuta, rigor técnico e comprometimento total com cada caso."',
    specialties: ['Direito Criminal', 'Direito Civil'],
    bio: [
      'Dr. Samuel José da Silva é advogado formado pela Uniban São Paulo em 2011, com mais de 15 anos de experiência na defesa de pessoas físicas e jurídicas. Atua em Direito Criminal e Civil, conduzindo casos de alta complexidade em todas as instâncias da Justiça Estadual e Federal.',
      'Ao longo da carreira, construiu sólida reputação pela dedicação na defesa de seus clientes, aliando conhecimento técnico aprofundado à clareza na comunicação. Dr. Samuel acredita que cada caso merece atenção individualizada e que a excelência jurídica nasce do compromisso genuíno com quem precisa de defesa.',
    ],
    formation: [
      { year: '2011', title: 'Bacharelado em Direito', institution: 'Uniban São Paulo' },
    ],
    commissions: ['Membro da OAB/SP — Subseção Penha de França', 'Advogado inscrito desde 28/01/2011'],
  },
  'michel-araujo': {
    initials: 'MA',
    name: 'Dr. Michel Anderson de Araújo',
    photo: adv2,
    role: 'Sócio Fundador',
    oab: 'OAB/SP 320.458',
    motto: '"Defender direitos é uma responsabilidade que exige preparo, ética e presença em cada etapa do processo."',
    specialties: ['Direito Civil', 'Direito Trabalhista'],
    bio: [
      'Dr. Michel Anderson de Araújo é advogado formado pela Uniban São Paulo em 2011, com mais de 15 anos de experiência em Direito Civil e Trabalhista. Atua na defesa de trabalhadores e empresas em ações de rescisão, indenizações, conflitos contratuais e demais demandas cíveis.',
      'Reconhecido pela postura firme e pelo atendimento próximo ao cliente, Dr. Michel conduz cada processo com atenção aos detalhes e foco no resultado. Sua atuação abrange tanto a esfera judicial quanto a negociação extrajudicial, buscando sempre a solução mais eficiente para cada situação.',
    ],
    formation: [
      { year: '2011', title: 'Bacharelado em Direito', institution: 'Uniban São Paulo' },
    ],
    commissions: ['Membro da OAB/SP — Subseção São Miguel Paulista', 'Advogado inscrito desde 04/05/2012'],
  },
}

export default function PerfilAdvogado() {
  const { slug } = useParams()
  const l = lawyers[slug]

  if (!l) return <Navigate to="/equipe" replace />

  return (
    <>
      <PageBanner eyebrow={l.role} title={l.name} subtitle={`${l.oab} — Bento & Araújo e Associados`} />

      {/* Perfil principal */}
      <section className="section">
        <div className="container profile-layout">
          <FadeIn>
            <div className="profile-photo-wrapper">
              <img
                src={l.photo}
                alt={l.name}
                className="profile-photo"
                loading="lazy"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'grid' }}
              />
              <div className="profile-photo-fallback" style={{ display: 'none' }}>{l.initials}</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <div className="member-specialties" style={{ marginBottom: '1.5rem' }}>
                {l.specialties.map(s => <span key={s} className="specialty-tag">{s}</span>)}
              </div>

              <blockquote className="profile-motto">{l.motto}</blockquote>

              {l.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Formação */}
      <section className="section formation-section">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'left', margin: '0 0 3rem' }}>
            <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
              <GraduationCap size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
              Formação Acadêmica
            </p>
            <h2 style={{ color: '#fff' }}>Trajetória e credenciais</h2>
          </div>

          <div className="formation-grid">
            <div className="formation-list">
              {l.formation.map((f, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="formation-item">
                    <span className="formation-year">{f.year}</span>
                    <div className="formation-connector" aria-hidden="true" />
                    <div className="formation-content">
                      <h4>{f.title}</h4>
                      <p>{f.institution}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="formation-commissions">
              <p className="section-eyebrow" style={{ color: 'var(--gold-light)', marginBottom: '1rem' }}>
                <Award size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                Associações e comissões
              </p>
              {l.commissions.map((c, i) => (
                <p key={i} className="commission-item">— {c}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas que este advogado atende */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">
              <Scale size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
              Especialização
            </p>
            <h2>Áreas de atuação</h2>
          </div>
          <div className="spec-chips">
            {l.specialties.map(s => (
              <span key={s} className="spec-chip">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-strip">
        <div className="container">
          <h2>Agende uma consulta com {l.name.split(' ')[0]} {l.name.split(' ')[1]}</h2>
          <p>Entre em contato e apresente seu caso. Retornaremos o mais breve possível.</p>
          <Link to="/contato" className="btn btn-primary">Entrar em contato</Link>
        </div>
      </section>
    </>
  )
}
