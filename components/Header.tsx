import Image from "next/image";
import Link from "next/link";

export default function Header({ href, logoAlt, lang }: any) {
  return (
    <header style={{ backgroundColor: "#FDB608", textAlign: "center", padding: "16px" }}>
      <Link href={href}>
        <Image
          src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
          alt={logoAlt}
          width={180}
          height={80}
          style={{ margin: "0 auto" }}
          unoptimized
        />
      </Link>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 6, fontSize: 13 }}>
        <Link href="/en" style={{ fontWeight: lang === "en" ? "bold" : "normal" }}>EN</Link>
        <span>|</span>
        <Link href="/es" style={{ fontWeight: lang === "es" ? "bold" : "normal" }}>ES</Link>
      </div>
    </header>
  );
}
