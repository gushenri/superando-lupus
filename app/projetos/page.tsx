import type { Metadata } from "next";
import { ContentLayout, InfoCard, SourceNote } from "@/components/ContentLayout";

export const metadata: Metadata = { title: "Projetos, campanhas e iniciativas | Superando o Lúpus", description: "Conheça frentes divulgadas pela Associação Brasileira Superando. O status e os canais de participação devem ser confirmados nos links oficiais." };

// Página informativa: conteúdo organizado em cartões reutilizáveis.
export default function Page() {
  return <ContentLayout eyebrow="Mobilização e participação" title="Projetos, campanhas e iniciativas" intro="Conheça frentes divulgadas pela Associação Brasileira Superando. O status e os canais de participação devem ser confirmados nos links oficiais.">

  <div className="grid gap-5 md:grid-cols-2">
    <InfoCard title="Unidos no Maio Roxo"><p>Campanha de conscientização e educação em saúde que promove mobilização em torno de condições crônicas e da informação segura.</p><a className="mt-4 inline-block font-bold text-brand-primary underline" href="https://www.superando.org.br" target="_blank" rel="noopener noreferrer">Consultar iniciativa oficial</a></InfoCard>
    <InfoCard title="Rede Inspira"><p>Proposta de portal de informação em saúde com conteúdos, campanhas, histórias e conexões entre organizações parceiras, divulgada pela associação como iniciativa em desenvolvimento.</p><a className="mt-4 inline-block font-bold text-brand-primary underline" href="https://superando.org.br/index.php?page=inspiracao" target="_blank" rel="noopener noreferrer">Ver página da iniciativa</a></InfoCard>
    <InfoCard title="Conectando Vidas"><p>Iniciativa apresentada pela associação para aproximar pessoas, famílias e redes de cuidado. Seu desenvolvimento e escopo devem ser conferidos no site oficial.</p></InfoCard>
    <InfoCard title="Pesquisa e voz do paciente"><p>A associação divulga iniciativas voltadas à escuta da jornada dos pacientes, produção de informações e aprimoramento do cuidado. Participe apenas por canais oficiais e verifique como os dados são tratados.</p></InfoCard>
  </div>
  <SourceNote links={[{title:"Projetos da Associação Brasileira Superando",href:"https://superando.org.br/index.php?page=projetos"},{title:"Site oficial da associação",href:"https://www.superando.org.br"}]} />

  </ContentLayout>;
}
