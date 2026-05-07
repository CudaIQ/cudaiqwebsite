export default function FeaturedCaseStudySection() {
  return (
    <section className="featured-case-section">
      <div className="container featured-case-card">
        <div className="featured-case-copy">
          <p className="eyebrow">ENERGY INFRASTRUCTURE</p>
          <h2>Infrastructure Monitoring: Wind Turbine Efficiency System</h2>
          <p>
            Developed a real-time node-mapping dashboard to predict maintenance
            cycles across 400+ remote assets, shifting operations from reactive
            to predictive.
          </p>

          <div className="featured-metrics">
            <div>
              <strong>+22%</strong>
              <span>UPTIME INCREASE</span>
            </div>
            <div>
              <strong>1.4ms</strong>
              <span>DATA LATENCY</span>
            </div>
          </div>
        </div>

        <div className="featured-case-image wind-image" />
      </div>
    </section>
  );
}
