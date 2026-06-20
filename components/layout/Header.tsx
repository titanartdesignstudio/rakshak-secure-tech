"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="border-b border-cyan-500/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center text-xs font-medium tracking-wide text-cyan-300">
          AI Surveillance • Threat Intelligence • 24/7 Monitoring • Enterprise Security Solutions
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071225]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#005BAC] to-cyan-500 font-bold text-white shadow-[0_0_25px_rgba(0,91,172,0.45)] transition duration-300 group-hover:scale-105">
              R
            </div>

            <div>
              <h2 className="font-bold text-white transition group-hover:text-cyan-300">
                Rakshak Secure Tech
              </h2>

              <p className="text-xs tracking-wider text-slate-400">
                AI Security Ecosystem
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
                className="group relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="rounded-xl bg-gradient-to-r from-[#005BAC] to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(0,91,172,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]">
              Schedule Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-3xl text-white transition hover:bg-white/10 md:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}