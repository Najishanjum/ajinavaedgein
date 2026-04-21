import { createFileRoute } from "@tanstack/react-router";
import { partners } from "@/lib/site-data";

export const Route = createFileRoute("/community-partners")({
  head: () => ({
    meta: [
      { title: "Community Partners — Ajinava Edge" },
      { name: "description", content: "Communities and organizations we partner with to support builders worldwide." },
      { property: "og:title", content: "Community Partners — Ajinava Edge" },
      { property: "og:description", content: "We collaborate with the best builder communities, design groups and infra collectives." },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">Partners</div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold">
        Better, <span className="text-gradient">together</span>.
      </h1>
      <p className="text-muted-foreground mt-5 max-w-2xl">
        We grow with the communities that share our mission. Want to partner with us?
        Reach out via the chatbot or contact page.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map((p) => (
          <div key={p.name} className="glass rounded-2xl p-6 text-center hover:shadow-elegant transition-all">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-edge flex items-center justify-center font-display font-bold text-lg text-primary-foreground">
              {p.name.split(" ").map((w) => w[0]).join("")}
            </div>
            <h3 className="font-semibold mt-4">{p.name}</h3>
            <div className="text-xs text-muted-foreground mt-1">{p.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
