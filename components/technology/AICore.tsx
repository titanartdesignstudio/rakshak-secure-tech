"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- LIVE COUNTER ---------------- */
function useCounter(base: number, speed = 120) {
  const [val, setVal] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setVal((v) => v + Math.floor(Math.random() * 2));
    }, speed);

    return () => clearInterval(id);
  }, [speed]);

  return val;
}

const leftFeatures = [
  "Facial Recognition",
  "Crowd Analytics",
  "Behavior Analysis",
];

const rightFeatures = [
  "Threat Intelligence",
  "Command Center Sync",
  "Edge AI Processing",
];

export default function AICore() {
  const intelligence = useCounter(97.4, 500);

  return (
    <section className="relative overflow-hidden py-32 bg-[#050A12] text-white">

      {/* ENERGY BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 animate-pulse bg-cyan-500/5" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            NEURAL INTELLIGENCE CORE
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Living AI Decision Engine
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            A continuously evolving neural system processing surveillance,
            threats, behavior patterns and predictive intelligence in real time.
          </p>
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-3">

          {/* LEFT FEATURES */}
          <div className="space-y-6">
            {leftFeatures.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <h3 className="text-cyan-300 font-semibold">{item}</h3>
              </motion.div>
            ))}
          </div>

          {/* CENTER CORE */}
          <div className="relative flex h-[450px] items-center justify-center">

            {/* OUTER ENERGY FIELD */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute h-[360px] w-[360px] rounded-full border border-cyan-500/20"
            />

            {/* MID FIELD */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute h-[260px] w-[260px] rounded-full border border-blue-500/20"
            />

            {/* INNER FIELD */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[180px] w-[180px] rounded-full border border-cyan-300/20"
            />

            {/* ENERGY NODES */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-[20%] left-[50%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_cyan]"
            />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-[25%] right-[35%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_blue]"
            />

            {/* CORE */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-[#005BAC] via-cyan-500 to-blue-500 shadow-[0_0_120px_rgba(0,200,255,0.9)]"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold">AI CORE</h3>
                <p className="text-xs tracking-[3px] text-cyan-100 mt-2">
                  ACTIVE NEURAL SYSTEM
                </p>

                <div className="mt-3 text-cyan-200 text-sm font-bold">
                  {intelligence.toFixed(1)}% INTELLIGENCE
                </div>
              </div>
            </motion.div>

            {/* PULSE WAVES */}
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute h-40 w-40 rounded-full border border-cyan-400/40"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">
            {rightFeatures.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <h3 className="text-cyan-300 font-semibold">{item}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}