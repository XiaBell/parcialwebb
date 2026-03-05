import CharacterCard from "./CharacterCard";
import type { Character } from "@/lib/api";

export default function CharacterList({
  characters,
  lang,
}: {
  characters: Character[];
  lang: string;
}) {
  return (
    <section className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} lang={lang} />
      ))}
    </section>
  );
}
