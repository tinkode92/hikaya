import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" width={16} height={16} {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = (p: P) => (
  <svg viewBox="0 0 24 24" width={16} height={16} {...base} {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const ChevronLeft = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden {...p}>
    <path d="M8 5.6v12.8c0 .8.9 1.3 1.6.9l10-6.4a1 1 0 0 0 0-1.8l-10-6.4C8.9 4.3 8 4.8 8 5.6Z" />
  </svg>
);

export const Pause = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden {...p}>
    <rect x="6.5" y="5" width="4" height="14" rx="1.2" />
    <rect x="13.5" y="5" width="4" height="14" rx="1.2" />
  </svg>
);

export const User = (p: P) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden {...p}>
    <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
  </svg>
);

export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" width={16} height={16} {...base} strokeWidth={2.2} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Phone = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </svg>
);

export const ShieldCheck = (p: P) => (
  <svg viewBox="0 0 24 24" width={16} height={16} {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.3 2.9 8 7 9.5 4.1-1.5 7-5.2 7-9.5V6l-7-3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const Search = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </svg>
);
