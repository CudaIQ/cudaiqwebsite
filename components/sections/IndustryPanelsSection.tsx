export default function IndustryPanelsSection() {
  return (
    <section className="industries-panels-section">
      <div className="container industries-panels-grid">
        <article className="industry-card light-card">
          <div className="industry-title-row">
            <span className="industry-mini-icon">◦</span>
            <h2>Emerging Enterprises</h2>
          </div>
          <p>
            For high-growth companies that need enterprise-grade infrastructure
            without the overhead. We build systems that scale instantly as user
            demand spikes.
          </p>

          <div className="industry-subheading">PAIN POINTS SOLVED</div>
          <ul>
            <li>Unpredictable scaling costs.</li>
            <li>Technical debt accumulation.</li>
          </ul>

          <div className="industry-stack">
            RECOMMENDED STACK: <strong>CudaCore + Analytics Edge</strong>
          </div>
        </article>

        <article className="industry-card dark-card">
          <div className="industry-title-row">
            <span className="industry-mini-icon dark-mini-icon">◦</span>
            <h2>Infrastructure &amp; Defense</h2>
          </div>
          <p>
            For sectors where downtime is not an option and security is
            paramount. We architect zero-trust, highly resilient networks
            designed to withstand hostile environments and ensure continuous
            operation.
          </p>

          <div className="industry-subheading">CRITICAL CAPABILITIES</div>
          <ul>
            <li>Air-gapped deployments.</li>
            <li>Real-time anomaly detection.</li>
          </ul>

          <div className="industry-callout-box">
            <span>ARCHITECTURE DIRECTIVE</span>
            <strong>CudaShield Defense Grid</strong>
          </div>
        </article>

        <article className="industry-card light-card platform-card-wide">
          <div className="platform-card-text">
            <div className="industry-title-row">
              <span className="industry-mini-icon">◦</span>
              <h2>Platform Builders</h2>
            </div>
            <p>
              For SaaS creators and ISVs who need reliable APIs, scalable
              microservices, and robust data pipelines. We provide the
              structural integrity so you can focus on feature development.
            </p>
            <button className="secondary-button">View Platform Specs →</button>
          </div>

          <div className="platform-code-card">
            <div className="code-window-dots">
              <span />
              <span />
              <span />
            </div>
            <pre>{`import { CudaOrchestrator } from '@cudaiq/core';

const platform = new CudaOrchestrator({
  scale: 'auto',
  resilience: 'multi-region'
});

// Ready to deploy.`}</pre>
          </div>
        </article>
      </div>
    </section>
  );
}