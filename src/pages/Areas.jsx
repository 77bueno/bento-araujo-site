import { Link } from 'react-router-dom'
import { Scale, Briefcase, Shield } from 'lucide-react'
import PageBanner from '../components/PageBanner'

const areas = [
  {
    icon: Shield,
    title: 'Direito Criminal',
    desc: 'Defesa em processos criminais, inquéritos policiais e ações penais em todas as instâncias.',
    detail: 'Atuamos na defesa de clientes em todas as fases do processo penal — desde o inquérito policial até os recursos nos tribunais superiores. Trabalhamos com crimes contra o patrimônio, crimes de trânsito, crimes contra a honra, tráfico de drogas, estelionato, crimes empresariais e demais delitos previstos no Código Penal. Garantimos uma defesa técnica rigorosa e presença ativa em audiências, diligências e julgamentos.',
  },
  {
    icon: Scale,
    title: 'Direito Civil',
    desc: 'Contratos, responsabilidade civil, indenizações e questões patrimoniais.',
    detail: 'Representamos clientes em ações de indenização por danos materiais e morais, revisão e rescisão de contratos, cobranças judiciais, ações possessórias e demais demandas cíveis. Atuamos tanto na fase extrajudicial, buscando acordos e soluções negociadas, quanto no contencioso judicial em todas as instâncias da Justiça Estadual e Federal.',
  },
  {
    icon: Briefcase,
    title: 'Direito Trabalhista',
    desc: 'Defesa de trabalhadores e empresas em ações na Justiça do Trabalho.',
    detail: 'Defendemos trabalhadores em ações de rescisão indireta, horas extras, assédio moral, verbas rescisórias não pagas, acidente de trabalho e reintegração ao emprego. Também assessoramos empresas na defesa de reclamações trabalhistas, elaboração de contratos e regularização de obrigações junto à CLT. Atuamos em audiências, recursos e execuções no âmbito da Justiça do Trabalho.',
  },
]

export default function Areas() {
  return (
    <>
      <PageBanner
        eyebrow="Áreas de Atuação"
        title="Como podemos ajudar você"
        subtitle="Assessoria e representação jurídica em Direito Criminal, Civil e Trabalhista."
      />

      <section className="section">
        <div className="container">
          <div className="areas-grid">
            {areas.map(({ icon: Icon, title, desc, detail }) => (
              <article key={title} className="area-card">
                <div className="area-card-header">
                  <div className="card-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3>{title}</h3>
                </div>
                <p className="area-card-desc">{desc}</p>
                <p className="area-card-detail">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-strip">
        <div className="container">
          <h2>Tem alguma dúvida sobre seu caso?</h2>
          <p>
            Entre em contato. Nossa equipe analisa sua situação e orienta sobre
            a melhor estratégia jurídica para o seu caso.
          </p>
          <Link to="/contato" className="btn btn-primary">Consultar agora</Link>
        </div>
      </section>
    </>
  )
}
