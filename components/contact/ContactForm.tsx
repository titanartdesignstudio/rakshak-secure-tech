"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Landmark,
  RadioTower,
  Send,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
              PROJECT ENQUIRY
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">

              Let's Discuss

              <span className="block text-cyan-400">
                Your Requirements
              </span>

            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              Whether you are planning a Smart City,
              Surveillance Network, Command Center,
              Critical Infrastructure Project or Enterprise
              Security Deployment, our team is ready to help.
            </p>

            <div className="mt-12 space-y-5">

              {[
                {
                  icon: Landmark,
                  title: "Government Projects",
                },
                {
                  icon: Shield,
                  title: "Defense & Homeland Security",
                },
                {
                  icon: RadioTower,
                  title: "Critical Infrastructure",
                },
                {
                  icon: Building2,
                  title: "Enterprise Security",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                      <Icon
                        size={22}
                        className="text-cyan-300"
                      />

                    </div>

                    <h3 className="font-medium">
                      {item.title}
                    </h3>

                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <form className="space-y-6">

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 rounded-2xl border border-white/10 bg-black/20 px-5 outline-none transition focus:border-cyan-400"
                />

                <input
                  type="text"
                  placeholder="Organization"
                  className="h-14 rounded-2xl border border-white/10 bg-black/20 px-5 outline-none transition focus:border-cyan-400"
                />

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 rounded-2xl border border-white/10 bg-black/20 px-5 outline-none transition focus:border-cyan-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 rounded-2xl border border-white/10 bg-black/20 px-5 outline-none transition focus:border-cyan-400"
                />

              </div>

              <select className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 px-5 outline-none">

                <option>
                  Select Industry
                </option>

                <option>
                  Government
                </option>

                <option>
                  Defense
                </option>

                <option>
                  Smart City
                </option>

                <option>
                  Infrastructure
                </option>

                <option>
                  Enterprise
                </option>

              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your project requirements..."
                className="w-full rounded-2xl border border-white/10 bg-black/20 p-5 outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >

                Submit Enquiry

                <Send size={18} />

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}