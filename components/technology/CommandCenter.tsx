"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Shield,
  AlertTriangle,
  Camera,
  Eye,
  Radar,
  Wifi,
  Video,
  Activity,
  Satellite,
  Cpu,
  Zap,
  Crosshair,
} from "lucide-react";

/* ---------------- LIVE COUNTER ---------------- */
function useCounter(base: number, speed = 60) {
  const [val, setVal] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setVal((v) => v + Math.floor(Math.random() * 3));
    }, speed);
    return () => clearInterval(id);
  }, [speed]);

  return val;
}

/* ---------------- DATA ---------------- */

const alerts = [
  "CRITICAL: Drone breach in RED ZONE-7",
  "HIGH: Face match detected",
  "MEDIUM: Crowd anomaly detected",
  "INFO: AI model rebalanced",
];

const cameras = [
  "Gate A - MAIN FEED",
  "North Perimeter",
  "Parking Grid",
  "Control Room",
];

const drones = [
  { top: "25%", left: "18%" },
  { top: "40%", left: "72%" },
  { top: "65%", left: "35%" },
  { top: "78%", left: "80%" },
];

/* ---------------- COMPONENT ---------------- */

export default function CommandCenterV6() {
  const threats = useCounter(7);
  const camerasOnline = useCounter(2451, 180);
  const targets = useCounter(142, 300);

  return (
    <section className="relative overflow-hidden py-28 bg-[#040812] text-white">

      {/* BACKGROUND GLOW LAYERS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 animate-pulse bg-red-500/5" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center">
          <span className="px-4 py-2 text-sm rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
            COMMAND INTELLIGENCE GRID
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Military AI Surveillance Command Room
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-400">
            Real-time drone tracking, CCTV fusion, predictive threat AI,
            and autonomous defense coordination system.
          </p>
        </div>

        {/* ALERT BAR */}
        <div className="mt-10 overflow-hidden rounded-xl border border-red-500/20 bg-black/60">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap px-6 py-3 text-sm text-red-300"
          >
            {alerts.concat(alerts).map((a, i) => (
              <span key={i} className="flex items-center gap-2">
                <AlertTriangle size={14} /> {a}
              </span>
            ))}
          </motion.div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* LEFT — METRICS */}
          <div className="space-y-4">

            <motion.div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <Shield className="text-cyan-400" />
              <p className="text-sm text-slate-400 mt-2">System Integrity</p>
              <h3 className="text-2xl font-bold">98.4%</h3>
            </motion.div>

            <motion.div className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <AlertTriangle className="text-red-400" />
              <p className="text-sm text-slate-400 mt-2">Active Threats</p>
              <h3 className="text-3xl font-bold text-red-400">{threats}</h3>
            </motion.div>

            <motion.div className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <Camera className="text-cyan-400" />
              <p className="text-sm text-slate-400 mt-2">Cameras Online</p>
              <h3 className="text-3xl font-bold">{camerasOnline}</h3>
            </motion.div>

            <motion.div className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <Eye className="text-yellow-400" />
              <p className="text-sm text-slate-400 mt-2">Targets Tracked</p>
              <h3 className="text-3xl font-bold text-yellow-300">{targets}</h3>
            </motion.div>
          </div>

          {/* CENTER — MAIN RADAR CORE */}
          <div className="lg:col-span-2 relative">

            <div className="relative h-[700px] rounded-[36px] border border-cyan-500/20 bg-black/70 overflow-hidden">

              {/* GRID */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />

              {/* SCAN SWEEP */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-[520px] w-[520px] rounded-full border border-cyan-500/20" />
              </motion.div>

              {/* RADAR RINGS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[360px] w-[360px] rounded-full border border-cyan-400/20" />
                <div className="h-[240px] w-[240px] rounded-full border border-cyan-400/20" />
              </div>

              {/* DRONES */}
              {drones.map((d, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                  className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_cyan]"
                  style={{ top: d.top, left: d.left }}
                />
              ))}

              {/* CENTER CORE */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 shadow-[0_0_140px_rgba(0,200,255,0.8)] flex items-center justify-center"
                >
                  <Radar size={42} />
                </motion.div>
              </div>

              {/* CCTV FEEDS (REALISTIC GRID FEEL) */}
              <div className="absolute left-4 bottom-4 space-y-2">
                {cameras.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-white/10 bg-black/60"
                  >
                    <Video size={12} className="text-cyan-400" />
                    {c}
                    <span className="ml-auto text-green-400 animate-pulse">
                      LIVE
                    </span>
                  </div>
                ))}
              </div>

              {/* RIGHT HUD */}
              <div className="absolute top-4 right-4 bg-black/60 border border-cyan-500/20 p-3 rounded-xl">
                <p className="text-xs text-cyan-300">NETWORK</p>
                <p className="text-cyan-400 font-bold">STABLE</p>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/60 border border-yellow-500/20 p-3 rounded-xl">
                <p className="text-xs text-yellow-300">TARGETS</p>
                <p className="text-yellow-400 font-bold">LOCKED</p>
              </div>

              <div className="absolute top-4 left-4 bg-black/60 border border-red-500/20 p-3 rounded-xl">
                <p className="text-xs text-red-300">STATUS</p>
                <p className="text-red-400 font-bold animate-pulse">
                  ACTIVE DEFENSE
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}