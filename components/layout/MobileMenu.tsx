"use client";

import Link from "next/link";
import {
Shield,
Mail,
Phone,
MapPin,
ArrowUpRight,
} from "lucide-react";

type MobileMenuProps = {
open: boolean;
onClose: () => void;
};

export default function MobileMenu({
open,
onClose,
}: MobileMenuProps) {
return (
<>
{/* Overlay */}


  <div
    className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-all duration-300 ${
      open
        ? "visible opacity-100"
        : "invisible opacity-0"
    }`}
    onClick={onClose}
  />

  {/* Drawer */}

  <div
    className={`fixed right-0 top-0 z-[70] h-full w-[88%] max-w-[380px] overflow-y-auto border-l border-cyan-500/20 bg-[#050B18] transition-transform duration-500 ${
      open
        ? "translate-x-0"
        : "translate-x-full"
    }`}
  >
    {/* Header */}

    <div className="border-b border-white/10 p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(0,255,255,0.25)]">
            <Shield size={22} />
          </div>

          <div>

            <h3 className="font-bold text-white">
              RakshakSecure Tech
            </h3>

            <p className="text-xs tracking-wider text-cyan-300">
              AI SECURITY INTELLIGENCE
            </p>

          </div>

        </div>

        <button
          onClick={onClose}
          className="text-3xl text-slate-400 transition hover:text-white"
        >
          ×
        </button>

      </div>

    </div>

    {/* Trust Badges */}

    <div className="flex flex-wrap gap-2 border-b border-white/10 p-6">

      {[
        "AI Powered",
        "24/7 Operations",
        "PAN India",
      ].map((item) => (
        <span
          key={item}
          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-300"
        >
          {item}
        </span>
      ))}

    </div>

    {/* Navigation */}

    <div className="p-6">

      <nav className="flex flex-col gap-3">

        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Solutions", href: "/solutions" },
          { name: "Industries", href: "/industries" },
          { name: "Technology", href: "/technology" },
          { name: "Contact", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5"
          >
            <span className="font-medium text-white">
              {item.name}
            </span>

            <ArrowUpRight
              size={18}
              className="text-cyan-300 transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        ))}

      </nav>

      {/* CTA */}

      <Link
        href="/contact"
        onClick={onClose}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 font-semibold text-black shadow-[0_0_30px_rgba(0,255,255,0.25)] transition-all duration-300 hover:scale-[1.02]"
      >
        Request Consultation

        <ArrowUpRight size={18} />
      </Link>

    </div>

    {/* Contact Block */}

    <div className="border-t border-white/10 p-6">

      <h4 className="mb-5 text-sm font-semibold tracking-[0.2em] text-cyan-400">
        CONTACT
      </h4>

      <div className="space-y-5">

        <div className="flex items-start gap-3">

          <Mail
            size={18}
            className="mt-1 text-cyan-400"
          />

          <div>

            <p className="text-sm text-white">
              info@rakshaksecuretech.com
            </p>

            <p className="text-xs text-slate-500">
              Business Enquiries
            </p>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <Phone
            size={18}
            className="mt-1 text-cyan-400"
          />

          <div>

            <p className="text-sm text-white">
              +91 XXXXX XXXXX
            </p>

            <p className="text-xs text-slate-500">
              Consultation Support
            </p>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <MapPin
            size={18}
            className="mt-1 text-cyan-400"
          />

          <div>

            <p className="text-sm text-white">
              Sector 14
            </p>

            <p className="text-xs text-slate-500">
              Gurgaon, Haryana, India
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</>


);
}
