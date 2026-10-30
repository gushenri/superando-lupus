import type { Metadata } from "next";
import { ContentLayout, InfoCard, SourceNote } from "@/components/ContentLayout";

export const metadata: Metadata = { title: "Informação clara para conviver melhor com o lúpus | Superando o Lúpus", description: "Conheça características gerais da doença, manifestações, caminhos para diagnóstico e orientações para acompanhamento." };

// Página informativa: conteúdo organizado em cartões reutilizáveis.
export default function Page() {
  return <ContentLayout eyebrow="Entendendo o lúpus" title="Informação clara para conviver melhor com o lúpus" intro="Conheça características gerais da doença, manifestações, caminhos para diagnóstico e orientações para acompanhamento.">

  <div className="grid gap-5 md:grid-cols-2">
    <InfoCard title="O que é lúpus?"><p>O lúpus é uma doença autoimune crônica em que o sistema de defesa pode atacar tecidos do próprio organismo. A apresentação varia e pode afetar pele, articulações, rins e outros órgãos.</p></InfoCard>
    <InfoCard title="Sinais e sintomas"><p>Entre as manifestações possíveis estão cansaço, dores articulares, febre, alterações na pele e sensibilidade ao sol. Esses sinais também aparecem em outras condições e não confirmam, isoladamente, um diagnóstico.</p></InfoCard>
    <InfoCard title="Como é feito o diagnóstico?"><p>O diagnóstico é clínico e considera história, exame físico e exames laboratoriais quando indicados. Não existe um exame isolado suficiente para todos os casos. A avaliação por reumatologista é importante.</p></InfoCard>
    <InfoCard title="Tratamento e acompanhamento"><p>O cuidado é individualizado conforme a atividade da doença e os órgãos envolvidos. Pode incluir medicamentos, acompanhamento multiprofissional e medidas de proteção solar. Não interrompa medicações sem orientação.</p></InfoCard>
    <InfoCard title="Convivendo com lúpus"><p>Respeitar períodos de cansaço, organizar consultas, manter o acompanhamento e buscar apoio social são medidas que podem ajudar. A rotina deve ser adaptada às necessidades de cada pessoa.</p></InfoCard>
    <InfoCard title="Perguntas frequentes"><p><strong>É contagioso?</strong> Não. <strong>Tem cura?</strong> Atualmente não há cura definitiva, mas o tratamento pode controlar a doença. <strong>Todo caso é igual?</strong> Não; o curso varia entre pessoas.</p></InfoCard>
  </div>
  <SourceNote links={[{title:"Associação Brasileira Superando — informação e apoio",href:"https://www.superando.org.br"},{title:"Sociedade Brasileira de Reumatologia",href:"https://www.reumatologia.org.br"}]} />

  </ContentLayout>;
}
