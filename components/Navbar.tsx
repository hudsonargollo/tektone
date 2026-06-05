"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.15]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{}}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        style={{ opacity: bgOpacity, background: "rgba(0,18,51,0.88)" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          opacity: borderOpacity,
          background: "linear-gradient(to right, transparent, #00E5FF, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.webp"
            alt="TEKTONE"
            width={140}
            height={70}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Nossa História", "A Tríade", "Valores"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-sm font-semibold hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/60 transition-all duration-200"
        >
          Agendar Reunião
        </a>
      </div>
    </motion.header>
  );
}
