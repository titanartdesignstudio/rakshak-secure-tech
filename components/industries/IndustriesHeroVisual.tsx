"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Train,
  Plane,
  Ship,
  Building2,
  Factory,
  RadioTower,
  Landmark,
} from "lucide-react";

const industries = [
  {
    icon: Shield,
    label: "Defense",
    x: "50%",
    y: "12%",
  },
  {
    icon: Plane,
    label: "Aviation",
    x: "80%",
    y: "25%",
  },
  {
    icon: Ship,
    label: "Ports",
    x: "88%",
    y: "50%",
  },
  {
    icon: RadioTower,
    label: "Telecom",
    x: "80%",
    y: "75%",
  },
  {
    icon: Factory,
    label: "Industry",
    x: "50%",
    y: "88%",
  },
  {
    icon: Train,
    label: "Railways",
    x: "20%",
    y: "75%",
  },
  {
    icon: Landmark,
    label: "Government",
    x: "12%",
    y: "50%",
  },
  {
    icon: Building2,
    label: "Enterprise",
    x: "20%",
    y: "25%",
  },
];

export default function IndustriesHeroVisual() {
  return (
    <div className="relative h-[620px] overflow-hidden rounded-[36px] border border-cyan-500/20 bg-[#04111f]">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      {/* Rings */}
      <div className="absolute inset-0 flex items-center justify-center">

        {[420, 300, 180].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-cyan-500/10"
            style={{
              width: size,
              height: size,
            }}
          />
        ))}

      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">

        <line x1="50%" y1="12%" x2="80%" y2="25%" stroke="rgba(0,255,255,.15)" />
        <line x1="80%" y1="25%" x2="88%" y2="50%" stroke="rgba(0,255,255,.15)" />
        <line x1="88%" y1="50%" x2="80%" y2="75%" stroke="rgba(0,255,255,.15)" />
        <line x1="80%" y1="75%" x2="50%" y2="88%" stroke="rgba(0,255,255,.15)" />
        <line x1="50%" y1="88%" x2="20%" y2="75%" stroke="rgba(0,255,255,.15)" />
        <line x1="20%" y1="75%" x2="12%" y2="50%" stroke="rgba(0,255,255,.15)" />
        <line x1="12%" y1="50%" x2="20%" y2="25%" stroke="rgba(0,255,255,.15)" />
        <line x1="20%" y1="25%" x2="50%" y2="12%" stroke="rgba(0,255,255,.15)" />

      </svg>

      {/* Center Hub */}
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

          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-50" />

          <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700">

            <div className="text-center">

              <h3 className="text-5xl font-bold text-white">
                AI
              </h3>

              <p className="mt-2 text-xs tracking-[0.4em] text-cyan-100">
                INTELLIGENCE HUB
              </p>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Industry Nodes */}
      {industries.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-black/60 px-3 py-2 backdrop-blur-xl">

              <Icon
                size={16}
                className="text-cyan-300"
              />

              <span className="text-xs font-medium whitespace-nowrap">
                {item.label}
              </span>

            </div>
          </motion.div>
        );
      })}

      {/* Stats */}
      <div className="absolute left-5 top-5 rounded-xl border border-cyan-500/20 bg-black/60 px-5 py-4 backdrop-blur-xl">
        <p className="text-[10px] tracking-[3px] text-cyan-400">
          INDUSTRIES
        </p>
        <h3 className="mt-1 text-3xl font-bold">
          08+
        </h3>
      </div>

      <div className="absolute right-5 top-5 rounded-xl border border-cyan-500/20 bg-black/60 px-5 py-4 backdrop-blur-xl">
        <p className="text-[10px] tracking-[3px] text-cyan-400">
          COVERAGE
        </p>
        <h3 className="mt-1 text-3xl font-bold text-cyan-300">
          PAN INDIA
        </h3>
      </div>

      <div className="absolute left-5 bottom-5 rounded-xl border border-cyan-500/20 bg-black/60 px-5 py-4 backdrop-blur-xl">
        <p className="text-[10px] tracking-[3px] text-cyan-400">
          DEPLOYMENT
        </p>
        <h3 className="mt-1 text-3xl font-bold">
          100+
        </h3>
      </div>

      <div className="absolute right-5 bottom-5 rounded-xl border border-cyan-500/20 bg-black/60 px-5 py-4 backdrop-blur-xl">
        <p className="text-[10px] tracking-[3px] text-cyan-400">
          STATUS
        </p>
        <h3 className="mt-1 text-3xl font-bold text-green-400">
          ACTIVE
        </h3>
      </div>

    </div>
  );
}