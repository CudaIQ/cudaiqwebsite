export default function CaseStudyImpact({ study }: { study: any }) {
  return (
    <section className="impact-section">
      <div className="container impact-card">
        <h2>Structural Impact</h2>
        <div className="impact-grid">
          {study.impact.map((item: any) => (
            <div key={item.label} className="impact-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}