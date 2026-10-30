
"use client";

// React e navegação
import { useState } from "react";
import Link from "next/link";

// Ícones
import { ArrowUpRight, Menu, X } from "lucide-react";

// Componentes e dados
import Brand from "./Brand";
import { navLinks } from "@/lib/site";

export default function Header() {
  // Controla a abertura do menu mobile
  const [open, setOpen] = useState(false);

  // Fecha o menu ao selecionar uma opção
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-[100] isolate w-full border-b border-purple-100 bg-white/95 backdrop-blur-xl">

      {/* Barra principal */}
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">

        {/* Logotipo */}
        <Brand />

        {/* Menu desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-ink transition hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão de participação no desktop */}
        <Link
          href="/#participar"
          className="hidden items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-[#542e82] lg:inline-flex"
        >
          Faça parte
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        {/* Botão mobile: abre e fecha o menu */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-[110] flex h-12 w-12 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-xl bg-brand-light text-brand-primary lg:hidden"
        >
          {open ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <Menu size={26} aria-hidden="true" />
          )}
        </button>

      </div>

      {/* Menu mobile: aparece quando open é true */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegação móvel"
          className="relative z-[105] w-full border-t border-purple-100 bg-white px-6 py-4 shadow-lg lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-purple-50 py-4 text-base font-semibold text-brand-ink transition hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}

          {/* Botão de participação mobile */}
          <Link
            href="/#participar"
            onClick={closeMenu}
            className="mt-5 block rounded-xl bg-brand-primary px-5 py-4 text-center text-sm font-bold text-white"
          >
            Faça parte
          </Link>
        </nav>
      )}

    </header>
  );
}
