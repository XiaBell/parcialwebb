import Image from "next/image";
import Link from "next/link";
import { BorderColorHouses } from "@/lib/constants";
import type { Character } from "@/lib/api";

const PLACEHOLDER_IMAGE = "https://ik.imagekit.io/hpapi/harry.jpg";

function getBorderColor(house: string): string {
  const key = house && house.trim() ? house : "NoHouse";
  return BorderColorHouses[key] ?? BorderColorHouses.NoHouse;
}

interface Dict {
  gender: string;
  house: string;
  wand: string;
  wood: string;
  length: string;
  centimeters: string;
  unknown: string;
  noHouse: string;
  backToList: string;
}

export default function CharacterDetail({
  character,
  lang,
  dict,
}: {
  character: Character;
  lang: string;
  dict: Dict;
}) {
  const borderClass = getBorderColor(character.house);
  const imageUrl = character.image || PLACEHOLDER_IMAGE;

  const formatWandLength = (length: string | number | null): string => {
    if (length === null || length === undefined || length === "") {
      return dict.unknown;
    }
    return `${length} ${dict.centimeters}`;
  };

  return (
    <div className="flex flex-col items-center p-6">
      <Link
        href={`/${lang}`}
        className="mb-6 self-start text-blue-600 hover:underline"
      >
        ← {dict.backToList}
      </Link>

      <article
        className={`w-full max-w-md overflow-hidden rounded-xl border-4 bg-white shadow-xl ${borderClass}`}
      >
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={character.name}
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 448px"
            unoptimized={!imageUrl.includes("ik.imagekit.io")}
          />
        </div>

        <div className="space-y-3 p-6">
          <h1 className="text-2xl font-bold text-gray-900">{character.name}</h1>

          <div className="grid gap-2 text-sm">
            <p>
              <span className="font-semibold">{dict.gender}:</span>{" "}
              {character.gender || dict.unknown}
            </p>
            <p>
              <span className="font-semibold">{dict.house}:</span>{" "}
              {character.house || dict.noHouse}
            </p>
          </div>
          <section className="mt-4 border-t pt-4">
            <h2 className="mb-3 text-lg font-semibold">{dict.wand}</h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">{dict.wood}:</span>{" "}
                {character.wand?.wood || dict.unknown}
              </p>
              <p>
                <span className="font-semibold">{dict.length}:</span>{" "}
                {formatWandLength(character.wand?.length)}
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
