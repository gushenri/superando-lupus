import Link from "next/link";
import { Heart } from "lucide-react";

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="#inicio" aria-label="Superando o Lúpus - voltar ao início" className="inline-flex items-center gap-3">
      <span className={`grid h-11 w-11 place-items-center rounded-2xl ${light ? "bg-white/15 text-white" : "bg-brand-light text-brand-primary"}`}>
        <Heart size={23} strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-[17px] font-extrabold tracking-tight ${light ? "text-white" : "text-brand-dark"}`}>Superando o Lúpus</span>
        <span className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[.17em] ${light ? "text-white/70" : "text-brand-primary"}`}>Acolher é transformar</span>
      </span>
    </Link>
  );
}
