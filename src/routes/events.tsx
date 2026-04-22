import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/lib/site-data";

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
              <div className="relative aspect-[4/5] sm:aspect-[16/12] overflow-hidden bg-black/40">
                <img
                  src={e.image as string}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
