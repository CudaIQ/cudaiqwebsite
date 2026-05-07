import { notFound } from "next/navigation";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import StructuralInefficienciesSection from "@/components/sections/StructuralInefficienciesSection";
import EngineeredCapabilitiesSection from "@/components/sections/EngineeredCapabilitiesSection";
import TargetEnvironmentsSection from "@/components/sections/TargetEnvironmentsSection";

const services = {
  "ai-machine-learning": {
    eyebrow: "CORE SERVICE",
    titleTop: "AI & Machine",
    titleMiddle: "Learning",
    titleBottom: "Architecture.",
    description:
      "Deploy production-ready predictive models and autonomous systems. We engineer the data pipelines and infrastructure required for high-stakes intelligence.",
    heroCtaPrimary: "Discuss Architecture",
    heroCtaSecondary: "View Deployments",
    painPoints: [
      {
        title: "Data Silos & Fragmentation",
        text: "Disparate legacy systems prevent unified analytics, leaving machine learning models starved of comprehensive context.",
      },
      {
        title: "Latency in Decision Making",
        text: "Batch processing delays critical insights. Real-time inference is required for modern operational agility.",
      },
      {
        title: "Deployment Friction",
        text: "Models perform in labs but fail in production due to inadequate MLOps infrastructure and pipeline monitoring.",
      },
    ],
    capabilities: [
      {
        title: "Predictive Analytics Pipelines",
        text: "End-to-end forecasting models built on robust ETL architecture, delivering high-accuracy temporal predictions.",
      },
      {
        title: "Computer Vision Systems",
        text: "Real-time object detection, classification, and anomaly tracking for industrial quality control and spatial awareness.",
      },
      {
        title: "Applied NLP & LLMs",
        text: "Custom fine-tuned language models for automated document processing, semantic search, and complex reasoning tasks.",
      },
      {
        title: "Enterprise MLOps",
        text: "Continuous integration, deployment, and monitoring infrastructure ensuring model drift detection and scalable inference.",
      },
    ],
    environments: ["Enterprise SaaS", "Infra-Tech", "Logistics", "Fintech"],
    useCases: [
      {
        title: "Demand Forecasting",
        text: "Optimize supply chain inventory levels using predictive temporal modeling against historical and external datasets.",
      },
      {
        title: "Predictive Maintenance",
        text: "Analyze IoT sensor telemetry to predict hardware failures before they cause operational downtime.",
      },
      {
        title: "Automated Compliance",
        text: "Deploy NLP models to scan, verify, and extract entities from unstructured legal and financial documents at scale.",
      },
      {
        title: "Dynamic Pricing",
        text: "Algorithmic rate adjustments based on real-time market signals, competitor activity, and internal capacity constraints.",
      },
    ],
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug as keyof typeof services];

  if (!service) return notFound();

  return (
    <main>
      <ServiceDetailHero service={service} />
      <StructuralInefficienciesSection items={service.painPoints} />
      <EngineeredCapabilitiesSection items={service.capabilities} />
      <TargetEnvironmentsSection
        environments={service.environments}
        useCases={service.useCases}
      />
    </main>
  );
}