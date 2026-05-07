import CaseStudiesHeroSection from "@/components/sections/CaseStudiesHeroSection";
import CaseStudiesFilterSection from "@/components/sections/CaseStudiesFilterSection";
import FeaturedCaseStudySection from "@/components/sections/FeaturedCaseStudySection";
import CaseStudiesGridSection from "@/components/sections/CaseStudiesGridSection";
import CaseStudiesCtaSection from "@/components/sections/CaseStudiesCtaSection";

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesHeroSection />
      <CaseStudiesFilterSection />
      <FeaturedCaseStudySection />
      <CaseStudiesGridSection />
      <CaseStudiesCtaSection />
    </main>
  );
}