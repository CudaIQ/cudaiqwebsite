import Link from "next/link";

export default function ServicesHeroSection() {
  return (
    <section className="services-hero-section">
      <div className="container services-hero-grid">
        <div className="services-hero-content">
          <h1>
            Architecting the Future of <span>Enterprise Systems.</span>
          </h1>
          <p>
            We design, build, and deploy high-performance infrastructure and
            advanced software solutions. Our precision-engineered services
            accelerate digital transformation and ensure operational resilience.
          </p>

          <div className="hero-actions">
            <Link href="/services" className="primary-button">
              Explore Services
            </Link>
            <Link href="/case-studies" className="secondary-button">
              View Case Studies
            </Link>
          </div>
        </div>

        <div className="services-hero-visual">
          <div className="services-visual-orb" />
          <div className="services-status-card">
            <div className="services-status-label">SYSTEM STATUS</div>
            <div className="progress-track">
              <div className="progress-fill fill-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
