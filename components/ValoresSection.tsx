"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, TrendingUp, MessageSquare, Layers, Zap } from "lucide-react";

const valores = [
  {
    icon: Gem,
    title: "Arquitetura de Precisão",
    body: "Soluções projetadas sob medida com precisão cirúrgica. O genérico não tem espaço aqui.",
    accent: "#00E5FF",
  },
  {
    icon: TrendingUp,
    title: "Engenharia de Lucro",
    body: "Tecnologia focada puramente em resultados financeiros, eficiência e expansão.",
    accent: "#C2FF00",
  },
  {
    icon: MessageSquare,
    title: "Clareza Estratégica",
    body: "Transformamos ecossistemas complexos em narrativas simples, diretas e altamente conversivas.",
    accent: "#00E5FF",
  },
  {
    icon: Layers,
    title: "Fundações Inabaláveis",
    body: "Construímos legados robustos e infraestruturas escaláveis, nunca soluções temporárias.",
    accent: "#C2FF00",
  },
  {
    icon: Zap,
    title: "Execução Implacável",
    body: "Alta performance, velocidade e domínio absoluto de ponta a ponta.",
    accent: "#00E5FF",
  },
];

function ValorCard({
  valor,
  index,
}: {
  valor: (typeof valores)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = valor.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-white border border-slate-200 p-7 flex gap-5 items-start transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
    >
      {/* Accent left bar — always visible, brightens on hover */}
      <div
        className="absolute left-0 top-5 bottom-5 w-[4px] rounded-r-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: valor.accent }}
      />

      {/* Icon */}
      <div
        className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
        style={{ background: `${valor.accent}22`, border: `1.5px solid ${valor.accent}55` }}
      >
        <Icon className="w-5 h-5" style={{ color: valor.accent === "#C2FF00" ? "#7a9e00" : valor.accent }} />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-bold text-[#002D62] text-base mb-1.5">{valor.title}</h3>
        <p className="text-slate-600 text-sm leading-[1.8]">{valor.body}</p>
      </div>
    </motion.div>
  );
}

export default function ValoresSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-28 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00E5FF] mb-3 block">
            O Nosso Código
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#002D62] leading-tight max-w-lg">
            O Padrão{" "}
            <span className="text-gradient-cyan">TEKTONE</span>
          </h2>
        </motion.div>

        {/* Grid: 2 cols, last item centered on last row */}
        <div className="grid sm:grid-cols-2 gap-4">
          {valores.map((v, i) => (
            <div
              key={v.title}
              className={
                i === valores.length - 1 && valores.length % 2 !== 0
                  ? "sm:col-span-2 sm:max-w-xl sm:mx-auto w-full"
                  : ""
              }
            >
              <ValorCard valor={v} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
