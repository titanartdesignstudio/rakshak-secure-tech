import Industries from "@/components/home/Industries";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import SecurityEcosystem from "@/components/home/SecurityEcosystem";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import WhyRakshak from "@/components/home/WhyRakshak";
import CTA from "@/components/home/CTA";
import TechnologyPreview from "@/components/home/TechnologyPreview";
import SecurityPillars from "@/components/home/SecurityPillars";
import ProcessFlow from "@/components/home/ProcessFlow";

export default function HomePage() {
  return (
    <>
      

      <main>
        <Hero />

        <TrustStrip />

        <SecurityPillars />
        <SecurityEcosystem />

        <SolutionsGrid />
        <Industries />
        
        <TechnologyPreview />
        <ProcessFlow/>
         <WhyRakshak />

        <CTA />
      </main>

    
    </>
  );
}