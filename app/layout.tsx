import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HarryPotterApp",
  description: "Explora el universo mágico de Harry Potter",
};

async function getLang(): Promise<string> {
  const headersList = await headers();
  const cookieStore = await cookies();
  const headerLocale = headersList.get("x-locale");
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  return headerLocale || cookieLocale || "es";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rawLang = await getLang();
  const lang = rawLang === "en" ? "en" : "es";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header href={`/${lang}`} logoAlt={dict.logoAlt} />
        <main style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
          {children}
        </main>
        <Footer legalText={dict.legalText} />
      </body>
    </html>
  );
}
