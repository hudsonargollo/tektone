"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type React from "react";
import { BarChart3, Cpu, PenTool } from "lucide-react";

const team = [
  {
    name: "Pedro Silvestrini",
    role: "Estratégia e Visão de Negócios",
    title: "CEO",
    icon: BarChart3,
    color: "#00E5FF",
    description:
      "A bússola estratégica e a linha de frente executiva. Pedro mapeia o campo de batalha e forja alianças, conectando demandas reais à nossa execução implacável para garantir que parceiros visionários estejam sempre um passo à frente.",
  },
  {
    name: "Hudson Argollo",
    role: "Criação de Soluções, Tecnologia e Gestão",
    title: "CTO",
    icon: Cpu,
    color: "#C2FF00",
    description:
      "O construtor das ferramentas de domínio. Hudson é a mente que traduz a estratégia em infraestruturas robustas. Ele lidera o gerenciamento de projetos e a engenharia de ponta a ponta para que os ecossistemas, automações e IAs entreguem performance e escalabilidade reais.",
  },
  {
    name: "Alison Aparecido",
    role: "Narrativa e Conversão",
    title: "CMO",
    icon: PenTool,
    color: "#00E5FF",
    description:
      "A voz da conversão. De nada adianta a máquina mais potente se a mensagem não conectar. Alison traduz toda a complexidade técnica e o valor do negócio em narrativas magnéticas que posicionam nossos parceiros como líderes indiscutíveis.",
  },
];

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = member.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-[#011f45] border border-[#1a4a7a] p-8 flex flex-col gap-5 overflow-hidden transition-all duration-500 hover:border-transparent cursor-default"
      style={
        { "--neon": member.color } as React.CSSProperties
      }
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px ${member.color}55, 0 0 40px ${member.color}18` }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${member.color}22, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ background: `${member.color}25`, border: `1px solid ${member.color}50` }}
      >
        <Icon className="w-6 h-6" style={{ color: member.color }} />
      </div>

      {/* Name & role */}
      <div>
        <p
          className="text-xs font-bold tracking-[0.18em] uppercase mb-1.5 transition-colors duration-300"
          style={{ color: member.color }}
        >
          {member.title}
        </p>
        <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>
        <p className="text-sm text-slate-300 mt-0.5 font-medium">{member.role}</p>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, ${member.color}, transparent)` }}
      />

      {/* Description */}
      <p className="text-slate-200 text-sm leading-[1.85]">
        {member.description}
      </p>
    </motion.div>
  );
}

export default function TriadeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-28 bg-[#00112b] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#002D62] opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00E5FF] mb-3 block">
            A Tríade
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            As Forças Que{" "}
            <span className="text-gradient-cyan">Sustentam</span> Sua Empresa
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
