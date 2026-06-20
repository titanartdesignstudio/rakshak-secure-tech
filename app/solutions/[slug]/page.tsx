"use client";

import { motion } from "framer-motion";
import { use } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, Activity, ScanFace } from "lucide-react";
import Link from "next/link";

// IMPORT YOUR CENTRAL DATA (we will create this next step)
import { solutions } from "@/lib/solutions";

export default function SolutionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const data = solutions.find((s) => s.slug === slug);

  if (!data) return notFound();

  const Icon = data.icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071226] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* BACK BUTTON */}
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Solutions
        </Link>

        {/* HEADER */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">

          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Icon size={26} />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold">
                {data.title}
              </h1>
            </div>

            <p className="mt-6 max-w-xl text-slate-400">
              {data.desc}
            </p>

            {/* TAGS */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                REAL-TIME
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                AI ENGINE
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                EDGE SYSTEM
              </span>
            </div>
          </div>

          {/* STATUS CARD */}
          <div className="flex justify-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-slate-400">SYSTEM</p>
              <p className="mt-1 text-cyan-300 font-semibold">
                ONLINE
              </p>
            </div>
          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-cyan-300 font-semibold">
                Core Capabilities
              </h2>

              <div className="mt-6 space-y-3">
                {data.features.map((f: string) => (
                  <div key={f} className="flex gap-3 text-slate-300">
                    <span className="text-cyan-400">•</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* VISUAL */}
          <div className="h-[420px] rounded-3xl border border-white/10 bg-black/40 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-28 w-28 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600"
            />
          </div>

        </div>

      </div>
    </main>
  );
}