import Link from "next/link";
import {
Shield,
Mail,
Phone,
MapPin,
ArrowUpRight,
} from "lucide-react";

export default function Footer() {
return ( <footer className="relative overflow-hidden bg-[#050B18] text-white">
{/* Background Effects */} <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" /> <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />


  <div className="relative mx-auto max-w-7xl px-4 py-20">
    <div className="grid gap-12 lg:grid-cols-12">
      {/* Company */}
      <div className="lg:col-span-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005BAC] shadow-lg">
            <Shield size={24} />
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Rakshak Secure Tech
            </h3>

            <p className="text-sm text-slate-400">
              AI Security Ecosystem
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-md leading-7 text-slate-400">
          Delivering next-generation security intelligence,
          surveillance, biometric identification and
          critical infrastructure protection for governments,
          enterprises and mission-critical environments.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            AI Powered
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Government Ready
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Enterprise Scale
          </span>
        </div>
      </div>

      {/* Company Links */}
      <div className="lg:col-span-2">
        <h4 className="mb-6 text-lg font-semibold">
          Company
        </h4>

        <ul className="space-y-4 text-slate-400">
          <li>
            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/technology"
              className="transition hover:text-white"
            >
              Technology
            </Link>
          </li>

          <li>
            <Link
              href="/industries"
              className="transition hover:text-white"
            >
              Industries
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Solutions */}
      <div className="lg:col-span-3">
        <h4 className="mb-6 text-lg font-semibold">
          Solutions
        </h4>

        <ul className="space-y-4 text-slate-400">
          <li>Facial Recognition</li>
          <li>Vehicle Intelligence</li>
          <li>Border Monitoring</li>
          <li>Cargo Screening</li>
          <li>Smart Surveillance</li>
          <li>Command Center</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="lg:col-span-3">
        <h4 className="mb-6 text-lg font-semibold">
          Contact
        </h4>

        <div className="space-y-5 text-slate-400">
          <div className="flex items-start gap-3">
            <Mail
              size={18}
              className="mt-1 text-blue-400"
            />

            <div>
              <p className="text-white">
                info@rakshaksecuretech.com
              </p>

              <p className="text-sm">
                Business Enquiries
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone
              size={18}
              className="mt-1 text-blue-400"
            />

            <div>
              <p className="text-white">
                +91 XXXXX XXXXX
              </p>

              <p className="text-sm">
                Consultation Support
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin
              size={18}
              className="mt-1 text-blue-400"
            />

            <div>
              <p className="text-white">
                India
              </p>

              <p className="text-sm">
                Nationwide Operations
              </p>
            </div>
          </div>
        </div>

        <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#005BAC] px-5 py-3 font-semibold transition hover:scale-105">
          Request Consultation

          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>

    {/* Divider */}
    <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

    {/* Bottom Bar */}
    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
      <p>
        © 2026 Rakshak Secure Tech Pvt. Ltd. All rights reserved.
      </p>

      <div className="flex gap-6">
        <Link
          href="/privacy-policy"
          className="hover:text-white"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          className="hover:text-white"
        >
          Terms of Service
        </Link>

        <Link
          href="/security"
          className="hover:text-white"
        >
          Security
        </Link>
      </div>
    </div>
  </div>
</footer>


);
}
