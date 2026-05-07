const steps = [
  {
    no: "01",
    title: "Data Review",
    text: "Analyzing submitted parameters against infrastructure models.",
    active: true,
  },
  {
    no: "02",
    title: "Scheduling Alignment",
    text: "Coordinating resources for a technical discovery session.",
  },
  {
    no: "03",
    title: "Strategic Briefing",
    text: "Executing the initial roadmap and architecture overview.",
  },
];

export default function DeploymentSequenceSection() {
  return (
    <section className="thankyou-sequence-section">
      <div className="container sequence-card">
        <h2>Deployment Sequence</h2>
        <div className="sequence-line" />
        <div className="sequence-grid">
          {steps.map((step) => (
            <article key={step.no} className="sequence-step">
              <div
                className={step.active ? "step-badge active-badge" : "step-badge"}
              >
                {step.no}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}