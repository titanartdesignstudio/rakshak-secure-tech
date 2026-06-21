"use client";

import { motion } from "framer-motion";
import { Radar } from "lucide-react";

export default function BorderVisual() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Radar Rings */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="h-[380px] w-[380px] rounded-full border border-cyan-500/10" />
        <div className="absolute h-[280px] w-[280px] rounded-full border border-cyan-500/10" />
        <div className="absolute h-[180px] w-[180px] rounded-full border border-cyan-500/10" />

      </div>

      {/* Radar Sweep */}
      <div className="absolute inset-0 flex items-center justify-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[380px] w-[380px]"
        >
          <div
            className="
              absolute left-1/2 top-1/2
              h-[190px] w-[2px]
              origin-bottom
              -translate-x-1/2 -translate-y-full
              bg-gradient-to-t
              from-cyan-400
              to-transparent
            "
          />
        </motion.div>

      </div>

      {/* Threat Nodes */}
      {[
        { top: "22%", left: "25%" },
        { top: "30%", left: "70%" },
        { top: "65%", left: "20%" },
        { top: "72%", left: "78%" },
        { top: "48%", left: "82%" },
      ].map((node, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute"
          style={node}
        >
          <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_15px_red]" />
        </motion.div>
      ))}

      {/* Sensor Nodes */}
      {[
        { top: "18%", left: "50%" },
        { top: "50%", left: "15%" },
        { top: "50%", left: "85%" },
        { top: "82%", left: "50%" },
      ].map((node, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute"
          style={node}
        >
          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_cyan]" />
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">
        <line
          x1="50%"
          y1="50%"
          x2="25%"
          y2="22%"
          stroke="rgba(0,255,255,.15)"
        />
        <line
          x1="50%"
          y1="50%"
          x2="70%"
          y2="30%"
          stroke="rgba(0,255,255,.15)"
        />
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="65%"
          stroke="rgba(0,255,255,.15)"
        />
        <line
          x1="50%"
          y1="50%"
          x2="78%"
          y2="72%"
          stroke="rgba(0,255,255,.15)"
        />
      </svg>

      {/* Core Radar */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-[0_0_100px_cyan]"
        >
          <Radar size={30} />
        </motion.div>
      </div>

      {/* HUD Panels */}
      <div className="absolute left-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        BORDER GRID ACTIVE
      </div>

      <div className="absolute right-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        THREATS DETECTED: 05
      </div>

      <div className="absolute bottom-6 left-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        SATELLITE LINK ONLINE
      </div>

      <div className="absolute bottom-6 right-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        RESPONSE READY
      </div>

    </div>
  );
}