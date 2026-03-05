import { hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return <>{children}</>;
}
