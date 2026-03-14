import Image from "next/image";
import Link from "next/link";
import { BorderColorHouses } from "@/lib/constants";

export default function CharacterDetail({ character, lang, dict }: any) {
  const borderClass = BorderColorHouses[character.house] ?? BorderColorHouses.NoHouse;
  const w = character.wand;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6" style={{ color: "#FDB608" }}>
        {character.name}
      </h1>

      <div className={"max-w-xl mx-auto border-4 " + borderClass + " rounded bg-white flex"}>
        <div className="p-4 flex-1 text-sm">
          <p><strong>{dict.house}:</strong> {character.house || dict.noHouse}</p>
          <p><strong>{dict.gender}:</strong> {character.gender || dict.unknown}</p>
          <p><strong>{dict.wood}:</strong> {w?.wood || dict.unknown}</p>
          <p><strong>{dict.core}:</strong> {w?.core || dict.unknown}</p>
          <p><strong>{dict.length}:</strong> {w?.length ? w.length + " " + dict.centimeters : dict.unknown}</p>
        </div>
        <div style={{ position: "relative", width: 220, minHeight: 240 }}>
          <Image
            src={character.image || "https://ik.imagekit.io/hpapi/harry.jpg"}
            alt={character.name}
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
      </div>

      <div className="text-center mt-5">
        <Link href={"/" + lang} className="text-blue-600 hover:underline text-sm">
          ← {dict.backToList}
        </Link>
      </div>
    </div>
  );
}

// a diferencia del ejemplo del parcial, que se da el de draco malfoy, el unicorn tail hair no es un tipo de varita sino 1 de los 3 nucleos posibles, así q lo puse como es jajaj :p me gusta harry potter srry
