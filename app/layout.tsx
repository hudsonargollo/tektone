import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TEKTONE — Engenharia de Soluções e Escala",
  description:
    "Qualquer problema da sua empresa pode ser resolvido em 60 minutos. A TEKTONE identifica o gargalo que trava sua expansão e constrói a solução tecnológica sob medida para eliminá-lo.",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-ink-base text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
