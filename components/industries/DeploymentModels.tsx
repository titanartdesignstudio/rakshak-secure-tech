"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Cpu,
  Building2,
} from "lucide-react";

const deployments = [
  {
    icon: Building2,
    title: "Command Centers",
    subtitle: "Centralized Intelligence Operations",
    desc:
      "Unified monitoring environments integrating surveillance, analytics, alerts and operational decision support.",
  },
  {
    icon: Cpu,
    title: "Edge AI Deployments",
    subtitle: "Intelligence At The Source",
    desc:
      "AI processing directly on cameras, sensors and field devices for ultra-low latency decision making.",
  },
  {
    icon: Server,
    title: "On-Premise Infrastructure",
    subtitle: "Maximum Control & Security",
    desc:
      "Dedicated deployments within secure facilities, government networks and enterprise environments.",
  },
  {
    icon: Cloud,
    title: "Cloud Intelligence Platform",
    subtitle: "Scalable Multi-Site Operations",
    desc:
      "Centralized intelligence platforms capable of monitoring distributed assets across regions and cities.",
  },
];

export default function DeploymentModels() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            DEPLOYMENT ARCHITECTURE
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">

            Flexible Deployment

            <span className="block text-cyan-400">
              Models For Every Environment
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Whether operating a national command center,
            industrial facility, airport or smart city,
            Rakshak provides deployment models optimized
            for security, scalability and performance.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Center Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/30 via-cyan-400/20 to-transparent lg:block" />

          <div className="space-y-12">

            {deployments.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >

                  {/* Card */}

                  <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30">

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                    <div className="relative">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                        <Icon
                          size={28}
                          className="text-cyan-300"
                        />

                      </div>

                      <h3 className="mt-6 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-cyan-400">
                        {item.subtitle}
                      </p>

                      <p className="mt-5 leading-7 text-slate-400">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  {/* Visual */}

                  <div className="hidden items-center justify-center lg:flex">

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="relative"
                    >

                      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

                      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">

                        <Icon
                          size={44}
                          className="text-cyan-300"
                        />

                      </div>

                    </motion.div>

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