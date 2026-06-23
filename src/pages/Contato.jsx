import PageBanner from '../components/PageBanner'
import Contact from '../components/Contact'

export default function Contato() {
  return (
    <>
      <PageBanner
        eyebrow="Contato"
        title="Fale com a gente"
        subtitle="Agende uma consulta ou envie sua dúvida. Retornaremos o mais breve possível."
      />
      <Contact />
    </>
  )
}
