import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react'
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
]

const lawyers = [
  {
    name: 'Dr. Samuel José da Silva',
    wa:    { icon: MessageCircle, value: '(11) 94730-5581',        link: 'https://wa.me/5511947305581',      linkLabel: 'WhatsApp' },
    email: { icon: Mail,          value: 'samuel-js@hotmail.com',  link: 'mailto:samuel-js@hotmail.com',     linkLabel: 'E-mail' },
  },
  {
    name: 'Dr. Michel Anderson de Araújo',
    wa:    { icon: MessageCircle, value: '(11) 94735-9889',            link: 'https://wa.me/5511947359889',          linkLabel: 'WhatsApp' },
    email: { icon: Mail,          value: 'michel.araujo@hotmail.com',  link: 'mailto:michel.araujo@hotmail.com',     linkLabel: 'E-mail' },
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

                  {lawyers.map(({ name, wa, email }) => (
                    <div key={name} className="loc-card loc-card-lawyer">
                      <div className="loc-card-icon">
                        <Phone size={18} strokeWidth={1.8} />
                      </div>
                      <div className="loc-card-body">
                        <span className="loc-card-label">{name}</span>
                        <div className="loc-lawyer-row">
                          <wa.icon size={14} strokeWidth={1.8} />
                          <a href={wa.link} target="_blank" rel="noopener noreferrer" className="loc-card-link" style={{ margin: 0 }}>
                            {wa.value}
                          </a>
                        </div>
                        <div className="loc-lawyer-row">
                          <email.icon size={14} strokeWidth={1.8} />
                          <a href={email.link} className="loc-card-link" style={{ margin: 0 }}>
                            {email.value}
                          </a>
                        </div>
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
