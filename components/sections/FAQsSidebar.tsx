const categories = [
  "Services",
  "Pricing & Engagement",
  "Timelines",
  "Technology Stack",
  "Support & Maintenance",
  "Startups/SMBs",
];

export default function FAQsSidebar() {
  return (
    <aside className="faqs-sidebar">
      <h3>CATEGORIES</h3>
      <ul className="faqs-category-list">
        {categories.map((item, index) => (
          <li key={item} className={index === 0 ? "active-category" : ""}>
            <button>{item}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}