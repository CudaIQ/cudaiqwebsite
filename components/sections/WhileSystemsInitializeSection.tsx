const resources = [
  {
    title: "Case Studies",
    text: "Explore our deployed infrastructure solutions.",
  },
  {
    title: "Services Architecture",
    text: "Review our full operational capabilities.",
  },
  {
    title: "Company Brief",
    text: "Download our structural overview (PDF).",
  },
  {
    title: "Strategic Insights",
    text: "Read telemetry and engineering updates.",
  },
];

export default function WhileSystemsInitializeSection() {
  return (
    <section className="thankyou-resources-section">
      <div className="container">
        <h3>WHILE SYSTEMS INITIALIZE</h3>
        <div className="resource-links-grid">
          {resources.map((item) => (
            <article key={item.title} className="resource-link-card">
              <div className="resource-mini-icon">◦</div>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}