import {
  Building2,
  ShieldCheck,
  Plane,
  HeartPulse,
  Truck,
  Landmark,
  ArrowRight,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Landmark,
      title: "Government & Smart Cities",
      desc: "Integrated command centers, citizen safety monitoring and intelligent urban surveillance.",
    },
    {
      icon: ShieldCheck,
      title: "Law Enforcement",
      desc: "Real-time threat detection, biometric identification and operational intelligence systems.",
    },
    {
      icon: Plane,
      title: "Airports & Transit",
      desc: "Passenger analytics, access control and advanced transportation security infrastructure.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      desc: "Facility protection, visitor management and critical asset monitoring for healthcare environments.",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      desc: "Cargo screening, vehicle intelligence and end-to-end logistics security visibility.",
    },
    {
      icon: Building2,
      title: "Corporate Campuses",
      desc: "Enterprise-grade surveillance, access management and workplace security intelligence.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Industry Focus
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Industries We
            <span className="text-[#005BAC]"> Protect</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Security intelligence solutions designed for
            mission-critical sectors where reliability,
            visibility and rapid response matter most.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#005BAC]">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {industry.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {industry.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#005BAC]">
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

                <div className="mt-8 h-[2px] w-0 bg-[#005BAC] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Enterprise Banner */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#071226] to-[#0B1F3D] p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">
                Trusted Across Critical Sectors
              </h3>

              <p className="mt-4 text-slate-300">
                Built to support large-scale operations,
                public safety initiatives and enterprise
                security programs.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h4 className="text-4xl font-bold text-blue-400">
                24/7
              </h4>

              <p className="mt-2 text-slate-300">
                Operational Monitoring
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h4 className="text-4xl font-bold text-blue-400">
                AI
              </h4>

              <p className="mt-2 text-slate-300">
                Decision Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}