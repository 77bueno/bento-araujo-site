import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import FadeIn from '../components/FadeIn'

const ENDERECO = 'R. Caquito, 196 - Penha de França, São Paulo - SP'
const MAPS_EMBED = 'https://maps.google.com/maps?q=R.+Caquito,+196+-+Penha+de+Fran%C3%A7a,+S%C3%A3o+Paulo+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed'
const MAPS_LINK  = 'https://www.google.com/maps/search/?api=1&query=R.+Caquito,+196+-+Penha+de+Fran%C3%A7a,+S%C3%A3o+Paulo'

const infos = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: ENDERECO,
    link: MAPS_LINK,
    linkLabel: 'Ver no Google Maps',
  },
  {
    icon: Clock,
    label: 'Horário de atendimento',
    value: 'Segunda a sexta: 9h às 18h\nSábados: mediante agendamento',
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(11) 9 0000-0000',
    link: 'https://wa.me/5511900000000',
    linkLabel: 'Enviar mensagem',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@bentoearaujo.adv.br',
    link: 'mailto:contato@bentoearaujo.adv.br',
    linkLabel: 'Enviar e-mail',
  },
]

export default function Localizacao() {
  return (
    <>
      <PageBanner
        eyebrow="Onde estamos"
        title="Localização"
        subtitle="Venha nos visitar. Estamos na Penha de França, zona leste de São Paulo."
      />

      <section className="section">
        <div className="container">
          <div className="loc-layout">

            {/* Mapa */}
            <FadeIn>
              <div className="loc-map-wrapper">
                <iframe
                  title="Localização Bento & Araújo e Associados"
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            {/* Informações */}
            <FadeIn delay={0.1}>
              <div className="loc-info">
                <p className="section-eyebrow">
                  <MapPin size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                  Bento & Araújo e Associados
                </p>
                <h2 style={{ marginBottom: '2rem' }}>Como chegar</h2>

                <div className="loc-cards">
                  {infos.map(({ icon: Icon, label, value, link, linkLabel }) => (
                    <div key={label} className="loc-card">
                      <div className="loc-card-icon">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div className="loc-card-body">
                        <span className="loc-card-label">{label}</span>
                        <p className="loc-card-value">{value}</p>
                        {link && (
                          <a href={link} target="_blank" rel="noopener noreferrer" className="loc-card-link">
                            {linkLabel} →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}
                >
                  <Navigation size={16} />
                  Abrir rota no Google Maps
                </a>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-strip">
        <div className="container">
          <h2>Prefere falar antes de vir?</h2>
          <p>Entre em contato pelo formulário e agendamos uma consulta no horário mais conveniente para você.</p>
          <Link to="/contato" className="btn btn-primary">Fale conosco</Link>
        </div>
      </section>
    </>
  )
}
