import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: '15+', label: 'anos de experiência' },
  { num: '1.200+', label: 'casos atendidos' },
  { num: '8', label: 'áreas de atuação' },
  { num: '95%', label: 'clientes que indicam' },
]

export default function About() {
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
    <section className="section" id="sobre">
      <div className="container grid-2">
        <div>
          <p className="section-eyebrow">O Escritório</p>
          <h2>Tradição, técnica e proximidade com o cliente</h2>
          <p>
            O <strong>Bento &amp; Araújo e Associados</strong> é um escritório de
            advocacia full service que une rigor técnico e atendimento humano. Atuamos
            de forma preventiva e contenciosa, sempre buscando a melhor estratégia para
            cada cliente.
          </p>
          <p>
            Acreditamos que a boa advocacia começa pela escuta. Por isso, cada caso é
            conduzido com atenção individual, comunicação transparente e total
            comprometimento com os resultados.
          </p>
        </div>

        <div className={`stats${visible ? ' visible' : ''}`} ref={ref}>
          {stats.map(({ num, label }) => (
            <div key={label} className="stat">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
