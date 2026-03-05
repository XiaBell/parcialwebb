import Image from "next/image";
import Link from "next/link";
import { BgColorHouses } from "@/lib/constants";
import type { Character } from "@/lib/api";

const PLACEHOLDER_IMAGE =
  "https://ik.imagekit.io/hpapi/harry.jpg";

function getHouseBg(house: string): string {
  const key = house && house.trim() ? house : "NoHouse";
  return BgColorHouses[key] ?? BgColorHouses.NoHouse;
}

function getTextColor(house: string): string {
  return house === "Hufflepuff" || house === "NoHouse"
    ? "text-gray-900"
    : "text-white";
}

export default function CharacterCard({
  character,
  lang,
}: {
  character: Character;
  lang: string;
}) {
  const bgClass = getHouseBg(character.house);
  const textClass = getTextColor(character.house);
  const imageUrl = character.image || PLACEHOLDER_IMAGE;

  return (
    <Link href={`/${lang}/character/${character.id}`}>
      <article
        className={`${bgClass} flex flex-col items-center rounded-lg p-4 shadow-lg transition hover:scale-105`}
      >
        <div className="relative mb-3 h-40 w-32 overflow-hidden rounded">
          <Image
            src={imageUrl}
            alt={character.name}
            fill
            className="object-cover"
            sizes="128px"
            unoptimized={!imageUrl.includes("ik.imagekit.io")}
          />
        </div>
        <h3 className={`text-center font-semibold drop-shadow-md ${textClass}`}>
          {character.name}
        </h3>
      </article>
    </Link>
  );
}
