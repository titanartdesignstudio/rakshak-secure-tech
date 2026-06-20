import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Industries from "@/components/home/Industries";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import SecurityEcosystem from "@/components/home/SecurityEcosystem";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import WhyRakshak from "@/components/home/WhyRakshak";
import CTA from "@/components/home/CTA";
import TechnologyPreview from "@/components/home/TechnologyPreview";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <TrustStrip />

        <SecurityEcosystem />

        <SolutionsGrid />
        <Industries />
        
        <TechnologyPreview />
        <WhyRakshak />

        <CTA />
      </main>

      <Footer />
    </>
  );
}