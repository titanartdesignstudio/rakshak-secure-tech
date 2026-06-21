"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

export default function VehicleVisual() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Highway Lanes */}
      <div className="absolute left-0 right-0 top-[35%] h-[2px] bg-white/10" />
      <div className="absolute left-0 right-0 top-[50%] h-[2px] bg-white/10" />
      <div className="absolute left-0 right-0 top-[65%] h-[2px] bg-white/10" />

      {/* Moving Vehicles */}
      {[0, 1, 2].map((lane) => (
        <motion.div
          key={lane}
          animate={{
            x: ["-10%", "110%"],
          }}
          transition={{
            duration: 4 + lane,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            top: `${34 + lane * 15}%`,
          }}
        >
          <div className="flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-2">
            <Car size={16} className="text-cyan-400" />
            <span className="text-xs text-cyan-300">
              MH01AB{lane + 245}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Tracking Nodes */}
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
            delay: i * 0.2,
          }}
          className="absolute h-2 w-2 rounded-full bg-cyan-400"
          style={{
            left: `${10 + i * 7}%`,
            top: `${15 + (i % 4) * 12}%`,
          }}
        />
      ))}

      {/* Central AI Engine */}
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
          className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-500/30"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_80px_cyan]">
            <Car size={28} />
          </div>
        </motion.div>
      </div>

      {/* ANPR Labels */}
      <div className="absolute left-8 top-8 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        ANPR ACTIVE
      </div>

      <div className="absolute right-8 bottom-8 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        LIVE TRACKING
      </div>
    </div>
  );
}