"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Cpu,
  Radar,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const flow = [
  { icon: Camera, title: "Camera Network", desc: "CCTV, drones, sensors and surveillance feeds" },
  { icon: Cpu, title: "AI Vision Engine", desc: "Object detection, recognition and tracking" },
  { icon: Radar, title: "Threat Intelligence", desc: "Risk scoring and anomaly detection" },
  { icon: MonitorSmartphone, title: "Command Center", desc: "Centralized monitoring and analytics" },
  { icon: ShieldCheck, title: "Response System", desc: "Automated alerts and security actions" },
];

export default function TechnologyArchitecture() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#050A12] text-white">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.14),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* header */}
        <div className="text-center">
          <span className="px-4 py-2 text-sm rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
            SECURITY ARCHITECTURE GRID
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Live AI Intelligence Flow System
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-400">
            Real-time surveillance data flows through multiple AI layers.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative mt-24 hidden lg:block">

          {/* animated line */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-cyan-500/10 overflow-hidden">
            <motion.div
              animate={{ x: ["-10%", "110%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="h-full w-40 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-sm"
            />
          </div>

          <div className="grid grid-cols-5 gap-6">

            {flow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ scale: 1.08, y: -10 }}
                  className="relative group"
                >

                  {/* glow layer */}
                  <motion.div
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl"
                  />

                  {/* card */}
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition group-hover:border-cyan-400/40">

                    {/* icon pulse */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="flex justify-center"
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-cyan-500/10">
                        <Icon size={28} className="text-cyan-300" />
                      </div>
                    </motion.div>

                    <h3 className="mt-6 text-center font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-center text-sm text-slate-400">
                      {item.desc}
                    </p>

                    {/* live dot */}
                    <div className="mt-5 flex justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_cyan]"
                      />
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* mobile (unchanged but smoother) */}
        <div className="mt-16 space-y-6 lg:hidden">
          {flow.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">

                  <motion.div
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10"
                  >
                    <Icon size={22} className="text-cyan-300" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}