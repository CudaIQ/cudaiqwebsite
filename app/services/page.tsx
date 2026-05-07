import ServicesHeroSection from "@/components/sections/ServicesHeroSection";
import ObjectiveFilterSection from "@/components/sections/ObjectiveFilterSection";
import CoreCompetenciesSection from "@/components/sections/CoreCompetenciesSection";
import EngagementArchitectureSection from "@/components/sections/EngagementArchitectureSection";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ObjectiveFilterSection />
      <CoreCompetenciesSection />
      <EngagementArchitectureSection />
    </main>
  );
}
