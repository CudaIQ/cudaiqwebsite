const studies = [
  {
    category: "SMB E-COMMERCE",
    title: "Handmade Jewelry to Mass-Market E-commerce",
    text: "Automated inventory and order routing across 3 warehouses, eliminating manual bottlenecks for high-volume sales events.",
    metric: "3x Volume Cap.",
  },
  {
    category: "INFRA-TECH",
    title: "Defense-Grade Access Management Platform",
    text: "Architected a zero-trust authentication gateway for a regional contractor, securing multi-tier vendor access points.",
    metric: "Zero Breach",
  },
  {
    category: "PLATFORM SOLUTIONS",
    title: "Service Business Workflow & CRM",
    text: "Consolidated 5 disparate legacy tools into a single pane of glass for field dispatch and customer relationship management.",
    metric: "-40% Admin Time",
  },
];

export default function CaseStudiesGridSection() {
  return (
    <section className="case-grid-section">
      <div className="container case-grid">
        {studies.map((study) => (
          <article key={study.title} className="case-card">
            <div className="case-image-placeholder" />
            <div className="case-card-body">
              <p className="case-category">{study.category}</p>
              <h3>{study.title}</h3>
              <p>{study.text}</p>
            </div>
            <div className="case-card-footer">
              <strong>{study.metric}</strong>
              <span>View →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}