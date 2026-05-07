const competencies = [
  {
    title: "AI & Machine Learning",
    description:
      "Deploy predictive models and intelligent automation to extract actionable insights from complex data sets.",
  },
  {
    title: "IoT Ecosystems",
    description:
      "Secure, scalable networks connecting edge devices to centralized intelligence platforms for real-time monitoring.",
  },
  {
    title: "Web & App Engineering",
    description:
      "High-performance custom applications built on robust, modern frameworks ensuring seamless user experiences.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Architecting resilient, scalable cloud environments utilizing AWS, Azure, and GCP for optimal performance.",
  },
  {
    title: "Cybersecurity",
    description:
      "Defense-grade security protocols, vulnerability assessments, and continuous monitoring to protect critical assets.",
  },
  {
    title: "Data Engineering",
    description:
      "Constructing robust data pipelines and warehouses to ensure clean, accessible, and structured enterprise data.",
  },
  {
    title: "API Integration",
    description:
      "Seamlessly connecting disparate systems and microservices to create unified, efficient operational workflows.",
  },
  {
    title: "DevOps & Automation",
    description:
      "Streamlining deployment pipelines with CI/CD practices to accelerate delivery and ensure system reliability.",
  },
];

export default function CoreCompetenciesSection() {
  return (
    <section className="section-soft competencies-section">
      <div className="container">
        <div className="section-heading-block">
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-description">
            Discover our suite of engineering services designed to solve complex
            business challenges with structural precision.
          </p>
        </div>

        <div className="competencies-grid">
          {competencies.map((item) => (
            <article key={item.title} className="competency-card">
              <div className="competency-icon">◦</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="text-link">Explore Capability →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
