export default function TargetEnvironmentsSection({
  environments,
  useCases,
}: {
  environments: string[];
  useCases: { title: string; text: string }[];
}) {
  return (
    <section className="section-soft environments-section">
      <div className="container environments-grid">
        <article className="environments-summary-card">
          <h3>Target Environments</h3>

          <div className="env-tags">
            {environments.map((env) => (
              <span key={env}>{env}</span>
            ))}
          </div>

          <p>
            Designed for organizations managing high-volume data streams
            requiring deterministic outcomes.
          </p>
        </article>

        <div className="use-case-grid">
          {useCases.map((item) => (
            <article key={item.title} className="use-case-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}