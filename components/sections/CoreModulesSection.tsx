const modules = [
  {
    title: "AI/ML Solutions",
    description: "Predictive modeling and automated decision engines.",
  },
  {
    title: "IoT Ecosystems",
    description: "Sensor networks and real-time edge telemetry.",
  },
  {
    title: "Cloud Architecture",
    description: "Scalable, secure, and resilient infrastructure.",
  },
  {
    title: "Custom Software",
    description: "Bespoke platforms engineered for precision.",
  },
];

export default function CoreModulesSection() {
  return (
    <section className="modules-section section-soft">
      <div className="container">
        <h2 className="section-title">Core Modules</h2>
        <div className="modules-grid">
          {modules.map((item) => (
            <article key={item.title} className="module-card">
              <div className="module-icon">◦</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="text-link">VIEW SPECS →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
