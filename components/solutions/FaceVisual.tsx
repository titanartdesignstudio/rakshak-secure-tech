"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function FaceVisual() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Scan Line */}
      <motion.div
        animate={{ y: ["0%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_20px_cyan]"
      />

      {/* Face Frame */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[180px] -translate-x-1/2 -translate-y-1/2">

        <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 h-8 w-8 border-l-2 border-b-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 h-8 w-8 border-r-2 border-b-2 border-cyan-400" />

      </div>

      {/* Radar Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
      />

      {/* AI Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_100px_cyan]"
        >
          <Activity size={30} />
        </motion.div>
      </div>

      {/* Data Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + i * 0.15,
            repeat: Infinity,
          }}
          className="absolute h-2 w-2 rounded-full bg-cyan-400"
          style={{
            top: `${15 + (i % 6) * 12}%`,
            left: `${15 + (i % 4) * 18}%`,
          }}
        />
      ))}
    </div>
  );
}