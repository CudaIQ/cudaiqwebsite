export default function CaseStudyFlow({ study }: { study: any }) {
  return (
    <section className="flow-section">
      <div className="container">
        <h2 className="section-title centered-title">Execution Flow</h2>
        <div className="flow-timeline">
          {study.flowSteps.map((step: any) => (
            <article key={step.title} className="flow-step">
              <div className="flow-badge">{step.phase}</div>
              <div className="flow-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}