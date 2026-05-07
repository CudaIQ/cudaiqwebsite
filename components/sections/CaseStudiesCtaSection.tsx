import Link from "next/link";

export default function CaseStudiesCtaSection() {
  return (
    <section className="case-cta-section section-soft">
      <div className="container final-cta-inner">
        <h2>Ready to build your infrastructure?</h2>
        <p>
          Schedule a technical consultation to map your structural requirements.
        </p>
        <div className="hero-actions center-actions">
          <Link href="/contact" className="primary-button">
            Talk to CudaIQ
          </Link>
          <Link href="/services" className="secondary-button">
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
