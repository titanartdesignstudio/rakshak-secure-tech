"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Factory,
  Radar,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Security Intelligence",
    desc: "AI-driven surveillance and threat intelligence platforms engineered for mission-critical operations.",
  },
  {
    icon: Building2,
    title: "Government Solutions",
    desc: "Smart city monitoring, command centers and public safety ecosystems.",
  },
  {
    icon: Factory,
    title: "Infrastructure Protection",
    desc: "Protection for strategic assets, industrial facilities and critical infrastructure.",
  },
  {
    icon: Radar,
    title: "Operational Awareness",
    desc: "Real-time visibility through centralized intelligence platforms.",
  },
];

export default function IndustriesOverview() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Top Section */}

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
              INDUSTRY EXPERTISE
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              Built For

              <span className="block text-cyan-400">
                High-Stakes
              </span>

              Environments

            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              RakshakSecure Tech delivers AI-powered intelligence
              ecosystems for organizations where security,
              operational continuity and situational awareness
              are non-negotiable.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Defense",
                "Government",
                "Transportation",
                "Critical Infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] border border-cyan-500/20 bg-white/[0.03] p-8 backdrop-blur-xl"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs tracking-[4px] text-cyan-400">
                    DEPLOYMENT NETWORK
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    Pan India Operations
                  </h3>
                </div>

                <ArrowUpRight
                  className="text-cyan-300"
                  size={26}
                />

              </div>

              <div className="mt-10 space-y-4">

                {[
                  ["Government", "98% Active Coverage"],
                  ["Defense", "Realtime Monitoring"],
                  ["Transportation", "24/7 Intelligence"],
                  ["Infrastructure", "Critical Protection"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <span>{title}</span>

                    <span className="text-cyan-300">
                      {value}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          {[
            ["08+", "Industries"],
            ["100+", "Deployments"],
            ["24/7", "Monitoring"],
            ["AI", "Intelligence"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <h3 className="text-5xl font-bold text-cyan-400">
                {value}
              </h3>

              <p className="mt-3 text-slate-400">
                {label}
              </p>

            </div>
          ))}

        </div>

        {/* Pillars */}

        <div className="mt-24">

          <div className="mb-10">

            <h3 className="text-3xl font-bold">
              Core Industry Capabilities
            </h3>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/30"
                >

                  <div className="absolute right-5 top-5 text-6xl font-bold text-white/5">
                    0{index + 1}
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                    <Icon
                      size={28}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}