"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { solutions } from "@/lib/solutions";

import FaceVisual from "@/components/solutions/FaceVisual";
import VehicleVisual from "@/components/solutions/VehicleVisual";
import BorderVisual from "@/components/solutions/BorderVisual";
import CargoVisual from "@/components/solutions/CargoVisual";
import SurveillanceVisual from "@/components/solutions/SurveillanceVisual";
import CommandCenterVisual from "@/components/solutions/CommandCenterVisual";

export default function SolutionDetail({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = use(params);

const data = solutions.find((s) => s.slug === slug);

if (!data) return notFound();

const Icon = data.icon;

const visualMap: Record<string, React.ReactNode> = {
"facial-recognition": <FaceVisual />,
"vehicle-intelligence": <VehicleVisual />,
"border-intelligence": <BorderVisual />,
"cargo-security": <CargoVisual />,
"smart-surveillance": <SurveillanceVisual />,
"command-center": <CommandCenterVisual />,
};

return ( <main className="relative min-h-screen overflow-hidden bg-[#071226] text-white">


  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />
    <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[180px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-20">

    {/* Back */}
    <Link
      href="/solutions"
      className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
    >
      <ArrowLeft size={16} />
      Back to Solutions
    </Link>

    {/* Hero */}
    <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">

      <div>

        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
            <Icon size={28} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[4px] text-cyan-400">
              Security Solution
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              {data.heroTitle}
            </h1>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {data.heroSubtitle}
        </p>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              {data.stats.accuracy}
            </h3>
            <p className="text-xs text-slate-400">
              Accuracy
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              {data.stats.response}
            </h3>
            <p className="text-xs text-slate-400">
              Response
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              {data.stats.uptime}
            </h3>
            <p className="text-xs text-slate-400">
              Uptime
            </p>
          </div>

        </div>

      </div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {visualMap[data.slug]}
      </motion.div>

    </div>

    {/* Pipeline */}
    <div className="mt-20">

      <h2 className="mb-6 text-2xl font-bold">
        Intelligence Pipeline
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {data.pipeline.map((step) => (
          <div
            key={step}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm font-semibold text-cyan-300"
          >
            {step}
          </div>
        ))}
      </div>

    </div>

    {/* Features + Layers */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h2 className="text-xl font-bold text-cyan-300">
          Core Capabilities
        </h2>

        <div className="mt-6 space-y-4">
          {data.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
              <p className="text-slate-300">
                {feature}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h2 className="text-xl font-bold text-cyan-300">
          AI Processing Layers
        </h2>

        <div className="mt-6 space-y-4">
          {data.layers.map((layer) => (
            <div
              key={layer}
              className="flex items-start gap-3"
            >
              <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
              <p className="text-slate-300">
                {layer}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>

    {/* Deployments */}
    <div className="mt-20">

      <h2 className="mb-6 text-2xl font-bold">
        Deployment Scenarios
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        {data.deployments.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            {item}
          </div>
        ))}

      </div>

    </div>

    {/* Benefits */}
    <div className="mt-20">

      <h2 className="mb-6 text-2xl font-bold">
        Operational Benefits
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {data.benefits.map((benefit) => (
          <div
            key={benefit}
            className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-5"
          >
            {benefit}
          </div>
        ))}

      </div>

    </div>

    {/* CTA */}
    <div className="mt-24 rounded-3xl border border-cyan-500/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 text-center">

      <h2 className="text-3xl font-bold">
        Ready to Deploy {data.title}?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-400">
        Integrate AI-powered intelligence into your security operations
        and build scalable, mission-critical infrastructure.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        Contact Our Team
      </Link>

    </div>

  </div>
</main>


);
}
