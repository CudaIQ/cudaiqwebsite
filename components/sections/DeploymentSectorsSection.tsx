const sectors = [
  {
    title: "SMBs in Growth Regions",
    items: [
      "Fragmented legacy systems hindering scale.",
      "Integrated digital workflows and automation.",
    ],
    button: "SEE SMB FRAMEWORK",
    dark: false,
  },
  {
    title: "Infra-Tech & Defense",
    items: [
      "Requirement for high-security, air-gapped capable systems.",
      "Ruggedized code, secure telemetry, and precision AI.",
    ],
    button: "VIEW DEFENSE PROTOCOL",
    dark: true,
  },
  {
    title: "Platform Builders",
    items: [
      "Need for rapid prototyping and scalable microservices.",
      "Modular APIs, white-label solutions, and robust infra.",
    ],
    button: "EXPLORE API DOCS",
    dark: false,
  },
];

export default function DeploymentSectorsSection() {
  return (
    <section className="deployment-section">
      <div className="container">
        <p className="eyebrow">DEPLOYMENT SECTORS</p>
        <h2 className="section-heading-large">Engineered for specific operational realities.</h2>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className={sector.dark ? "sector-card sector-card-dark" : "sector-card"}
            >
              <h3>{sector.title}</h3>
              <ul>
                {sector.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button className="text-link">{sector.button}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
