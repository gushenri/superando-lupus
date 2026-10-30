import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Superando o Lúpus | Acolhimento e informação",
  description: "Um espaço de acolhimento, informação e conexão para pessoas que convivem com o lúpus e suas redes de apoio.",
  robots: { index: false, follow: false }, // Remover apenas quando os dados oficiais forem revisados.
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
