"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";

export default function SolutionsPage() {
  return (
    <main className="relative overflow-hidden bg-[#071226] text-white">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-28 text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-4xl px-4"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.25em] text-cyan-300">
            SECURITY SOLUTIONS
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Intelligence Driven
            <span className="block text-cyan-400">
              Security Ecosystem
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
            Modular AI-powered security systems engineered for governments,
            enterprises, smart cities and mission-critical infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="relative mx-auto max-w-7xl px-4 pb-28">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
              >
                <Link href={`/solutions/${item.slug}`}>

                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.07] hover:shadow-[0_0_60px_rgba(0,255,255,0.08)]">

                    {/* Glow */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    {/* Icon */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                      <Icon
                        size={28}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-bold">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 leading-7 text-slate-400">
                      {item.desc}
                    </p>

                    {/* Features */}
                    <div className="mt-6 space-y-2 text-sm text-slate-500">

                      {item.features
                        .slice(0, 3)
                        .map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            {feature}
                          </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-wider text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-300">
                      Explore System
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    <div className="mt-6 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Enterprise Strip */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24">

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-4xl font-bold">
                Unified Security Architecture
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
                Every Rakshak solution operates independently or integrates
                into a centralized command environment for complete situational
                awareness and operational intelligence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                ["99.7%", "Recognition Accuracy"],
                ["24/7", "Continuous Monitoring"],
                ["360°", "Operational Visibility"],
                ["AI", "Decision Intelligence"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {a}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    {b}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}