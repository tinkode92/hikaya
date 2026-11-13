// Titre de section : sur-titre en casse normale + titre en deux tons (sable puis vert), comme le hero.
export function SectionHeading({
  eyebrow,
  first,
  second,
  tone = "light",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow: string;
  first: string;
  second: string;
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <p className={`text-[15px] font-medium ${dark ? "text-sable" : "text-sable-ink"}`}>{eyebrow}</p>
      <Tag className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] text-balance italic">
        <span className={`block ${dark ? "text-sable" : "text-sable-ink"}`}>{first}</span>
        <span className={`block ${dark ? "text-white" : "text-vert"}`}>{second}</span>
      </Tag>
    </div>
  );
}
