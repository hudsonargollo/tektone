"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 bg-[#001233] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#002D62] opacity-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[#C2FF00] opacity-8 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00E5FF] mb-6 block">
            Próximo Passo
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-6">
            O futuro pertence
            <br />
            a quem constrói{" "}
            <span className="text-[#C2FF00]">hoje.</span>
          </h2>

          {/* Support text */}
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Se a sua empresa está pronta para deixar a ineficiência no passado e
            abraçar uma arquitetura tecnológica que multiplica resultados, nossos
            mestres construtores estão a postos.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Primary */}
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C2FF00] text-[#001233] font-bold text-base transition-all duration-300 neon-lime"
            >
              <Calendar className="w-5 h-5" />
              Agendar Reunião Estratégica
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#projeto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[#00E5FF]/40 text-[#00E5FF] font-semibold text-base transition-all duration-300 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]"
            >
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
