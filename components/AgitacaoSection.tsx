"use client";

import { motion } from "framer-motion";

const lines = [
  {
    text: "O empresário que tenta resolver tudo internamente é o teto do próprio crescimento.",
    emphasis: true,
  },
  {
    text: "Quem tenta resolver sozinho acaba preso na mesma visão que criou o problema.",
  },
  {
    text: "Você não precisa de mais “equipe interna” para executar o mesmo processo falho.",
  },
];

export default function AgitacaoSection() {
  return (
    <section className="relative bg-ink-base py-32 sm:py-40 overflow-hidden">
      {/* Ceiling line — physical metaphor for the growth ceiling */}
      <div
        aria-hidden
        className="absolute top-24 left-1/2 h-px w-[min(640px,80%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-danger/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute top-24 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-danger/60"
      >
        teto de crescimento
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <div className="space-y-12">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={
                l.emphasis
                  ? "text-balance text-3xl sm:text-4xl font-bold leading-snug text-white"
                  : "text-pretty text-xl sm:text-2xl leading-relaxed text-zinc-400"
              }
            >
              {l.text}
            </motion.p>
          ))}

          {/* Resolution line — the pivot to TEKTONE */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-pretty border-l-2 border-action pl-6 text-xl sm:text-2xl leading-relaxed text-zinc-200"
          >
            Você precisa de uma visão de fora — de quem já operou escala global e
            sabe identificar exatamente onde você está{" "}
            <span className="font-semibold text-white">rasgando dinheiro.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
