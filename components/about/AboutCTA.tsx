"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, BrainCircuit, Radar } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[160px] md:h-[700px] md:w-[700px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[160px] md:h-[700px] md:w-[700px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-cyan-500/10 bg-gradient-to-br from-[#08192d] via-[#0b1f3d] to-[#102a52] md:rounded-[40px]">
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Glows */}
          <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px] md:h-[500px] md:w-[500px]" />

          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[160px] md:h-[500px] md:w-[500px]" />

          <div className="relative px-5 py-14 sm:px-8 md:px-16 md:py-20">
            {/* Badge */}
            <div className="text-center">
              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] tracking-[0.25em] text-cyan-300 sm:text-xs sm:tracking-[0.35em]">
                PARTNER WITH RAKSHAK
              </span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:mt-8 md:text-6xl xl:text-7xl"
              >
                Building Tomorrow&apos;s

                <span className="block text-cyan-400">
                  Security Intelligence
                </span>
              </motion.h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-300 md:mt-8 md:text-lg md:leading-8">
                Empower your organization with AI-powered surveillance,
                operational intelligence, command & control systems and
                mission-critical security infrastructure designed for
                governments, enterprises and strategic assets.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                <BrainCircuit
                  className="mx-auto text-cyan-300"
                  size={30}
                />

                <h3 className="mt-4 text-3xl font-bold text-cyan-400 md:text-4xl">
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

                <h3 className="mt-4 text-3xl font-bold text-cyan-400 md:text-4xl">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Operational Monitoring
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl sm:col-span-2 lg:col-span-1">
                <ShieldCheck
                  className="mx-auto text-cyan-300"
                  size={30}
                />

                <h3 className="mt-4 text-3xl font-bold text-cyan-400 md:text-4xl">
                  360°
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Situational Awareness
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-14">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400 sm:w-auto"
              >
                Schedule Consultation

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold text-white backdrop-blur-xl transition hover:border-cyan-500/30 hover:bg-white/10 sm:w-auto"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Bottom Strip */}
            <div className="mt-12 border-t border-white/10 pt-8 text-center md:mt-14">
              <p className="text-[10px] leading-6 tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.25em]">
                ARTIFICIAL INTELLIGENCE • SURVEILLANCE • COMMAND SYSTEMS •
                CRITICAL INFRASTRUCTURE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}