"use client";

import { motion } from "framer-motion";
import { leadershipTeam } from "@/lib/leadership";

export default function LeadershipTeam() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/8 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-400">
            EXECUTIVE LEADERSHIP
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">

            Leadership Driving

            <span className="block text-cyan-400">
              Rakshak Secure Tech
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A multidisciplinary leadership team bringing together
            expertise in artificial intelligence, public affairs,
            enterprise technology, procurement, finance and
            strategic operations.
          </p>

        </div>

        {/* Founder Highlight */}

        <div className="mt-20">

          {leadershipTeam.slice(0, 1).map((member) => (

            <div
              key={member.name}
              className="relative overflow-hidden rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-10 md:p-14"
            >

              <div className="absolute right-0 top-0 text-[180px] font-black text-white/[0.03]">
                CEO
              </div>

              <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:items-center">

                {/* Avatar */}

                <div className="flex justify-center lg:justify-start">

                  <div className="flex h-40 w-40 items-center justify-center rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 text-5xl font-bold text-cyan-300">
                    {member.initials}
                  </div>

                </div>

                {/* Content */}

                <div>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.25em] text-cyan-300">
                    FOUNDER & LEADERSHIP
                  </span>

                  <h3 className="mt-6 text-4xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-lg font-medium text-cyan-400">
                    {member.role}
                  </p>

                  <p className="mt-6 max-w-4xl leading-8 text-slate-300">
                    {member.bio}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Directors */}

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {leadershipTeam.slice(1).map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_60px_rgba(0,255,255,0.08)]"
            >

              {/* Number */}

              <div className="absolute right-3 top-0 text-[80px] font-black text-white/[0.03]">
                0{index + 1}
              </div>

              {/* Glow */}

              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-cyan-500/20 bg-cyan-500/10 text-2xl font-bold text-cyan-300">
                  {member.initials}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-400">
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