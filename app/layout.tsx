import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

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
  metadataBase: new URL("https://tektone.com.br"),
  title: "TEKTONE — Engenharia de Soluções e Escala",
  description:
    "Qualquer problema da sua empresa pode ser resolvido em 60 minutos. A TEKTONE identifica o gargalo que trava sua expansão e constrói a solução tecnológica sob medida para eliminá-lo.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "TEKTONE — Engenharia de Soluções e Escala",
    description:
      "Qualquer problema da sua empresa pode ser resolvido em 60 minutos.",
    url: "https://tektone.com.br",
    siteName: "TEKTONE",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
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
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
