import {
  ShieldCheck,
  BrainCircuit,
  Building2,
  Radar,
  LockKeyhole,
  Globe,
} from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: BrainCircuit,
      title: "AI Powered",
    },
    {
      icon: ShieldCheck,
      title: "Government Ready",
    },
    {
      icon: Building2,
      title: "Enterprise Scale",
    },
    {
      icon: Radar,
      title: "24/7 Monitoring",
    },
    {
      icon: LockKeyhole,
      title: "Critical Infrastructure",
    },
    {
      icon: Globe,
      title: "Unified Security Ecosystem",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 xl:grid-cols-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#005BAC]">
                  <Icon size={26} />
                </div>

                <span className="text-sm font-semibold tracking-wide text-slate-700">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}