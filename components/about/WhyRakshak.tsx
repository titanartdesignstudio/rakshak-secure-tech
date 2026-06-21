"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Shield,
  Globe,
  Zap,
  Layers3,
  Cpu,
} from "lucide-react";

const pillars = [
  {
    icon: BrainCircuit,
    title: "AI-FIRST ARCHITECTURE",
    desc: "Built around artificial intelligence models engineered for real-world security and operational intelligence.",
    code: "01",
  },
  {
    icon: Globe,
    title: "ENTERPRISE SCALE",
    desc: "Designed to support multi-site deployments, command centers and nationwide infrastructure projects.",
    code: "02",
  },
  {
    icon: Zap,
    title: "REAL-TIME RESPONSE",
    desc: "Instant analysis and automated intelligence generation for faster operational decisions.",
    code: "03",
  },
  {
    icon: Shield,
    title: "SECURE BY DESIGN",
    desc: "Enterprise-grade security architecture with resilient and protected workflows.",
    code: "04",
  },
  {
    icon: Layers3,
    title: "MODULAR ECOSYSTEM",
    desc: "Deploy individual solutions or integrate the complete Rakshak intelligence ecosystem.",
    code: "05",
  },
  {
    icon: Cpu,
    title: "FUTURE READY",
    desc: "Combining Edge AI, Cloud Intelligence and Unified Command Platforms.",
    code: "06",
  },
];

export default function WhyRakshak() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-400">
            WHY RAKSHAK
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            Built For
            <span className="block text-cyan-400">
              Mission Critical Operations
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Rakshak combines Artificial Intelligence,
            Computer Vision, Surveillance Analytics,
            Command & Control and Operational Intelligence
            into a unified security ecosystem.
          </p>

        </div>

        {/* Top Strip */}

        <div className="mt-16 rounded-[32px] border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-10">

          <div className="grid gap-6 md:grid-cols-4 text-center">

            {[
              ["AI", "Driven Platform"],
              ["24/7", "Operational Monitoring"],
              ["360°", "Situational Awareness"],
              ["LIVE", "Threat Intelligence"],
            ].map(([a, b]) => (
              <div key={a}>

                <h3 className="text-4xl font-bold text-cyan-400">
                  {a}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {b}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/30 hover:shadow-[0_0_70px_rgba(0,255,255,0.08)]"
              >

                {/* Number */}
                <div className="absolute right-4 top-0 text-[90px] font-black text-white/[0.03]">
                  {item.code}
                </div>

                {/* Glow */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon
                      size={28}
                      className="text-cyan-300"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  <div className="mt-7 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-xs tracking-[0.2em] text-slate-500">
                      VERIFIED CAPABILITY
                    </span>

                  </div>

                  <div className="mt-8 h-[2px] w-16 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Statement */}

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold">
            More Than A Security Vendor
          </h3>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-400">
            RakshakSecure Tech is building the next generation of
            intelligent security infrastructure by combining AI,
            surveillance, automation and command intelligence into
            a single scalable ecosystem.
          </p>

        </div>

      </div>

    </section>
  );
}