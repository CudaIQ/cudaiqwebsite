import ThankYouHeroSection from "@/components/sections/ThankYouHeroSection";
import DeploymentSequenceSection from "@/components/sections/DeploymentSequenceSection";
import WhileSystemsInitializeSection from "@/components/sections/WhileSystemsInitializeSection";
import ThankYouQuoteSection from "@/components/sections/ThankYouQuoteSection";

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouHeroSection />
      <DeploymentSequenceSection />
      <WhileSystemsInitializeSection />
      <ThankYouQuoteSection />
    </main>
  );
}