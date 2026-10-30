import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import { navLinks } from "@/lib/site";

// Cabeçalho responsivo com menu mobile nativo (sem JavaScript).
export default function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-purple-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Brand />

        {/* Navegação para telas grandes. */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-ink transition hover:text-brand-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Ação de destaque no desktop. */}
        <Link href="/#participar" className="hidden items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-[#542e82] lg:inline-flex">
          Faça parte <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        {/* Menu mobile usando elementos HTML nativos. */}
        <details className="group relative ml-auto shrink-0 lg:hidden">
          <summary
            aria-label="Abrir ou fechar menu"
            className="flex h-12 w-12 cursor-pointer list-none touch-manipulation items-center justify-center rounded-xl bg-brand-light text-brand-primary [&::-webkit-details-marker]:hidden"
          >
            <Menu size={26} aria-hidden="true" className="group-open:hidden" />
            <X size={26} aria-hidden="true" className="hidden group-open:block" />
          </summary>

          {/* Lista de links exibida quando o details está aberto. */}
          <nav aria-label="Navegação móvel" className="absolute right-0 top-full mt-3 w-[min(85vw,20rem)] rounded-2xl border border-purple-100 bg-white p-4 shadow-2xl">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block border-b border-purple-50 px-3 py-3 text-sm font-semibold text-brand-ink hover:text-brand-primary">
                {link.label}
              </Link>
            ))}
            <Link href="/#participar" className="mt-4 block rounded-xl bg-brand-primary px-5 py-3 text-center text-sm font-bold text-white">
              Faça parte
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
