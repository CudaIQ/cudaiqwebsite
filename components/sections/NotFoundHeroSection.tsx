export default function NotFoundHeroSection() {
  return (
    <section className="notfound-hero-section">
      <div className="container notfound-hero-grid">
        <div className="notfound-copy">
          <h1>404</h1>
          <p>Lost in the node? We couldn&apos;t find the page you were looking for.</p>
        </div>

        <div className="notfound-visual">
          <div className="node node-a" />
          <div className="node node-b" />
          <div className="node node-c" />
          <div className="node node-warning">△</div>
          <div className="node node-d">↻</div>
          <div className="connector connector-a" />
          <div className="connector connector-b" />
          <div className="connector connector-c" />
        </div>
      </div>
    </section>
  );
}