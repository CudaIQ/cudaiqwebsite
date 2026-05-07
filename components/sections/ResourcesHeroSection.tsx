export default function ResourcesHeroSection() {
  return (
    <section className="resources-hero-section">
      <div className="container resources-hero-grid">
        <div className="resources-copy">
          <h1>
            Insights for India's
            <br />
            <span>Next Growth Regions</span>
          </h1>
          <p>
            Explore high-stakes architectural strategies, deep-dives into
            emerging tech, and operational playbooks for platform builders and
            infra-tech pioneers.
          </p>

          <div className="resources-search-bar">
            <input
              type="text"
              placeholder="Search resources, topics, or insights..."
            />
            <button>→</button>
          </div>
        </div>

        <div className="resources-visual">
          <div className="resources-map-card" />
        </div>
      </div>
    </section>
  );
}