"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function AutoridadeSection() {
  return (
    <section
      id="autoridade"
      className="relative bg-ink-900 py-28 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          {/* Left — narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-tech mb-4">Autoridade</p>
            <h2 className="text-balance text-3xl sm:text-4xl font-bold leading-tight text-white">
              Conheça Pedro Silvestrini
            </h2>
            <p className="mt-2 font-mono text-sm tracking-wide text-action">
              CEO &amp; Fundador da TEKTONE
            </p>

            <div className="mt-7 space-y-5 text-pretty leading-relaxed text-zinc-400">
              <p>
                Pedro lidera a estratégia com uma visão forjada em três
                continentes.
              </p>
              <p>
                Não é um consultor de PowerPoint. É um operador de campo que
                escala tráfego de R$ 40k/dia e desenha arquiteturas que
                sustentam margens de lucro agressivas — onde a margem de erro é
                zero.
              </p>
              <p className="border-l-2 border-action pl-5 text-zinc-200">
                Ele não vê “problemas”, vê falhas de engenharia operacional. E
                sabe exatamente como corrigir.
              </p>
            </div>
          </motion.div>

          {/* Right — auditable metric stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl surface-2 p-8 sm:p-10"
          >
            {/* Hero stat */}
            <div className="border-b border-white/10 pb-8">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-zinc-500">
                valor de mercado destravado
              </p>
              <AnimatedNumber
                value={9}
                prefix="R$ "
                suffix="M+"
                className="mt-3 block font-mono text-5xl sm:text-6xl font-bold tracking-tight text-result-lime tabular-nums"
              />
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt>
                  <AnimatedNumber
                    value={40}
                    prefix="R$ "
                    suffix="k"
                    className="font-mono text-3xl font-bold tracking-tight text-white tabular-nums"
                  />
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-zinc-500">
                  tráfego operado por dia
                </dd>
              </div>
              <div>
                <dt>
                  <AnimatedNumber
                    value={3}
                    className="font-mono text-3xl font-bold tracking-tight text-white tabular-nums"
                  />
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-zinc-500">
                  continentes de operação
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
