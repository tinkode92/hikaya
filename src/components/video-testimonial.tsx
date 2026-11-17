import { testimonialVideo as v } from "@/lib/video";

// Témoignage vidéo, à proximité des avis des familles.
export function VideoTestimonial() {
  if (!v.src) return null;
  return (
    <section aria-labelledby="temoignage-video" className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[15px] font-medium text-sable-ink">Témoignage</p>
        <h2
          id="temoignage-video"
          className="mt-4 max-w-[22ch] text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] text-balance text-vert italic"
        >
          {v.title}
        </h2>
        <div
          className={`mt-8 overflow-hidden rounded-[1.75rem] bg-vert-deep shadow-float sm:mt-10 ${
            v.vertical ? "mx-auto max-w-[420px]" : ""
          }`}
        >
          <video
            src={v.src}
            poster={v.poster}
            controls
            playsInline
            preload="metadata"
            className={`block w-full ${v.vertical ? "aspect-[9/16]" : "aspect-video"} bg-vert-deep object-cover`}
          />
        </div>
      </div>
    </section>
  );
}
