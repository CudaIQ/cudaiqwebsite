export default function PlatformsHeroSection() {
  return (
    <section className="platforms-hero-section">
      <div className="container platforms-hero-grid">
        <div className="platforms-copy">
          <h1>
            An ecosystem of platforms built to
            <span> jump start</span> your next product.
          </h1>
          <p>
            Engineered for precision. Built for scale. Deploy enterprise-grade
            infrastructure with our specialized sub-brands.
          </p>
        </div>

        <div className="platforms-cluster">
          <div className="cluster-card cluster-small top-left">
            <span className="cluster-label">P2P ENGINE</span>
            <strong>BorrowBee</strong>
          </div>
          <div className="cluster-card cluster-core">
            <div className="cluster-core-icon">◦</div>
            <strong>CudaIQ Core</strong>
          </div>
          <div className="cluster-card cluster-small top-right">
            <span className="cluster-label">DEFENSE SIM</span>
            <strong>K-InfraAI</strong>
          </div>
          <div className="cluster-card cluster-small bottom-center">
            <span className="cluster-label">IT SUPPORT</span>
            <strong>K-DigiSupport</strong>
          </div>
        </div>
      </div>
    </section>
  );
}