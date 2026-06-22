"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
const [open, setOpen] = useState(false);

return (
<>
{/* Top Enterprise Strip */}


  <div className="border-b border-cyan-500/10 bg-black/40 backdrop-blur-md">

    <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center text-[11px] font-medium tracking-[0.2em] text-cyan-300">

      GOVERNMENT READY • AI POWERED • ENTERPRISE SECURITY • PAN INDIA SUPPORT

    </div>

  </div>

  {/* Main Header */}

  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B18]/70 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.25)]">

    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20">

      {/* Logo */}

      <Link
        href="/"
        className="group flex items-center gap-3"
      >

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#005BAC] to-cyan-500 shadow-[0_0_30px_rgba(0,255,255,0.25)] transition-all duration-300 group-hover:scale-105">

          <span className="text-lg font-bold text-white">
            R
          </span>

        </div>

        <div>

          <h2 className="font-bold text-white transition duration-300 group-hover:text-cyan-300">

            RakshakSecure Tech

          </h2>

          <p className="hidden text-[11px] tracking-[0.25em] text-slate-400 md:block">

            PROTECTION THROUGH TECHNOLOGY

          </p>

        </div>

      </Link>

      {/* Desktop Navigation */}

      <nav className="hidden items-center gap-8 md:flex">

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
            className="group relative text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
          >
            {item.name}

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />

          </Link>
        ))}

      </nav>

      {/* Right Side */}

      <div className="flex items-center gap-3">

        {/* CTA */}

        <Link
          href="/contact"
          className="hidden rounded-xl bg-gradient-to-r from-[#005BAC] to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] md:block"
        >
          Request Consultation
        </Link>

        {/* Mobile Menu */}

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 md:hidden"
        >
          ☰
        </button>

      </div>

    </div>

  </header>

  <MobileMenu
    open={open}
    onClose={() => setOpen(false)}
  />
</>


);
}
