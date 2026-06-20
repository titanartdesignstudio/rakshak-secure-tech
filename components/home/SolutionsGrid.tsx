import {
  Shield,
  ScanFace,
  Car,
  Radar,
  Eye,
 MonitorSmartphone,
  ArrowRight,
} from "lucide-react";

export default function SolutionsGrid() {
  const solutions = [
    {
      icon: ScanFace,
      title: "Facial Recognition",
      desc: "Real-time biometric identification, watchlist matching and person tracking across large-scale environments.",
      features: [
        "Identity Verification",
        "Watchlist Matching",
        "Real-Time Alerts",
      ],
    },
    {
      icon: Car,
      title: "Vehicle Intelligence",
      desc: "AI-powered vehicle recognition, movement analysis and intelligent transportation monitoring.",
      features: [
        "ANPR Integration",
        "Vehicle Tracking",
        "Traffic Analytics",
      ],
    },
    {
      icon: Radar,
      title: "Border Monitoring",
      desc: "Advanced perimeter surveillance with threat detection and automated incident alerts.",
      features: [
        "Perimeter Security",
        "Threat Detection",
        "Remote Monitoring",
      ],
    },
    {
      icon: Shield,
      title: "Cargo Screening",
      desc: "Intelligent inspection systems for cargo, logistics hubs and critical checkpoints.",
      features: [
        "Cargo Inspection",
        "Automated Screening",
        "Risk Analysis",
      ],
    },
    {
      icon: Eye,
      title: "Smart Surveillance",
      desc: "24/7 AI-assisted monitoring designed for enterprise, city and infrastructure security.",
      features: [
        "Video Analytics",
        "Behavior Detection",
        "Incident Alerts",
      ],
    },
    {
      icon: MonitorSmartphone,
      title: "Command Center",
      desc: "Unified operational intelligence platform for security management and decision making.",
      features: [
        "Centralized Dashboard",
        "Live Intelligence",
        "Multi-Site Management",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Security Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Intelligent Security
            <span className="text-[#005BAC]"> Solutions</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Integrated AI technologies engineered for governments,
            enterprises and mission-critical infrastructure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#005BAC] transition duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.desc}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-slate-500">
                  {item.features.map((feature) => (
                    <li key={feature}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

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

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold">
                Security Solutions Built For Scale
              </h3>

              <p className="mt-4 text-slate-300">
                From smart cities and transportation hubs
                to critical infrastructure and enterprise
                campuses, Rakshak delivers integrated
                intelligence-driven security operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <h4 className="text-2xl font-bold">AI</h4>
                <p className="text-sm text-slate-300">
                  Threat Detection
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h4 className="text-2xl font-bold">24/7</h4>
                <p className="text-sm text-slate-300">
                  Monitoring
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h4 className="text-2xl font-bold">360°
                </h4>
                <p className="text-sm text-slate-300">
                  Visibility
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h4 className="text-2xl font-bold">Unified</h4>
                <p className="text-sm text-slate-300">
                  Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}