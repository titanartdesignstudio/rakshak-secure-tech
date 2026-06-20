"use client";

import { motion } from "framer-motion";

export default function HeroOrb() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Massive Background Glow */}
      <div className="absolute h-[850px] w-[850px] rounded-full bg-blue-500/20 blur-[200px]" />

      {/* Outer Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[700px] w-[700px] rounded-full border border-blue-500/10"
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)]" />

        <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />
      </motion.div>

      {/* Main Orb */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative h-[620px] w-[620px] rounded-full border border-blue-400/20"
      >
        {/* Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-10 rounded-full border border-cyan-400/20"
        />

        {/* Ring 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-20 rounded-full border border-blue-500/20"
        />

        {/* Ring 4 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-32 rounded-full border border-cyan-500/20"
        />

        {/* Orbit Node 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.9)]" />
        </motion.div>

        {/* Orbit Node 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-10"
        >
          <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.9)]" />
        </motion.div>

        {/* Orbit Node 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-20"
        >
          <div className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(103,232,249,0.9)]" />
        </motion.div>

        {/* Orbit Node 4 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-32"
        >
          <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_25px_rgba(147,197,253,0.9)]" />
        </motion.div>

        {/* Center Core */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute inset-[140px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#005BAC] via-[#0A6ED1] to-cyan-500 shadow-[0_0_140px_rgba(0,91,172,0.8)]"
        >
          {/* Inner Rings */}
          <div className="absolute inset-6 rounded-full border border-white/10" />
          <div className="absolute inset-12 rounded-full border border-cyan-400/10" />
          <div className="absolute inset-20 rounded-full border border-blue-400/10" />

          <div className="text-center">
            <h3 className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-7xl font-extrabold text-transparent">
              RST
            </h3>

            <p className="mt-3 text-sm font-medium uppercase tracking-[8px] text-blue-100">
              SECURITY ECOSYSTEM
            </p>

            <div className="mx-auto mt-6 h-px w-24 bg-white/30" />

            <p className="mt-4 text-xs uppercase tracking-[4px] text-cyan-200">
              Surveillance • Analytics • Intelligence
            </p>
          </div>
        </motion.div>

        {/* Floating Label 1 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-6 top-28 rounded-xl border border-cyan-400/20 bg-slate-900/70 px-4 py-2 backdrop-blur-xl"
        >
          <span className="text-xs font-semibold text-cyan-300">
            Facial Recognition
          </span>
        </motion.div>

        {/* Floating Label 2 */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute right-6 top-36 rounded-xl border border-blue-400/20 bg-slate-900/70 px-4 py-2 backdrop-blur-xl"
        >
          <span className="text-xs font-semibold text-blue-300">
            Threat Intelligence
          </span>
        </motion.div>

        {/* Floating Label 3 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-24 left-8 rounded-xl border border-cyan-400/20 bg-slate-900/70 px-4 py-2 backdrop-blur-xl"
        >
          <span className="text-xs font-semibold text-cyan-300">
            Command Center
          </span>
        </motion.div>

        {/* Floating Label 4 */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-8 rounded-xl border border-blue-400/20 bg-slate-900/70 px-4 py-2 backdrop-blur-xl"
        >
          <span className="text-xs font-semibold text-blue-300">
            24/7 Monitoring
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}