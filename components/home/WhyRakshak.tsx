"use client";

import {
ShieldCheck,
BrainCircuit,
Building2,
Zap,
CheckCircle2,
XCircle,
ArrowRight,
} from "lucide-react";

const advantages = [
{
icon: BrainCircuit,
title: "Unified Security Ecosystem",
desc: "One platform connecting surveillance, analytics, biometrics and command intelligence.",
},
{
icon: Zap,
title: "Real-Time Intelligence",
desc: "Instant threat detection, monitoring and operational awareness powered by AI.",
},
{
icon: Building2,
title: "Enterprise & Government Scale",
desc: "Designed for smart cities, critical infrastructure and national-scale deployments.",
},
{
icon: ShieldCheck,
title: "Mission-Critical Reliability",
desc: "Built for environments where uptime, security and operational continuity matter.",
},
];

export default function WhyRakshak() {
return ( <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">


  {/* Background */}
  <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-3xl" />
  <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/60 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4">

    {/* Header */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Why Choose Rakshak
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
        Built For The Future Of
        <span className="text-[#005BAC]">
          {" "}Security Intelligence
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Traditional security systems react to incidents.
        Rakshak predicts, detects and responds through
        an integrated AI-driven ecosystem.
      </p>

    </div>

    {/* Stats */}
    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {[
        ["99.7%", "Detection Accuracy"],
        ["24/7", "Threat Monitoring"],
        ["AI", "Intelligence Engine"],
        ["360°", "Infrastructure Coverage"],
      ].map(([value, label]) => (
        <div
          key={label}
          className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm"
        >
          <h3 className="text-4xl font-bold text-[#005BAC]">
            {value}
          </h3>

          <p className="mt-3 text-slate-500">
            {label}
          </p>
        </div>
      ))}

    </div>

    {/* Feature Cards */}
    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {advantages.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#005BAC]">
              <Icon size={30} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {item.desc}
            </p>

          </div>
        );
      })}

    </div>

    {/* Comparison */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* Traditional */}
      <div className="rounded-[32px] border border-red-200 bg-white p-8">

        <div className="mb-8 flex items-center gap-3">
          <XCircle
            size={28}
            className="text-red-500"
          />

          <h3 className="text-2xl font-bold text-slate-900">
            Traditional Security
          </h3>
        </div>

        <div className="space-y-4">

          {[
            "Reactive Incident Response",
            "Manual Monitoring",
            "Disconnected Systems",
            "Delayed Reporting",
            "Limited Scalability",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-red-50 p-4"
            >
              <XCircle
                size={18}
                className="text-red-500"
              />

              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>

      {/* Rakshak */}
      <div className="rounded-[32px] border border-blue-200 bg-gradient-to-br from-[#071226] via-[#0B1F3D] to-[#102C58] p-8 text-white">

        <div className="mb-8 flex items-center gap-3">
          <ShieldCheck
            size={28}
            className="text-cyan-400"
          />

          <h3 className="text-2xl font-bold">
            Rakshak AI Ecosystem
          </h3>
        </div>

        <div className="space-y-4">

          {[
            "Predictive Intelligence",
            "Automated Monitoring",
            "Unified Security Platform",
            "Instant Alerting",
            "Enterprise-Scale Deployment",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur"
            >
              <CheckCircle2
                size={18}
                className="text-cyan-400"
              />

              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>

    </div>

    {/* Bottom Banner */}
    <div className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-8 md:p-12 text-white">

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

        <div>

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            Protection Through Technology
          </span>

          <h3 className="mt-6 text-3xl font-bold md:text-5xl">
            Security Intelligence
            <br />
            Without Compromise
          </h3>

          <p className="mt-5 text-lg text-slate-300">
            Built for governments, enterprises and
            critical infrastructure operators requiring
            intelligent, scalable and resilient security.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          {[
            "Government Ready",
            "AI Powered",
            "Real-Time Insights",
            "Nationwide Deployment",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-5 backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <ArrowRight
                  size={16}
                  className="text-cyan-400"
                />

                <span className="font-medium">
                  {item}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>


);
}
