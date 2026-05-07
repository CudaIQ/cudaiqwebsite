import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactTrustSection from "@/components/sections/ContactTrustSection";
import ContactRequestFormSection from "@/components/sections/ContactRequestFormSection";
import ContactProofSection from "@/components/sections/ContactProofSection";
import ContactFaqSection from "@/components/sections/ContactFaqSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <section className="contact-mid-section">
        <div className="container contact-mid-grid">
          <ContactTrustSection />
          <ContactRequestFormSection />
        </div>
      </section>
      <ContactProofSection />
      <ContactFaqSection />
    </main>
  );
}