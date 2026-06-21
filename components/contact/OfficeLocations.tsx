"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Globe2,
  RadioTower,
  ArrowUpRight,
} from "lucide-react";

const locations = [
  {
    icon: Building2,
    title: "Corporate Headquarters",
    city: "New Delhi NCR",
    description:
      "Strategic leadership, government liaisoning, project management and national operations.",
    tag: "HQ",
  },
  {
    icon: RadioTower,
    title: "Operations & Support",
    city: "Pan India Network",
    description:
      "Technical deployment teams, surveillance integration specialists and support operations.",
    tag: "24/7",
  },
  {
    icon: Globe2,
    title: "Project Coverage",
    city: "Nationwide",
    description:
      "Supporting Smart Cities, Defense Installations, Critical Infrastructure and Enterprise Security.",
    tag: "ACTIVE",
  },
];

export default function OfficeLocations() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            LOCATIONS & OPERATIONS
          </span>

          <h2 className="mt-8 text-5xl font-bold md:text-6xl">

            National Presence

            <span className="block text-cyan-400">
              Strategic Reach
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
            RakshakSecure Tech supports government,
            defense, transportation and enterprise
            deployments through a growing national
            operations network.
          </p>

        </div>

        {/* Main Section */}

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">

          {/* Left Big Command Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

            <div className="relative">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <MapPin
                    size={30}
                    className="text-cyan-300"
                  />

                </div>

                <div>

                  <p className="text-xs tracking-[4px] text-cyan-400">
                    COMMAND CENTER
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    National Operations Hub
                  </h3>

                </div>

              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h4 className="text-4xl font-bold text-cyan-400">
                    24/7
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Monitoring Support
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h4 className="text-4xl font-bold text-cyan-400">
                    PAN
                  </h4>

                  <p className="mt-2 text-slate-400">
                    India Coverage
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h4 className="text-4xl font-bold text-cyan-400">
                    AI
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Driven Operations
                  </p>
                </div>

              </div>

              <div className="mt-10 rounded-3xl border border-cyan-500/10 bg-black/20 p-8">

                <p className="text-xs tracking-[4px] text-cyan-400">
                  DEPLOYMENT READINESS
                </p>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />

                </div>

                <div className="mt-4 flex justify-between text-sm text-slate-400">

                  <span>Operational Capacity</span>

                  <span>92%</span>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Cards */}

          <div className="space-y-6">

            {locations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.07]"
                >

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                        <Icon
                          size={24}
                          className="text-cyan-300"
                        />

                      </div>

                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                        {item.tag}
                      </span>

                    </div>

                    <h3 className="mt-5 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-cyan-400">
                      {item.city}
                    </p>

                    <p className="mt-5 leading-7 text-slate-400">
                      {item.description}
                    </p>

                    <ArrowUpRight
                      size={20}
                      className="mt-6 text-cyan-300"
                    />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}