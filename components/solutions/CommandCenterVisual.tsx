"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Activity,
  Shield,
  Radar,
} from "lucide-react";

export default function CommandCenterVisual() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CENTER CORE */}
      <div className="absolute inset-0 flex items-center justify-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[220px] w-[220px] rounded-full border border-cyan-500/10"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[150px] w-[150px] rounded-full border border-cyan-500/20"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-[0_0_120px_cyan]"
        >
          <MonitorSmartphone size={34} />
        </motion.div>

      </div>

      {/* NETWORK NODES */}

      {[
        { top: "18%", left: "20%", icon: Shield },
        { top: "18%", right: "20%", icon: Radar },
        { bottom: "18%", left: "20%", icon: Activity },
        { bottom: "18%", right: "20%", icon: Shield },
      ].map((node, i) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
            style={node}
          >
            <Icon size={22} />
          </motion.div>
        );
      })}

      {/* CONNECTION LINES */}

      <svg className="absolute inset-0 h-full w-full">

        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="18%"
          stroke="rgba(0,255,255,.15)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="18%"
          stroke="rgba(0,255,255,.15)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="82%"
          stroke="rgba(0,255,255,.15)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="82%"
          stroke="rgba(0,255,255,.15)"
        />

      </svg>

      {/* DATA STREAMS */}

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["100%", "-100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute h-10 w-[2px] bg-cyan-400/40"
          style={{
            left: `${10 + i * 8}%`,
          }}
        />
      ))}

      {/* LIVE STATS */}

      <div className="absolute left-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-4">
        <p className="text-[10px] text-slate-400">
          ACTIVE NODES
        </p>

        <p className="mt-1 text-xl font-bold text-cyan-300">
          128
        </p>
      </div>

      <div className="absolute right-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-4">
        <p className="text-[10px] text-slate-400">
          INCIDENTS
        </p>

        <p className="mt-1 text-xl font-bold text-green-400">
          0
        </p>
      </div>

      <div className="absolute left-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-4">
        <p className="text-[10px] text-slate-400">
          SYSTEM HEALTH
        </p>

        <p className="mt-1 text-xl font-bold text-cyan-300">
          99.9%
        </p>
      </div>

      <div className="absolute right-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-4">
        <p className="text-[10px] text-slate-400">
          RESPONSE TIME
        </p>

        <p className="mt-1 text-xl font-bold text-cyan-300">
          0.8s
        </p>
      </div>

      {/* ALERT FEED */}

      <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-xl border border-cyan-500/20 bg-black/60 px-4 py-2 text-xs text-cyan-300">
        COMMAND CENTER ONLINE
      </div>

      {/* PULSING NODES */}

      {[...Array(14)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
          className="absolute h-2 w-2 rounded-full bg-cyan-400"
          style={{
            left: `${8 + (i % 7) * 12}%`,
            top: `${20 + Math.floor(i / 7) * 50}%`,
          }}
        />
      ))}

    </div>
  );
}