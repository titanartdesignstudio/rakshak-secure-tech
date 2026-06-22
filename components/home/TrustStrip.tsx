"use client";

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
title: "Unified Ecosystem",
},
];

return ( <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">


  {/* Background Glow */}

  <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-50 blur-3xl" />

  <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-cyan-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-16">

    {/* Section Label */}

    <div className="mb-10 text-center">

      <p className="text-xs font-semibold tracking-[0.35em] text-[#005BAC]">
        TRUSTED TECHNOLOGY FOUNDATION
      </p>

    </div>

    {/* Grid */}

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_10px_40px_rgba(0,91,172,0.08)]"
          >

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#005BAC] transition-all duration-300 group-hover:scale-110">

              <Icon size={24} />

            </div>

            <span className="text-sm font-semibold text-slate-700">

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
