export default function ResourcesPaginationSection() {
  return (
    <section className="resources-pagination-section">
      <div className="container pagination-wrap">
        <button className="page-arrow">‹</button>
        <button className="page-number active-page">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <span className="page-dots">...</span>
        <button className="page-number">8</button>
        <button className="page-arrow">›</button>
      </div>
    </section>
  );
}