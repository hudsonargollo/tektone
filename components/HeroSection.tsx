"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.18, ease: EASE },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#001233]">
      {/* Grid dots */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#002D62] opacity-40 blur-[120px] pointer-events-none" />

      {/* Cyan glow accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[#00E5FF] opacity-10 blur-[100px] pointer-events-none" />

      {/* Animated circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[120, 240, 380, 480, 600].map((y, i) => (
          <motion.line
            key={i}
            x1="-100"
            y1={y}
            x2="120%"
            y2={y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, delay: i * 0.4, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-[0.15em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          Sobre Nós
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-gradient-hero mb-6"
        >
          Arquitetos do Seu
          <br />
          Domínio Digital.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Não construímos apenas sistemas. Construímos os alicerces tecnológicos
          e estratégicos para que o seu negócio domine o mercado.
        </motion.p>

        {/* Vision statement */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative max-w-3xl mx-auto glass-dark rounded-2xl p-6 sm:p-8 mb-12"
        >
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent" />
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
            &ldquo;Ser o padrão global definitivo em arquitetura de negócios
            digitais — os mestres construtores nos quais empresas visionárias
            confiam para projetar seu futuro e forjar legados que desafiam o
            tempo.&rdquo;
          </p>
          <p className="mt-3 text-xs text-[#00E5FF]/70 tracking-widest uppercase font-semibold">
            Visão TEKTONE
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-[#00E5FF]/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
