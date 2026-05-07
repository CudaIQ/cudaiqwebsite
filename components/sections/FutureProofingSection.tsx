const risks = [
  {
    title: "Adoption Inertia in SMBs",
    mitigation:
      "Low-barrier entry points through modular architecture combined with comprehensive educational onboarding programs tailored for Tier-2/3 markets.",
  },
  {
    title: "Multi-Vertical Scaling",
    mitigation:
      "Strict adherence to a modular micro-services architecture, ensuring that scaling in one vertical does not compromise stability in others.",
  },
  {
    title: "Defense Regulation Compliance",
    mitigation:
      "Deployment of specialized, isolated security enclaves with continuous automated auditing to meet and exceed stringent defense compliance protocols.",
  },
];

export default function FutureProofingSection() {
  return (
    <section className="future-proofing-section">
      <div className="container">
        <h2 className="section-title">Future-Proofing Infrastructure</h2>
        <p className="section-description">
          Proactive mitigation strategies for complex scaling vectors.
        </p>

        <div className="risk-list">
          {risks.map((risk) => (
            <article key={risk.title} className="risk-row">
              <div className="risk-col risk-left">
                <span className="risk-label">⚠ RISK VECTOR</span>
                <h3>{risk.title}</h3>
              </div>
              <div className="risk-col risk-right">
                <span className="risk-label blue-label">◦ MITIGATION PROTOCOL</span>
                <p>{risk.mitigation}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}