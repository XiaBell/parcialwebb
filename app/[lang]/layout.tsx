import { hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export default async function LangLayout({ children, params }: any) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <>{children}</>;
}
