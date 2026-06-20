"use client";

import { motion } from "framer-motion";
import {
  ScanFace,
  Car,
  Radar,
  Shield,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

const solutions = [
  {
    icon: ScanFace,
    title: "Facial Recognition",
    desc: "Real-time biometric identification with watchlist matching and identity verification across distributed environments.",
    points: ["Live Face Match", "Watchlist Alerts", "Identity Tracking"],
  },
  {
    icon: Car,
    title: "Vehicle Intelligence",
    desc: "AI-powered ANPR system for vehicle tracking, traffic intelligence and movement analytics.",
    points: ["Number Plate Recognition", "Route Tracking", "Traffic Insights"],
  },
  {
    icon: Radar,
    title: "Border Intelligence",
    desc: "Advanced perimeter monitoring system designed for high-security zones and border surveillance.",
    points: ["Perimeter Defense", "Intrusion Detection", "Remote Monitoring"],
  },
  {
    icon: Shield,
    title: "Cargo Security",
    desc: "Intelligent cargo inspection and logistics screening for critical infrastructure.",
    points: ["Cargo Scanning", "Risk Scoring", "Fraud Detection"],
  },
  {
    icon: Eye,
    title: "Smart Surveillance",
    desc: "AI-powered monitoring system for behavior detection and anomaly intelligence.",
    points: ["Behavior Detection", "Incident Alerts", "Live Analytics"],
  },
  {
    icon: MonitorSmartphone,
    title: "Command Center",
    desc: "Unified intelligence dashboard for monitoring, control and response orchestration.",
    points: ["Central Dashboard", "Multi-Site Control", "Live Intelligence"],
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#071226] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden py-28 text-center">
        
        {/* soft grid glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.12),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-3xl px-4"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-wider text-cyan-300">
            SECURITY SOLUTIONS
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Intelligence Driven{" "}
            <span className="text-cyan-400">Security Systems</span>
          </h1>

          <p className="mt-6 text-slate-400 leading-relaxed">
            Modular AI-powered systems designed for governments,
            enterprises, and mission-critical infrastructure.
          </p>
        </motion.div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-28">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
              >

                {/* glow */}
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                {/* icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Icon className="text-cyan-300" size={22} />
                </div>

                {/* title */}
                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="mt-3 text-sm text-slate-400 leading-6">
                  {item.desc}
                </p>

                {/* points */}
                <div className="mt-6 space-y-2 text-xs text-slate-500">
                  {item.points.map((p) => (
                    <div key={p}>• {p}</div>
                  ))}
                </div>

                {/* underline */}
                <div className="mt-8 h-[1px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STRIP */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-3xl font-bold">
                Modular Security Architecture
              </h2>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Each solution works independently or as part of a unified AI ecosystem,
                enabling scalable deployment across enterprise environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">

              {[
                ["AI", "Core Engine"],
                ["24/7", "Monitoring"],
                ["LIVE", "Analytics"],
                ["360°", "Coverage"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl bg-white/10 p-5"
                >
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {a}
                  </h3>
                  <p className="text-xs text-slate-300">{b}</p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}