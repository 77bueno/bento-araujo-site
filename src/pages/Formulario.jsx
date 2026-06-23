import { useState } from 'react'
import { Check, Copy, ClipboardCheck, ChevronDown } from 'lucide-react'
import PageBanner from '../components/PageBanner'

const AREAS = [
  'Direito Civil', 'Direito Trabalhista', 'Família e Sucessões',
  'Direito Empresarial', 'Direito do Consumidor', 'Direito Imobiliário',
  'Direito Previdenciário', 'Direito Tributário',
]

const INITIAL = {
  titulo: 'Dr.',
  nome: '',
  oab: '',
  seccional: 'SP',
  email: '',
  telefone: '',
  linkedin: '',
  instagram: '',
  fotoUrl: '',
  motto: '',
  miniBio: '',
  bio1: '',
  bio2: '',
  formacao: [
    { ano: '', titulo: '', instituicao: '' },
    { ano: '', titulo: '', instituicao: '' },
    { ano: '', titulo: '', instituicao: '' },
  ],
  comissoes: '',
  areas: [],
}

function Section({ n, title, children }) {
  return (
    <div className="form-section">
      <div className="form-section-header">
        <span className="form-section-num">{n}</span>
        <h3 className="form-section-title">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function Hint({ children }) {
  return <p className="field-hint">{children}</p>
}

export default function Formulario() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const toggleArea = (area) =>
    setForm(f => ({
      ...f,
      areas: f.areas.includes(area) ? f.areas.filter(a => a !== area) : [...f.areas, area],
    }))

  const setFormacao = (i, field) => (e) =>
    setForm(f => {
      const formacao = [...f.formacao]
      formacao[i] = { ...formacao[i], [field]: e.target.value }
      return { ...f, formacao }
    })

  const validate = () => {
    const e = {}
    if (!form.nome.trim())     e.nome     = 'Obrigatório'
    if (!form.oab.trim())      e.oab      = 'Obrigatório'
    if (!form.email.trim())    e.email    = 'Obrigatório'
    if (!form.telefone.trim()) e.telefone = 'Obrigatório'
    if (!form.motto.trim())    e.motto    = 'Obrigatório'
    if (!form.miniBio.trim())  e.miniBio  = 'Obrigatório'
    if (!form.bio1.trim())     e.bio1     = 'Obrigatório'
    if (form.areas.length === 0) e.areas  = 'Selecione ao menos uma área'
    return e
  }

  const getSummary = () => {
    const formacaoFilled = form.formacao.filter(f => f.titulo.trim())
    return `DADOS PARA O SITE — ${form.titulo} ${form.nome}
${'═'.repeat(52)}

▸ IDENTIFICAÇÃO
  Nome completo : ${form.titulo} ${form.nome}
  OAB           : ${form.oab} — ${form.seccional}
  E-mail        : ${form.email}
  Telefone/WA   : ${form.telefone}
  LinkedIn      : ${form.linkedin || '—'}
  Instagram     : ${form.instagram || '—'}
  Foto          : ${form.fotoUrl || '(enviar arquivo separado)'}

▸ FRASE / MOTTO
  "${form.motto}"

▸ MINI-BIO (card de equipe)
  ${form.miniBio}

▸ BIOGRAFIA COMPLETA
  Parágrafo 1:
  ${form.bio1}

  Parágrafo 2:
  ${form.bio2 || '(não informado)'}

▸ FORMAÇÃO ACADÊMICA
${formacaoFilled.length
    ? formacaoFilled.map(f => `  • ${f.ano}  —  ${f.titulo}  |  ${f.instituicao}`).join('\n')
    : '  (não informado)'}

▸ COMISSÕES / ASSOCIAÇÕES
${form.comissoes
    ? form.comissoes.split('\n').map(l => `  • ${l}`).join('\n')
    : '  (não informado)'}

▸ ÁREAS DE ATUAÇÃO
  ${form.areas.join(', ') || '(nenhuma selecionada)'}
`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      const firstKey = Object.keys(errs)[0]
      document.getElementById(firstKey)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setErrors({})
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(getSummary())
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  if (submitted) {
    return (
      <>
        <PageBanner
          eyebrow="Formulário preenchido"
          title={`Obrigado, ${form.titulo} ${form.nome.split(' ')[0]}!`}
          subtitle="Copie o resumo abaixo e envie para o desenvolvedor do site."
        />
        <section className="section">
          <div className="container form-result-wrapper">
            <div className="form-result-header">
              <h3>Resumo dos dados</h3>
              <button className="btn btn-primary" onClick={handleCopy}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px' }}>
                {copied
                  ? <><ClipboardCheck size={16} /> Copiado!</>
                  : <><Copy size={16} /> Copiar tudo</>}
              </button>
            </div>
            <pre className="form-summary">{getSummary()}</pre>
            <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <button className="btn btn-outline"
                onClick={() => { setSubmitted(false); window.scrollTo(0, 0) }}>
                Editar respostas
              </button>
              <button className="btn btn-ghost-navy"
                onClick={() => { setForm(INITIAL); setSubmitted(false); window.scrollTo(0, 0) }}>
                Novo preenchimento
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  const err = (field) => errors[field]
    ? <span className="field-error">{errors[field]}</span>
    : null

  return (
    <>
      <PageBanner
        eyebrow="Formulário interno"
        title="Dados para o site"
        subtitle="Preencha com suas informações profissionais. Leva cerca de 10 minutos."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>

          <div className="form-intro">
            <p>
              Este formulário coleta as informações necessárias para personalizar o seu perfil no
              site do escritório. Preencha com atenção — quanto mais completo, melhor ficará a
              sua apresentação online.
            </p>
            <div className="form-progress-hint">
              <ChevronDown size={16} />
              <span>Role a página para preencher todas as seções</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>

            <Section n="01" title="Dados pessoais">
              <div className="form-row">
                <div className="field" style={{ flex: '0 0 110px' }}>
                  <label htmlFor="titulo">Título</label>
                  <select id="titulo" value={form.titulo} onChange={set('titulo')}>
                    <option>Dr.</option>
                    <option>Dra.</option>
                  </select>
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <label htmlFor="nome">Nome completo {err('nome')}</label>
                  <input id="nome" type="text" placeholder="Ex: Samuel José da Silva"
                    value={form.nome} onChange={set('nome')}
                    className={errors.nome ? 'input-error' : ''} />
                </div>
              </div>
              <div className="form-row">
                <div className="field" style={{ flex: 1 }}>
                  <label htmlFor="oab">Número OAB {err('oab')}</label>
                  <input id="oab" type="text" placeholder="000.000"
                    value={form.oab} onChange={set('oab')}
                    className={errors.oab ? 'input-error' : ''} />
                </div>
                <div className="field" style={{ flex: '0 0 130px' }}>
                  <label htmlFor="seccional">Seccional (UF)</label>
                  <input id="seccional" type="text" placeholder="SP"
                    value={form.seccional} onChange={set('seccional')} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="fotoUrl">URL da foto profissional</label>
                <Hint>Se não tiver link agora, deixe em branco e envie o arquivo separadamente.</Hint>
                <input id="fotoUrl" type="url"
                  placeholder="https://drive.google.com/... ou link direto da imagem"
                  value={form.fotoUrl} onChange={set('fotoUrl')} />
              </div>
            </Section>

            <Section n="02" title="Contato e redes sociais">
              <div className="form-row">
                <div className="field" style={{ flex: 1 }}>
                  <label htmlFor="email">E-mail profissional {err('email')}</label>
                  <input id="email" type="email" placeholder="seu@email.com.br"
                    value={form.email} onChange={set('email')}
                    className={errors.email ? 'input-error' : ''} />
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <label htmlFor="telefone">Telefone / WhatsApp {err('telefone')}</label>
                  <input id="telefone" type="tel" placeholder="(11) 90000-0000"
                    value={form.telefone} onChange={set('telefone')}
                    className={errors.telefone ? 'input-error' : ''} />
                </div>
              </div>
              <div className="form-row">
                <div className="field" style={{ flex: 1 }}>
                  <label htmlFor="linkedin">LinkedIn</label>
                  <input id="linkedin" type="url"
                    placeholder="https://linkedin.com/in/seu-perfil"
                    value={form.linkedin} onChange={set('linkedin')} />
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <label htmlFor="instagram">Instagram</label>
                  <input id="instagram" type="text"
                    placeholder="@usuario ou URL completa"
                    value={form.instagram} onChange={set('instagram')} />
                </div>
              </div>
            </Section>

            <Section n="03" title="Sobre você">
              <div className="field">
                <label htmlFor="motto">Frase / Motto profissional {err('motto')}</label>
                <Hint>Uma frase que resume sua filosofia de trabalho. Aparecerá em destaque no seu perfil.</Hint>
                <input id="motto" type="text"
                  placeholder='"A excelência jurídica começa pela escuta atenta de cada caso."'
                  value={form.motto} onChange={set('motto')}
                  className={errors.motto ? 'input-error' : ''} />
              </div>
              <div className="field">
                <label htmlFor="miniBio">Mini-bio {err('miniBio')}</label>
                <Hint>2–3 frases para o card da página de Equipe.</Hint>
                <textarea id="miniBio" rows={3}
                  placeholder="Especialista em Direito Civil e Empresarial com mais de 15 anos de experiência..."
                  value={form.miniBio} onChange={set('miniBio')}
                  className={errors.miniBio ? 'input-error' : ''} />
              </div>
              <div className="field">
                <label htmlFor="bio1">Biografia — Parágrafo 1 {err('bio1')}</label>
                <Hint>Fale sobre sua trajetória, experiência, tipos de casos e atuação.</Hint>
                <textarea id="bio1" rows={5}
                  placeholder="Dr./Dra. [Nome] é advogado(a) com X anos de experiência..."
                  value={form.bio1} onChange={set('bio1')}
                  className={errors.bio1 ? 'input-error' : ''} />
              </div>
              <div className="field">
                <label htmlFor="bio2">
                  Biografia — Parágrafo 2{' '}
                  <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(opcional)</span>
                </label>
                <Hint>Continue com filosofia de trabalho, conquistas ou abordagem diferenciada.</Hint>
                <textarea id="bio2" rows={4}
                  placeholder="Ao longo da carreira, desenvolveu uma atuação focada em..."
                  value={form.bio2} onChange={set('bio2')} />
              </div>
            </Section>

            <Section n="04" title="Formação acadêmica">
              <Hint>Preencha da mais recente para a mais antiga. Inclua pós-graduações, mestrado, graduação e certificações relevantes.</Hint>
              <div style={{ marginTop: '1rem' }}>
                {form.formacao.map((f, i) => (
                  <div key={i} className="formacao-row">
                    <span className="formacao-index">{i + 1}</span>
                    <div className="field" style={{ flex: '0 0 88px' }}>
                      {i === 0 && <label>Ano</label>}
                      <input type="text" placeholder="2020"
                        value={f.ano} onChange={setFormacao(i, 'ano')} />
                    </div>
                    <div className="field" style={{ flex: 1.4 }}>
                      {i === 0 && <label>Título / Curso</label>}
                      <input type="text" placeholder="Mestrado em Direito Civil"
                        value={f.titulo} onChange={setFormacao(i, 'titulo')} />
                    </div>
                    <div className="field" style={{ flex: 1 }}>
                      {i === 0 && <label>Instituição</label>}
                      <input type="text" placeholder="USP, PUC-SP, FGV..."
                        value={f.instituicao} onChange={setFormacao(i, 'instituicao')} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section n="05" title="Comissões e associações">
              <div className="field">
                <label htmlFor="comissoes">
                  Liste uma por linha{' '}
                  <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(opcional)</span>
                </label>
                <textarea id="comissoes" rows={4}
                  placeholder={'Membro da Comissão de Direito Civil da OAB/SP\nMembro do IASP\nMediador certificado pelo CNJ'}
                  value={form.comissoes} onChange={set('comissoes')} />
              </div>
            </Section>

            <Section n="06" title="Áreas de atuação">
              <Hint>Selecione todas as áreas em que você atua ou orienta clientes.</Hint>
              {errors.areas && (
                <span className="field-error" style={{ display: 'block', marginBottom: '1rem' }}>
                  {errors.areas}
                </span>
              )}
              <div className="areas-check-grid">
                {AREAS.map(area => (
                  <label key={area}
                    className={`area-check-label${form.areas.includes(area) ? ' checked' : ''}`}>
                    <input type="checkbox" checked={form.areas.includes(area)}
                      onChange={() => toggleArea(area)} />
                    {form.areas.includes(area) && <Check size={13} strokeWidth={3} />}
                    {area}
                  </label>
                ))}
              </div>
            </Section>

            <div className="form-submit-area">
              <p className="form-disclaimer">
                Estes dados serão usados exclusivamente para personalizar o seu perfil no site do escritório.
              </p>
              <button type="submit" className="btn btn-primary btn-block form-submit-btn">
                Gerar resumo dos dados
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  )
}
