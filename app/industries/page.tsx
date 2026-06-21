import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesOverview from "@/components/industries/IndustriesOverview";
import IndustryShowcase from "@/components/industries/IndustryShowcase";
import IndustryGrid from "@/components/industries/IndustryGrid";
import DeploymentModels from "@/components/industries/DeploymentModels";
import IndustriesMetrics from "@/components/industries/IndustriesMetrics";
import WhyIndustriesChooseRakshak from "@/components/industries/WhyIndustriesChooseRakshak";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <main className="relative overflow-hidden bg-[#071226] text-white">

      <div className="pointer-events-none fixed inset-0">

        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <IndustriesHero />

      <IndustriesOverview />

      <IndustryShowcase />

      <IndustryGrid />

      <DeploymentModels />

      <IndustriesMetrics />

      <WhyIndustriesChooseRakshak />

      <IndustriesCTA />

    </main>
  );
}