"use client";

import {
  Shield,
  Radar,
  Building2,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import HeroOrb from "./HeroOrb";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071226] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-blue-400/50" />
        <div className="absolute left-[80%] top-[30%] h-3 w-3 rounded-full bg-cyan-400/40" />
        <div className="absolute left-[70%] top-[70%] h-2 w-2 rounded-full bg-blue-500/40" />
        <div className="absolute left-[20%] top-[80%] h-2 w-2 rounded-full bg-cyan-300/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-40 pb-24 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur">
              <Shield size={16} />
              AI Security Ecosystem
            </div>

            {/* Heading */}
            <h1 className="mt-8 max-w-[700px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              AI-Powered Security
              <br />
              For Critical
              <span className="text-blue-400">
                {" "}
                Infrastructure
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Advanced surveillance, facial recognition,
              threat intelligence, command center analytics
              and infrastructure protection designed for
              governments, enterprises and mission-critical
              environments.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-[#005BAC] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,91,172,0.6)]">
                Explore Solutions

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                Book Consultation
              </button>
            </div>

            {/* Trust */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
              <span>✓ Government Grade</span>
              <span>✓ Enterprise Ready</span>
              <span>✓ AI Powered</span>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  99.7%
                </h3>

                <p className="text-sm text-slate-400">
                  Recognition Accuracy
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  24/7
                </h3>

                <p className="text-sm text-slate-400">
                  Threat Monitoring
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  360°
                </h3>

                <p className="text-sm text-slate-400">
                  Infrastructure Coverage
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
           className="relative flex min-h-[400px] lg:min-h-[700px] items-center justify-center"
          >
            {/* Animated Orb */}
            <HeroOrb />

            {/* Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-0 top-20 hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
            >
              <div className="mb-3 flex items-center gap-3">
                <Shield
                  className="text-blue-400"
                  size={22}
                />

                <span className="font-semibold">
                  Facial Recognition
                </span>
              </div>

              <p className="text-2xl font-bold text-blue-400">
                99.7%
              </p>

              <p className="text-sm text-slate-400">
                Identification Accuracy
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-0 top-40 hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
            >
              <div className="mb-3 flex items-center gap-3">
                <Radar
                  className="text-cyan-400"
                  size={22}
                />

                <span className="font-semibold">
                  Threat Intelligence
                </span>
              </div>

              <p className="text-2xl font-bold text-cyan-400">
                24/7
              </p>

              <p className="text-sm text-slate-400">
                Continuous Monitoring
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-12 left-16 hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
            >
              <div className="mb-3 flex items-center gap-3">
                <Building2
                  className="text-blue-400"
                  size={22}
                />

                <span className="font-semibold">
                  Infrastructure Security
                </span>
              </div>

              <p className="text-2xl font-bold text-blue-400">
                360°
              </p>

              <p className="text-sm text-slate-400">
                End-to-End Protection
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-slate-50" />
    </section>
  );
}