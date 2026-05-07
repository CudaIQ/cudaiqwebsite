import ResourcesHeroSection from "@/components/sections/ResourcesHeroSection";
import ResourcesSidebar from "@/components/sections/ResourcesSidebar";
import FeaturedResourcesSection from "@/components/sections/FeaturedResourcesSection";
import ResourcesPaginationSection from "@/components/sections/ResourcesPaginationSection";

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesHeroSection />
      <section className="resources-layout-section">
        <div className="container resources-layout-grid">
          <ResourcesSidebar />
          <FeaturedResourcesSection />
        </div>
      </section>
      <ResourcesPaginationSection />
    </main>
  );
}