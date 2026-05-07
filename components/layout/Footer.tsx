import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-brand">CudaIQ</h3>
          <p className="footer-copy">
            cudaIQ builds intelligent digital systems across AI, IoT, cloud,
            platforms, and immersive technologies for businesses ready to scale.
            Engineered for structural precision.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>AI &amp; Machine Learning Services</li>
            <li>IoT Application Development</li>
            <li>Web &amp; App Development</li>
            <li>Cloud Services</li>
            <li>AR/VR/MR Solutions</li>
            <li>Digital Strategy</li>
            <li>Custom Software</li>
          </ul>
        </div>

        <div>
          <h4>Solutions</h4>
          <ul>
            <li>SMBs</li>
            <li>Infra-Tech &amp; Defense</li>
            <li>Platform Builders</li>
            <li>BorrowBee</li>
            <li>K-InfraAI</li>
            <li>K-DigiSupport</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 CudaIQ Technologies LLP, Built in India.</p>
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
