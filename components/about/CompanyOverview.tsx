"use client";

import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-cyan-300">
              COMPANY OVERVIEW
            </span>

            <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

              Delivering

              <span className="block text-cyan-400">
                Intelligent Security
              </span>

              Infrastructure

            </h2>

            <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-relaxed text-slate-400">
              RakshakSecure Tech specializes in AI-powered surveillance,
              command-and-control systems, biometric intelligence,
              vehicle analytics and integrated security ecosystems.
              Our solutions are engineered to support governments,
              enterprises, smart cities and critical infrastructure
              with real-time situational awareness and operational control.
            </p>

            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base leading-7 text-slate-500">
              By combining Artificial Intelligence, advanced analytics,
              automation and centralized intelligence platforms,
              we help organizations improve threat detection,
              response capabilities and operational efficiency.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-3xl lg:rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-8 backdrop-blur-xl">

              {/* Stats */}

              <div className="grid grid-cols-2 gap-3 sm:gap-5">

                {[
                  ["10+", "Years Experience"],
                  ["50+", "Projects Delivered"],
                  ["12+", "AI Solutions"],
                  ["24/7", "Support & Monitoring"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5 lg:p-6"
                  >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
                      {number}
                    </h3>

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}

              </div>

              {/* Expertise */}

              <div className="mt-6 sm:mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 sm:p-6">

                <p className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-cyan-400">
                  CORE EXPERTISE
                </p>

                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">

                  {[
                    "AI Surveillance",
                    "Facial Recognition",
                    "Vehicle Intelligence",
                    "Command Centers",
                    "Border Security",
                    "Threat Analytics",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 sm:px-4 text-[11px] sm:text-xs text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}