const roadmap = [
  {
    phase: "PHASE 01: PRESENT",
    title: "Core Infrastructure Deployment",
    text: "Establishing baseline modular micro-services and securing initial partnerships in emerging tech hubs. Deployment of foundational AI/ML universal nodes.",
  },
  {
    phase: "PHASE 02: 24 MONTHS",
    title: "Regional Network Expansion",
    text: "Scaling cloud infrastructure across targeted Tier-2 cities in India. Introduction of advanced XR/MR data visualization tools for civic and corporate partners.",
  },
  {
    phase: "PHASE 03: 48 MONTHS",
    title: "Defense-Grade Enclave Integration",
    text: "Achieving highest-tier compliance for specialized security enclaves, enabling partnership with critical infrastructure and localized defense contractors.",
  },
  {
    phase: "PHASE 04: 60+ MONTHS",
    title: "Autonomous Distributed Nodes",
    text: "Full realization of the Vision 2030 goal: a self-healing, fully autonomous multi-process computing network spanning all major Tier-2/3 growth centers.",
  },
];

export default function VisionRoadmapSection() {
  return (
    <section className="vision-section section-soft">
      <div className="container">
        <h2 className="section-title">Vision 2030 Roadmap</h2>
        <p className="section-description roadmap-description">
          Establishing CudaIQ as India’s premier modular tech partner for Tier-2/3 growth cities, driving distributed innovation.
        </p>

        <div className="roadmap-list">
          {roadmap.map((item, index) => (
            <article key={item.title} className="roadmap-item">
              <div className={index === 0 ? "roadmap-dot active-dot" : "roadmap-dot"} />
              <div className="roadmap-content">
                <span>{item.phase}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}