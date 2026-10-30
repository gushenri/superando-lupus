import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { About, Mission, LupusInfo, FAQ, Participate, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:p-4">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo"><Hero /><Explore /><About /><Mission /><LupusInfo /><FAQ /><Participate /></main>
      <Footer />
    </>
  );
}
