import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Smartphone, Sparkles, Cloud, Palette, ShieldCheck, ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

const iconMap = { Globe, Smartphone, Sparkles, Cloud, Palette, ShieldCheck } as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ajinava Edge" },
      { name: "description", content: "Web, mobile, AI, cloud, design and security services from Ajinava Edge." },
      { property: "og:title", content: "Services — Ajinava Edge" },
      { property: "og:description", content: "AI-powered web, mobile and cloud services to give your product the edge." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">Services</div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold max-w-3xl">
        Everything you need to <span className="text-gradient">ship</span> a modern product.
      </h1>
      <p className="text-muted-foreground mt-5 max-w-2xl">
        Pick a single service or assemble a full pod. Our chatbot can recommend the right
        bundle and give you an instant quote.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Sparkles;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-edge flex items-center justify-center text-primary-foreground mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 glass rounded-3xl p-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          Not sure where to start?
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Open the AI assistant in the corner — describe your idea and we'll suggest the
          right services, tech stack and an estimated timeline.
        </p>
        <Link to="/contact" className="inline-flex mt-6 items-center gap-2 rounded-full bg-gradient-edge px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
          Talk to us <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
