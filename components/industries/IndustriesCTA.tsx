"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Building2,
  Radar,
  Cpu,
} from "lucide-react";

export default function IndustriesCTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[220px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[42px] border border-cyan-500/10 bg-gradient-to-br from-[#08172d] via-[#0a1f3c] to-[#071226]">

          {/* Grid */}

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

          <div className="relative p-12 md:p-20">

            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

              {/* Left */}

              <div>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
                  START YOUR PROJECT
                </span>

                <h2 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

                  Secure The Future

                  <span className="block text-cyan-400">
                    With Intelligent
                  </span>

                  Security Ecosystems

                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
                  Whether you're building a Smart City,
                  securing Critical Infrastructure,
                  modernizing Government Operations or
                  deploying Enterprise Surveillance,
                  RakshakSecure Tech delivers AI-powered
                  intelligence ecosystems engineered
                  for mission-critical environments.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
                  >
                    Request Consultation

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/solutions"
                    className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore Solutions
                  </Link>

                </div>

              </div>

              {/* Right */}

              <div className="grid gap-5">

                {[
                  {
                    icon: Building2,
                    title: "Government & Smart Cities",
                  },
                  {
                    icon: Shield,
                    title: "Defense & Homeland Security",
                  },
                  {
                    icon: Radar,
                    title: "Critical Infrastructure",
                  },
                  {
                    icon: Cpu,
                    title: "AI Command Platforms",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        x: 8,
                      }}
                      className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                    >

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                        <Icon
                          size={28}
                          className="text-cyan-300"
                        />

                      </div>

                      <div>

                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          Enterprise-grade deployment ready
                        </p>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}