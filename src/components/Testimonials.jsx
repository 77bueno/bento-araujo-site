import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Eduardo M.',
    context: 'Processo trabalhista',
    text: 'O escritório me atendeu com muita atenção e profissionalismo. A Dra. Mariana foi clara em todas as etapas do processo, e o resultado foi além do que eu esperava. Recomendo sem hesitação.',
    stars: 5,
  },
  {
    name: 'Fernanda S.',
    context: 'Inventário e partilha',
    text: 'Passei por um momento muito difícil com o falecimento do meu pai. O Dr. Ricardo me acompanhou com sensibilidade e competência, resolvendo tudo de forma rápida e justa.',
    stars: 5,
  },
  {
    name: 'Paulo R. — Empresa XYZ',
    context: 'Assessoria empresarial',
    text: 'Parceiros estratégicos para nossa empresa. O suporte jurídico preventivo que recebemos evitou problemas sérios. Equipe altamente qualificada e sempre disponível.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Depoimentos</p>
          <h2>O que dizem nossos clientes</h2>
          <p className="section-sub">
            A satisfação dos nossos clientes é o maior reconhecimento do nosso trabalho.
          </p>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial-carousel">
            <button className="carousel-btn" onClick={prev} aria-label="Depoimento anterior">
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#b9975b" color="#b9975b" />
                ))}
              </div>
              <blockquote className="testimonial-text">"{t.text}"</blockquote>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-context">{t.context}</span>
              </div>
            </div>

            <button className="carousel-btn" onClick={next} aria-label="Próximo depoimento">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
