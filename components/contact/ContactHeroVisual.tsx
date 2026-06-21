"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Building2,
  Shield,
  Users,
  Radio,
} from "lucide-react";

const nodes = [
  {
    icon: Building2,
    title: "Government Projects",
    x: "18%",
    y: "22%",
  },
  {
    icon: Shield,
    title: "Defense",
    x: "80%",
    y: "22%",
  },
  {
    icon: Users,
    title: "Sales",
    x: "15%",
    y: "75%",
  },
  {
    icon: Headphones,
    title: "Support",
    x: "82%",
    y: "75%",
  },
];

export default function ContactHeroVisual() {
  return (
    <div className="relative h-[700px] overflow-hidden rounded-[40px] border border-cyan-500/20 bg-[#04101d]">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Lines */}

      <svg className="absolute inset-0 h-full w-full">

        <line
          x1="50%"
          y1="50%"
          x2="18%"
          y2="22%"
          stroke="rgba(0,255,255,.25)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="22%"
          stroke="rgba(0,255,255,.25)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="15%"
          y2="75%"
          stroke="rgba(0,255,255,.25)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="82%"
          y2="75%"
          stroke="rgba(0,255,255,.25)"
        />

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

          <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700">

            <Radio
              size={60}
              className="text-white"
            />

          </div>

        </motion.div>

      </div>

      {/* Nodes */}

      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.title}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
            }}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
              transform: "translate(-50%,-50%)",
            }}
          >

            <div className="rounded-2xl border border-cyan-500/20 bg-black/50 px-4 py-4 backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">

                  <Icon
                    size={18}
                    className="text-cyan-300"
                  />

                </div>

                <span className="text-sm font-medium text-white">
                  {node.title}
                </span>

              </div>

            </div>

          </motion.div>
        );
      })}

      {/* Status */}

      <div className="absolute left-6 top-6 rounded-2xl border border-cyan-500/20 bg-black/50 p-5 backdrop-blur-xl">

        <p className="text-[10px] tracking-[4px] text-cyan-400">
          NETWORK STATUS
        </p>

        <h3 className="mt-2 text-3xl font-bold text-green-400">
          ONLINE
        </h3>

      </div>

      <div className="absolute right-6 bottom-6 rounded-2xl border border-cyan-500/20 bg-black/50 p-5 backdrop-blur-xl">

        <p className="text-[10px] tracking-[4px] text-cyan-400">
          RESPONSE TIME
        </p>

        <h3 className="mt-2 text-3xl font-bold text-cyan-300">
          &lt; 24 HRS
        </h3>

      </div>

    </div>
  );
}