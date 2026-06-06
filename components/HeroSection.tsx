"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-base"
    >
      {/* Blueprint line mesh */}
      <div className="absolute inset-0 bp-lines mask-fade" aria-hidden />
      {/* Subtle dot matrix on top */}
      <div className="absolute inset-0 bp-dots opacity-40 mask-fade" aria-hidden />

      {/* Cool structural glow — not decorative gradient, simulates light source */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-[#002D62] opacity-30 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] left-1/2 -translate-x-1/2 h-[260px] w-[420px] rounded-full bg-[#00E5FF] opacity-[0.07] blur-[120px]"
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
            <div
              aria-hidden
              className="absolute inset-0 scale-[1.8] rounded-full bg-[#00E5FF] opacity-[0.12] blur-[60px]"
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

        {/* Headline — brutal clarity */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-balance text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tightish text-white"
        >
          Qualquer problema da sua empresa pode ser{" "}
          <span className="text-gradient-cyan">resolvido em 60 minutos.</span>
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
            className="group inline-flex items-center gap-2.5 rounded-lg bg-action px-7 py-4 text-base font-bold text-ink-base transition-all duration-200 hover:brightness-110 glow-action"
          >
            QUERO MEU DIAGNÓSTICO
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="font-mono text-xs tracking-wide text-zinc-600">
            vagas restritas por trimestre
          </p>
        </motion.div>
      </div>
    </section>
  );
}
