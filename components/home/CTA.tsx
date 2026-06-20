import {
ArrowRight,
Shield,
Globe,
Building2,
} from "lucide-react";

export default function CTA() {
return ( <section className="relative overflow-hidden py-32 text-white">
{/* Background */} <div className="absolute inset-0 bg-gradient-to-br from-[#071226] via-[#0B1F3D] to-[#005BAC]" />


  {/* Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

  {/* Glows */}
  <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />

  <div className="relative mx-auto max-w-6xl px-4 text-center">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl">
      <Shield size={16} />
      AI-Powered Security Intelligence
    </div>

    {/* Heading */}
    <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
      Securing The Future Of
      <br />
      Critical Infrastructure
    </h2>

    {/* Description */}
    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
      Deploy advanced surveillance, biometric intelligence,
      threat detection and command-center technologies
      engineered for governments, enterprises and
      mission-critical environments.
    </p>

    {/* Buttons */}
    <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
      <button className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-[#005BAC] transition duration-300 hover:scale-105">
        Schedule Consultation

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </button>

      <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10">
        Explore Solutions
      </button>
    </div>

    {/* Industry Strip */}
    <div className="mt-20 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100 md:text-base">
      <div className="flex items-center gap-2">
        <Building2 size={18} />
        Government & Defence
      </div>

      <div className="h-1 w-1 rounded-full bg-blue-300" />

      <div className="flex items-center gap-2">
        <Shield size={18} />
        Critical Infrastructure
      </div>

      <div className="h-1 w-1 rounded-full bg-blue-300" />

      <div className="flex items-center gap-2">
        <Globe size={18} />
        Smart Cities
      </div>

      <div className="h-1 w-1 rounded-full bg-blue-300" />

      <div className="flex items-center gap-2">
        <Shield size={18} />
        Transportation
      </div>

      <div className="h-1 w-1 rounded-full bg-blue-300" />

      <div className="flex items-center gap-2">
        <Building2 size={18} />
        Enterprise Security
      </div>
    </div>
  </div>
</section>


);
}
