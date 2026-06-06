"use client";

import { motion } from "framer-motion";
import { ScanSearch, Boxes } from "lucide-react";

const acts = [
  {
    n: "01",
    spec: "90 min",
    icon: ScanSearch,
    title: "Diagnóstico de Precisão",
    lead: "Não é uma consultoria, é uma auditoria.",
    body: "Separamos a causa raiz do sintoma. Você não sai com “dicas” — você sai com o mapa técnico e estratégico para a resolução do seu problema.",
    chips: ["causa raiz", "mapa técnico", "estratégia"],
  },
  {
    n: "02",
    spec: "30 dias",
    icon: Boxes,
    title: "Construção Sob Medida",
    lead: "Em 30 dias, entregamos a solução funcional.",
    body: "Seja um SaaS, automação de IA ou marketing em escala. Sua empresa não é um laboratório: aplicamos processos validados em mercados de alta concorrência. Você entra em um padrão de excelência internacional.",
    chips: ["SaaS", "automação de IA", "marketing em escala"],
  },
];

export default function ProcessoSection() {
  return (
    <section
      id="processo"
      className="relative bg-ink-900 py-28 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="label-tech mb-4">Linha do tempo</p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Em 60 minutos, o diagnóstico.{" "}
            <span className="text-zinc-500">
              Em 30 dias, a arquitetura da escala.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative grid gap-6 lg:grid-cols-2">
          {/* Connecting rail */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-px w-full -translate-x-1/2 lg:block"
          >
            <div className="mx-auto h-px w-[60%] bg-gradient-to-r from-action/0 via-action/40 to-action/0" />
          </div>

          {acts.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.article
                key={act.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl surface-2 p-8 transition-colors duration-300 hover:border-action/30"
              >
                {/* Node header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-zinc-600">
                      Ato {act.n}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-action/30 bg-action/10 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-action">
                      {act.spec}
                    </span>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl surface-3 text-action transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">{act.title}</h3>
                <p className="mt-3 text-lg font-medium text-zinc-200">
                  {act.lead}
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-zinc-400">
                  {act.body}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {act.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] tracking-wide text-zinc-400"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
