"use client";

import { motion } from "framer-motion";
import {
  Users,
  Landmark,
  Headphones,
  Handshake,
  ArrowRight,
} from "lucide-react";

const channels = [
  {
    icon: Users,
    title: "Sales Enquiries",
    response: "Response within 24 Hours",
    email: "sales@rakshaksecuretech.com",
    desc: "Product demonstrations, enterprise deployments and solution consultations.",
  },
  {
    icon: Landmark,
    title: "Government Projects",
    response: "Dedicated Project Team",
    email: "government@rakshaksecuretech.com",
    desc: "Smart Cities, Command Centers, Surveillance Networks and Public Safety Projects.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    response: "24/7 Support Desk",
    email: "support@rakshaksecuretech.com",
    desc: "Technical assistance, maintenance support and operational guidance.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    response: "Strategic Collaboration",
    email: "partners@rakshaksecuretech.com",
    desc: "Technology alliances, system integration and channel partnerships.",
  },
];

export default function ContactChannels() {
  return (
    <section className="relative py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            CONTACT CHANNELS
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            Connect With The
            <span className="block text-cyan-400">
              Right Team
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Whether you're planning a nationwide deployment,
            exploring AI security solutions or seeking technical
            assistance, our specialists are ready to help.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {channels.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.07]"
              >

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                      <Icon
                        size={28}
                        className="text-cyan-300"
                      />

                    </div>

                    <ArrowRight
                      size={22}
                      className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-cyan-400">
                    {item.response}
                  </p>

                  <p className="mt-5 leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">

                    <p className="text-xs tracking-[3px] text-cyan-400">
                      CONTACT EMAIL
                    </p>

                    <p className="mt-2 font-medium text-white">
                      {item.email}
                    </p>

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