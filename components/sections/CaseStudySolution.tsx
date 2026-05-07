export default function CaseStudySolution({ study }: { study: any }) {
  return (
    <section className="solution-section">
      <div className="container">
        <div className="section-heading-block centered-block">
          <h2 className="section-title">The Solution Architecture</h2>
          <p className="section-description centered-description">
            We engineered a unified data ingestion pipeline, prioritizing low-latency transmission and predictive modeling.
          </p>
        </div>

        <div className="solution-grid">
          {study.solutionCards.map((card: any) => (
            <article key={card.title} className="solution-card">
              <div className="solution-icon">◦</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
