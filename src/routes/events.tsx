import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { events } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Ajinava Edge" },
      { name: "description", content: "Hackathons, workshops and summits from the Ajinava Edge community." },
      { property: "og:title", content: "Events — Ajinava Edge" },
      { property: "og:description", content: "Join hackathons, AI workshops and the annual Ajinava Edge summit." },
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
        Hands-on workshops, weekend hackathons and our flagship summit. All free for
        community members.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {events.map((e) => (
          <article key={e.title} className="glass rounded-2xl p-6 hover:shadow-elegant transition-all">
            <div className="flex items-center gap-2 text-xs text-primary">
              <span className="px-2 py-0.5 rounded-full bg-primary/10">{e.type}</span>
              <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar size={12}/> {e.date}</span>
            </div>
            <h3 className="font-display text-xl font-bold mt-3">{e.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{e.desc}</p>
            <div className="text-xs text-muted-foreground mt-4 inline-flex items-center gap-1">
              <MapPin size={12} /> {e.location}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
