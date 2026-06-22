"use client";

import { motion } from "framer-motion";

export default function HeroOrb() {
return ( <div className="relative flex items-center justify-center">


  {/* Glow */}

  <div className="absolute h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] lg:h-[850px] lg:w-[850px] rounded-full bg-blue-500/20 blur-[100px] lg:blur-[200px]" />

  {/* Outer Orbit */}

  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 90,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[260px] w-[260px] sm:h-[450px] sm:w-[450px] lg:h-[700px] lg:w-[700px] rounded-full border border-blue-500/10"
  >
    <div className="absolute left-1/2 top-0 h-3 w-3 lg:h-4 lg:w-4 -translate-x-1/2 rounded-full bg-cyan-400" />

    <div className="absolute bottom-0 left-1/2 h-3 w-3 lg:h-4 lg:w-4 -translate-x-1/2 rounded-full bg-blue-500" />
  </motion.div>

  {/* Main Orb */}

  <div className="relative h-[240px] w-[240px] sm:h-[420px] sm:w-[420px] lg:h-[620px] lg:w-[620px] rounded-full border border-blue-400/20">

    {/* Ring 1 */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 45,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 rounded-full border border-cyan-400/20"
    />

    {/* Ring 2 */}

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-4 sm:inset-8 lg:inset-10 rounded-full border border-blue-500/20"
    />

    {/* Ring 3 */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-8 sm:inset-16 lg:inset-20 rounded-full border border-cyan-500/20"
    />

    {/* Orbit Nodes */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0"
    >
      <div className="absolute left-1/2 top-0 h-4 w-4 lg:h-6 lg:w-6 -translate-x-1/2 rounded-full bg-cyan-400" />
    </motion.div>

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-4 sm:inset-8 lg:inset-10"
    >
      <div className="absolute right-0 top-1/2 h-3 w-3 lg:h-5 lg:w-5 -translate-y-1/2 rounded-full bg-blue-500" />
    </motion.div>

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-8 sm:inset-16 lg:inset-20"
    >
      <div className="absolute bottom-0 left-1/2 h-3 w-3 lg:h-5 lg:w-5 -translate-x-1/2 rounded-full bg-cyan-300" />
    </motion.div>

    {/* Center Core */}

    <div className="absolute inset-[50px] sm:inset-[90px] lg:inset-[140px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#005BAC] via-[#0A6ED1] to-cyan-500 shadow-[0_0_100px_rgba(0,91,172,0.7)]">

      <div className="text-center">

        <h3 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white">
          RST
        </h3>

        <p className="mt-2 text-[8px] sm:text-[10px] lg:text-sm uppercase tracking-[2px] sm:tracking-[4px] lg:tracking-[8px] text-blue-100">
          SECURITY ECOSYSTEM
        </p>

        <div className="mx-auto mt-3 lg:mt-6 h-px w-12 lg:w-24 bg-white/30" />

        <p className="mt-2 lg:mt-4 hidden sm:block text-[10px] lg:text-xs uppercase tracking-[2px] lg:tracking-[4px] text-cyan-200">
          Surveillance • Analytics • Intelligence
        </p>

      </div>

    </div>

  </div>

</div>


);
}
