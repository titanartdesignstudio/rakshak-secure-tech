"use client";

import { motion } from "framer-motion";
import { leadershipTeam } from "@/lib/leadership";

export default function LeadershipTeam() {
  const founder = leadershipTeam[0];
  const executives = leadershipTeam.slice(1);

  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-10%] top-0 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            EXECUTIVE LEADERSHIP
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Leadership Driving
            <span className="block text-cyan-400">
              Rakshak Secure Tech
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A multidisciplinary leadership team bringing together
            expertise in artificial intelligence, public affairs,
            enterprise technology, finance, procurement and
            strategic operations.
          </p>

        </div>

        {/* Founder Section */}

        {founder && (

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-24 overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-10 md:p-14"
          >

            <div className="absolute right-6 top-0 text-[160px] font-black text-white/[0.03]">
              CEO
            </div>

            <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-center">

              {/* Founder Avatar */}

              <div className="flex justify-center lg:justify-start">

                <div className="relative">

                  <div className="absolute inset-0 rounded-[36px] bg-cyan-500 blur-3xl opacity-30" />

                  <div className="relative flex h-44 w-44 items-center justify-center rounded-[36px] border border-cyan-500/20 bg-cyan-500/10 text-6xl font-bold text-cyan-300 backdrop-blur-xl">
                    {founder.initials}
                  </div>

                </div>

              </div>

              {/* Founder Content */}

              <div>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.25em] text-cyan-300">
                  FOUNDER & LEADERSHIP
                </span>

                <h3 className="mt-6 text-4xl font-bold md:text-5xl">
                  {founder.name}
                </h3>

                <p className="mt-3 text-lg font-medium text-cyan-400">
                  {founder.role}
                </p>

                <p className="mt-6 max-w-4xl leading-8 text-slate-300">
                  {founder.bio}
                </p>

              </div>

            </div>

          </motion.div>

        )}

        {/* Executive Team */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {executives.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_60px_rgba(0,255,255,0.08)]"
            >

              {/* Hover Glow */}

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Number */}

              <div className="absolute right-4 top-0 text-[80px] font-black text-white/[0.03]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative">

                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-cyan-500/20 bg-cyan-500/10 text-2xl font-bold text-cyan-300">
                  {member.initials}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
                  {member.role}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {member.bio}
                </p>

                <div className="mt-7 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-xs tracking-[0.2em] text-slate-500">
                    EXECUTIVE BOARD
                  </span>

                </div>

                <div className="mt-8 h-[2px] w-16 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}