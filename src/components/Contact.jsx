import { useState } from 'react'
import { MapPin, MessageCircle, Mail, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin,        label: 'Endereço',          text: 'R. Caquito, 196 — Penha de França, São Paulo/SP' },
  { icon: MessageCircle, label: 'Dr. Samuel (WA)',    text: '(11) 94730-5581',           href: 'https://wa.me/5511947305581', noDivider: true },
  { icon: Mail,          label: 'E-mail Dr. Samuel',  text: 'samuel-js@hotmail.com',     href: 'mailto:samuel-js@hotmail.com' },
  { icon: MessageCircle, label: 'Dr. Michel (WA)',    text: '(11) 94735-9889',           href: 'https://wa.me/5511947359889', noDivider: true },
  { icon: Mail,          label: 'E-mail Dr. Michel',  text: 'michel.araujo@hotmail.com', href: 'mailto:michel.araujo@hotmail.com' },
  { icon: Clock,         label: 'Horário',            text: 'Seg. a Sex., das 9h às 18h' },
]

const areaOptions = [
  'Direito Criminal', 'Direito Civil', 'Direito Trabalhista', 'Outro',
]

const INITIAL = { nome: '', email: '', telefone: '', assunto: '', mensagem: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState(null)
  const [msg, setMsg] = useState('')

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

    if (!form.nome.trim() || !emailOk || !form.mensagem.trim()) {
      setStatus('err')
      setMsg('Por favor, preencha nome, um e-mail válido e a mensagem.')
      return
    }

    const subject = encodeURIComponent('Contato pelo site — ' + (form.assunto || 'Geral'))
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\n${form.mensagem}`
    )
    window.location.href = `mailto:samuel-js@hotmail.com?subject=${subject}&body=${body}`

    setStatus('ok')
    setMsg('Obrigado! Abrimos seu aplicativo de e-mail para concluir o envio.')
    setForm(INITIAL)
  }

  return (
    <section className="section" id="contato">
      <div className="container grid-2 contact-grid">
        <div>
          <p className="section-eyebrow">Contato</p>
          <h2>Fale com a gente</h2>
          <p>Agende uma consulta ou envie sua dúvida. Retornaremos o mais breve possível.</p>

          <ul className="contact-list">
            {contactInfo.map(({ icon: Icon, label, text, href, noDivider }) => (
              <li key={label} className={noDivider ? 'no-divider' : ''}>
                <Icon size={17} strokeWidth={1.8} />
                {href
                  ? <a href={href} target={href.startsWith('https') ? '_blank' : undefined} rel="noopener noreferrer">{text}</a>
                  : <span>{text}</span>
                }
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="nome">Nome completo</label>
            <input id="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={set('nome')} />
          </div>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="voce@email.com" value={form.email} onChange={set('email')} />
          </div>
          <div className="field">
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="tel" placeholder="(11) 90000-0000" value={form.telefone} onChange={set('telefone')} />
          </div>
          <div className="field">
            <label htmlFor="assunto">Área / Assunto</label>
            <select id="assunto" value={form.assunto} onChange={set('assunto')}>
              <option value="">Selecione...</option>
              {areaOptions.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows={4}
              placeholder="Descreva resumidamente sua situação"
              value={form.mensagem}
              onChange={set('mensagem')}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Enviar mensagem</button>

          {status && <p className={`form-note ${status}`}>{msg}</p>}

          <p className="form-disclaimer">
            Ao enviar, você concorda em ser contatado pela nossa equipe.
            Suas informações são tratadas com sigilo.
          </p>
        </form>
      </div>
    </section>
  )
}
