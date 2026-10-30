import Link from "next/link";
import { BookOpen, HeartHandshake, Scale, Sprout, ArrowUpRight } from "lucide-react";

// Mostra as principais áreas do portal na página inicial.
const areas = [
  { href: "/lupus", title: "Entenda o lúpus", text: "Sintomas, diagnóstico, cuidados e convivência.", Icon: BookOpen },
  { href: "/direitos", title: "Direitos e acesso", text: "Caminhos para buscar orientação e serviços de saúde.", Icon: Scale },
  { href: "/projetos", title: "Projetos e campanhas", text: "Iniciativas de conscientização e participação.", Icon: Sprout },
  { href: "/associacao", title: "Nossa comunidade", text: "Propósito, valores e formas de fazer parte.", Icon: HeartHandshake },
];
export default function Explore() {
  return <section id="explorar" className="bg-white px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-widest text-brand-primary">Explore conteúdos</p><h2 className="mt-4 text-4xl font-extrabold text-brand-dark">Informação que aproxima pessoas</h2><p className="mt-4 max-w-2xl text-brand-ink">Encontre orientações, conheça projetos e descubra caminhos para participar.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{areas.map(({href,title,text,Icon})=><Link key={href} href={href} className="group rounded-3xl border border-purple-100 bg-brand-light p-7 transition hover:-translate-y-1 hover:shadow-lg"><Icon size={30} className="text-brand-primary" aria-hidden="true"/><h3 className="mt-5 text-xl font-bold text-brand-dark">{title}</h3><p className="mt-3 leading-7 text-brand-ink">{text}</p><span className="mt-5 inline-flex items-center gap-1 font-bold text-brand-primary">Saiba mais <ArrowUpRight size={17}/></span></Link>)}</div></div></section>;
}
