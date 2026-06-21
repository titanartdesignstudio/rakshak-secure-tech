"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function CargoVisual() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Scanner Frame */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-500/20">

        {/* Scanning Beam */}
        <motion.div
          animate={{
            x: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_25px_cyan]"
        />

        {/* Cargo Boxes */}
        <div className="absolute left-8 top-12 h-16 w-16 border border-cyan-500/30 bg-cyan-500/10" />
        <div className="absolute left-28 top-20 h-20 w-20 border border-cyan-500/30 bg-cyan-500/10" />
        <div className="absolute left-56 top-14 h-14 w-14 border border-cyan-500/30 bg-cyan-500/10" />

        {/* Threat Highlight */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-32 top-24 h-10 w-10 rounded border border-red-500 bg-red-500/20"
        />
      </div>

      {/* Conveyor Belt */}
      <div className="absolute bottom-24 left-0 right-0 h-2 bg-white/10" />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            x: ["-20%", "120%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
          className="absolute bottom-16"
        >
          <div className="h-10 w-16 rounded border border-cyan-500/20 bg-cyan-500/10" />
        </motion.div>
      ))}

      {/* Data Nodes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute h-2 w-2 rounded-full bg-cyan-400"
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + (i % 4) * 12}%`,
          }}
        />
      ))}

      {/* Core AI */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-500/20"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-[0_0_80px_cyan]">
            <Shield size={24} />
          </div>
        </motion.div>
      </div>

      {/* HUD */}
      <div className="absolute left-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        X-RAY SCANNER ACTIVE
      </div>

      <div className="absolute right-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        RISK SCORE: 97%
      </div>

      <div className="absolute left-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        CONTAINER VERIFIED
      </div>

      <div className="absolute right-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        AI INSPECTION ONLINE
      </div>

    </div>
  );
}