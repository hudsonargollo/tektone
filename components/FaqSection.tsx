"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Por que o prazo de 30 dias?",
    a: "A maioria das empresas perde meses tentando alinhar consultores, agências de marketing e equipes de desenvolvimento. Nós eliminamos essa fragmentação. Como somos uma engenharia de soluções completa, controlamos todo o pipeline — da estratégia à implantação. Em 30 dias você não recebe um “plano”, recebe a solução funcional rodando.",
  },
  {
    q: "Preciso entender de tecnologia para trabalhar com vocês?",
    a: "Absolutamente não. Nosso papel é traduzir a complexidade técnica para a linguagem que sustenta sua empresa: lucro, margem, LTV e escalabilidade. Nós cuidamos da arquitetura e da engenharia; você mantém o foco na direção estratégica do seu negócio.",
  },
  {
    q: "O que acontece se eu não fechar com a TEKTONE após a call?",
    a: "Você sai com um plano de ação completo. Nossa call de diagnóstico não é uma sessão de vendas, é uma auditoria estratégica. Mesmo que não sigamos juntos, você sairá com muito mais clareza sobre o seu gargalo principal — e com o mapa técnico necessário para resolvê-lo — do que quando entrou.",
  },
  {
    q: "Qual a diferença da TEKTONE para uma agência tradicional?",
    a: "Agências tradicionais vendem “horas” e relatórios de métricas de vaidade. A TEKTONE vende engenharia de escala e ativos operacionais. Não focamos apenas em tráfego ou apenas em código; focamos em construir sistemas que sustentam o crescimento do seu negócio. Se uma solução não gera impacto direto no seu resultado ou não aumenta sua eficiência, nós simplesmente não a construímos.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-900 py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <p className="label-tech mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
            Perguntas frequentes
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex gap-4">
                    <span className="font-mono text-sm text-zinc-600 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold text-white">
                      {f.q}
                    </span>
                  </span>
                  <Plus
                    className={`mt-1 h-5 w-5 shrink-0 text-action transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-pretty pb-6 pl-10 pr-8 leading-relaxed text-zinc-400">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
