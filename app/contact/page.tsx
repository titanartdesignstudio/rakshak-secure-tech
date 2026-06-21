import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";
import WhyContactRakshak from "@/components/contact/WhyContactRakshak";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us | RakshakSecure Tech",
  description:
    "Connect with RakshakSecure Tech for AI surveillance, command centers, critical infrastructure security, smart city monitoring and intelligent security solutions.",

  keywords: [
    "RakshakSecure Tech",
    "AI Surveillance",
    "Command Center Solutions",
    "Critical Infrastructure Security",
    "Smart City Security",
    "Video Analytics",
    "Defense Technology",
    "Security Intelligence",
    "Contact Rakshak",
  ],

  openGraph: {
    title: "Contact Us | RakshakSecure Tech",
    description:
      "Reach our team for AI-powered surveillance, security intelligence, command centers and critical infrastructure solutions.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | RakshakSecure Tech",
    description:
      "Reach our team for AI-powered surveillance, security intelligence and command center solutions.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#071226] text-white">

      {/* Global Background */}

      <div className="pointer-events-none fixed inset-0">

        <div className="absolute left-[-15%] top-[-10%] h-[800px] w-[800px] rounded-full bg-cyan-500/5 blur-[220px]" />

        <div className="absolute right-[-15%] bottom-[-10%] h-[800px] w-[800px] rounded-full bg-blue-500/5 blur-[220px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.015)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      <ContactHero />

      <ContactChannels />

      <ContactForm />

      <OfficeLocations />

      <WhyContactRakshak />

      <ContactCTA />

    </main>
  );
}