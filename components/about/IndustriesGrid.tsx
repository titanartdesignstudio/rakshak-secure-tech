"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  Plane,
  Ship,
  Factory,
  Train,
  Shield,
  RadioTower,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Government & Smart Cities",
    desc: "Integrated surveillance, citizen safety, traffic intelligence and command center infrastructure.",
    code: "GS-01",
  },
  {
    icon: Shield,
    title: "Defense & Homeland Security",
    desc: "Border intelligence, perimeter defense and real-time threat monitoring systems.",
    code: "DH-02",
  },
  {
    icon: Plane,
    title: "Airports & Aviation",
    desc: "Passenger verification, access control and aviation security analytics.",
    code: "AV-03",
  },
  {
    icon: Ship,
    title: "Ports & Logistics",
    desc: "Cargo inspection, vehicle intelligence and risk assessment solutions.",
    code: "PL-04",
  },
  {
    icon: Train,
    title: "Railways & Transportation",
    desc: "Passenger safety, station monitoring and operational intelligence.",
    code: "RT-05",
  },
  {
    icon: Factory,
    title: "Industrial Infrastructure",
    desc: "Critical asset protection and industrial monitoring systems.",
    code: "II-06",
  },
  {
    icon: RadioTower,
    title: "Critical Infrastructure",
    desc: "Power plants, telecom facilities and strategic installations.",
    code: "CI-07",
  },
  {
    icon: Building2,
    title: "Enterprise Security",
    desc: "Corporate campuses, BFSI and enterprise-grade protection systems.",
    code: "ES-08",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-400">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            Securing
            <span className="block text-cyan-400">
              Critical Sectors
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            RakshakSecure Tech delivers intelligent surveillance,
            AI-powered monitoring and command intelligence platforms
            across mission-critical environments.
          </p>

        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/30 hover:shadow-[0_0_60px_rgba(0,255,255,0.08)]"
              >

                {/* Big Number */}
                <div className="absolute right-4 top-0 text-[90px] font-black text-white/[0.03]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Glow */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Top Bar */}
                <div className="mb-6 flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon
                      size={24}
                      className="text-cyan-300"
                    />
                  </div>

                  <span className="text-[10px] tracking-[0.3em] text-cyan-400">
                    {item.code}
                  </span>

                </div>

                <h3 className="relative text-xl font-bold leading-snug">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>

                {/* Status */}
                <div className="mt-6 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-xs tracking-[0.2em] text-slate-500">
                    ACTIVE DEPLOYMENT SECTOR
                  </span>

                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">

                  <div className="h-[2px] w-16 bg-cyan-400 transition-all duration-500 group-hover:w-28" />

                  <ArrowRight
                    size={18}
                    className="text-cyan-300 transition-transform duration-500 group-hover:translate-x-2"
                  />

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Strip */}
        <div className="mt-20 rounded-[32px] border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-10">

          <div className="grid gap-6 md:grid-cols-4 text-center">

            {[
              ["08+", "Industry Verticals"],
              ["24/7", "Monitoring Capability"],
              ["AI", "Decision Intelligence"],
              ["360°", "Operational Coverage"],
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

      </div>

    </section>
  );
}