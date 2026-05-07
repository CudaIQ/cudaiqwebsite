const proofCards = [
  {
    value: "+22%",
    title: "Operational Efficiency",
    text: "Series B fintech",
  },
  {
    value: "6 Weeks",
    title: "Scalable MVP Delivery",
    text: "Logistics platform",
  },
];

export default function ContactProofSection() {
  return (
    <section className="contact-proof-section">
      <div className="container contact-proof-grid">
        {proofCards.map((card) => (
          <article key={card.title} className="proof-card light-proof-card">
            <strong>{card.value}</strong>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}

        <article className="proof-card dark-proof-card">
          <div className="quote-mark">“</div>
          <p>
            We engineer systems that allow India’s mid-market leaders to operate
            with global precision.
          </p>
          <div className="proof-author">
            <div className="author-avatar" />
            <div>
              <strong>Arjun Desai</strong>
              <span>Chief Architect</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}