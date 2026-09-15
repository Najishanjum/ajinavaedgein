import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Instagram,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ajinava Edge" },
      { name: "description", content: "Get in touch with Ajinava Edge — talk to our team or our AI assistant." },
      { property: "og:title", content: "Contact Ajinava Edge" },
      { property: "og:description", content: "Contact our operations team or schedule a conversation with the Ajinava Edge founders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(5).max(1800),
});

const founders = [
  {
    name: "Md Moinuddin",
    copy: "Connect and discuss with Moinuddin",
    calendly: "https://calendly.com/aemoinu6651/30min",
    x: "https://x.com/md_moinuddin1",
  },
  {
    name: "Md Najish Anjum",
    copy: "Connect and discuss with Najish",
    calendly: "https://calendly.com/najishanjum058/30min",
    x: "https://x.com/Najish_anjum",
  },
];

function XMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      requirement: `Subject: ${parsed.data.subject}\n\n${parsed.data.message}`,
      source: "contact-form",
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Got it! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-contact-surface text-contact-ink">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-partner text-xs font-bold uppercase tracking-[0.24em] text-contact-soft">Join us today</p>
          <h1 className="mt-5 font-partner text-5xl font-bold uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
            Connect with<br />Ajinava Edge
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-contact-soft sm:text-lg">
            Meet the founders, explore partnerships, or talk with our operations team about your next community initiative.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="rounded-[2rem] border border-contact-line bg-contact-ink/5 p-7 shadow-contact sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-contact-ink/10"><CalendarDays /></span>
                <span className="rounded-full border border-contact-line px-3 py-1 font-partner text-[10px] font-bold uppercase tracking-[0.2em]">Founder</span>
              </div>
              <h2 className="mt-8 font-partner text-3xl font-bold uppercase">{founder.name}</h2>
              <p className="mt-3 text-contact-soft">{founder.copy}. Choose a time for a focused 30-minute conversation.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-contact-line pt-5">
                <Button asChild className="bg-contact-ink text-contact-surface hover:bg-contact-ink/90">
                  <a href={founder.calendly} target="_blank" rel="noreferrer">Schedule a meeting <ArrowUpRight /></a>
                </Button>
                <Button asChild variant="outline" className="border-contact-line bg-transparent text-contact-ink hover:bg-contact-ink/10 hover:text-contact-ink">
                  <a href={founder.x} target="_blank" rel="noreferrer"><XMark /> Connect on X</a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 border-t border-contact-line pt-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-partner text-xs font-bold uppercase tracking-[0.22em] text-contact-soft">Operations desk</p>
            <h2 className="mt-4 font-partner text-4xl font-bold uppercase leading-none sm:text-5xl">Get in touch with our operations team</h2>
            <p className="mt-6 max-w-xl leading-7 text-contact-soft">Have questions about ambassador registrations, partnerships, or upcoming hackathons? Drop us a line and our operations team will respond.</p>

            <dl className="mt-9 divide-y divide-contact-line border-y border-contact-line">
              <div className="flex items-center justify-between gap-4 py-4"><dt className="flex items-center gap-2 text-sm text-contact-soft"><Mail className="size-4" /> Community Email</dt><dd className="text-right text-sm font-semibold">ajinavaedge@gmail.com</dd></div>
              <div className="flex items-center justify-between gap-4 py-4"><dt className="flex items-center gap-2 text-sm text-contact-soft"><Phone className="size-4" /> Support Hotline</dt><dd className="text-right text-sm font-semibold">+91 9109530117</dd></div>
              <div className="flex items-center justify-between gap-4 py-4"><dt className="flex items-center gap-2 text-sm text-contact-soft"><Instagram className="size-4" /> Instagram Handle</dt><dd className="text-right text-sm font-semibold">@ajinava.edge.official</dd></div>
            </dl>

            <div className="mt-8 rounded-2xl border border-contact-line bg-contact-ink/5 p-5">
              <h3 className="font-partner text-sm font-bold uppercase">Quick operations FAQ</h3>
              <p className="mt-3 text-sm leading-6 text-contact-soft">Ambassador registrations are processed bi-weekly. Open Source Fellowships are run once per quarter. For emergency event hosting concerns, please call central command.</p>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-[2rem] border border-contact-line bg-contact-ink/5 p-6 shadow-contact sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold uppercase tracking-[0.12em]">Your name
                <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} maxLength={100} className="mt-2 w-full rounded-xl border border-contact-line bg-contact-ink/10 px-4 py-3 text-base font-normal normal-case text-contact-ink outline-none placeholder:text-contact-soft/70 focus:ring-2 focus:ring-contact-ink/60" placeholder="Satoshi Nakamoto" />
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.12em]">Email address
                <input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} maxLength={255} className="mt-2 w-full rounded-xl border border-contact-line bg-contact-ink/10 px-4 py-3 text-base font-normal normal-case text-contact-ink outline-none placeholder:text-contact-soft/70 focus:ring-2 focus:ring-contact-ink/60" placeholder="builder@ajinavaedge.com" />
              </label>
            </div>
            <label className="mt-5 block text-xs font-bold uppercase tracking-[0.12em]">Subject
              <input required value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))} maxLength={140} className="mt-2 w-full rounded-xl border border-contact-line bg-contact-ink/10 px-4 py-3 text-base font-normal normal-case text-contact-ink outline-none placeholder:text-contact-soft/70 focus:ring-2 focus:ring-contact-ink/60" placeholder="Ambassador application / partnerships" />
            </label>
            <label className="mt-5 block text-xs font-bold uppercase tracking-[0.12em]">Message
              <textarea required value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} maxLength={1800} rows={6} className="mt-2 w-full resize-none rounded-xl border border-contact-line bg-contact-ink/10 px-4 py-3 text-base font-normal normal-case text-contact-ink outline-none placeholder:text-contact-soft/70 focus:ring-2 focus:ring-contact-ink/60" placeholder="Describe your inquiry..." />
            </label>
            <Button disabled={loading} className="mt-6 h-12 w-full bg-contact-ink font-partner font-bold uppercase tracking-[0.12em] text-contact-surface hover:bg-contact-ink/90">
              {loading ? "Sending..." : <>Send message <Send /></>}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
