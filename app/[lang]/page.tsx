import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { getFirstNCharacters } from "@/lib/api";
import CharacterList from "@/components/CharacterList";
import Link from "next/link";
import type { Metadata } from "next";

// AAAAAAAAA Intenté muchas veces hacer el for each para obtener los detalles especificos pero NO MEDAAAAAAA AAAA
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return { title: "HarryPotterApp" };

  const dict = await getDictionary(lang as "es" | "en");
  const title =
    lang === "es"
      ? `Listado de personajes - HarryPotterApp`
      : `Character List - HarryPotterApp`;

  return {
    title,
    description: dict.homeDescription,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const [dict, characters] = await Promise.all([
    getDictionary(lang as "es" | "en"),
    getFirstNCharacters(12),
  ]);

  return (
    <div className="flex min-h-full flex-col items-center p-6">
      <h1 className="mb-2 text-2xl font-bold text-gray-800">
        {dict.pageTitle}
      </h1>
      <p className="mb-6 text-gray-600">{dict.pageSubtitle}</p>
      <nav className="mb-6 flex gap-4">
        <Link
          href="/es"
          className="rounded-md bg-zinc-200 px-4 py-2 hover:bg-zinc-300"
        >
          {dict.spanish}
        </Link>
        <Link
          href="/en"
          className="rounded-md bg-zinc-200 px-4 py-2 hover:bg-zinc-300"
        >
          {dict.english}
        </Link>
      </nav>
      <CharacterList characters={characters} lang={lang} />
    </div>
  );
}
