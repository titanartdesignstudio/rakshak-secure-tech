"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "99.7%",
    label: "Recognition Accuracy",
    desc: "AI-powered identification and verification systems.",
  },
  {
    value: "24/7",
    label: "Continuous Monitoring",
    desc: "Real-time surveillance and operational awareness.",
  },
  {
    value: "360°",
    label: "Operational Visibility",
    desc: "Unified command and intelligence ecosystem.",
  },
  {
    value: "AI",
    label: "Decision Intelligence",
    desc: "Automated insights and response workflows.",
  },
];

export default function IndustriesMetrics() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            PERFORMANCE METRICS
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">

            Intelligence Measured By

            <span className="block text-cyan-400">
              Operational Outcomes
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Every Rakshak deployment is engineered for accuracy,
            visibility and operational efficiency across
            mission-critical environments.
          </p>

        </div>

        {/* Main Panel */}

        <div className="mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="grid md:grid-cols-2 xl:grid-cols-4">

            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative border-white/10 p-10 text-center md:border-r last:border-r-0"
              >

                {/* Hover Glow */}

                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">

                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

                </div>

                <div className="relative">

                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-5xl font-bold text-cyan-400 md:text-6xl"
                  >
                    {item.value}
                  </motion.h3>

                  <h4 className="mt-5 text-lg font-semibold text-white">
                    {item.label}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* Bottom Strip */}

        <div className="mt-12 rounded-3xl border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-8 text-center">

          <p className="text-lg leading-relaxed text-slate-300">

            Designed for Governments, Defense Organizations,
            Smart Cities, Critical Infrastructure, Airports,
            Transportation Networks and Enterprise Security Operations.

          </p>

        </div>

      </div>

    </section>
  );
}