import NotFoundHeroSection from "@/components/sections/NotFoundHeroSection";
import RecoveryNodesSection from "@/components/sections/RecoveryNodesSection";
import NotFoundSearchSection from "@/components/sections/NotFoundSearchSection";

export default function NotFound() {
  return (
    <main>
      <NotFoundHeroSection />
      <RecoveryNodesSection />
      <NotFoundSearchSection />
    </main>
  );
}