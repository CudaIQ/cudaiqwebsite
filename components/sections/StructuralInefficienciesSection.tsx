export default function StructuralInefficienciesSection({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <section className="section-soft detail-panel-section">
      <div className="container">
        <div className="section-heading-block">
          <h2 className="section-title">Structural Inefficiencies Addressed</h2>
          <p className="section-description">
            We don’t build toys. We target critical operational bottlenecks where
            data fails to translate into actionable advantage.
          </p>
        </div>

        <div className="detail-card-grid three-up">
          {items.map((item, index) => (
            <article key={item.title} className="detail-card">
              <div className={`detail-icon detail-icon-${index + 1}`}>◦</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}