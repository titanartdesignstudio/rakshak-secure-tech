"use client";

import Link from "next/link";
import {
Shield,
ScanFace,
Car,
Radar,
Eye,
MonitorSmartphone,
ArrowRight,
} from "lucide-react";

const solutions = [
{
slug: "facial-recognition",
icon: ScanFace,
title: "Facial Recognition",
desc: "Real-time biometric identification, watchlist matching and person tracking across large-scale environments.",
features: [
"Identity Verification",
"Watchlist Matching",
"Real-Time Alerts",
],
},
{
slug: "vehicle-intelligence",
icon: Car,
title: "Vehicle Intelligence",
desc: "AI-powered vehicle recognition, movement analysis and intelligent transportation monitoring.",
features: [
"ANPR Integration",
"Vehicle Tracking",
"Traffic Analytics",
],
},
{
slug: "border-monitoring",
icon: Radar,
title: "Border Monitoring",
desc: "Advanced perimeter surveillance with threat detection and automated incident alerts.",
features: [
"Perimeter Security",
"Threat Detection",
"Remote Monitoring",
],
},
{
slug: "cargo-screening",
icon: Shield,
title: "Cargo Screening",
desc: "Intelligent inspection systems for cargo, logistics hubs and critical checkpoints.",
features: [
"Cargo Inspection",
"Automated Screening",
"Risk Analysis",
],
},
{
slug: "smart-surveillance",
icon: Eye,
title: "Smart Surveillance",
desc: "24/7 AI-assisted monitoring designed for enterprise, city and infrastructure security.",
features: [
"Video Analytics",
"Behavior Detection",
"Incident Alerts",
],
},
{
slug: "command-center",
icon: MonitorSmartphone,
title: "Command Center",
desc: "Unified operational intelligence platform for security management and decision making.",
features: [
"Centralized Dashboard",
"Live Intelligence",
"Multi-Site Management",
],
},
];

export default function SolutionsGrid() {
return ( <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">


  {/* Background */}

  <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />

  <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4">

    {/* Header */}

    <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">

      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Security Portfolio
      </span>

      <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
        Intelligent Security{" "}
        <span className="text-[#005BAC]">
          Solutions
        </span>
      </h2>

      <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
        Integrated AI technologies engineered for governments,
        enterprises and mission-critical infrastructure.
      </p>

    </div>

    {/* Solutions Grid */}

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {solutions.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.slug}
            href={`/solutions/${item.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 lg:p-8 transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(0,91,172,0.12)]"
          >

            {/* Hover Glow */}

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50 text-[#005BAC] transition duration-500 group-hover:scale-110">

                <Icon size={30} />

              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.desc}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-500">

                {item.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <div className="mt-auto pt-8 flex items-center gap-2 font-semibold text-[#005BAC]">

                Learn More

                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />

              </div>

              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-[#005BAC] to-cyan-400 transition-all duration-700 group-hover:w-full" />

            </div>

          </Link>
        );
      })}

    </div>

    {/* Enterprise Banner */}

    <div className="relative mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-6 sm:p-8 lg:mt-24 lg:p-10 text-white">

      <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute left-0 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">

        <div>

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            Security Ecosystem
          </span>

          <h3 className="mt-6 text-3xl font-bold md:text-4xl">
            Security Solutions
            <br />
            Built For Scale
          </h3>

          <p className="mt-5 text-base sm:text-lg text-slate-300">
            From smart cities and airports to government
            operations and critical infrastructure, RakshakSecure
            Tech delivers unified security intelligence platforms.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <h4 className="text-2xl font-bold">AI</h4>
            <p className="text-sm text-slate-300">
              Threat Detection
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <h4 className="text-2xl font-bold">24/7</h4>
            <p className="text-sm text-slate-300">
              Monitoring
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <h4 className="text-2xl font-bold">360°</h4>
            <p className="text-sm text-slate-300">
              Visibility
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <h4 className="text-2xl font-bold">Unified</h4>
            <p className="text-sm text-slate-300">
              Operations
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


);
}
