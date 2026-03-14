import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { getCharacters } from "@/lib/api";
import CharacterList from "@/components/CharacterList";

// AAAAAAAAA Intenté muchas veces hacer el for each para obtener los detalles especificos pero NO MEDAAAAAAA AAAA
export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const title = lang === "es" ? "Listado de personajes - HarryPotterApp" : "Character List - HarryPotterApp";
  return { title, description: dict.homeDescription };
}

export default async function HomePage({ params }: any) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const characters = await getCharacters();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-2" style={{ color: "#FDB608" }}>
        {dict.pageTitle}
      </h1>
      <p className="text-center text-gray-600 text-sm mb-6">{dict.homeDescription}</p>
      <CharacterList characters={characters} lang={lang} />
    </div>
  );
}
