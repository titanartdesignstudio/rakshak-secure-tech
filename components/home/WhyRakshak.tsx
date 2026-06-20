import {
  ShieldCheck,
  BrainCircuit,
  Zap,
  Building2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function WhyRakshak() {
  const points = [
    {
      traditional: "Multiple disconnected security tools",
      rakshak: "Unified AI Security Platform",
    },
    {
      traditional: "Manual monitoring and reporting",
      rakshak: "Real-time AI Intelligence",
    },
    {
      traditional: "Delayed threat response",
      rakshak: "Instant Alerting & Analytics",
    },
    {
      traditional: "Limited scalability",
      rakshak: "Enterprise & Government Scale",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Why Choose Rakshak
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Traditional Security vs
            <span className="text-[#005BAC]">
              {" "}Rakshak AI Ecosystem
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Modern security requires intelligence,
            automation and real-time visibility. Compare
            the difference.
          </p>
        </div>

        {/* Top Stats */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <BrainCircuit className="mx-auto mb-4 text-[#005BAC]" size={36} />
            <h3 className="text-3xl font-bold">AI</h3>
            <p className="text-slate-500">
              Intelligence Engine
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Zap className="mx-auto mb-4 text-[#005BAC]" size={36} />
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-slate-500">
              Continuous Monitoring
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <ShieldCheck className="mx-auto mb-4 text-[#005BAC]" size={36} />
            <h3 className="text-3xl font-bold">99.7%</h3>
            <p className="text-slate-500">
              Detection Accuracy
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Building2 className="mx-auto mb-4 text-[#005BAC]" size={36} />
            <h3 className="text-3xl font-bold">360°</h3>
            <p className="text-slate-500">
              Infrastructure Coverage
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <div className="grid grid-cols-2 bg-[#071226] text-white">
            <div className="p-6 text-center text-lg font-bold">
              Traditional Security
            </div>

            <div className="p-6 text-center text-lg font-bold text-blue-400">
              Rakshak AI Ecosystem
            </div>
          </div>

          {points.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-t border-slate-200"
            >
              <div className="flex items-center gap-3 p-6 text-slate-600">
                <XCircle
                  size={20}
                  className="text-red-500"
                />
                {item.traditional}
              </div>

              <div className="flex items-center gap-3 bg-blue-50 p-6 font-medium">
                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />
                {item.rakshak}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#071226] to-[#0B1F3D] p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold">
                Built For The Future Of Security
              </h3>

              <p className="mt-4 text-slate-300">
                Rakshak Secure Tech combines AI,
                computer vision, analytics and operational
                intelligence into a single platform for
                governments, enterprises and critical
                infrastructure operators.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-2xl font-bold">
                  Unified
                </h4>
                <p className="text-sm text-slate-300">
                  Platform
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-2xl font-bold">
                  AI
                </h4>
                <p className="text-sm text-slate-300">
                  Automation
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-2xl font-bold">
                  Real-Time
                </h4>
                <p className="text-sm text-slate-300">
                  Insights
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-2xl font-bold">
                  Scalable
                </h4>
                <p className="text-sm text-slate-300">
                  Deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}