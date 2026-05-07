import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyChallenge from "@/components/sections/CaseStudyChallenge";
import CaseStudySolution from "@/components/sections/CaseStudySolution";
import CaseStudyImpact from "@/components/sections/CaseStudyImpact";
import CaseStudyFlow from "@/components/sections/CaseStudyFlow";

const studies = {
  "wind-turbine-efficiency-system": {
    tags: ["INFRA-TECH", "IOT"],
    titleTop: "Architecting Resilience:",
    titleMain: "IoT Monitoring for Wind Turbines",
    description:
      "Deploying a high-fidelity, real-time data ingestion architecture to map remote assets and predict structural failures before they occur.",
    client: "Global Energy Provider",
    services: "IoT Infra, Cloud Eng.",
    timeline: "4 Months",
    challengeTitle: "The Challenge",
    challengeBody: [
      "Managing a decentralized network of wind turbines presents significant operational blind spots. Our client, a leading global energy provider, was reliant on localized, high-latency data reporting.",
      "This fragmentation meant that structural anomalies were often detected post-failure, leading to extended downtime and reactive maintenance protocols. The business required a paradigm shift from historical reporting to predictive, structural mapping.",
    ],
    challengePoints: [
      "High-latency data transmission from remote sites.",
      "Siloed sensor data preventing holistic structural analysis.",
      "Reactive maintenance cycles increasing operational costs.",
    ],
    solutionCards: [
      {
        title: "Real-time Data Pipeline",
        text: "High-throughput ingestion processing millions of sensor events per minute with sub-second latency.",
      },
      {
        title: "Predictive Maintenance Engine",
        text: "Machine learning models trained on structural stress patterns to forecast potential failures.",
      },
      {
        title: "Secure Access Terminal",
        text: "Role-based command center for engineers to monitor health and deploy updates remotely.",
      },
    ],
    impact: [
      { value: "+22%", label: "UPTIME INCREASE" },
      { value: "-40%", label: "ADMIN TIME" },
      { value: "1.4ms", label: "DATA LATENCY" },
    ],
    flowSteps: [
      {
        phase: "Phase 1",
        title: "Discovery",
        text: "Auditing existing sensor nodes and identifying latency bottlenecks.",
      },
      {
        phase: "Phase 2",
        title: "Strategic Mapping",
        text: "Designing the edge-to-cloud data ingestion architecture.",
      },
      {
        phase: "Phase 3",
        title: "Parallel Dev",
        text: "Building the ingestion pipeline and dashboard interfaces concurrently.",
      },
      {
        phase: "Phase 4",
        title: "Launch",
        text: "Stress testing and staged rollout across regional turbine clusters.",
      },
    ],
  },
};

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = studies[params.slug as keyof typeof studies];
  if (!study) return notFound();

  return (
    <main>
      <CaseStudyHero study={study} />
      <CaseStudyChallenge study={study} />
      <CaseStudySolution study={study} />
      <CaseStudyImpact study={study} />
      <CaseStudyFlow study={study} />
    </main>
  );
}
