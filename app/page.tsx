import HeroSection from "@/components/sections/HeroSection";
import CoreModulesSection from "@/components/sections/CoreModulesSection";
import DeploymentSectorsSection from "@/components/sections/DeploymentSectorsSection";
import BrandStripSection from "@/components/sections/BrandStripSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CoreModulesSection />
      <DeploymentSectorsSection />
      <BrandStripSection />
      <FinalCtaSection />
    </main>
  );
}