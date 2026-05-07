export default function PlatformRowsSection() {
  return (
    <section className="platform-rows-section section-soft platform-rows-soft">
      <div className="container">
        <div className="ecosystem-row ecosystem-right">
          <div className="ecosystem-features reverse-features">
            <article className="feature-chip">
              <div className="feature-icon">◦</div>
              <span>Machine learning models</span>
            </article>
            <article className="feature-chip">
              <div className="feature-icon">◦</div>
              <span>Predictive analytics</span>
            </article>
            <article className="feature-chip">
              <div className="feature-icon">◦</div>
              <span>Critical system stability</span>
            </article>
          </div>

          <div className="ecosystem-text-block right-text">
            <h2>K-InfraAI</h2>
            <p className="subhead">INFRA &amp; DEFENSE SIMULATIONS</p>
            <a href="/platforms/k-infraai" className="text-link">
              Talk to us about K-InfraAI →
            </a>
          </div>
        </div>

        <div className="ecosystem-row ecosystem-left bottom-row">
          <div className="ecosystem-text-block">
            <h2>K-DigiSupport</h2>
            <p className="subhead">DIGITAL SUPPORT STACK FOR SMBS</p>
            <a href="/platforms/k-digisupport" className="text-link">
              Talk to us about K-DigiSupport →
            </a>
          </div>

          <div className="ecosystem-features">
            <article className="feature-chip">
              <div className="feature-icon">◦</div>
              <span>Enterprise digital transformation</span>
            </article>
            <article className="feature-chip">
              <div className="feature-icon">◦</div>
              <span>Scalable IT support</span>
            </article>
            <article className="feature-chip">
              <div className="feature-icon">◦</div>
              <span>Workflow automation</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}