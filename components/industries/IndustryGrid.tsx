"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Shield,
  Plane,
  Ship,
  Train,
  Factory,
  RadioTower,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Government & Smart Cities",
    badge: "SMART CITY READY",
    desc: "Integrated command centers, public safety infrastructure and city-wide intelligence platforms.",
  },
  {
    icon: Shield,
    title: "Defense & Homeland Security",
    badge: "MISSION CRITICAL",
    desc: "Border monitoring, threat detection and strategic security operations.",
  },
  {
    icon: Plane,
    title: "Airports & Aviation",
    badge: "HIGH SECURITY",
    desc: "Passenger analytics, biometric verification and access control systems.",
  },
  {
    icon: Ship,
    title: "Ports & Logistics",
    badge: "CARGO SECURITY",
    desc: "Cargo inspection, vehicle intelligence and logistics surveillance.",
  },
  {
    icon: Train,
    title: "Railways & Transportation",
    badge: "PUBLIC SAFETY",
    desc: "Passenger security, operational monitoring and transportation analytics.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    badge: "ASSET PROTECTION",
    desc: "Perimeter security, workforce monitoring and facility intelligence.",
  },
  {
    icon: RadioTower,
    title: "Critical Infrastructure",
    badge: "24/7 MONITORING",
    desc: "Power plants, telecom networks and strategic national assets.",
  },
  {
    icon: Building2,
    title: "Enterprise Security",
    badge: "ENTERPRISE GRADE",
    desc: "Corporate campuses, financial institutions and large facilities.",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">

            Engineered For

            <span className="block text-cyan-400">
              Mission Critical Sectors
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            RakshakSecure Tech delivers intelligent security ecosystems
            across governments, defense organizations, transportation
            networks, enterprises and critical infrastructure.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.07]"
              >

                {/* Glow */}

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                {/* Badge */}

                <div className="absolute right-5 top-5">

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[9px] tracking-[2px] text-cyan-300">
                    {item.badge}
                  </span>

                </div>

                <div className="relative">

                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                    <Icon
                      size={28}
                      className="text-cyan-300"
                    />

                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Desc */}

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  {/* Footer */}

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-xs tracking-[2px] text-slate-500">
                      INDUSTRY SOLUTION
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                  {/* Line */}

                  <div className="mt-5 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Strip */}

        <div className="mt-16 rounded-[32px] border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-8">

          <div className="grid gap-8 text-center md:grid-cols-3">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                8+
              </h3>

              <p className="mt-2 text-slate-400">
                Industry Verticals
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                AI
              </h3>

              <p className="mt-2 text-slate-400">
                Unified Intelligence Layer
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                24/7
              </h3>

              <p className="mt-2 text-slate-400">
                Operational Readiness
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}