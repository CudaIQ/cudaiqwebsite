const dnaCards = [
  {
    title: "Cloud",
    text: "Scalable infrastructure foundations designed for high-availability and elastic resource allocation.",
  },
  {
    title: "Universal",
    text: "AI/ML core capabilities seamlessly integrated across all platform verticals for intelligent processing.",
  },
  {
    title: "Digital",
    text: "End-to-end transformation protocols converting legacy systems into agile, data-driven assets.",
  },
  {
    title: "Augmented",
    text: "Immersive XR/MR experiences bridging the gap between complex data and human comprehension.",
  },
  {
    title: "Innovative",
    text: "Forward-looking strategic alignment ensuring infrastructure readiness for next-gen technologies.",
  },
  {
    title: "Quality",
    text: "Rigorous development standards and automated testing pipelines ensuring defense-grade reliability.",
  },
];

export default function StructuralDNASection() {
  return (
    <section className="section-soft structural-dna-section">
      <div className="container">
        <div className="section-heading-block">
          <h2 className="section-title">The Structural DNA</h2>
          <p className="section-description">
            Defining the components of our modular architecture.
          </p>
        </div>

        <div className="dna-grid">
          {dnaCards.map((card) => (
            <article key={card.title} className="dna-card">
              <div className="dna-icon">◦</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
