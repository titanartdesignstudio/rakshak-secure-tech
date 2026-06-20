"use client";

import Link from "next/link";

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
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 z-[70] h-full w-80 bg-[#071226] p-8 text-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-xl font-bold">
            Menu
          </h3>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          <Link href="/" onClick={onClose}>
            Home
          </Link>

          <Link href="/about" onClick={onClose}>
            About
          </Link>

          <Link href="/solutions" onClick={onClose}>
            Solutions
          </Link>

          <Link href="/industries" onClick={onClose}>
            Industries
          </Link>

          <Link href="/technology" onClick={onClose}>
            Technology
          </Link>

          <Link href="/contact" onClick={onClose}>
            Contact
          </Link>
        </nav>

        <button className="mt-10 w-full rounded-xl bg-[#005BAC] py-3 font-semibold">
          Request Demo
        </button>
      </div>
    </>
  );
}