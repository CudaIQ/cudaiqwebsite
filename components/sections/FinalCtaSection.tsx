import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="final-cta-section">
      <div className="container final-cta-inner">
        <h2>Ready to architect your future?</h2>
        <p>
          Deploy precision-engineered digital infrastructure tailored for your
          operational reality.
        </p>
        <div className="hero-actions center-actions">
          <Link href="/book-discovery-call" className="primary-button">
            Schedule a strategy call
          </Link>
          <Link href="/services" className="secondary-button">
            See service catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
