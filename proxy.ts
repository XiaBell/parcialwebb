import { NextResponse } from "next/server";

export function proxy(request: any) {
  const pathname = request.nextUrl.pathname;
  const hasLang = pathname.startsWith("/es") || pathname.startsWith("/en");

  if (hasLang) {
    const lang = pathname.split("/")[1];
    const res = NextResponse.next();
    res.cookies.set("NEXT_LOCALE", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  const savedLang = request.cookies.get("NEXT_LOCALE")?.value;
  const lang = savedLang === "en" ? "en" : "es";
  request.nextUrl.pathname = "/" + lang + pathname;
  const res = NextResponse.redirect(request.nextUrl);
  res.cookies.set("NEXT_LOCALE", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
