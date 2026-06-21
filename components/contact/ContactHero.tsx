"use client";

import { motion } from "framer-motion";
import ContactHeroVisual from "./ContactHeroVisual";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-32 lg:min-h-[90vh] flex items-center">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
              CONTACT RAKSHAK
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] md:text-7xl">

              Mission Critical

              <span className="block text-cyan-400">
                Conversations
              </span>

              Start Here

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              Connect with our security intelligence specialists,
              government project advisors and technology teams
              to explore AI-powered surveillance, command centers
              and critical infrastructure solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Government Projects",
                "Defense Solutions",
                "Smart Cities",
                "Enterprise Security",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <h3 className="text-3xl font-bold text-cyan-400">
                  24/7
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Support
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <h3 className="text-3xl font-bold text-cyan-400">
                  PAN
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  India Coverage
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <h3 className="text-3xl font-bold text-cyan-400">
                  AI
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Specialists
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <ContactHeroVisual />

        </div>

      </div>

    </section>
  );
}