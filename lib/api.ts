const API_BASE = "https://hp-api.onrender.com";

export interface Wand {
  wood: string;
  core: string;
  length: string | number | null;
}

export interface Character {
  id: string;
  name: string;
  alternate_names?: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth?: string | null;
  yearOfBirth?: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  image: string;
  alive: boolean;
  alternate_actors?: string | null;
  actor: string;
}

export async function getFirstNCharacters(n: number): Promise<Character[]> {
  const res = await fetch(`${API_BASE}/api/characters`, {
    next: { revalidate: 3600 },
  });
  const data: Character[] = await res.json();
  return data.slice(0, n);
}

export async function getCharacterById(id: string): Promise<Character | null> {
  try {
    const res = await fetch(`${API_BASE}/api/character/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data: Character | Character[] = await res.json();
    // El endpoint devuelve un array, extraer el primer elemento
    const character = Array.isArray(data) ? data[0] : data;
    return character ?? null;
  } catch {
    return null;
  }
}
