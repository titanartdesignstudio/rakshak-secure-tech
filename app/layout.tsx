import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}