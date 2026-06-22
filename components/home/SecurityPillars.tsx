"use client";

import {
Shield,
BrainCircuit,
Radar,
Zap,
} from "lucide-react";

const pillars = [
{
icon: Shield,
title: "Protection",
desc: "Advanced surveillance and perimeter security designed for mission-critical environments.",
},
{
icon: BrainCircuit,
title: "Intelligence",
desc: "Artificial intelligence transforms raw security data into actionable insights.",
},
{
icon: Radar,
title: "Detection",
desc: "Real-time threat identification, anomaly detection and incident awareness.",
},
{
icon: Zap,
title: "Response",
desc: "Instant alerts, centralized command systems and rapid operational response.",
},
];

export default function SecurityPillars() {
return ( <section className="relative overflow-hidden bg-white py-20 md:py-28">


  <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
  <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4">

    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Security Framework
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Four Layers Of
        <span className="text-[#005BAC]">
          {" "}Security Intelligence
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        RakshakSecure Tech combines surveillance,
        artificial intelligence, operational awareness
        and command intelligence into one unified
        security ecosystem.
      </p>

    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {pillars.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#005BAC] transition duration-300 group-hover:scale-110">
              <Icon size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {item.desc}
            </p>

          </div>
        );
      })}

    </div>

  </div>

</section>


);
}
