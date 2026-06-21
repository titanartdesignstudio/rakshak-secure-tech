"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function SurveillanceVisual() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Camera Tiles */}
      <div className="absolute inset-6 grid grid-cols-3 gap-4">

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl border border-cyan-500/10 bg-black/60"
          >

            {/* Camera Noise */}
            <motion.div
              animate={{
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute inset-0 bg-cyan-500/5"
            />

            {/* Detection Box */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute left-[35%] top-[30%] h-12 w-10 border-2 border-cyan-400"
            />

            {/* Scan Line */}
            <motion.div
              animate={{
                y: ["0%", "500%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-[2px] bg-cyan-400/60"
            />

          </div>
        ))}
      </div>

      {/* Center AI Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-500/20"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-[0_0_90px_cyan]">
            <Eye size={28} />
          </div>
        </motion.div>

      </div>

      {/* AI Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
          className="absolute h-2 w-2 rounded-full bg-cyan-400"
          style={{
            left: `${10 + (i % 6) * 14}%`,
            top: `${15 + Math.floor(i / 6) * 60}%`,
          }}
        />
      ))}

      {/* Alert Markers */}
      {[1, 4].map((i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="absolute rounded-lg border border-red-500 bg-red-500/10 px-2 py-1 text-[10px] text-red-400"
          style={{
            top: i === 1 ? "18%" : "68%",
            right: i === 1 ? "14%" : "24%",
          }}
        >
          ALERT
        </motion.div>
      ))}

      {/* HUD */}
      <div className="absolute left-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        VIDEO ANALYTICS ACTIVE
      </div>

      <div className="absolute right-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        48 CAMERAS ONLINE
      </div>

      <div className="absolute left-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        BEHAVIOR AI RUNNING
      </div>

      <div className="absolute right-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        LIVE THREAT DETECTION
      </div>

    </div>
  );
}