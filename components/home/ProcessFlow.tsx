"use client";

import {
Camera,
BrainCircuit,
ShieldAlert,
MonitorSmartphone,
Zap,
} from "lucide-react";

const steps = [
{
icon: Camera,
title: "Capture",
desc: "Surveillance cameras, sensors, ANPR systems and biometric devices collect operational data.",
},
{
icon: BrainCircuit,
title: "Analyze",
desc: "Artificial Intelligence processes events, identities and anomalies in real time.",
},
{
icon: ShieldAlert,
title: "Detect",
desc: "Threats, incidents and suspicious activities are automatically identified.",
},
{
icon: MonitorSmartphone,
title: "Command",
desc: "Unified dashboards provide visibility across locations and operations.",
},
{
icon: Zap,
title: "Respond",
desc: "Security teams receive instant alerts and actionable intelligence.",
},
];

export default function ProcessFlow() {
return ( <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">


  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4">

    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Operational Workflow
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        How The
        <span className="text-[#005BAC]">
          {" "}Rakshak Ecosystem
        </span>
        Works
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        A unified intelligence workflow transforming
        surveillance data into operational decisions.
      </p>

    </div>

    <div className="mt-20">

      <div className="grid gap-6 lg:grid-cols-5">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#005BAC]">
                <Icon size={30} />
              </div>

              <div className="mt-4 text-sm font-semibold text-blue-600">
                STEP {index + 1}
              </div>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.desc}
              </p>

            </div>
          );
        })}

      </div>

    </div>

  </div>

</section>


);
}
