import {
  Scale, Briefcase, Heart, Building2,
  ShoppingBag, Home, Shield, Receipt,
} from 'lucide-react'

const areas = [
  { icon: Scale,       title: 'Direito Civil',             desc: 'Contratos, responsabilidade civil, indenizações e questões patrimoniais.' },
  { icon: Briefcase,   title: 'Direito Trabalhista',       desc: 'Defesa de empregados e empregadores, acordos e ações na Justiça do Trabalho.' },
  { icon: Heart,       title: 'Família e Sucessões',       desc: 'Divórcio, guarda, pensão, inventário, testamentos e partilha de bens.' },
  { icon: Building2,   title: 'Direito Empresarial',       desc: 'Constituição de empresas, contratos, societário e consultoria preventiva.' },
  { icon: ShoppingBag, title: 'Direito do Consumidor',     desc: 'Defesa contra práticas abusivas, cobranças indevidas e danos ao consumidor.' },
  { icon: Home,        title: 'Direito Imobiliário',       desc: 'Compra e venda, locação, usucapião, regularização e questões condominiais.' },
  { icon: Shield,      title: 'Direito Previdenciário',    desc: 'Aposentadorias, benefícios do INSS, revisões e planejamento previdenciário.' },
  { icon: Receipt,     title: 'Direito Tributário',        desc: 'Planejamento fiscal, defesas administrativas e recuperação de tributos.' },
]

export default function PracticeAreas() {
  return (
    <section className="section section-alt" id="areas">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Áreas de Atuação</p>
          <h2>Como podemos ajudar você</h2>
          <p className="section-sub">
            Oferecemos assessoria e representação jurídica completa nas principais áreas do Direito.
          </p>
        </div>

        <div className="cards">
          {areas.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card">
              <div className="card-icon">
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
