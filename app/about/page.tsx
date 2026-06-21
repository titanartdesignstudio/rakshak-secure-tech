import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import CapabilityGrid from "@/components/about/CapabilityGrid";
import IndustriesGrid from "@/components/about/IndustriesGrid";
import WhyRakshak from "@/components/about/WhyRakshak";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#071226] text-white">

      {/* Global Background */}
      <div className="pointer-events-none fixed inset-0">

        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <AboutHero />

      <CompanyOverview />

      <MissionVision />

      <LeadershipTeam />

      <CapabilityGrid />

      <IndustriesGrid />

      <WhyRakshak />

      <AboutCTA />

    </main>
  );
}