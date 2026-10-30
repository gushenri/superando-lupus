import Link from "next/link";
import { ArrowRight, BookOpenText, HandHeart, Heart, HeartHandshake, Info, Mail, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
import { site } from "@/lib/site";

const values = [
  { icon: HandHeart, title: "Acolhimento", text: "Escuta atenta, empatia e respeito a cada trajetória." },
  { icon: BookOpenText, title: "Informação", text: "Conteúdo claro e responsável para ampliar o conhecimento." },
  { icon: UsersRound, title: "Conexão", text: "Laços de apoio que aproximam pessoas e famílias." },
];

export function About() {
  return <section id="sobre" className="bg-white px-5 py-24 sm:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
        <div><p className="text-sm font-bold uppercase tracking-[.2em] text-brand-primary">Quem somos</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl">Acolher é o primeiro passo para <span className="text-brand-primary">transformar vidas.</span></h2></div>
        <p className="max-w-xl text-lg leading-8 text-brand-ink">A Superando o Lúpus é apresentada aqui como uma iniciativa de conscientização, acolhimento e conexão. Esta descrição é provisória e deverá ser validada com a organização antes da publicação.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">{values.map(({icon: Icon,title,text}) => <article key={title} className="rounded-3xl border border-purple-100 bg-brand-light p-8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100/70"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand-primary"><Icon size={29} aria-hidden="true" /></span><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-brand-ink">{text}</p></article>)}</div>
    </div>
  </section>;
}

const actions = [
  { icon: HeartHandshake, number: "01", title: "Criar conexões", text: "Aproximar pessoas por meio de espaços de escuta e convivência." },
  { icon: BookOpenText, number: "02", title: "Compartilhar conhecimento", text: "Tornar as informações sobre o lúpus mais compreensíveis e acessíveis." },
  { icon: Heart, number: "03", title: "Inspirar solidariedade", text: "Incentivar gestos de cuidado e participação na comunidade." },
];
export function Mission() {
  return <section id="atuacao" className="bg-[#f9f5fc] px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-brand-primary">Como queremos fazer a diferença</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Pequenos gestos. <span className="text-brand-primary">Grandes transformações.</span></h2><p className="mt-5 text-lg leading-8 text-brand-ink">Três caminhos que inspiram esta proposta de landing page. Confirme as atividades realizadas pela fundação antes de publicar.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{actions.map(({icon:Icon,number,title,text}) => <article key={title} className="rounded-3xl bg-white p-8 soft-shadow"><div className="flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-light text-brand-primary"><Icon size={28} aria-hidden="true"/></span><span className="text-4xl font-extrabold text-purple-100">{number}</span></div><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-brand-ink">{text}</p></article>)}</div></div></section>;
}

export function LupusInfo() {
  return <section id="lupus" className="bg-white px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <div className="relative overflow-hidden rounded-[36px] bg-[#f3eafb] p-10 sm:p-14"><span className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-purple-200/60"/><span className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full bg-pink-100"/><div className="relative flex min-h-80 flex-col items-center justify-center text-center"><span className="grid h-32 w-32 place-items-center rounded-[36px] bg-white text-brand-primary shadow-lg shadow-purple-100"><Heart size={68} strokeWidth={1.7} aria-hidden="true" /></span><p className="mt-8 max-w-xs text-2xl font-bold leading-snug text-brand-primary">Conhecimento também é uma forma de cuidado.</p></div></div>
    <div><p className="text-sm font-bold uppercase tracking-[.2em] text-brand-primary">Informação que acolhe</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Você sabe o que é <span className="text-brand-primary">lúpus?</span></h2><p className="mt-6 text-lg leading-8 text-brand-ink">O lúpus é uma doença autoimune crônica. Isso significa que o sistema imunológico pode atacar tecidos saudáveis do próprio corpo e afetar diferentes órgãos.</p><p className="mt-4 text-lg leading-8 text-brand-ink">Os sintomas e a evolução variam de pessoa para pessoa. A avaliação e o acompanhamento por profissionais de saúde são importantes para o diagnóstico e o tratamento.</p><div className="mt-7 flex items-start gap-3 rounded-2xl bg-brand-light p-5 text-sm leading-6 text-brand-ink"><Info size={21} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true"/><p>Este conteúdo é informativo e não substitui orientação, diagnóstico ou tratamento médico.</p></div><Link href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-brand-primary underline underline-offset-4">Conheça a Organização Mundial da Saúde <ArrowRight size={17} aria-hidden="true"/></Link></div>
  </div></section>;
}

const faqs = [
  { q: "O lúpus é contagioso?", a: "Não. O lúpus é uma doença autoimune e não é transmitido de uma pessoa para outra." },
  { q: "O lúpus tem cura?", a: "Atualmente, não há cura definitiva para o lúpus, mas há tratamentos que podem controlar a atividade da doença e os sintomas. O acompanhamento médico é essencial." },
  { q: "Toda pessoa com lúpus tem os mesmos sintomas?", a: "Não. Os sinais, os órgãos afetados e a intensidade da doença variam entre as pessoas. Somente um profissional de saúde pode avaliar cada caso." },
  { q: "Como posso apoiar alguém que convive com lúpus?", a: "Escute sem julgamentos, respeite seus limites, procure informações confiáveis e ofereça apoio prático conforme a necessidade da pessoa." },
];
export function FAQ() {
  return <section id="faq" className="bg-[#faf6fd] px-5 py-24 sm:px-8"><div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[.2em] text-brand-primary">Perguntas frequentes</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Informação gera <span className="text-brand-primary">acolhimento.</span></h2></div><div className="mt-12 space-y-4">{faqs.map(({q,a}) => <details key={q} className="group rounded-2xl border border-purple-100 bg-white p-6 open:shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-brand-dark marker:hidden">{q}<span className="shrink-0 text-2xl font-normal text-brand-primary group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl border-t border-purple-100 pt-4 leading-7 text-brand-ink">{a}</p></details>)}</div></div></section>;
}

export function Participate() {
  const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;
  return <section id="participar" className="px-5 py-24 sm:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-brand-primary p-8 text-white sm:p-16"><div className="pointer-events-none absolute -right-14 -top-14 h-72 w-72 rounded-full border-[48px] border-white/10"/><div className="relative max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-purple-200">Vamos caminhar juntos?</p><h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Uma comunidade mais forte começa com cada um de nós.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-purple-100">Quer conversar, apoiar ou saber mais sobre a fundação? Os canais oficiais poderão ser disponibilizados aqui assim que forem confirmados.</p><div className="mt-9 flex flex-wrap gap-3">{site.email ? <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-brand-primary hover:bg-purple-50"><Mail size={18}/> Enviar e-mail</a> : <span className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-4 text-sm font-semibold text-white"><Mail size={18}/> E-mail: em breve</span>}{whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-bold text-white hover:bg-white/10"><MessageCircle size={18}/> WhatsApp</a> : null}</div></div></div></section>;
}

export function Footer() {
  return <footer id="contato" className="bg-[#281d38] px-5 py-14 text-white sm:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row"><div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15"><Heart size={22}/></span><span className="text-xl font-extrabold">Superando o Lúpus</span></div><p className="mt-4 max-w-md leading-7 text-purple-100/80">Um espaço feito para informar, acolher e fortalecer conexões. Cada pessoa importa.</p></div><div><h3 className="font-bold">Navegação</h3><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-purple-100/80"><Link href="/#sobre">Quem somos</Link><Link href="/#atuacao">Nossa atuação</Link><Link href="/#lupus">Sobre o lúpus</Link><Link href="/#faq">Dúvidas</Link></div></div></div><div className="flex flex-col justify-between gap-3 pt-7 text-xs text-purple-100/60 sm:flex-row"><p>© {new Date().getFullYear()} Superando o Lúpus. Conteúdo demonstrativo sujeito à validação.</p><p className="inline-flex items-center gap-2"><ShieldCheck size={15}/> Informação não substitui acompanhamento médico.</p></div></div></footer>;
}
