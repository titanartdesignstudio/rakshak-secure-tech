"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Radar,
  Shield,
  Activity,
  Layers,
  Database,
  Zap,
  Globe,
} from "lucide-react";

import TechnologyHero from "@/components/technology/TechnologyHero";
import AICore from "@/components/technology/AICore";
import TechnologyArchitecture from "@/components/technology/TechnologyArchitecture";
import CommandCenter from "@/components/technology/CommandCenter";

function FloatBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
        className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]"
      />
    </div>
  );
}

export default function TechnologyPage() {
  return (
    <main className="relative overflow-hidden bg-[#070B18] text-white">

      {/* GLOBAL ENERGY LAYER */}
      <FloatBg />

      {/* HERO SYSTEM */}
      <TechnologyHero />

      {/* AI CORE ORBIT SYSTEM */}
      <AICore />

      {/* ARCHITECTURE FLOW */}
      <TechnologyArchitecture />

      {/* COMMAND CENTER (WAR ROOM CORE) */}
      <CommandCenter />

      {/* TECH STACK GRID */}
      <section className="relative mx-auto max-w-7xl px-4 py-28">

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            SYSTEM MODULES
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Core Intelligence Infrastructure
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            A unified stack powering surveillance, prediction, defense automation
            and real-time command decision systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              icon: Cpu,
              title: "AI Vision Engine",
              desc: "Real-time object detection, tracking & identity mapping",
            },
            {
              icon: Radar,
              title: "Threat Intelligence",
              desc: "Behavior prediction & anomaly detection system",
            },
            {
              icon: Shield,
              title: "Autonomous Defense Layer",
              desc: "Automated response & protection orchestration",
            },
            {
              icon: Activity,
              title: "Live Monitoring Grid",
              desc: "Continuous situational awareness network",
            },
            {
              icon: Layers,
              title: "Edge AI Network",
              desc: "Distributed ultra-low latency processing nodes",
            },
            {
              icon: Database,
              title: "Secure Data Core",
              desc: "Encrypted cloud infrastructure & storage system",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl overflow-hidden"
            >

              {/* glow line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_60%)]" />

              <item.icon className="text-cyan-400" size={34} />

              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400 text-sm">
                {item.desc}
              </p>

              {/* pulse dot */}
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mt-6 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_cyan]"
              />
            </motion.div>
          ))}

        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="mx-auto max-w-7xl px-4 py-24">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            ["99.7%", "AI Accuracy Rate"],
            ["24/7", "Active Surveillance"],
            ["<100ms", "Response Latency"],
            ["500+", "Active Deployments"],
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
            >

              <h3 className="text-5xl font-bold text-cyan-400">
                {item[0]}
              </h3>

              <p className="mt-4 text-slate-400">
                {item[1]}
              </p>

            </motion.div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-r from-[#005BAC]/20 to-cyan-500/10 p-14 text-center backdrop-blur-xl"
        >

          {/* moving light sweep */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          />

          <h2 className="text-4xl font-bold relative">
            Next-Gen Security Starts Here
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300 relative">
            Deploy AI-driven surveillance, autonomous command systems and real-time
            intelligence infrastructure at scale.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 relative">

            <button className="rounded-xl bg-[#005BAC] px-8 py-4 font-semibold hover:scale-105 transition">
              Request Demo
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10 transition">
              Contact Team
            </button>

          </div>

        </motion.div>

      </section>

    </main>
  );
}