import type { Metadata } from "next";
import { ContentLayout, InfoCard, SourceNote } from "@/components/ContentLayout";

export const metadata: Metadata = { title: "Orientação para buscar seus direitos | Superando o Lúpus", description: "Informação sobre caminhos de atendimento e acesso a serviços de saúde. Os direitos concretos dependem da legislação, de critérios clínicos e de cada situação." };

// Página informativa: conteúdo organizado em cartões reutilizáveis.
export default function Page() {
  return <ContentLayout eyebrow="Direitos e acesso ao cuidado" title="Orientação para buscar seus direitos" intro="Informação sobre caminhos de atendimento e acesso a serviços de saúde. Os direitos concretos dependem da legislação, de critérios clínicos e de cada situação.">

  <div className="grid gap-5 md:grid-cols-2">
    <InfoCard title="Atendimento pelo SUS"><p>Procure uma Unidade Básica de Saúde (UBS) para acolhimento, avaliação e encaminhamento conforme a rede local. Tenha documentos pessoais, Cartão SUS e registros médicos disponíveis.</p></InfoCard>
    <InfoCard title="Medicamentos e tratamentos"><p>A oferta de medicamentos depende dos protocolos clínicos, das listas de fornecimento e dos critérios de elegibilidade. A equipe assistencial e a assistência farmacêutica podem orientar sobre documentos e solicitação.</p></InfoCard>
    <InfoCard title="Documentação médica"><p>Guarde relatórios, prescrições, exames e comprovantes de atendimento. Eles ajudam a acompanhar o cuidado e podem ser exigidos em solicitações administrativas.</p></InfoCard>
    <InfoCard title="Apoio e orientação"><p>Ouvidorias do SUS, Defensoria Pública e serviços de assistência social podem orientar sobre encaminhamentos. Um diagnóstico, por si só, não garante automaticamente benefícios ou isenções.</p></InfoCard>
  </div>
  <SourceNote links={[{title:"Ministério da Saúde",href:"https://www.gov.br/saude/pt-br"},{title:"Ouvidoria-Geral do SUS",href:"https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus"},{title:"Associação Brasileira Superando",href:"https://www.superando.org.br"}]} />

  </ContentLayout>;
}
