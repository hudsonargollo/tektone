import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink-base border-t border-white/[0.08]">
      {/* Final CTA band */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-sm font-bold tracking-[0.28em] text-white">
              TEKTONE
            </span>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-zinc-500">
              O futuro pertence a quem constrói hoje. Preencha o formulário de
              qualificação e descubra o gargalo que trava sua escala.
            </p>
          </div>
          <a
            href="#qualificacao"
            className="group inline-flex items-center gap-2 rounded-lg border border-action/40 bg-action/10 px-6 py-3.5 text-sm font-bold text-action transition-all duration-200 hover:bg-action/20 hover:border-action"
          >
            Preencher formulário de qualificação
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
          <p className="font-mono text-xs tracking-wide text-zinc-600">
            © 2026 TEKTONE · Engenharia de Soluções e Consultoria Estratégica
          </p>
          <p className="font-mono text-[11px] tracking-wide text-zinc-700">
            built in the dark
          </p>
        </div>
      </div>
    </footer>
  );
}
