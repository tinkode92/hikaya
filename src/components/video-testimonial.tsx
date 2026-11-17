import { testimonialVideo as v } from "@/lib/video";

// Témoignage vidéo, juste avant les avis des familles.
// Vidéo verticale : le texte à gauche, la vidéo à droite (empilés en mobile).
export function VideoTestimonial() {
  if (!v.src) return null;
  return (
    <section aria-labelledby="temoignage-video" className="px-3 sm:px-6">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 overflow-hidden rounded-[2.25rem] bg-papier p-6 sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16">
        <div>
          <p className="text-[15px] font-medium text-sable-ink">Témoignage en vidéo</p>
          <h2
            id="temoignage-video"
            className="mt-4 max-w-[18ch] text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] text-balance italic"
          >
            <span className="text-sable-ink">Ce que Thomas Sibille</span>{" "}
            <span className="text-vert">pense de HIKAYA</span>
          </h2>
          <p className="mt-6 text-[15px] text-encre/60">Vidéo · {v.duration}</p>
        </div>

        <div
          className={`mx-auto w-full overflow-hidden rounded-[1.75rem] bg-vert-deep shadow-object ${
            v.vertical ? "max-w-[340px] lg:w-[340px]" : ""
          }`}
        >
          <video
            src={v.src}
            poster={v.poster}
            controls
            playsInline
            preload="none"
            aria-label={v.title}
            className={`block w-full ${v.vertical ? "aspect-[9/16]" : "aspect-video"} bg-vert-deep object-cover`}
          />
        </div>
      </div>
    </section>
  );
}
