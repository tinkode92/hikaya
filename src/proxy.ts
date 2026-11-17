import { NextResponse, type NextRequest } from "next/server";

// Lien de validation client (NEXT_PUBLIC_LP_ONLY=1) : seules l'accueil et « Offrir HIKAYA » sont accessibles,
// toute autre page redirige vers elle. Sans ce réglage, le proxy ne fait rien.
export function proxy(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_LP_ONLY !== "1") return NextResponse.next();
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // Tout sauf l'accueil, les fichiers de Next et les fichiers statiques (avec une extension)
  matcher: ["/((?!_next/|offrir$|.*\\.[a-z0-9]+$).+)"],
};
