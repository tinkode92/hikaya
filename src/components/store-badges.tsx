import { AppleLogo, GooglePlayLogo } from "./payment-logos";

export const APP_STORE = "https://apps.apple.com/fr/app/hikaya/id6754205548";

// Badges au format des stores : fond noir, logo officiel, libellés officiels FR
export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={APP_STORE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 items-center gap-3 rounded-xl bg-black pr-5 pl-4 text-white transition-[background-color,transform] hover:bg-encre active:scale-[0.98]"
      >
        <AppleLogo className="h-7 w-auto" />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-white/80">Télécharger dans</span>
          <span className="block text-[18px] font-medium tracking-[-0.01em]">l&apos;App Store</span>
        </span>
      </a>
      <a
        href="#google-play"
        className="inline-flex h-14 items-center gap-3 rounded-xl bg-black pr-5 pl-4 text-white transition-[background-color,transform] hover:bg-encre active:scale-[0.98]"
      >
        <GooglePlayLogo className="h-6 w-auto" />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-white/80">Disponible sur</span>
          <span className="block text-[18px] font-medium tracking-[-0.01em]">Google Play</span>
        </span>
      </a>
    </div>
  );
}
