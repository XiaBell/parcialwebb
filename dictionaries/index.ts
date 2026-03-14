import es from "./es.json";
import en from "./en.json";

export function getDictionary(lang: string) {
  if (lang === "en") return en;
  return es;
}

export function hasLocale(lang: string) {
  return lang === "es" || lang === "en";
}
