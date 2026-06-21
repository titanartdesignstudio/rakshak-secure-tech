"use client";

import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section className="relative py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.3em] text-cyan-300">
              COMPANY OVERVIEW
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">

              Delivering
              <span className="block text-cyan-400">
                Intelligent Security
              </span>

              Infrastructure

            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              RakshakSecure Tech specializes in AI-powered surveillance,
              command-and-control systems, biometric intelligence,
              vehicle analytics and integrated security ecosystems.
              Our solutions are engineered to support governments,
              enterprises, smart cities and critical infrastructure
              with real-time situational awareness and operational control.
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-slate-500">
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

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="grid grid-cols-2 gap-5">

                {[
                  ["10+", "Years Experience"],
                  ["50+", "Projects Delivered"],
                  ["12+", "AI Solutions"],
                  ["24/7", "Support & Monitoring"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-6"
                  >
                    <h3 className="text-4xl font-bold text-cyan-400">
                      {number}
                    </h3>

                    <p className="mt-3 text-sm text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}

              </div>

              <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                <p className="text-xs tracking-[3px] text-cyan-400">
                  CORE EXPERTISE
                </p>

                <div className="mt-5 flex flex-wrap gap-3">

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
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300"
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