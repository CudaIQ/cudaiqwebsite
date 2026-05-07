import Link from "next/link";

export default function FAQsHelpCtaSection() {
  return (
    <section className="faqs-help-section">
      <div className="container faqs-help-card">
        <div className="faqs-help-icon">☰</div>
        <h2>Still need help?</h2>
        <p>
          Can’t find the answer you’re looking for? Our technical advisory team is ready to discuss your specific requirements.
        </p>
        <Link href="/contact" className="primary-button">
          Contact Sales →
        </Link>
      </div>
    </section>
  );
}