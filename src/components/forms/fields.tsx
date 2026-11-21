import type { ReactNode } from "react";

// Champs et boutons partagés par les formulaires (compte, paiement, avis, contact).
export const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-encre/10 bg-white px-4 text-[16px] font-normal text-encre placeholder:text-encre/40 transition-colors focus:border-vert/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-vert/10";

export const primaryButton =
  "group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-vert px-6 text-[17px] font-medium text-white shadow-soft transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]";

export const secondaryButton =
  "inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-encre/10 bg-white px-6 text-[16px] font-medium text-encre transition-[background-color,transform] hover:bg-creme active:scale-[0.98]";

export function Field({
  label,
  hint,
  aside,
  children,
  className = "",
}: {
  label: string;
  hint?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-[15px] font-medium text-encre ${className}`}>
      <span className="flex items-baseline justify-between gap-4">
        {label}
        {aside}
      </span>
      {children}
      {hint && <span className="mt-2 block text-[13px] font-normal text-encre/55">{hint}</span>}
    </label>
  );
}

export function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[14px] text-encre/50">
      <span className="h-px flex-1 bg-encre/10" />
      {children}
      <span className="h-px flex-1 bg-encre/10" />
    </div>
  );
}
