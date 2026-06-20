"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Shield, Activity } from "lucide-react";

export default function TechnologyHeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#050A16] text-white">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* ENERGY FOG */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              <Cpu size={16} />
              AI Intelligence Layer
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[0.95]">
              Data
              <br />
              <span className="text-cyan-400">Neural Core</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-slate-300">
              Multi-layer AI architecture processing surveillance,
              sensors, drones and real-time intelligence into a unified
              decision engine.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-[#005BAC] px-7 py-4 font-semibold hover:scale-105 transition">
                Explore Layer
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-white/10 px-7 py-4 hover:bg-white/5 transition">
                Documentation
              </button>
            </div>

            <div className="mt-10 flex gap-6 text-sm text-slate-400">
              <span>✓ Neural Processing</span>
              <span>✓ Data Fusion</span>
              <span>✓ Live Intelligence</span>
            </div>
          </div>

          {/* RIGHT — NEW VISUAL SYSTEM (NO RADAR) */}
          <div className="relative h-[520px] flex items-center justify-center">

            {/* CENTRAL ENERGY SPINE */}
            <motion.div
              animate={{ scaleY: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-[2px] h-[420px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-70"
            />

            {/* FLOATING DATA CUBES */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                }}
                className="absolute h-3 w-3 rotate-45 bg-cyan-400 shadow-[0_0_20px_cyan]"
                style={{
                  top: `${15 + i * 10}%`,
                  left: i % 2 === 0 ? "30%" : "70%",
                }}
              />
            ))}

            {/* NEURAL CONNECTION LINES */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <motion.path
                d="M100,100 C200,50 300,150 400,100"
                stroke="cyan"
                strokeWidth="1"
                fill="none"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.path
                d="M80,300 C200,200 300,350 420,280"
                stroke="cyan"
                strokeWidth="1"
                fill="none"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </svg>

            {/* CORE NODE (DIFFERENT STYLE) */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 flex h-44 w-44 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005BAC] via-cyan-500 to-blue-500 shadow-[0_0_120px_rgba(0,200,255,0.6)]"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">AI MATRIX</div>
                <div className="text-[10px] tracking-[3px] text-cyan-100 mt-2">
                  PROCESSING LAYER
                </div>
              </div>
            </motion.div>

            {/* FLOATING LABELS */}
            <motion.div className="absolute left-0 top-20 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Vision Engine
            </motion.div>

            <motion.div className="absolute right-0 top-28 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Threat Layer
            </motion.div>

            <motion.div className="absolute bottom-20 left-10 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Data Fusion
            </motion.div>

            <motion.div className="absolute bottom-16 right-10 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Response AI
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}