import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakshak Secure Tech | AI Security Infrastructure",
  description:
    "AI-powered security infrastructure for governments, enterprises and critical assets.",
  keywords: [
    "AI Security",
    "Facial Recognition",
    "Border Monitoring",
    "Smart Surveillance",
    "Government Security",
    "Enterprise Security",
    "Computer Vision",
    "Threat Intelligence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#070B18] text-white antialiased overflow-x-hidden">

        {/* GLOBAL BACKGROUND GRID */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

        {/* SOFT GLOW LAYERS */}
        <div className="fixed -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="fixed -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* APP SHELL */}
        <div className="relative z-10 flex min-h-screen flex-col">

          {/* HEADER */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

        </div>

        {/* FLOAT ACTIONS */}
        <WhatsappFloat />

      </body>
    </html>
  );
}