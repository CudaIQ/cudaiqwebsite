const filters = ["All Industries", "Infra-Tech", "SMB", "Platform"];

export default function CaseStudiesFilterSection() {
  return (
    <section className="case-studies-filter-section">
      <div className="container case-filter-bar">
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

        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Search parameters..." />
        </div>
      </div>
    </section>
  );
}