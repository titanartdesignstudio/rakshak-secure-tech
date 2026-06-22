"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ScanFace,
  Eye,
  Shield,
  Building2,
  MonitorSmartphone,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Advanced machine learning models delivering predictive security intelligence and operational automation.",
    code: "AI-01",
  },
  {
    icon: ScanFace,
    title: "Biometric Intelligence",
    desc: "Facial recognition, identity verification and watchlist management systems.",
    code: "BIO-02",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Real-time video analytics, object detection and behavioral intelligence.",
    code: "CV-03",
  },
  {
    icon: Shield,
    title: "Threat Analytics",
    desc: "Automated threat detection, risk assessment and incident response intelligence.",
    code: "TA-04",
  },
  {
    icon: Building2,
    title: "Critical Infrastructure",
    desc: "Integrated security ecosystems for airports, utilities, industrial zones and public infrastructure.",
    code: "CI-05",
  },
  {
    icon: MonitorSmartphone,
    title: "Command & Control",
    desc: "Centralized monitoring, operational awareness and multi-site intelligence platforms.",
    code: "CC-06",
  },
];

export default function CapabilityGrid() {
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
            CORE CAPABILITIES
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            Engineering
            <span className="block text-cyan-400">
              Security Intelligence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Rakshak Secure Tech combines artificial intelligence,
            surveillance technologies, analytics and command systems
            into a unified security ecosystem designed for mission-critical
            environments.
          </p>

        </div>

        {/* Capability Grid */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {capabilities.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/30 hover:shadow-[0_0_70px_rgba(0,255,255,0.08)]"
              >

                {/* Number */}
                <div className="absolute right-4 top-0 text-[90px] font-black text-white/[0.03]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Glow */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                      <Icon
                        size={28}
                        className="text-cyan-300"
                      />
                    </div>

                    <span className="text-[10px] tracking-[0.3em] text-cyan-400">
                      {item.code}
                    </span>

                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  <div className="mt-7 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-xs tracking-[0.2em] text-slate-500">
                      CORE COMPETENCY
                    </span>

                  </div>

                  <div className="mt-8 h-[2px] w-16 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Framework Strip */}

        <div className="mt-24 overflow-hidden rounded-[32px] border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-10">

          <div className="text-center">

            <h3 className="text-3xl font-bold">
              Unified Security Ecosystem
            </h3>

            <p className="mt-3 text-slate-400">
              Integrated technologies working together as a centralized
              intelligence and security framework.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            {[
              ["AI", "Intelligence Layer"],
              ["24/7", "Operational Monitoring"],
              ["360°", "Situational Awareness"],
              ["LIVE", "Threat Analytics"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >

                <h3 className="text-4xl font-bold text-cyan-400">
                  {value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}