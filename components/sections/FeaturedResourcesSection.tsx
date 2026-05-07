export default function FeaturedResourcesSection() {
  return (
    <div className="resources-main">
      <div className="results-bar">
        <div className="active-filters">
          <span>Active Filters:</span>
          <button className="filter-pill">IoT ×</button>
          <button className="filter-pill">Infra-Tech ×</button>
          <button className="clear-link">Clear all</button>
        </div>
        <div className="results-count">Showing 18 results</div>
      </div>

      <div className="resources-grid">
        <article className="resource-card featured-resource">
          <div className="resource-image resource-image-featured" />
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-tag">FEATURED REPORT</span>
              <span className="resource-read">8 min read</span>
            </div>
            <h2>Architecting Resilient IoT Networks for Tier-2 Indian Hubs</h2>
            <p>
              A comprehensive deep-dive into the structural challenges and
              architectural solutions for deploying robust Internet of Things...
            </p>
            <div className="resource-tags">
              <span>Infrastructure</span>
              <span>Evaluation</span>
            </div>
          </div>
        </article>

        <article className="resource-card">
          <div className="resource-image resource-image-whitepaper" />
          <div className="resource-content">
            <div className="resource-meta small-meta">
              <span className="resource-tag muted-tag">WHITEPAPER</span>
              <span className="resource-date">Infra-Tech · May 12, 2024</span>
            </div>
            <h3>Zero-Trust Architecture in Legacy Defense Systems</h3>
            <p>
              Implementing modern security protocols within existing monolithic
              defense architectures without disrupting...
            </p>
            <a href="/resources/zero-trust-architecture" className="read-link">
              Read Article →
            </a>
          </div>
        </article>

        <article className="resource-card">
          <div className="resource-image resource-image-aiml" />
          <div className="resource-content">
            <div className="resource-meta small-meta">
              <span className="resource-date">AI/ML · Apr 28, 2024</span>
            </div>
            <h3>Predictive Modeling for SMB Supply Chains</h3>
            <p>
              How small to medium businesses can leverage lightweight ML models
              to anticipate disruptions in volatile...
            </p>
            <a href="/resources/predictive-modeling" className="read-link">
              Read Article →
            </a>
          </div>
        </article>

        <article className="newsletter-card">
          <div className="newsletter-icon">✉</div>
          <h3>The Architect’s Brief</h3>
          <p>
            Bi-weekly technical teardowns and infra-strategy sent directly to
            your inbox.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Work email address" />
            <button>Subscribe</button>
          </div>
        </article>

        <article className="resource-card">
          <div className="resource-image resource-image-machinery" />
          <div className="resource-content">
            <div className="resource-meta small-meta">
              <span className="resource-date">Rental Platforms · Apr 15, 2024</span>
            </div>
            <h3>Scaling Heavy Machinery Marketplaces in Tier-3 Cities</h3>
            <p>
              Operational playbooks for managing decentralized inventory and
              ensuring uptime in high-friction...
            </p>
            <a href="/resources/scaling-heavy-machinery" className="read-link">
              Read Article →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}