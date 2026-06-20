"use client";

import { MessageCircle, ShieldCheck } from "lucide-react";

export default function WhatsappFloat() {
  const phone = "919602105393"; // Replace with your WhatsApp number

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3">

      {/* Online Card */}
      <div className="hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071225]/90 px-4 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(0,91,172,0.25)]">
        <div className="relative">
          <div className="h-3 w-3 rounded-full bg-green-400" />
          <div className="absolute inset-0 animate-ping rounded-full bg-green-400" />
        </div>

        <div>
          <p className="text-xs font-semibold text-white">
            Security Consultant Online
          </p>

          <p className="text-[11px] text-slate-400">
            Typically replies within minutes
          </p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919602105393"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-50" />

        {/* Main Button */}
        <div className="relative flex items-center gap-3 rounded-full border border-green-400/20 bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-4 text-white shadow-[0_0_40px_rgba(34,197,94,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.75)]">

          <ShieldCheck size={18} />

          <div className="hidden sm:block overflow-hidden">
            <p className="text-sm font-semibold leading-none">
              Security Consultation
            </p>

            <p className="mt-1 text-[11px] text-green-100">
              Chat on WhatsApp
            </p>
          </div>

          <MessageCircle size={22} />
        </div>
      </a>
    </div>
  );
}