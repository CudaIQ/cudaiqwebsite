export default function EngineeredCapabilitiesSection({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <section className="engineered-section">
      <div className="container">
        <h2 className="section-title">Engineered Capabilities</h2>

        <div className="detail-card-grid two-up capability-grid">
          {items.map((item) => (
            <article key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}