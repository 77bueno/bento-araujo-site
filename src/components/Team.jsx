const members = [
  {
    initials: 'SS',
    name: 'Dr. Samuel José da Silva',
    role: 'Sócio fundador · OAB/SP 305.899',
    bio: 'Formado pela Uniban São Paulo em 2011, com mais de 14 anos de experiência em Direito Criminal e Civil. Defesa técnica e comprometida em todas as instâncias.',
  },
  {
    initials: 'MA',
    name: 'Dr. Michel Anderson de Araújo',
    role: 'Sócio fundador · OAB/SP 320.458',
    bio: 'Formado pela Uniban São Paulo em 2011, com mais de 14 anos de atuação em Direito Civil e Trabalhista. Atendimento próximo e foco no resultado para cada cliente.',
  },
]

export default function Team() {
  return (
    <section className="section" id="equipe">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Equipe</p>
          <h2>Os sócios fundadores</h2>
          <p className="section-sub">
            Profissionais experientes e dedicados à defesa dos seus interesses.
          </p>
        </div>

        <div className="team">
          {members.map(({ initials, name, role, bio }) => (
            <article key={name} className="member">
              <div className="member-photo" aria-hidden="true">{initials}</div>
              <h3>{name}</h3>
              <p className="member-role">{role}</p>
              <p>{bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
