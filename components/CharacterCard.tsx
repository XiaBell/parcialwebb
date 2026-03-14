import Image from "next/image";
import Link from "next/link";
import { BgColorHouses } from "@/lib/constants";

export default function CharacterCard({ character, lang }: any) {
  const bgClass = BgColorHouses[character.house] ?? BgColorHouses.NoHouse;
  const textColor = character.house === "Hufflepuff" || !character.house ? "text-gray-900" : "text-white";

  return (
    <Link href={"/" + lang + "/character/" + character.id}>
      <div className="rounded overflow-hidden border border-gray-300">
        <div className={bgClass + " p-2 text-center"}>
          <p className={"text-sm font-semibold " + textColor}>{character.name}</p>
        </div>
        <div style={{ position: "relative", height: 190 }}>
          <Image
            src={character.image || "https://ik.imagekit.io/hpapi/harry.jpg"}
            alt={character.name}
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
      </div>
    </Link>
  );
}
