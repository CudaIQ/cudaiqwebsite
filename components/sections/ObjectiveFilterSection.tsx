const filters = [
  "All Services",
  "Digital Transformation",
  "Infrastructure Modernization",
  "Data Intelligence",
  "Security & Compliance",
];

export default function ObjectiveFilterSection() {
  return (
    <section className="objective-filter-section section-soft section-tight-top">
      <div className="container filter-bar">
        <div className="filter-label">FILTER BY OBJECTIVE</div>
        <div className="filter-chips">
          {filters.map((item, index) => (
            <button
              key={item}
              className={index === 0 ? "filter-chip active" : "filter-chip"}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
