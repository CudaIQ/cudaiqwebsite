import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section className="about-hero-section">
      <div className="container about-hero-grid">
        <div className="about-copy">
          <h1>
            Decoding Complexity.
            <br />
            <span>Engineering Clarity.</span>
          </h1>
          <p>
            At the intersection of multi-process parallel computing (CUDA) and
            strategic intelligence (Iš), we architect modular infrastructure
            designed to scale with your most ambitious digital transformations.
          </p>
          <Link href="/services" className="primary-button">
            Explore Architecture
          </Link>
        </div>

        <div className="about-visual">
          <div className="about-cloud" />
        </div>
      </div>
    </section>
  );
}