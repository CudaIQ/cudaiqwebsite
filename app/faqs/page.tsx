import FAQsHeroSection from "@/components/sections/FAQsHeroSection";
import FAQsSidebar from "@/components/sections/FAQsSidebar";
import FAQsAccordionSection from "@/components/sections/FAQsAccordionSection";
import FAQsHelpCtaSection from "@/components/sections/FAQsHelpCtaSection";

export default function FAQsPage() {
  return (
    <main>
      <FAQsHeroSection />
      <section className="faqs-layout-section">
        <div className="container faqs-layout-grid">
          <FAQsSidebar />
          <FAQsAccordionSection />
        </div>
      </section>
      <FAQsHelpCtaSection />
    </main>
  );
}