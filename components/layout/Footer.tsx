"use client";

import Link from "next/link";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040B17] text-white">

      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Top Grid */}

        <div className="grid gap-14 lg:grid-cols-12">

          {/* Company */}

          <div className="lg:col-span-4">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_40px_rgba(0,255,255,0.25)]">
                <Shield size={26} />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  RakshakSecure Tech
                </h3>

                <p className="text-sm text-slate-400">
                  Protection Through Technology
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Delivering next-generation security intelligence,
              surveillance analytics, biometric identification,
              AI-powered monitoring and critical infrastructure
              protection for governments, enterprises and
              mission-critical environments.
            </p>

            {/* Trust Badges */}

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "AI Powered",
                "Government Ready",
                "Enterprise Scale",
                "24/7 Operations",
                "PAN India Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* Company */}

          <div className="lg:col-span-2">

            <h4 className="mb-6 text-lg font-semibold">
              Company
            </h4>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link href="/about" className="transition hover:text-cyan-300">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/industries" className="transition hover:text-cyan-300">
                  Industries
                </Link>
              </li>

              <li>
                <Link href="/technology" className="transition hover:text-cyan-300">
                  Technology
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-cyan-300">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Industries */}

          <div className="lg:col-span-3">

            <h4 className="mb-6 text-lg font-semibold">
              Industries
            </h4>

            <ul className="space-y-4 text-slate-400">

              <li>Defense & Homeland Security</li>

              <li>Government & Smart Cities</li>

              <li>Airports & Aviation</li>

              <li>Ports & Logistics</li>

              <li>Railways & Transportation</li>

              <li>Critical Infrastructure</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="lg:col-span-3">

            <h4 className="mb-6 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-6">

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <div>

                  <p className="font-medium text-white">
                    info@rakshaksecuretech.com
                  </p>

                  <p className="text-sm text-slate-400">
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

                  <p className="font-medium text-white">
                    +91 XXXXX XXXXX
                  </p>

                  <p className="text-sm text-slate-400">
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

                  <p className="font-medium text-white">
                    Sector 14
                  </p>

                  <p className="text-sm text-slate-400">
                    Gurgaon, Haryana, India
                  </p>

                </div>

              </div>

            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation

              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

        {/* Premium Strip */}

        <div className="my-14 rounded-3xl border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 px-8 py-6 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Artificial Intelligence • Surveillance • Command Systems
          </p>

          <h3 className="mt-4 text-2xl font-bold md:text-3xl">
            Securing Critical Infrastructure Through
            <span className="block text-cyan-400">
              Artificial Intelligence
            </span>
          </h3>

        </div>

        {/* Divider */}

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="text-sm text-slate-500">
              © 2026 RakshakSecure Tech Pvt. Ltd. All Rights Reserved.
            </p>

            <p className="mt-2 text-xs text-slate-600">
              Developed & Maintained by D9Lab Technologies India
            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">

            <Link
              href="/privacy-policy"
              className="hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/security"
              className="hover:text-cyan-300"
            >
              Security
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}