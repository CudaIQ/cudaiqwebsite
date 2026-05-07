import Link from "next/link";

export default function ServiceDetailHero({ service }: { service: any }) {
  return (
    <section className="service-detail-hero">
      <div className="container service-detail-grid">
        <div className="service-detail-copy">
          <span className="eyebrow core-service-badge">{service.eyebrow}</span>
          <h1>
            {service.titleTop}
            <br />
            {service.titleMiddle}
            <br />
            <span>{service.titleBottom}</span>
          </h1>
          <p>{service.description}</p>

          <div className="hero-actions">
            <Link href="/contact" className="primary-button">
              {service.heroCtaPrimary}
            </Link>
            <Link href="/case-studies" className="secondary-button">
              {service.heroCtaSecondary}
            </Link>
          </div>
        </div>

        <div className="service-detail-visual">
          <div className="detail-dashboard">
            <div className="detail-dashboard-top">Safe work</div>
            <div className="detail-chart" />
            <div className="detail-chart-bars">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  style={{ height: `${20 + ((i * 11) % 60)}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}