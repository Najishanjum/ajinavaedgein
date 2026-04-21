import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { partners } from "@/lib/site-data";

export const Route = createFileRoute("/community-partners")({
  head: () => ({
    meta: [
      { title: "Community Partners — Ajinava Edge" },
      {
        name: "description",
        content:
          "Communities and organizations we partner with to support builders worldwide.",
      },
      {
        property: "og:title",
        content: "Community Partners — Ajinava Edge",
      },
      {
        property: "og:description",
        content:
          "We collaborate with the best builder communities, design groups and infra collectives.",
      },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">
        Partners
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold">
        Better, <span className="text-gradient">together</span>.
      </h1>
      <p className="text-muted-foreground mt-5 max-w-2xl">
        We grow with the communities that share our mission. Meet the partners
        powering the Ajinava Edge ecosystem.
      </p>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {partners.map((p) => (
          <div
            key={p.name}
            className="glass rounded-2xl p-6 text-center hover:shadow-elegant hover:-translate-y-1 transition-all flex flex-col items-center"
          >
            <div className="h-24 w-24 rounded-2xl bg-white/95 flex items-center justify-center p-3 shadow-glow">
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                loading="lazy"
                width={512}
                height={512}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="font-semibold mt-4 text-sm sm:text-base">
              {p.name}
            </h3>
            <div className="text-xs text-muted-foreground mt-1">{p.role}</div>
          </div>
        ))}
      </div>

      {/* Partner CTA */}
      <div className="mt-16 relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center">
        <div className="absolute inset-0 bg-gradient-edge opacity-15" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Want to <span className="text-gradient">Partner</span> With Us?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Join our growing network of innovation partners and collaborate on
            cutting-edge projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex mt-7 items-center gap-2 rounded-full bg-gradient-edge px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Powered by */}
      <div className="mt-16 flex flex-col items-center text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Powered By
        </div>
        <div className="font-display text-2xl font-bold">
          Team <span className="text-gradient">ILM Tech</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 inline-flex items-center gap-1.5">
          Driven by innovation. Empowered by Team ILM Tech.
          <Heart size={14} className="text-primary fill-primary" />
        </p>
      </div>
    </div>
  );
}
