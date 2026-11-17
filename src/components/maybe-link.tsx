import Link from "next/link";
import type { ComponentProps } from "react";

// Lien interne, ou simple bloc quand la page n'existe pas (mode « page d'accueil seule »).
export function MaybeLink({ href, ...props }: Omit<ComponentProps<typeof Link>, "href"> & { href: string | null }) {
  if (href) return <Link href={href} {...props} />;
  const { className, children } = props;
  return <span className={className}>{children}</span>;
}
