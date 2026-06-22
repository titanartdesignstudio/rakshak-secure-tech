"use client";

import { motion } from "framer-motion";
import AboutHeroVisual from "./AboutHeroVisual";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#071226] py-24 md:py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-20%] top-[-20%] h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-20%] bottom-[-20%] h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
            }}
            className="absolute h-1 w-1 rounded-full bg-cyan-400"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] text-cyan-300">
              DEFENSE • AI • SURVEILLANCE TECHNOLOGY
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Building India's

              <span className="mt-2 block text-cyan-400">
                Next Generation
              </span>

              Security Intelligence

              <span className="block">
                Infrastructure
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              RakshakSecure Tech develops integrated AI-powered
              security ecosystems combining surveillance,
              analytics, automation and command intelligence
              into a unified operational platform for
              governments, enterprises and critical
              infrastructure.
            </p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "AI Surveillance",
                "Threat Intelligence",
                "Command & Control",
                "Critical Infrastructure",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-cyan-400">
                  24/7
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Monitoring
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-cyan-400">
                  99.7%
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Recognition Accuracy
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-cyan-400">
                  AI
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Intelligence Engine
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative order-first mx-auto h-[320px] w-full max-w-[400px] sm:h-[450px] sm:max-w-[550px] lg:order-last lg:h-[650px] lg:max-w-none"
          >
            <AboutHeroVisual />
          </motion.div>

        </div>

      </div>

    </section>
  );
}