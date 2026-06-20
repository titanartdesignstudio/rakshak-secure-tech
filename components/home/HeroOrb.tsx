"use client";

import { motion } from "framer-motion";

export default function HeroOrb() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow (STATIC - no rotation) */}
      <div className="absolute h-[850px] w-[850px] rounded-full bg-blue-500/20 blur-[200px]" />

      {/* OUTER ORBIT (only ring rotates) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute h-[700px] w-[700px] rounded-full border border-blue-500/10"
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400" />
        <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500" />
      </motion.div>

      {/* INNER ORBIT SYSTEM (separate stable layers) */}
      <div className="relative h-[620px] w-[620px] rounded-full border border-blue-400/20">

        {/* Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-cyan-400/20"
        />

        {/* Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 rounded-full border border-blue-500/20"
        />

        {/* Ring 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute inset-20 rounded-full border border-cyan-500/20"
        />

        {/* Nodes (only orbit, no container rotation) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-400" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10"
        >
          <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-blue-500" />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute inset-20"
        >
          <div className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-300" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute inset-32"
        >
          <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-300" />
        </motion.div>

        {/* CENTER (NO ROTATION EVER) */}
        <div className="absolute inset-[140px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#005BAC] via-[#0A6ED1] to-cyan-500 shadow-[0_0_140px_rgba(0,91,172,0.8)]">

          <div className="text-center">
            <h3 className="text-7xl font-extrabold text-white">
              RST
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[8px] text-blue-100">
              SECURITY ECOSYSTEM
            </p>

            <div className="mx-auto mt-6 h-px w-24 bg-white/30" />

            <p className="mt-4 text-xs uppercase tracking-[4px] text-cyan-200">
              Surveillance • Analytics • Intelligence
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}