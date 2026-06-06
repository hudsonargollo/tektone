"use client";

import { motion } from "framer-motion";
import { Code2, Bot, TrendingUp, Network, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    tag: "build",
    title: "Sistemas e Apps",
    body: "Engenharia de software focada em performance.",
  },
  {
    icon: Bot,
    tag: "ai",
    title: "Automação e IA",
    body: "Agentes operacionais 24/7 que eliminam o gargalo humano.",
  },
  {
    icon: TrendingUp,
    tag: "scale",
    title: "Marketing em Escala",
    body: "Gestão de tráfego (acima de R$ 40 mil/dia) com funis de conversão obsessivos.",
  },
  {
    icon: Network,
    tag: "ops",
    title: "Arquitetura de Operação",
    body: "CRM nichado e infraestrutura proprietária.",
  },
];

export default function EntregasSection() {
  return (
    <section id="entregas" className="relative bg-ink-base py-28">
      <div className="absolute inset-0 bp-lines opacity-50 mask-fade" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="label-tech mb-4">O que a TEKTONE entrega</p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Nós desenhamos a{" "}
            <span className="text-gradient-cyan">arquitetura</span> do seu
            sucesso.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col rounded-2xl surface-2 p-6 transition-colors duration-300 hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl surface-3 text-action">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-600">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Equity anchor — financial proposition, chromatically distinct */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-4 overflow-hidden rounded-2xl border border-result-lime/30 bg-result-lime/[0.04] p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-result-lime opacity-[0.08] blur-[60px]"
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-result-lime">
                custo → ativo
              </p>
              <p className="mt-3 text-pretty text-xl sm:text-2xl font-semibold leading-snug text-white">
                Transformamos custo em ativo. O valor investido em nós vira{" "}
                <span className="text-result-lime">equity do seu negócio.</span>
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-zinc-400">
                A solução para o seu negócio pode se tornar uma solução que o
                mercado inteiro deseja ter. E você será o dono.
              </p>
            </div>
            <ArrowUpRight
              aria-hidden
              className="hidden h-10 w-10 shrink-0 text-result-lime/60 sm:block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
