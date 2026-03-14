import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters, lang }: any) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
      {characters.map((c: any) => (
        <CharacterCard key={c.id} character={c} lang={lang} />
      ))}
    </div>
  );
}
