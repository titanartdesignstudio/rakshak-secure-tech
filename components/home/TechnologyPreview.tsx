import {
  BrainCircuit,
  ScanFace,
  Eye,
  Shield,
  BarChart3,
  Cpu,
} from "lucide-react";

export default function TechnologyPreview() {
  const nodes = [
    {
      icon: Eye,
      title: "Computer Vision",
    },
    {
      icon: ScanFace,
      title: "Facial Recognition",
    },
    {
      icon: Shield,
      title: "Threat Intelligence",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
    },
    {
      icon: Cpu,
      title: "Command & Control",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Technology Architecture
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Powered By Advanced
            <span className="text-[#005BAC]">
              {" "}
              AI Infrastructure
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A unified intelligence architecture combining
            artificial intelligence, computer vision,
            predictive analytics and operational command
            systems into one security ecosystem.
          </p>
        </div>

        {/* Architecture Layout */}
        <div className="grid items-center gap-20 lg:grid-cols-3">

          {/* LEFT */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#005BAC]">
                <BrainCircuit size={34} />
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                AI Core Engine
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Central intelligence layer processing
                surveillance feeds, biometric data,
                logistics events and operational signals
                in real time.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  Real-Time Processing
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  Machine Learning Models
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  Autonomous Intelligence
                </div>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="relative flex justify-center">
            <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-100 blur-3xl" />

            <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-[#071226] to-[#0B1F3D] shadow-2xl">
              <div className="text-center text-white">
                <BrainCircuit
                  size={70}
                  className="mx-auto mb-4 text-blue-400"
                />

                <h3 className="text-2xl font-bold">
                  Rakshak AI
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  Intelligence Core
                </p>
              </div>
            </div>

            {/* Floating Nodes */}
            <div className="absolute left-0 top-10 rounded-xl border bg-white px-4 py-2 shadow-lg">
              Computer Vision
            </div>

            <div className="absolute right-0 top-20 rounded-xl border bg-white px-4 py-2 shadow-lg">
              Biometrics
            </div>

            <div className="absolute -bottom-2 left-12 rounded-xl border bg-white px-4 py-2 shadow-lg">
              Analytics
            </div>

            <div className="absolute bottom-10 right-6 rounded-xl border bg-white px-4 py-2 shadow-lg">
              Monitoring
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {nodes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#005BAC]">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-500">
                      Enterprise Security Layer
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-10 text-white">
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                AI
              </h3>

              <p className="mt-2 text-slate-300">
                Intelligence Layer
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                CV
              </h3>

              <p className="mt-2 text-slate-300">
                Computer Vision
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                RT
              </h3>

              <p className="mt-2 text-slate-300">
                Real-Time Analytics
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                360°
              </h3>

              <p className="mt-2 text-slate-300">
                Security Visibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}