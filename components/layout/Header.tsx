"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071225]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#005BAC] font-bold text-white shadow-lg">
              R
            </div>

            <div>
              <h2 className="font-bold text-white">
                Rakshak Secure Tech
              </h2>

              <p className="text-xs text-slate-400">
                AI Security Ecosystem
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
              Home
            </Link>

            <Link href="/about" className="text-sm text-slate-300 transition hover:text-white">
              About
            </Link>

            <Link href="/solutions" className="text-sm text-slate-300 transition hover:text-white">
              Solutions
            </Link>

            <Link href="/industries" className="text-sm text-slate-300 transition hover:text-white">
              Industries
            </Link>

            <Link href="/technology" className="text-sm text-slate-300 transition hover:text-white">
              Technology
            </Link>

            <Link href="/contact" className="text-sm text-slate-300 transition hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <button className="rounded-xl bg-[#005BAC] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105">
              Request Demo
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="text-3xl text-white md:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}