import { Geist } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/dictionaries";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "HarryPotterApp",
  description: "Explora el universo mágico de Harry Potter",
};

export default async function RootLayout({ children }: any) {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get("NEXT_LOCALE")?.value;
  const lang = savedLang === "en" ? "en" : "es";
  const dict = getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={geist.className}>
        <Header href={"/" + lang} logoAlt={dict.logoAlt} lang={lang} />
        <main style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
          {children}
        </main>
        <Footer legalText={dict.legalText} />
      </body>
    </html>
  );
}
