import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MapPin, ArrowRight, X } from "lucide-react";
import { events, highlightVideos } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Ajinava Edge" },
      { name: "description", content: "Hackathons, workshops, contests and summits from the Ajinava Edge community." },
      { property: "og:title", content: "Events — Ajinava Edge" },
      { property: "og:description", content: "Join hackathons, AI workshops, contests and the annual Ajinava Edge summit." },
    ],
  }),
  component: Events,
});

function Events() {
  const [openPoster, setOpenPoster] = useState<{ src: string; alt: string } | null>(null);
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">Events</div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold">
        Where builders <span className="text-gradient">meet</span>.
      </h1>
      <p className="text-muted-foreground mt-5 max-w-2xl">
        Hands-on workshops, weekend hackathons, contests and our flagship summit.
        All free for community members.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {events.map((e) => (
          <article
            key={e.title}
            className="glass rounded-2xl overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all flex flex-col"
          >
            {"image" in e && e.image && (
              <button
                type="button"
                onClick={() => setOpenPoster({ src: e.image as string, alt: e.title })}
                className="group relative block w-full overflow-hidden bg-black/40 aspect-[4/5] sm:aspect-[16/12] lg:aspect-auto"
              >
                <img
                  src={e.image as string}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover lg:object-contain lg:h-auto lg:w-full lg:max-h-[80vh] group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden" />
                <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 text-white text-[10px] tracking-widest uppercase px-3 py-1 opacity-0 group-hover:opacity-100 transition">Tap to open</span>
              </button>
            )}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs text-primary">
                <span className="px-2 py-0.5 rounded-full bg-primary/10">{e.type}</span>
                <span className="text-muted-foreground inline-flex items-center gap-1">
                  <Calendar size={12} /> {e.date}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mt-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{e.desc}</p>
              <div className="text-xs text-muted-foreground mt-4 inline-flex items-center gap-1">
                <MapPin size={12} /> {e.location}
              </div>
              {"link" in e && e.link && (
                <a
                  href={e.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-edge px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
                >
                  {("cta" in e && e.cta) || "Register Now"} <ArrowRight size={14} />
                </a>
              )}
              {"secondaryLink" in e && e.secondaryLink && (
                <a
                  href={e.secondaryLink as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  {("secondaryCta" in e && e.secondaryCta) || "Watch Session"} <ArrowRight size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Highlights */}
      <section className="mt-24">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Highlights</div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          Moments from <span className="text-gradient">the community</span>.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Quick recaps, reels and behind-the-scenes clips from our recent events.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightVideos.map((v) => (
            <div key={v.id} className="glass rounded-2xl overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all flex flex-col">
              <div className="relative aspect-[9/16] bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}&controls=1&playsinline=1&modestbranding=1&rel=0`}
                  title={`Highlight ${v.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {v.cta && (
                <a
                  href={v.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-edge px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
                >
                  {v.cta.label} <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
