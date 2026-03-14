const API_BASE = "https://hp-api.onrender.com";

export async function getCharacters() {
  const res = await fetch(API_BASE + "/api/characters");
  const data = await res.json();
  return data.slice(0, 12);
}

export async function getCharacterById(id: string) {
  const res = await fetch(API_BASE + "/api/character/" + id);
  const data = await res.json();
  return data[0];
}
