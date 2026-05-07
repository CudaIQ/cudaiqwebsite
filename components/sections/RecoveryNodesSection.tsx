import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function RecoveryNodesSection() {
  return (
    <section className="notfound-recovery-section">
      <div className="container recovery-card">
        <h2>RECOVERY NODES</h2>
        <div className="recovery-list">
          {links.map((item) => (
            <Link key={item.label} href={item.href} className="recovery-item">
              <span>{item.label}</span>
              <span>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}