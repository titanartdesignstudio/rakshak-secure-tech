"use client";

import {
ScanFace,
Car,
PackageSearch,
BrainCircuit,
ArrowRight,
} from "lucide-react";

export default function SecurityEcosystem() {
const pillars = [
{
icon: ScanFace,
title: "Spatial & Identity Intelligence",
desc: "Facial recognition, biometric verification, watchlist matching and advanced identity analytics.",
features: [
"Facial Recognition",
"Identity Verification",
"Watchlist Matching",
],
},
{
icon: Car,
title: "Vehicular & Transit Security",
desc: "Vehicle intelligence, traffic monitoring, ANPR systems and smart mobility security.",
features: [
"ANPR Systems",
"Vehicle Analytics",
"Transit Monitoring",
],
},
{
icon: PackageSearch,
title: "Asset & Logistics Screening",
desc: "Cargo inspection, baggage scanning and intelligent threat detection across logistics networks.",
features: [
"Cargo Screening",
"Threat Detection",
"Asset Monitoring",
],
},
{
icon: BrainCircuit,
title: "Domain-Specific Intelligence",
desc: "AI-driven situational awareness and operational intelligence tailored to critical sectors.",
features: [
"Predictive Analytics",
"Threat Intelligence",
"AI Monitoring",
],
},
];

return ( <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">


  {/* Background Effects */}

  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4">

    {/* Header */}

    <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">

      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Security Ecosystem
      </span>

      <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
        A Unified Security
        <span className="text-[#005BAC]">
          {" "}
          Intelligence Platform
        </span>
      </h2>

      <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        Bringing together surveillance, analytics,
        biometrics, logistics screening and operational
        intelligence into one integrated AI ecosystem.
      </p>

    </div>

    {/* Cards */}

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {pillars.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(0,91,172,0.12)]"
          >

            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#005BAC] to-cyan-400 transition duration-500 group-hover:scale-x-100" />

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#005BAC] transition duration-300 group-hover:scale-110">

              <Icon size={30} />

            </div>

            <h3 className="mb-4 text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="leading-7 text-slate-600">
              {item.desc}
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-500">

              {item.features.map((feature) => (
                <li key={feature}>
                  ✓ {feature}
                </li>
              ))}

            </ul>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[#005BAC]">

              Explore

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </div>

          </div>
        );
      })}

    </div>

    {/* Platform Banner */}

    <div className="relative mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-6 sm:p-8 lg:mt-24 lg:p-10 text-white">

      <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute left-0 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">

        <div>

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            Unified Security Architecture
          </span>

          <h3 className="mt-6 text-3xl font-bold md:text-4xl">
            One Platform.
            <br />
            Multiple Security Domains.
          </h3>

          <p className="mt-5 text-base sm:text-lg text-slate-300">
            Connect surveillance systems, biometric
            intelligence, logistics screening and command
            center operations into a single AI-powered
            security ecosystem.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <h4 className="text-3xl font-bold">24/7</h4>
            <p className="mt-2 text-sm text-slate-300">
              Continuous Monitoring
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <h4 className="text-3xl font-bold">AI</h4>
            <p className="mt-2 text-sm text-slate-300">
              Intelligence Layer
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <h4 className="text-3xl font-bold">360°</h4>
            <p className="mt-2 text-sm text-slate-300">
              Security Coverage
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <h4 className="text-3xl font-bold">Unified</h4>
            <p className="mt-2 text-sm text-slate-300">
              Command Center
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


);
}
