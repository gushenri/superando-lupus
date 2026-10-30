import type { Metadata } from "next";
import { ContentLayout, InfoCard, SourceNote } from "@/components/ContentLayout";

export const metadata: Metadata = { title: "Uma comunidade que acolhe e informa | Superando o Lúpus", description: "A Associação Brasileira Superando atua na informação, acolhimento, orientação e defesa de direitos em saúde. Esta página resume temas apresentados em seus canais oficiais." };

// Página informativa: conteúdo organizado em cartões reutilizáveis.
export default function Page() {
  return <ContentLayout eyebrow="Nossa rede" title="Uma comunidade que acolhe e informa" intro="A Associação Brasileira Superando atua na informação, acolhimento, orientação e defesa de direitos em saúde. Esta página resume temas apresentados em seus canais oficiais.">

  <div className="grid gap-5 md:grid-cols-2">
    <InfoCard title="Propósito"><p>Promover acesso a informação segura, cuidado humanizado, participação social e defesa de direitos de pessoas com lúpus e outras condições crônicas, assim como suas redes de apoio.</p></InfoCard>
    <InfoCard title="Frentes de atuação"><p>Educação em saúde, mobilização comunitária, pesquisa, cooperação entre organizações e participação no debate de políticas públicas estão entre os eixos apresentados pela associação.</p></InfoCard>
    <InfoCard title="Princípios"><p>Ética, respeito à diversidade, inclusão, acessibilidade, proteção de dados e transparência são princípios divulgados pela organização.</p></InfoCard>
    <InfoCard title="Como fazer parte"><p>Conheça os meios oficiais de associação, campanhas, voluntariado e participação. Para evitar cadastros não autorizados, esta versão demonstrativa encaminha para o site institucional.</p><a className="mt-4 inline-block font-bold text-brand-primary underline" href="https://www.superando.org.br" target="_blank" rel="noopener noreferrer">Acessar associação oficial</a></InfoCard>
  </div>
  <SourceNote links={[{title:"Institucional — Associação Brasileira Superando",href:"https://www.superando.org.br"}]} />

  </ContentLayout>;
}
