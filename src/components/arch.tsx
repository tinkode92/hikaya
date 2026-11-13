// L'arc outrepassé (Cordoue) : la petite touche signature de HIKAYA.
// <ArchDefs /> déclare le masque une fois ; on l'applique avec la classe [clip-path:url(#arch)].

export function ArchDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <clipPath id="arch" clipPathUnits="objectBoundingBox">
          <path d="M0.175 1 L0.175 0.615 A0.45 0.346 0 1 1 0.825 0.615 L0.825 1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArchOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 520" fill="none" className={className} aria-hidden>
      <path
        d="M70 520 L70 320 A180 180 0 1 1 330 320 L330 520"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M95 520 L95 322 A156 156 0 1 1 305 322 L305 520"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
