import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Rocket, Users2, Zap } from "lucide-react";
import logo from "@/assets/ajinava-edge-logo.jpeg";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajinava Edge — AI-powered IT Solutions & Builder Community" },
      {
        name: "description",
        content:
          "We build AI-powered web, mobile and cloud products and run a thriving builder community. Talk to our AI assistant to get an instant quote.",
      },
      { property: "og:title", content: "Ajinava Edge — AI-powered IT Solutions" },
      {
        property: "og:description",
        content: "AI products, smart web/mobile apps, mentorship and a builder community.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Editorial Hero */}
      <section className="relative overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 bg-dot-grid opacity-100 pointer-events-none" />
        {/* Violet wash */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-9">
              <h1 className="font-display font-normal text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-foreground">
                <span className="inline-block animate-reveal [animation-delay:0.05s] hover:text-primary transition-colors cursor-default">
                  Building
                </span>{" "}
                <span
                  className="inline-block align-middle mx-1 h-[0.7em] w-[1em] rounded-full border border-foreground/10 bg-secondary animate-reveal [animation-delay:0.15s]"
                  aria-hidden
                />{" "}
                <span className="inline-block animate-reveal [animation-delay:0.2s] hover:text-primary transition-colors cursor-default">
                  the
                </span>
                <br />
                <span className="inline-block animate-reveal [animation-delay:0.3s] hover:text-primary transition-colors cursor-default">
                  Decentralized
                </span>{" "}
                <span className="inline-block text-primary text-[0.55em] align-middle animate-pulse mx-1 animate-reveal [animation-delay:0.4s]">
                  ✧
                </span>{" "}
                <span className="inline-block italic text-primary animate-reveal [animation-delay:0.5s]">
                  Edge
                </span>
                <br />
                <span className="inline-block animate-reveal [animation-delay:0.6s] hover:text-primary transition-colors cursor-default">
                  for
                </span>{" "}
                <span
                  className="inline-block align-middle mx-1 h-[0.7em] w-[0.7em] rounded-full border border-foreground/10 bg-secondary animate-reveal [animation-delay:0.7s]"
                  aria-hidden
                />{" "}
                <span className="inline-block animate-reveal [animation-delay:0.8s] hover:text-primary transition-colors cursor-default">
                  Neural
                </span>{" "}
                <span className="inline-block animate-reveal [animation-delay:0.9s] hover:text-primary transition-colors cursor-default">
                  Youth.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-8 pt-6">
              <p className="text-sm leading-relaxed text-foreground/60 font-medium max-w-xs">
                A Web3 & AI-driven community empowering the next generation
                through mentorship, hackathons, and real-world builder projects.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-[11px] font-bold tracking-[0.22em] uppercase text-background hover:bg-primary hover:scale-105 transition-all"
                >
                  Explore <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-[11px] font-bold tracking-[0.22em] uppercase text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  <Bot size={14} /> AI Guide
                </Link>
              </div>

              {/* Floating Stat Card */}
              <div className="relative animate-float group mt-4">
                <div className="bg-card border border-foreground/5 rounded-3xl p-6 shadow-elegant transition-all group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">
                      Community Growth
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between h-16 w-full gap-1.5 px-1">
                    <div className="flex-1 bg-secondary rounded-t-sm transition-all group-hover:bg-primary/30 h-[40%]" />
                    <div className="flex-1 bg-secondary rounded-t-sm transition-all group-hover:bg-primary/50 h-[65%]" />
                    <div className="flex-1 bg-secondary rounded-t-sm transition-all group-hover:bg-primary/70 h-[90%]" />
                    <div className="flex-1 bg-foreground rounded-t-sm h-[75%]" />
                    <div className="flex-1 bg-secondary rounded-t-sm transition-all group-hover:bg-primary/50 h-[55%]" />
                    <div className="flex-1 bg-secondary rounded-t-sm transition-all group-hover:bg-primary/30 h-[30%]" />
                  </div>

                  <div className="mt-5 flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="font-display text-3xl leading-none">
                        5.2k<span className="text-xs font-normal text-foreground/40 ml-1">builders</span>
                      </span>
                      <span className="text-[10px] font-bold text-foreground/40 tracking-widest uppercase mt-2">
                        Active in BEW3
                      </span>
                    </div>
                    <div className="text-emerald-600 text-[10px] font-bold pb-1">+12.4% ↑</div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10" />
              </div>
            </div>
          </div>

          {/* Stat row */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl border-t border-foreground/10 pt-8">
            {[
              { k: "120+", v: "Projects shipped" },
              { k: "5k+", v: "Community builders" },
              { k: "30+", v: "AI products" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl sm:text-4xl">{s.k}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/50 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24 border-t border-foreground/10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary mb-3">
              [ What we do ]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl">
              Services that give<br />you the <span className="italic text-primary">edge</span>.
            </h2>
          </div>
          <Link
            to="/services"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-foreground/70 hover:text-primary"
          >
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-foreground/5 rounded-3xl p-7 hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="h-10 w-10 rounded-2xl bg-foreground flex items-center justify-center text-background mb-5">
                <Zap size={16} />
              </div>
              <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
              <p className="text-sm text-foreground/60 mt-3">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-secondary text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Ajinava Edge */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24 border-t border-foreground/10">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: Bot, t: "AI-first thinking", d: "Every product we build is designed to be smarter, faster and more adaptive." },
            { icon: Rocket, t: "Ship in weeks, not quarters", d: "We pair great engineers with battle-tested templates to move fast." },
            { icon: Users2, t: "A community behind you", d: "Join 5,000+ builders, mentors and founders learning together." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card border border-foreground/5 rounded-3xl p-8">
              <Icon className="text-primary mb-5" />
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="text-sm text-foreground/60 mt-3">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          <Sparkles className="relative mx-auto text-primary mb-4" />
          <h2 className="relative font-display text-4xl sm:text-5xl">
            Have an idea? Talk to our <span className="italic text-primary">AI assistant</span>.
          </h2>
          <p className="relative text-background/70 mt-5 max-w-xl mx-auto">
            Get an instant quote, project plan and recommended tech stack — in seconds.
          </p>
          <Link
            to="/contact"
            className="relative inline-flex mt-8 items-center gap-2 rounded-full bg-background text-foreground px-7 py-3 text-[11px] font-bold tracking-[0.22em] uppercase hover:bg-primary hover:text-background transition-all"
          >
            Start your project <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}

