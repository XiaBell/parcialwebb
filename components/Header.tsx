import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png";

export default function Header({
  href,
  logoAlt,
}: {
  href: string;
  logoAlt: string;
}) {
  return (
    <header
      className="flex justify-center py-4"
      style={{ backgroundColor: "#FDB608" }}
    >
      <Link href={href} className="flex items-center">
        <Image
          src={LOGO_URL}
          alt={logoAlt}
          width={180}
          height={80}
          className="object-contain"
          unoptimized
        />
      </Link>
    </header>
  );
}
