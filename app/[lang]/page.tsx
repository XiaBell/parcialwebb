import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-semibold">{dict.welcome}</h1>
      <nav className="flex gap-4">
        <Link
          href="/es"
          className="rounded-md bg-zinc-200 px-4 py-2 dark:bg-zinc-800"
        >
          {dict.spanish}
        </Link>
        <Link
          href="/en"
          className="rounded-md bg-zinc-200 px-4 py-2 dark:bg-zinc-800"
        >
          {dict.english}
        </Link>
      </nav>
    </div>
  );
}
