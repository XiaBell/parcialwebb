import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { getCharacterById } from "@/lib/api";
import CharacterDetail from "@/components/CharacterDetail";

export async function generateMetadata({ params }: any) {
  const { lang, id } = await params;
  const character = await getCharacterById(id);
  const dict = getDictionary(lang);
  const title = character
    ? "Detalle de " + character.name + " - HarryPotterApp"
    : "HarryPotterApp";
  return { title, description: dict.detailDescription };
}

export default async function CharacterDetailPage({ params }: any) {
  const { lang, id } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const character = await getCharacterById(id);

  if (!character) notFound();

  return <CharacterDetail character={character} lang={lang} dict={dict} />;
}
