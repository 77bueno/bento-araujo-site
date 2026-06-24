import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Roberto A.',
    context: 'Direito Criminal',
    text: 'Fui indiciado injustamente e estava desesperado. O Dr. Samuel assumiu meu caso com seriedade e dedicação, acompanhou cada etapa do processo e conseguiu minha absolvição. Profissional exemplar.',
    stars: 5,
  },
  {
    name: 'Márcia F.',
    context: 'Direito Civil',
    text: 'Tive um problema sério com um contrato de compra e venda que me prejudicou muito. O escritório agiu rápido, explicou tudo com clareza e resolveu a situação da melhor forma possível. Recomendo muito.',
    stars: 5,
  },
  {
    name: 'Anderson L.',
    context: 'Direito Trabalhista',
    text: 'Fui demitido sem receber o que era meu por direito. O Dr. Michel me orientou desde o início, entrou com a ação e garantiu que eu recebesse tudo que me devia. Atendimento humano e muito competente.',
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
