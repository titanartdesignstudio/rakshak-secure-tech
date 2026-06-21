"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Shield,
  Plane,
  Factory,
} from "lucide-react";

const sectors = [
  {
    icon: Landmark,
    title: "Government & Smart Cities",
    subtitle: "Citizen Safety • Command Centers • Urban Intelligence",
    points: [
      "Integrated Command & Control Centers",
      "City Surveillance Networks",
      "Traffic Intelligence Systems",
      "Public Safety Monitoring",
    ],
    stat: "24/7",
  },
  {
    icon: Shield,
    title: "Defense & Homeland Security",
    subtitle: "Border Intelligence • Threat Detection • Surveillance",
    points: [
      "Perimeter Protection Systems",
      "Border Monitoring",
      "Threat Intelligence Analytics",
      "Mission Critical Surveillance",
    ],
    stat: "AI",
  },
  {
    icon: Plane,
    title: "Airports & Transportation",
    subtitle: "Passenger Security • Operations • Monitoring",
    points: [
      "Facial Recognition Systems",
      "Access Control Intelligence",
      "Passenger Flow Analytics",
      "Operational Monitoring",
    ],
    stat: "99%",
  },
  {
    icon: Factory,
    title: "Critical Infrastructure",
    subtitle: "Power • Telecom • Industrial Facilities",
    points: [
      "Facility Protection",
      "Asset Monitoring",
      "Intrusion Detection",
      "Unified Operations Center",
    ],
    stat: "PAN",
  },
];

export default function IndustryShowcase() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            INDUSTRY SHOWCASE
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">

            Built For

            <span className="block text-cyan-400">
              Mission Critical Sectors
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Every industry faces unique operational challenges.
            RakshakSecure Tech delivers specialized intelligence
            ecosystems engineered around those requirements.
          </p>

        </div>

        {/* Showcase Cards */}

        <div className="mt-20 space-y-10">

          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px]" />

                </div>

                <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

                  {/* Left */}

                  <div className="p-10 lg:p-14">

                    <div className="flex items-center gap-5">

                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10">

                        <Icon
                          size={34}
                          className="text-cyan-300"
                        />

                      </div>

                      <div>

                        <h3 className="text-3xl font-bold">
                          {sector.title}
                        </h3>

                        <p className="mt-2 text-cyan-400">
                          {sector.subtitle}
                        </p>

                      </div>

                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2">

                      {sector.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-slate-300"
                        >
                          {point}
                        </div>
                      ))}

                    </div>

                  </div>

                  {/* Right Visual */}

                  <div className="relative flex items-center justify-center border-t border-white/10 lg:border-l lg:border-t-0">

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="relative flex h-52 w-52 items-center justify-center rounded-full border border-cyan-500/20"
                    >

                      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />

                      <span className="text-6xl font-bold text-cyan-400">
                        {sector.stat}
                      </span>

                    </motion.div>

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