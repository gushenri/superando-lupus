import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Sections";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Layout compartilhado entre as páginas informativas.
export function ContentLayout({ eyebrow, title, intro, children }: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="conteudo">
        <section className="soft-gradient px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"><ArrowLeft size={16} /> Voltar ao início</Link>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-primary">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-brand-dark sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-ink">{intro}</p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">{children}</div>
        <section className="bg-brand-light px-5 py-14 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div><h2 className="text-2xl font-extrabold text-brand-dark">Informação e acolhimento caminham juntos.</h2><p className="mt-2 text-brand-ink">Conheça mais iniciativas e formas de participação.</p></div>
            <Link href="/#participar" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-bold text-white">Participar <ArrowUpRight size={17}/></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Cartão reutilizado nas páginas de conteúdo.
export function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <article className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm"><h2 className="text-xl font-extrabold text-brand-dark">{title}</h2><div className="mt-4 leading-7 text-brand-ink">{children}</div></article>;
}

export function SourceNote({ links }: { links: {title: string; href: string}[] }) {
  return <aside className="mt-12 rounded-2xl border border-purple-100 bg-[#faf7fd] p-6"><h2 className="font-extrabold text-brand-dark">Referências e leituras complementares</h2><ul className="mt-3 space-y-2">{links.map(link => <li key={link.href}><a className="font-medium text-brand-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer" href={link.href}>{link.title}</a></li>)}</ul><p className="mt-3 text-sm text-brand-ink">O conteúdo é educativo, não substitui avaliação médica nem orientação jurídica individual.</p></aside>;
}
