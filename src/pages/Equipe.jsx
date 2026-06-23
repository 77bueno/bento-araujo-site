import { Link } from 'react-router-dom'
import adv1 from '../images/adv1.png'
import adv2 from '../images/adv2.png'
import { ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import FadeIn from '../components/FadeIn'

const lawyers = [
  {
    slug: 'samuel-jose-da-silva',
    photo: adv1,
    initials: 'SS',
    name: 'Dr. Samuel José da Silva',
    role: 'Sócio Fundador',
    oab: 'OAB/SP 305.899',
    specialties: ['Direito Criminal', 'Direito Civil'],
    bio: 'Advogado formado pela Uniban São Paulo em 2011, com mais de 14 anos de experiência em Direito Criminal e Civil. Atua na defesa de clientes em processos criminais, ações cíveis e responsabilidade civil, com histórico sólido em todas as instâncias.',
  },
  {
    slug: 'michel-araujo',
    photo: adv2,
    initials: 'MA',
    name: 'Dr. Michel Anderson de Araújo',
    role: 'Sócio Fundador',
    oab: 'OAB/SP 320.458',
    specialties: ['Direito Civil', 'Direito Trabalhista'],
    bio: 'Advogado formado pela Uniban São Paulo em 2011, com mais de 14 anos de atuação em Direito Civil e Trabalhista. Especializado na defesa de trabalhadores e empresas em conflitos cíveis, contratos e relações de emprego.',
  },
]

export default function Equipe() {
  return (
    <>
      <PageBanner
        eyebrow="Nossa Equipe"
        title="Os sócios fundadores"
        subtitle="Profissionais com trajetória sólida, cada um referência em sua especialidade."
      />

      <section className="section">
        <div className="container">
          <div className="lawyer-card-grid">
            {lawyers.map(({ slug, photo, initials, name, role, oab, specialties, bio }, i) => (
              <FadeIn key={slug} delay={i * 0.15}>
                <article className="lawyer-card">
                  <div className="lawyer-card-photo">
                    <img
                      src={photo}
                      alt={name}
                      loading="lazy"
                      onError={e => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'grid'
                      }}
                    />
                    <div className="lawyer-card-photo-fallback" style={{ display: 'none' }}>
                      {initials}
                    </div>
                  </div>
                  <div className="lawyer-card-body">
                    <h3>{name}</h3>
                    <p className="lawyer-card-role">{role} &middot; {oab}</p>
                    <div className="member-specialties" style={{ marginBottom: '1rem' }}>
                      {specialties.map(s => (
                        <span key={s} className="specialty-tag">{s}</span>
                      ))}
                    </div>
                    <p className="lawyer-card-bio">{bio}</p>
                    <Link to={`/equipe/${slug}`} className="lawyer-card-link">
                      Ver perfil completo <ArrowRight size={15} strokeWidth={2} />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-strip">
        <div className="container">
          <h2>Agende sua consulta</h2>
          <p>Fale diretamente com um de nossos especialistas e encontre a melhor solução para o seu caso.</p>
          <Link to="/contato" className="btn btn-primary">Entrar em contato</Link>
        </div>
      </section>
    </>
  )
}
