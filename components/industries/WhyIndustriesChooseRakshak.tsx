"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  Zap,
  Building2,
  MonitorSmartphone,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Mission Critical Reliability",
    desc: "Built for environments where uptime, security and operational continuity are non-negotiable.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    desc: "Advanced analytics, computer vision and predictive intelligence for proactive security operations.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "Scalable deployment models that reduce implementation timelines and accelerate operational readiness.",
  },
  {
    icon: Building2,
    title: "Enterprise Scale Architecture",
    desc: "Designed to support city-wide, nationwide and multi-location deployments through a unified platform.",
  },
  {
    icon: MonitorSmartphone,
    title: "Unified Command Platform",
    desc: "Connect surveillance, analytics, alerts and command centers into a single operational ecosystem.",
  },
  {
    icon: Handshake,
    title: "Long-Term Technology Partner",
    desc: "Beyond implementation, we continuously support innovation, upgrades and future-ready expansion.",
  },
];

export default function WhyIndustriesChooseRakshak() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            WHY INDUSTRY LEADERS CHOOSE RAKSHAK
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">

            Trusted For

            <span className="block text-cyan-400">
              Mission Critical Operations
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Organizations choose RakshakSecure Tech for its ability to
            combine Artificial Intelligence, surveillance intelligence,
            command systems and operational excellence into one powerful
            ecosystem.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.07]"
              >

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                <div className="relative">

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

                  <div className="mt-6 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Enterprise Banner */}

        <div className="mt-20 overflow-hidden rounded-[36px] border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <h3 className="text-3xl font-bold">

                One Platform.

                <span className="block text-cyan-400">
                  Unlimited Intelligence.
                </span>

              </h3>

              <p className="mt-4 max-w-xl leading-8 text-slate-400">
                From government agencies and smart cities to critical
                infrastructure and enterprise environments, Rakshak
                provides a unified intelligence ecosystem engineered
                for operational excellence.
              </p>

            </div>

            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                <h4 className="text-3xl font-bold text-cyan-400">
                  AI
                </h4>

                <p className="mt-2 text-xs text-slate-400">
                  Intelligence Core
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                <h4 className="text-3xl font-bold text-cyan-400">
                  24/7
                </h4>

                <p className="mt-2 text-xs text-slate-400">
                  Monitoring
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                <h4 className="text-3xl font-bold text-cyan-400">
                  99%
                </h4>

                <p className="mt-2 text-xs text-slate-400">
                  Operational Readiness
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}