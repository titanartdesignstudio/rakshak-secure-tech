"use client";

import { motion } from "framer-motion";

const nodes = [
{ x: "20%", y: "25%", label: "CCTV" },
{ x: "78%", y: "22%", label: "ANPR" },
{ x: "28%", y: "72%", label: "FACE AI" },
{ x: "80%", y: "65%", label: "DRONE" },
{ x: "50%", y: "12%", label: "COMMAND" },
{ x: "15%", y: "52%", label: "SENSORS" },
{ x: "88%", y: "45%", label: "EDGE AI" },
];

export default function AboutHeroVisual() {
return ( <div className="relative h-[680px] overflow-hidden rounded-[36px] border border-cyan-500/20 bg-[#04101d]">


  {/* Background Glow */}
  <div className="absolute inset-0">

    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

  </div>

  {/* Radar Rings */}
  <div className="absolute inset-0 flex items-center justify-center">

    {[520, 420, 320, 220].map((size) => (
      <motion.div
        key={size}
        animate={{
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute rounded-full border border-cyan-500/15"
        style={{
          width: size,
          height: size,
        }}
      />
    ))}

  </div>

  {/* Radar Sweep */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2"
  >
    <div className="h-full w-full bg-[conic-gradient(from_0deg,transparent,rgba(0,255,255,0.18),transparent)]" />
  </motion.div>

  {/* SVG Lines */}
  <svg className="absolute inset-0 h-full w-full">

    <line
      x1="20%"
      y1="25%"
      x2="50%"
      y2="12%"
      stroke="rgba(0,255,255,.18)"
    />

    <line
      x1="50%"
      y1="12%"
      x2="78%"
      y2="22%"
      stroke="rgba(0,255,255,.18)"
    />

    <line
      x1="50%"
      y1="12%"
      x2="28%"
      y2="72%"
      stroke="rgba(0,255,255,.18)"
    />

    <line
      x1="28%"
      y1="72%"
      x2="80%"
      y2="65%"
      stroke="rgba(0,255,255,.18)"
    />

    <line
      x1="15%"
      y1="52%"
      x2="88%"
      y2="45%"
      stroke="rgba(0,255,255,.12)"
    />

  </svg>

  {/* Nodes */}
  {nodes.map((node, i) => (
    <motion.div
      key={node.label}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.3,
      }}
      className="absolute"
      style={{
        left: node.x,
        top: node.y,
      }}
    >
      <div className="flex flex-col items-center">

        <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_#00ffff]" />

        <span className="mt-2 text-[10px] tracking-[2px] text-cyan-300">
          {node.label}
        </span>

      </div>
    </motion.div>
  ))}

  {/* Center Core */}
  <div className="absolute inset-0 flex items-center justify-center">

    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="relative"
    >

      <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[90px] opacity-50" />

      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-400 to-blue-600">

        <div className="text-center">

          <h3 className="text-sm font-bold tracking-[2px]">
            RAKSHAK
          </h3>

          <p className="mt-1 text-[8px] tracking-[2px] text-cyan-100">
            COMMAND CORE
          </p>

        </div>

      </div>

    </motion.div>

  </div>

  {/* Top Left */}
  <div className="absolute left-6 top-6 rounded-2xl border border-cyan-500/20 bg-black/60 p-5 backdrop-blur-xl">
    <p className="text-[10px] tracking-[4px] text-cyan-400">
      COMMAND STATUS
    </p>

    <h3 className="mt-2 text-2xl font-bold text-white">
      ONLINE
    </h3>
  </div>

  {/* Top Right */}
  <div className="absolute right-6 top-6 rounded-2xl border border-cyan-500/20 bg-black/60 p-5 backdrop-blur-xl">
    <p className="text-[10px] tracking-[4px] text-cyan-400">
      THREAT LEVEL
    </p>

    <h3 className="mt-2 text-2xl font-bold text-green-400">
      LOW
    </h3>
  </div>

  {/* Bottom HUD */}
  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-4 gap-4">

    <div className="rounded-xl border border-cyan-500/20 bg-black/60 p-4 backdrop-blur-xl">
      <p className="text-[10px] tracking-[3px] text-cyan-400">
        CAMERAS
      </p>
      <h3 className="mt-2 text-2xl font-bold">
        2,486
      </h3>
    </div>

    <div className="rounded-xl border border-cyan-500/20 bg-black/60 p-4 backdrop-blur-xl">
      <p className="text-[10px] tracking-[3px] text-cyan-400">
        FACILITIES
      </p>
      <h3 className="mt-2 text-2xl font-bold">
        124
      </h3>
    </div>

    <div className="rounded-xl border border-cyan-500/20 bg-black/60 p-4 backdrop-blur-xl">
      <p className="text-[10px] tracking-[3px] text-cyan-400">
        THREATS
      </p>
      <h3 className="mt-2 text-2xl font-bold text-yellow-400">
        03
      </h3>
    </div>

    <div className="rounded-xl border border-cyan-500/20 bg-black/60 p-4 backdrop-blur-xl">
      <p className="text-[10px] tracking-[3px] text-cyan-400">
        NETWORK
      </p>
      <h3 className="mt-2 text-2xl font-bold text-cyan-300">
        ACTIVE
      </h3>
    </div>

  </div>

</div>


);
}
