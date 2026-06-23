export default function PageBanner({ eyebrow, title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="container page-banner-inner">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-banner-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
