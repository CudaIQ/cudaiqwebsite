import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Modular AI, IoT &amp; cloud for India’s next growth regions.</h1>
          <p>
            Empowering SMBs, Infra-Tech/Defense teams, and Platform Builders with
            future-ready modular technology ecosystems.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="primary-button">
              Talk to a solution expert
            </Link>
            <Link href="/case-studies" className="secondary-button">
              Explore use cases
            </Link>
          </div>
        </div>

        <div className="hero-visual-card">
          <div className="hero-panel">
            <div className="hero-panel-header">SYSTEM ARCHITECTURE</div>
            <div className="hero-progress-row">
              <span>AI COMPUTE LOAD</span>
              <div className="progress-track"><div className="progress-fill fill-1" /></div>
            </div>
            <div className="hero-progress-row">
              <span>IOT NODE SYNC</span>
              <div className="progress-track"><div className="progress-fill fill-2" /></div>
            </div>
          </div>

          <div className="hero-floating-card card-one">
            <strong>Cloud Infrastructure</strong>
            <span>Active deployment</span>
          </div>

          <div className="hero-floating-card card-two">
            <strong>XR Spatial Data</strong>
            <span>Processing stream</span>
          </div>
        </div>
      </div>
    </section>
  );
}
