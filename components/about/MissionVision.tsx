"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Target,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] lg:h-[700px] lg:w-[700px] rounded-full bg-cyan-500/5 blur-[150px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] lg:h-[700px] lg:w-[700px] rounded-full bg-blue-500/5 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}

        <div className="text-center">

          <p className="text-[11px] sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-cyan-400">
            MISSION • VISION • PURPOSE
          </p>

          <h2 className="mt-5 text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Purpose Driven
            <span className="block text-cyan-400">
              Security Innovation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-400">
            Building intelligent ecosystems that combine
            artificial intelligence, surveillance intelligence,
            automation and command systems into a unified
            operational framework.
          </p>

        </div>

        {/* Cards */}

        <div className="relative mt-14 lg:mt-20">

          {/* Divider */}

          <div className="absolute left-1/2 top-1/2 hidden h-[340px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Vision */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
            >

              <div className="absolute right-4 top-2 text-[70px] sm:text-[110px] lg:text-[140px] font-black text-white/[0.03]">
                01
              </div>

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

              <div className="relative">

                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                  <Eye size={28} className="text-cyan-300" />
                </div>

                <h3 className="mt-6 sm:mt-8 text-3xl sm:text-4xl font-bold">
                  Vision
                </h3>

                <div className="mt-5 h-px w-20 bg-cyan-500/40" />

                <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-8 text-slate-400">
                  To become a globally recognized leader in
                  AI-powered security ecosystems, empowering
                  governments, enterprises and critical
                  infrastructure with intelligent,
                  autonomous and future-ready security
                  technologies.
                </p>

              </div>

            </motion.div>

            {/* Mission */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
            >

              <div className="absolute right-4 top-2 text-[70px] sm:text-[110px] lg:text-[140px] font-black text-white/[0.03]">
                02
              </div>

              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

              <div className="relative">

                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                  <Target size={28} className="text-cyan-300" />
                </div>

                <h3 className="mt-6 sm:mt-8 text-3xl sm:text-4xl font-bold">
                  Mission
                </h3>

                <div className="mt-5 h-px w-20 bg-cyan-500/40" />

                <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-8 text-slate-400">
                  To design and deploy advanced surveillance,
                  artificial intelligence, command intelligence
                  and automation solutions that enhance
                  situational awareness, operational efficiency
                  and national security readiness.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

        {/* Framework */}

        <div className="mt-14 lg:mt-20 overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-6 sm:p-8 lg:p-10">

          <div className="mb-8 lg:mb-10 text-center">

            <h3 className="text-2xl sm:text-3xl font-bold">
              AI Powered Security Framework
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Transforming traditional monitoring into
              intelligent decision-making ecosystems.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: BrainCircuit,
                value: "AI",
                label: "Intelligence Engine",
              },
              {
                icon: ShieldCheck,
                value: "24/7",
                label: "Continuous Monitoring",
              },
              {
                icon: Target,
                value: "<1s",
                label: "Response Capability",
              },
              {
                icon: Eye,
                value: "360°",
                label: "Operational Awareness",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 text-center backdrop-blur-xl"
                >
                  <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon
                      className="text-cyan-300"
                      size={24}
                    />
                  </div>

                  <h4 className="mt-4 text-3xl sm:text-4xl font-bold text-cyan-400">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.label}
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