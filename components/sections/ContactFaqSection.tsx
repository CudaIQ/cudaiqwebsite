const faqs = [
  {
    q: "What do I need to prepare?",
    a: "Just your current technical bottlenecks and high-level business objectives. We handle the structural mapping.",
  },
  {
    q: "Is there a cost?",
    a: "The initial 45-minute discovery and subsequent blueprint are complimentary structural assessments.",
  },
  {
    q: "Who will I speak with?",
    a: "A senior systems architect. No sales representatives, only technical executioners.",
  },
];

export default function ContactFaqSection() {
  return (
    <section className="contact-faq-section">
      <div className="container">
        <div className="contact-faq-divider" />
        <h3>BRIEFING FAQ</h3>
        <div className="contact-faq-grid">
          {faqs.map((item) => (
            <article key={item.q} className="contact-faq-item">
              <strong>{item.q}</strong>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}