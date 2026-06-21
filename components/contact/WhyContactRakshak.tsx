"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock3,
  MapPinned,
  BrainCircuit,
  Users,
  Building2,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Government Ready",
    desc: "Solutions designed for government agencies, public safety networks and strategic infrastructure.",
  },
  {
    icon: Clock3,
    title: "24/7 Response",
    desc: "Dedicated teams supporting mission-critical deployments and operational environments.",
  },
  {
    icon: MapPinned,
    title: "Pan India Coverage",
    desc: "Supporting projects across multiple states, cities and enterprise locations.",
  },
  {
    icon: BrainCircuit,
    title: "AI Specialists",
    desc: "Experts in surveillance analytics, command systems and intelligent automation.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Project managers, deployment engineers and support professionals working together.",
  },
  {
    icon: Building2,
    title: "Enterprise Scale",
    desc: "Built for organizations requiring secure, scalable and future-ready platforms.",
  },
];

export default function WhyContactRakshak() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0">

        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[160px]" />

        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[160px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            WHY CONTACT RAKSHAK
          </span>

          <h2 className="mt-8 text-5xl font-bold md:text-6xl">

            Trusted Partner For

            <span className="block text-cyan-400">
              Mission Critical Projects
            </span>

          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-400">
            From smart city deployments to enterprise security
            ecosystems, RakshakSecure Tech delivers intelligence,
            expertise and execution capabilities at scale.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 md:grid-cols-4">

          {[
            ["24/7", "Support Operations"],
            ["PAN", "India Coverage"],
            ["AI", "Driven Intelligence"],
            ["100%", "Commitment"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
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

        {/* Reasons */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.07]"
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

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}