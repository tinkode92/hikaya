"use client";

// Forme d'onde décorative, déterministe (pas d'aléatoire -> pas d'écart serveur/client).
const BARS = Array.from({ length: 48 }, (_, i) => {
  const v = Math.abs(Math.sin(i * 1.7) * 0.6 + Math.sin(i * 0.43) * 0.4);
  return 0.22 + v * 0.78;
});

export function Waveform({
  progress,
  onSeek,
  tone = "light",
  className = "",
}: {
  progress: number;
  onSeek?: (ratio: number) => void;
  tone?: "light" | "dark";
  className?: string;
}) {
  const played = tone === "light" ? "bg-vert" : "bg-sable";
  const rest = tone === "light" ? "bg-vert/15" : "bg-white/20";

  return (
    <div
      role="slider"
      aria-label="Position dans l'extrait"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      tabIndex={onSeek ? 0 : -1}
      onClick={(e) => {
        if (!onSeek) return;
        const r = e.currentTarget.getBoundingClientRect();
        onSeek((e.clientX - r.left) / r.width);
      }}
      onKeyDown={(e) => {
        if (!onSeek) return;
        if (e.key === "ArrowRight") onSeek(progress + 0.05);
        if (e.key === "ArrowLeft") onSeek(progress - 0.05);
      }}
      className={`flex h-9 cursor-pointer items-center gap-[3px] ${className}`}
    >
      {BARS.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] flex-1 rounded-full transition-colors duration-300 ${
            i / BARS.length < progress ? played : rest
          }`}
          style={{ height: `${h * 100}%` }}
        />
      ))}
    </div>
  );
}
