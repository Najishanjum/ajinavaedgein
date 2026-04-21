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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-6">
              <Sparkles size={12} className="text-primary" />
              AI-powered IT studio · Est. 2024
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Engineering the <span className="text-gradient">edge</span> of what's
              possible.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Ajinava Edge designs, builds and ships AI-powered web, mobile and cloud
              products — and grows a community of builders along the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-edge px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:shadow-glow"
              >
                <Bot size={16} className="text-primary" /> Get AI Guidance
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "120+", v: "Projects shipped" },
                { k: "5k+", v: "Community" },
                { k: "30+", v: "AI products" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-edge blur-3xl opacity-30 rounded-full animate-pulse-glow" />
            <div className="relative animate-float">
              <div className="rounded-full glass glow-ring p-6 sm:p-8">
                <img
                  src={logo}
                  alt="Ajinava Edge"
                  className="h-56 w-56 sm:h-72 sm:w-72 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-2">What we do</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Services that give you the <span className="text-gradient">edge</span>
            </h2>
          </div>
          <Link to="/services" className="hidden sm:inline text-sm text-primary hover:underline">
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
              className="glass rounded-2xl p-6 hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-edge flex items-center justify-center text-primary-foreground mb-4">
                <Zap size={18} />
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
          ))}
        </div>
      </section>

      {/* Why Ajinava Edge */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: Bot, t: "AI-first thinking", d: "Every product we build is designed to be smarter, faster and more adaptive." },
            { icon: Rocket, t: "Ship in weeks, not quarters", d: "We pair great engineers with battle-tested templates to move fast." },
            { icon: Users2, t: "A community behind you", d: "Join 5,000+ builders, mentors and founders learning together." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass rounded-2xl p-7">
              <Icon className="text-primary mb-4" />
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-edge opacity-15" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Have an idea? Talk to our <span className="text-gradient">AI assistant</span>.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Get an instant quote, project plan and recommended tech stack — in seconds.
              Open the chatbot at the bottom-right.
            </p>
            <Link
              to="/contact"
              className="inline-flex mt-7 items-center gap-2 rounded-full bg-gradient-edge px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Start your project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
