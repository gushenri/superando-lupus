import Link from "next/link";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="soft-gradient relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
      <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-bold tracking-wide text-brand-primary sm:text-sm"><Sparkles size={16} aria-hidden="true" /> Um lugar de acolhimento e esperança</span>
          <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight text-brand-dark sm:text-6xl lg:text-[68px]">Ninguém precisa enfrentar o <span className="text-brand-primary">lúpus sozinho.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-brand-ink">A informação aproxima, o cuidado fortalece e a comunidade transforma. Um espaço para compartilhar conhecimento e construir conexões com empatia.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#sobre" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-[#542e82]">Conheça nossa missão <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link href="#participar" className="inline-flex items-center rounded-full border border-purple-200 bg-white px-7 py-4 text-sm font-bold text-brand-primary transition hover:bg-brand-light">Caminhe com a gente</Link>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-brand-ink"><span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-primary shadow-sm"><HeartHandshake size={21} aria-hidden="true" /></span><span>Escuta, respeito e apoio fazem a diferença.</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -right-4 -top-5 h-32 w-32 rounded-full border-2 border-dashed border-purple-200" />
          <div className="absolute -bottom-8 -left-5 h-44 w-44 rounded-full bg-[#eddaff] blur-xl" />
          <div className="soft-shadow relative overflow-hidden rounded-[42px] border-[10px] border-white bg-[#e9d6fa]">
            <svg viewBox="0 0 640 650" role="img" aria-label="Ilustração de duas pessoas se apoiando, simbolizando acolhimento" className="h-auto w-full">
              <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eedffa"/><stop offset="1" stopColor="#f9e5ed"/></linearGradient></defs>
              <rect width="640" height="650" fill="url(#bg)"/>
              <circle cx="509" cy="126" r="80" fill="#f7f0fc"/><circle cx="123" cy="500" r="106" fill="#dbc0f4"/>
              <path d="M80 650c22-138 99-233 219-239 120-6 243 78 264 239" fill="#ae85ce"/>
              <ellipse cx="229" cy="271" rx="92" ry="123" fill="#f3bf9e"/>
              <path d="M137 274c-18-107 28-177 112-177 78 0 116 63 97 150-26-6-45-23-57-57-45 45-94 69-152 84Z" fill="#523451"/>
              <path d="M137 275c-22 91 4 154 48 186l-44 71c-76-74-91-198-4-257Z" fill="#523451"/>
              <rect x="209" y="374" width="49" height="84" rx="22" fill="#e9ae90"/>
              <path d="M90 650c17-137 58-207 141-207s136 74 149 207" fill="#fff7f9"/>
              <ellipse cx="412" cy="296" rx="83" ry="115" fill="#d79270"/>
              <path d="M327 276c-8-94 36-144 103-144 70 0 102 58 82 142-25-12-41-29-52-56-42 36-77 52-133 58Z" fill="#3c314b"/>
              <path d="M338 273c-14 97 4 170 28 199l-54 51c-69-78-54-203 26-250Z" fill="#3c314b"/>
              <rect x="389" y="394" width="48" height="75" rx="23" fill="#c78061"/>
              <path d="M312 650c-3-128 24-181 101-183 81-2 128 62 154 183" fill="#6b3fa0"/>
              <path d="M278 491c63 9 110 44 137 90l-49 45c-27-51-63-80-118-91Z" fill="#f3bf9e"/>
              <path d="M318 514c-20 31-29 67-32 108h70c3-35 14-53 30-74Z" fill="#6b3fa0"/>
              <path d="M226 328q32 22 62-2" stroke="#a96863" strokeWidth="6" strokeLinecap="round" fill="none"/>
              <path d="M387 347q28 23 54 0" stroke="#8b4e47" strokeWidth="6" strokeLinecap="round" fill="none"/>
              <circle cx="203" cy="286" r="5" fill="#523451"/><circle cx="279" cy="280" r="5" fill="#523451"/>
              <circle cx="385" cy="311" r="5" fill="#3c314b"/><circle cx="451" cy="308" r="5" fill="#3c314b"/>
              <path d="M496 82c11-16 31-15 41 0 10-15 30-16 41 0 15 21-2 43-41 70-39-27-56-49-41-70Z" fill="#ad80d4"/>
            </svg>
          </div>
          <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl border border-purple-100 bg-white px-5 py-4 shadow-xl shadow-purple-200/50 sm:-left-9"><span className="text-2xl">💜</span><div><p className="text-sm font-bold text-brand-dark">Você não está só</p><p className="text-xs text-brand-ink">Cada história importa</p></div></div>
        </div>
      </div>
    </section>
  );
}
