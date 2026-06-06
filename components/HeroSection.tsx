"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import NeuralBackdrop from "@/components/NeuralBackdrop";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

// Word-by-word headline reveal
const headWords = [
  { t: "Qualquer" },
  { t: "problema" },
  { t: "da" },
  { t: "sua" },
  { t: "empresa" },
  { t: "pode" },
  { t: "ser" },
  { t: "resolvido", hl: true },
  { t: "em", hl: true },
  { t: "60", hl: true },
  { t: "minutos.", hl: true },
];

const headContainer: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.35, staggerChildren: 0.055 },
  },
};

const headWord: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-base"
    >
      {/* Layered structural backdrop */}
      <div className="absolute inset-0 bp-lines mask-fade" aria-hidden />
      <div className="absolute inset-0 bp-dots opacity-30 mask-fade" aria-hidden />
      {/* Animated neural network */}
      <div className="absolute inset-0 opacity-70 mask-fade" aria-hidden>
        <NeuralBackdrop />
      </div>

      {/* Structural glows — simulate a light source, not decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-[#002D62] opacity-30 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] left-1/2 -translate-x-1/2 h-[260px] w-[420px] rounded-full bg-[#00E5FF] opacity-[0.07] blur-[120px]"
      />

      {/* Diagnostic scan beam — sweeps once, slowly, signaling the audit */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent"
        initial={{ top: "12%", opacity: 0 }}
        animate={{ top: ["12%", "88%"], opacity: [0, 0.8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 3,
          delay: 1.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-20 text-center">
        {/* Logo icon (cropped wordmark off) */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute inset-0 scale-[1.8] rounded-full bg-[#00E5FF] blur-[60px]"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative overflow-hidden h-24 sm:h-28">
              <Image
                src="/logo.webp"
                alt="TEKTONE"
                width={500}
                height={500}
                priority
                className="h-[calc(100%/0.63)] w-auto object-contain object-top"
                style={{
                  filter:
                    "brightness(1.6) contrast(1.1) drop-shadow(0 0 18px rgba(255,255,255,0.2)) drop-shadow(0 0 48px rgba(0,229,255,0.3))",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="label-tech mb-6"
        >
          Engenharia de Soluções &amp; Escala
        </motion.p>

        {/* Headline — word-by-word reveal */}
        <motion.h1
          variants={headContainer}
          initial="hidden"
          animate="show"
          className="text-balance text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.08] tracking-tightish text-white"
        >
          {headWords.map((w, i) => (
            <motion.span
              key={i}
              variants={headWord}
              className={`inline-block ${w.hl ? "text-gradient-cyan" : ""}`}
            >
              {w.t}
              {i < headWords.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-pretty mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          A TEKTONE identifica o obstáculo que impede a sua expansão e
          desenvolve a solução tecnológica sob medida para eliminá-lo.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="#qualificacao"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-action px-7 py-4 text-base font-bold text-ink-base transition-all duration-200 hover:brightness-110 glow-action"
          >
            {/* Sheen sweep */}
            <motion.span
              aria-hidden
              className="absolute inset-0 -skew-x-12 bg-white/30"
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: "easeInOut",
              }}
            />
            <span className="relative">QUERO MEU DIAGNÓSTICO</span>
            <ArrowRight className="relative h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="font-mono text-xs tracking-wide text-zinc-600">
            vagas restritas por trimestre
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-action"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
