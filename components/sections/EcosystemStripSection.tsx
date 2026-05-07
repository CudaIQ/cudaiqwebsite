const ecosystemItems = [
  {
    title: "SMB Growth",
    subtitle: "Agile, scalable foundations.",
    icon: "◦",
  },
  {
    title: "Platform Builders",
    subtitle: "Core technology enablers.",
    icon: "◦",
    center: true,
  },
  {
    title: "Infra & Defense",
    subtitle: "Zero-trust, high-availability.",
    icon: "◦",
  },
];

export default function EcosystemStripSection() {
  return (
    <section className="ecosystem-section section-soft">
      <div className="container ecosystem-panel">
        <p className="ecosystem-label">THE CUDAIQ ECOSYSTEM</p>
        <div className="ecosystem-grid">
          {ecosystemItems.map((item) => (
            <div
              key={item.title}
              className={item.center ? "ecosystem-item center-item" : "ecosystem-item"}
            >
              <div className={item.center ? "ecosystem-icon center-icon" : "ecosystem-icon"}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}