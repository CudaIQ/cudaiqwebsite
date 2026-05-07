import Link from "next/link";

export default function CaseStudiesHeroSection() {
  return (
    <section className="case-studies-hero-section">
      <div className="container case-studies-hero-grid">
        <div className="case-studies-copy">
          <h1>
            Strategic Outcomes:
            <br />
            <span>Engineering Clarity</span> for
            <br />
            India’s Growth Regions.
          </h1>
          <p>
            Deploying structural precision across SMBs, Infra-Tech, and Platform
            Builders. We build systems that scale, secure, and accelerate growth.
          </p>

          <div className="hero-actions">
            <Link href="/book-discovery-call" className="primary-button">
              Book a discovery call
            </Link>
            <Link href="/services" className="secondary-button">
              Explore services
            </Link>
          </div>
        </div>

        <div className="case-studies-visual">
          <div className="mini-status-card">
            <div className="mini-status-label">SYSTEM STATUS</div>
            <div className="progress-track">
              <div className="progress-fill fill-1" />
            </div>
            <div className="progress-track thin-track">
              <div className="progress-fill fill-2" />
            </div>
            <div className="progress-track thin-track">
              <div className="progress-fill fill-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}