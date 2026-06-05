"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HistoriaSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Pillar Blue left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#002D62] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedBlock>
          <div className="mb-16 max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00E5FF] mb-3 block">
              Nossa História
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#002D62] leading-tight">
              O Resgate da Verdadeira{" "}
              <span className="text-gradient-cyan">Engenharia</span> de
              Negócios.
            </h2>
          </div>
        </AnimatedBlock>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main text card */}
          <AnimatedBlock delay={0.1}>
            <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-8 lg:p-10 h-full">
              <div className="w-10 h-0.5 bg-[#00E5FF] mb-6" />
              <p className="text-[#333333] text-base sm:text-lg leading-[1.85] font-light">
                Na Grécia Antiga,{" "}
                <strong className="font-semibold text-[#002D62]">
                  Tekton
                </strong>{" "}
                era o mestre construtor e arquiteto. Aquele que transformava
                matéria bruta em estruturas inabaláveis. A TEKTONE nasceu para
                resgatar essa essência.
              </p>
              <p className="mt-5 text-[#333333] text-base sm:text-lg leading-[1.85] font-light">
                Em um cenário onde as empresas lutam para integrar o físico ao
                digital, nós não entregamos ferramentas soltas. Nós assumimos a
                complexidade da automação, da tecnologia e da inteligência
                artificial para construir ecossistemas sob medida.
              </p>
            </div>
          </AnimatedBlock>

          {/* Mission card */}
          <AnimatedBlock delay={0.2}>
            <div className="rounded-2xl bg-[#002D62] p-8 lg:p-10 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#00E5FF] opacity-10 blur-[60px] pointer-events-none" />

              <div>
                <span className="text-[#00E5FF] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                  Nossa Missão
                </span>
                <p className="text-white text-lg sm:text-xl leading-[1.75] font-light italic relative z-10">
                  &ldquo;Arquitetar ecossistemas de negócios sob medida e de
                  alta performance que unem o físico e o digital, transformando
                  tecnologia complexa, IA e automação em{" "}
                  <span className="text-[#C2FF00] not-italic font-semibold">
                    lucro mensurável
                  </span>{" "}
                  e domínio de mercado para nossos parceiros.&rdquo;
                </p>
              </div>

              <div className="mt-8 w-full h-px bg-gradient-to-r from-[#00E5FF]/40 to-transparent" />
            </div>
          </AnimatedBlock>
        </div>
      </div>
    </section>
  );
}
