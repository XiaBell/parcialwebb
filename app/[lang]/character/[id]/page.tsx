import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { getCharacterById } from "@/lib/api";
import CharacterDetail from "@/components/CharacterDetail";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  if (!hasLocale(lang)) return { title: "HarryPotterApp" };

  const character = await getCharacterById(id);
  const dict = await getDictionary(lang as "es" | "en");

  if (!character) {
    return {
      title: "Character - HarryPotterApp",
      description: dict.detailDescription,
    };
  }

  const title =
    lang === "es"
      ? `Detalle de ${character.name} - HarryPotterApp`
      : `${character.name} Detail - HarryPotterApp`;

  return {
    title,
    description: dict.detailDescription,
  };
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;

  if (!hasLocale(lang)) notFound();

  const [dict, character] = await Promise.all([
    getDictionary(lang as "es" | "en"),
    getCharacterById(id),
  ]);

  if (!character) notFound();

  return (
    <CharacterDetail character={character} lang={lang} dict={dict} />
  );
}
