"use client";

import Link from "next/link";
import {
ArrowRight,
Shield,
Globe,
Building2,
BrainCircuit,
} from "lucide-react";

export default function CTA() {
return ( <section className="relative overflow-hidden py-20 md:py-32 text-white">


  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#071226] via-[#0B1F3D] to-[#005BAC]" />

  {/* Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

  {/* Glow */}
  <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4">

    <div className="mx-auto max-w-5xl text-center">

      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl">
        <Shield size={16} />
        Protection Through Technology
      </div>

      <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
        Securing The Future Of
        <br />
        Critical Infrastructure
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
        Deploy advanced surveillance, biometric intelligence,
        threat detection and command-center technologies
        engineered for governments, enterprises and
        mission-critical environments.
      </p>

    </div>

    {/* Stats */}
    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {[
        ["99.7%", "Recognition Accuracy"],
        ["24/7", "Threat Monitoring"],
        ["AI", "Intelligence Engine"],
        ["360°", "Coverage"],
      ].map(([value, label]) => (
        <div
          key={label}
          className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-xl"
        >
          <h3 className="text-4xl font-bold">
            {value}
          </h3>

          <p className="mt-2 text-blue-100">
            {label}
          </p>
        </div>
      ))}

    </div>

    {/* CTA Buttons */}
    <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        href="/contact"
        className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-[#005BAC] transition duration-300 hover:scale-105"
      >
        Schedule Consultation

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </Link>

      <Link
        href="/solutions"
        className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/20"
      >
        Explore Solutions
      </Link>

    </div>

    {/* Industry Coverage */}
    <div className="mt-20 rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">

      <div className="grid gap-6 md:grid-cols-3">

        <div className="flex items-center gap-4">
          <Building2 className="text-cyan-300" />
          <span>Government & Defence</span>
        </div>

        <div className="flex items-center gap-4">
          <Shield className="text-cyan-300" />
          <span>Critical Infrastructure</span>
        </div>

        <div className="flex items-center gap-4">
          <Globe className="text-cyan-300" />
          <span>Smart Cities</span>
        </div>

        <div className="flex items-center gap-4">
          <Shield className="text-cyan-300" />
          <span>Transportation Security</span>
        </div>

        <div className="flex items-center gap-4">
          <Building2 className="text-cyan-300" />
          <span>Enterprise Protection</span>
        </div>

        <div className="flex items-center gap-4">
          <BrainCircuit className="text-cyan-300" />
          <span>AI Intelligence Systems</span>
        </div>

      </div>

    </div>

  </div>

</section>


);
}
