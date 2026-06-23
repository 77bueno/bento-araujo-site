import { Link } from 'react-router-dom'
import {
  Scale, Briefcase, Heart, Building2,
  ShoppingBag, Home, Shield, Receipt,
} from 'lucide-react'
import PageBanner from '../components/PageBanner'

const areas = [
  {
    icon: Scale,
    title: 'Direito Civil',
    desc: 'Contratos, responsabilidade civil, indenizações e questões patrimoniais.',
    detail: 'Atuamos em contratos de compra e venda, prestação de serviços, comodato e locação, bem como em ações de indenização por danos materiais e morais, revisão de contratos abusivos e reparação de vícios.',
  },
  {
    icon: Briefcase,
    title: 'Direito Trabalhista',
    desc: 'Defesa de empregados e empregadores, acordos e ações na Justiça do Trabalho.',
    detail: 'Representamos empregados em ações de horas extras, assédio moral, verbas rescisórias e estabilidade; e empregadores na defesa de reclamações, elaboração de contratos e compliance trabalhista.',
  },
  {
    icon: Heart,
    title: 'Família e Sucessões',
    desc: 'Divórcio, guarda, pensão, inventário, testamentos e partilha de bens.',
    detail: 'Conduzimos processos de divórcio consensual e litigioso, regulamentação de guarda e visitas, ações de alimentos, inventário judicial e extrajudicial, e elaboração de testamentos.',
  },
  {
    icon: Building2,
    title: 'Direito Empresarial',
    desc: 'Constituição de empresas, contratos, societário e consultoria preventiva.',
    detail: 'Assessoramos na abertura e encerramento de empresas, elaboração e revisão de contratos comerciais, resolução de conflitos societários, fusões, aquisições e due diligence.',
  },
  {
    icon: ShoppingBag,
    title: 'Direito do Consumidor',
    desc: 'Defesa contra práticas abusivas, cobranças indevidas e danos ao consumidor.',
    detail: 'Atuamos em ações contra cobranças indevidas, negativação indevida no SPC/Serasa, recusa de cobertura por planos de saúde, defeitos em produtos e serviços e publicidade enganosa.',
  },
  {
    icon: Home,
    title: 'Direito Imobiliário',
    desc: 'Compra e venda, locação, usucapião, regularização e questões condominiais.',
    detail: 'Assessoramos em transações imobiliárias, análise de contratos de compra e venda, ações de despejo, usucapião, regularização de imóveis junto aos cartórios e conflitos condominiais.',
  },
  {
    icon: Shield,
    title: 'Direito Previdenciário',
    desc: 'Aposentadorias, benefícios do INSS, revisões e planejamento previdenciário.',
    detail: 'Auxiliamos na concessão de aposentadoria por tempo de contribuição, especial e por invalidez, auxílio-doença, pensão por morte, BPC/LOAS e revisão de benefícios já concedidos.',
  },
  {
    icon: Receipt,
    title: 'Direito Tributário',
    desc: 'Planejamento fiscal, defesas administrativas e recuperação de tributos.',
    detail: 'Realizamos planejamento tributário para pessoas físicas e jurídicas, defesa em autuações fiscais, impugnações e recursos administrativos, e ações de repetição de indébito.',
  },
]

export default function Areas() {
  return (
    <>
      <PageBanner
        eyebrow="Áreas de Atuação"
        title="Como podemos ajudar você"
        subtitle="Assessoria e representação jurídica completa nas principais áreas do Direito."
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
          <h2>Não encontrou sua área?</h2>
          <p>
            Entre em contato. Nossa equipe analisa seu caso e indica a melhor solução,
            mesmo que seja encaminhá-lo ao profissional certo.
          </p>
          <Link to="/contato" className="btn btn-primary">Consultar agora</Link>
        </div>
      </section>
    </>
  )
}
