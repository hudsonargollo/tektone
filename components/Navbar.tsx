"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "processo", href: "#processo" },
  { label: "entregas", href: "#entregas" },
  { label: "autoridade", href: "#autoridade" },
  { label: "faq", href: "#faq" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.header className="fixed top-0 inset-x-0 z-50">
      <motion.div
        aria-hidden
        className="absolute inset-0 backdrop-blur-xl"
        style={{ opacity: bgOpacity, background: "rgba(10,10,10,0.72)" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-px bg-white/10"
        style={{ opacity: borderOpacity }}
      />

      <nav className="relative mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="TEKTONE — início"
        >
          <span className="font-mono text-[15px] font-bold tracking-[0.28em] text-white">
            TEKTONE
          </span>
        </a>

        {/* Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-wide text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#qualificacao"
          className="group inline-flex items-center gap-1.5 rounded-md bg-action px-4 py-2 text-[13px] font-semibold text-ink-base transition-all duration-200 hover:brightness-110 ring-action"
        >
          Diagnóstico
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}
