const faqs = [
  {
    category: "Services",
    title: "What exactly does CudaIQ Technologies provide?",
    answer:
      "We provide end-to-end software engineering and infrastructure solutions. This includes custom application development, cloud architecture design, system integration, and legacy modernization. We specialize in building scalable, secure, and performant systems for enterprise and high-growth environments.",
    open: true,
  },
  {
    category: "Services",
    title: "Do you handle UI/UX design as part of the service?",
    answer:
      "Yes. We can include product discovery, wireframes, UI design, and UX refinement alongside engineering delivery.",
  },
  {
    category: "Services",
    title: "Can you integrate with our existing legacy systems?",
    answer:
      "Yes. We build API layers, migration pathways, and integration adapters to work with older systems without forcing a full replacement.",
  },
  {
    category: "Pricing & Engagement",
    title: "How are your engagements typically structured?",
    answer:
      "We usually work in milestone-based sprints, dedicated teams, or full project delivery depending on scope and urgency.",
  },
  {
    category: "Pricing & Engagement",
    title: "Do you offer fixed-price contracts or T&M?",
    answer:
      "Yes. We support both fixed-price and time-and-material models, depending on the predictability and flexibility required.",
  },
];

export default function FAQsAccordionSection() {
  return (
    <div className="faqs-main">
      {["Services", "Pricing & Engagement"].map((section) => (
        <section key={section} className="faq-group">
          <h2>{section}</h2>
          <div className="faq-list">
            {faqs
              .filter((faq) => faq.category === section)
              .map((faq, index) => (
                <details
                  key={faq.title}
                  className="faq-item"
                  open={faq.open && index === 0}
                >
                  <summary>
                    <span>{faq.title}</span>
                    <b>{faq.open && index === 0 ? "−" : "+"}</b>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}