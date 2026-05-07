import Link from "next/link";

export default function CaseStudyHero({ study }: { study: any }) {
  return (
    <section className="case-detail-hero">
      <div className="container case-detail-grid">
        <div className="case-detail-copy">
          <div className="case-tags">
            {study.tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <h1>
            {study.titleTop}
            <br />
            <span>{study.titleMain}</span>
          </h1>

          <p>{study.description}</p>

          <div className="case-meta-row">
            <div>
              <span>CLIENT</span>
              <strong>{study.client}</strong>
            </div>
            <div>
              <span>SERVICES</span>
              <strong>{study.services}</strong>
            </div>
            <div>
              <span>TIMELINE</span>
              <strong>{study.timeline}</strong>
            </div>
          </div>

          <div className="hero-actions">
            <Link href="/contact" className="primary-button">
              Book a discovery call
            </Link>
            <Link href="/case-studies" className="secondary-button">
              Explore more
            </Link>
          </div>
        </div>

        <div className="case-detail-visual">
          <div className="case-dashboard-image" />
        </div>
      </div>
    </section>
  );
}