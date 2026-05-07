import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Platforms", href: "/platforms" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-block">
          <span className="brand-name">CudaIQ</span>
          <span className="brand-tagline">MODULAR TECHNOLOGY FOR GROWTH</span>
        </Link>

        <nav className="main-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.href === "/" ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="primary-button header-cta">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
