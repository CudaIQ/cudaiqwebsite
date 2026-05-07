export default function FAQsHeroSection() {
  return (
    <section className="faqs-hero-section">
      <div className="container faqs-hero-inner">
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about our services, pricing,
          technical capabilities, and engagement models.
        </p>
        <div className="faqs-search-bar">
          <span>⌕</span>
          <input type="text" placeholder="What are you looking for?" />
        </div>
      </div>
    </section>
  );
}