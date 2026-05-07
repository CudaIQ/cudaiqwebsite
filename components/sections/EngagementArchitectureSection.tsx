const models = [
  {
    title: "Dedicated Teams",
    description:
      "Fully managed engineering squads acting as an extension of your internal capabilities.",
    points: [
      "Long-term strategic alignment",
      "Scalable resource allocation",
      "Direct operational control",
    ],
    highlighted: false,
  },
  {
    title: "Project-Based Delivery",
    description:
      "End-to-end execution of defined initiatives with guaranteed outcomes and timelines.",
    points: [
      "Fixed scope and budget predictability",
      "Milestone-driven agile delivery",
      "Comprehensive knowledge transfer",
    ],
    highlighted: true,
  },
  {
    title: "Staff Augmentation",
    description:
      "Targeted injection of specialized expertise to accelerate specific phases of your roadmap.",
    points: [
      "Rapid talent deployment",
      "Fill critical skill gaps",
      "Flexible engagement duration",
    ],
    highlighted: false,
  },
];

export default function EngagementArchitectureSection() {
  return (
    <section className="section-soft engagement-section section-no-top-gap">
      <div className="container">
        <div className="section-heading-block centered-block">
          <h2 className="section-title">Engagement Architecture</h2>
          <p className="section-description centered-description">
            Flexible collaboration models structured to integrate seamlessly with
            your operational rhythm and strategic objectives.
          </p>
        </div>

        <div className="engagement-grid">
          {models.map((model) => (
            <article
              key={model.title}
              className={model.highlighted ? "engagement-card highlighted" : "engagement-card"}
            >
              {model.highlighted && <span className="recommended-badge">RECOMMENDED</span>}
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <ul>
                {model.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <button className={model.highlighted ? "primary-button full-button" : "secondary-button full-button"}>
                Discuss Model
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
