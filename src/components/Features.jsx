import { UserCheck, Lock, Zap, Award } from 'lucide-react'

const features = [
  {
    icon: UserCheck,
    title: 'Atendimento personalizado',
    desc: 'Cada cliente recebe atenção individual e acompanhamento próximo do início ao fim.',
  },
  {
    icon: Lock,
    title: 'Transparência total',
    desc: 'Comunicação clara sobre prazos, custos e estratégias, sem promessas vazias.',
  },
  {
    icon: Zap,
    title: 'Agilidade e tecnologia',
    desc: 'Processos acompanhados de forma digital, com respostas rápidas e eficientes.',
  },
  {
    icon: Award,
    title: 'Experiência comprovada',
    desc: 'Mais de uma década defendendo os direitos de pessoas e empresas.',
  },
]

export default function Features() {
  return (
    <section className="section section-alt" id="diferenciais">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Diferenciais</p>
          <h2>Por que escolher nosso escritório</h2>
        </div>

        <div className="features">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="feature">
              <div className="feature-icon">
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
