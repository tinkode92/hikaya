import Image from "next/image";
import { ArchOutline } from "./arch";

// Personnage dans son arche, qui occupe toute la place restante en bas d'un bloc :
// plus le bloc est haut, plus le personnage est grand. Jamais de vide sous le contenu.
export function CharacterFill({
  src,
  width,
  height,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div aria-hidden className={`relative min-h-[150px] flex-1 ${className}`}>
      <div className="absolute inset-x-0 top-5 bottom-0 flex justify-center">
        <div className="relative h-full max-w-full" style={{ aspectRatio: `${width} / ${height}` }}>
          <ArchOutline className="absolute inset-x-[-30%] bottom-0 h-[106%] w-[160%] text-sable/45" />
          <Image src={src} alt="" fill sizes="(min-width: 1024px) 360px, 0px" className="object-contain object-bottom" />
        </div>
      </div>
    </div>
  );
}
