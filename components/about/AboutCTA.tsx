"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, BrainCircuit, Radar } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/10 bg-gradient-to-br from-[#08192d] via-[#0b1f3d] to-[#102a52]">

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Glows */}
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

          <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

          <div className="relative px-8 py-16 md:px-16 md:py-20">

            {/* Top */}
            <div className="text-center">

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
                PARTNER WITH RAKSHAK
              </span>

              <h2 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

                Building Tomorrow's

                <span className="block text-cyan-400">
                  Security Intelligence
                </span>

              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
                Empower your organization with AI-powered surveillance,
                operational intelligence, command & control systems and
                mission-critical security infrastructure designed for
                governments, enterprises and strategic assets.
              </p>

            </div>

            {/* Stats */}

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">

                <BrainCircuit
                  className="mx-auto text-cyan-300"
                  size={30}
                />

                <h3 className="mt-4 text-4xl font-bold text-cyan-400">
                  AI
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Intelligence Driven
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">

                <Radar
                  className="mx-auto text-cyan-300"
                  size={30}
                />

                <h3 className="mt-4 text-4xl font-bold text-cyan-400">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Operational Monitoring
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">

                <ShieldCheck
                  className="mx-auto text-cyan-300"
                  size={30}
                />

                <h3 className="mt-4 text-4xl font-bold text-cyan-400">
                  360°
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Situational Awareness
                </p>

              </div>

            </div>

            {/* CTA Buttons */}

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
              >
                Schedule Consultation

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/solutions"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-500/30 hover:bg-white/10"
              >
                Explore Solutions
              </Link>

            </div>

            {/* Bottom Text */}

            <div className="mt-14 text-center">

              <p className="text-sm tracking-[0.25em] text-slate-500">
                ARTIFICIAL INTELLIGENCE • SURVEILLANCE • COMMAND SYSTEMS • CRITICAL INFRASTRUCTURE
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}