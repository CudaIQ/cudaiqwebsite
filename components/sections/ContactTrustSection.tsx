const trustItems = [
  {
    title: "30-day prototype",
    text: "Rapid validation of core architecture.",
  },
  {
    title: "Zero-trust security",
    text: "Defense-grade protocols from day zero.",
  },
  {
    title: "India growth focus",
    text: "Engineered for mid-market scale.",
  },
];

const nextItems = [
  {
    title: "Schedule Alignment",
    text: "Select a window that works for your technical leads.",
    active: true,
  },
  {
    title: "Discovery Call",
    text: "A focused 45-minute deep dive into your infrastructure needs.",
  },
  {
    title: "Strategic Blueprint",
    text: "Receive your custom 30-day architectural roadmap.",
  },
];

export default function ContactTrustSection() {
  return (
    <div className="contact-left-column">
      <div className="contact-info-grid">
        <article className="contact-info-card">
          <h3>WHY FOUNDERS TRUST US</h3>
          <div className="contact-info-list">
            {trustItems.map((item) => (
              <div key={item.title} className="contact-info-item">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="contact-info-card">
          <h3>WHAT HAPPENS NEXT</h3>
          <div className="contact-info-list timeline-list">
            {nextItems.map((item) => (
              <div key={item.title} className="contact-info-item timeline-item">
                <span className={item.active ? "timeline-dot active-dot" : "timeline-dot"} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
} 