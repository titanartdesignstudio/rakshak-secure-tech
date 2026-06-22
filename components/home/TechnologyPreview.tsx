"use client";

import {
BrainCircuit,
ScanFace,
Eye,
Shield,
BarChart3,
Cpu,
Radar,
Database,
} from "lucide-react";

const technologies = [
{
icon: Eye,
title: "Computer Vision",
desc: "Real-time visual intelligence",
},
{
icon: ScanFace,
title: "Facial Recognition",
desc: "Biometric identification engine",
},
{
icon: Shield,
title: "Threat Intelligence",
desc: "Automated risk detection",
},
{
icon: BarChart3,
title: "Predictive Analytics",
desc: "AI-driven forecasting",
},
{
icon: Radar,
title: "Situational Awareness",
desc: "Live operational visibility",
},
{
icon: Database,
title: "Data Fusion",
desc: "Unified intelligence layer",
},
];

export default function TechnologyPreview() {
return ( <section className="relative overflow-hidden bg-white py-20 md:py-28">
{/* Background */} <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-100/60 blur-3xl" /> <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-100/60 blur-3xl" />


  <div className="relative mx-auto max-w-7xl px-4">

    {/* Header */}
    <div className="mx-auto max-w-4xl text-center">
      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Technology Architecture
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
        Powered By
        <span className="text-[#005BAC]">
          {" "}Advanced AI Infrastructure
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Combining computer vision, biometrics,
        predictive analytics and operational intelligence
        into a unified security ecosystem.
      </p>
    </div>

    {/* Main Layout */}
    <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:items-center">

      {/* LEFT */}
      <div>
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#005BAC]">
            <BrainCircuit size={34} />
          </div>

          <h3 className="mt-6 text-3xl font-bold text-slate-900">
            AI Core Engine
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Central intelligence layer processing
            surveillance feeds, biometric data,
            vehicle intelligence and operational signals.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Real-Time Processing",
              "Machine Learning Models",
              "Autonomous Intelligence",
              "Threat Correlation Engine",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 p-4 font-medium"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CENTER */}
      <div className="flex justify-center">

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-blue-200 blur-[100px]" />

          <div className="relative flex h-[260px] w-[260px] md:h-[320px] md:w-[320px] items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-[#071226] via-[#0B1F3D] to-[#102C58] shadow-[0_0_80px_rgba(0,91,172,0.25)]">

            <div className="text-center text-white">

              <BrainCircuit
                size={70}
                className="mx-auto mb-5 text-cyan-400"
              />

              <h3 className="text-3xl font-bold">
                Rakshak AI
              </h3>

              <p className="mt-3 text-sm tracking-[4px] text-slate-300 uppercase">
                Intelligence Core
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="grid gap-4">

        {technologies.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#005BAC]">
                <Icon size={24} />
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>

    {/* Stats */}
    <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-8 md:p-12 text-white">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            AI
          </h3>
          <p className="mt-2 text-slate-300">
            Intelligence Layer
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            CV
          </h3>
          <p className="mt-2 text-slate-300">
            Computer Vision
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            RT
          </h3>
          <p className="mt-2 text-slate-300">
            Real-Time Analytics
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            360°
          </h3>
          <p className="mt-2 text-slate-300">
            Security Visibility
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


);
}
