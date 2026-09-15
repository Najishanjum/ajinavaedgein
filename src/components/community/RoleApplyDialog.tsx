import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export type CommunityRole = "partner" | "speaker" | "volunteer" | "ambassador" | "city-lead";

interface RoleApplyDialogProps {
  role: CommunityRole | null;
  onClose: () => void;
}

interface RoleDetails {
  title: string;
  shortLabel: string;
  subtitle: string;
  defaultNote: string;
  questions?: string[];
}

const cityLeadQuestions = [
  "Which city are you applying for? How long have you lived or worked there? Describe your local network and the community landscape.",
  "Why do you want to lead Ajinava Edge in your city? What is your vision for the first 6–12 months?",
  "What experience do you have leading communities, events, teams, or partnerships? Share 1–2 examples with results.",
  "How would you grow and engage members? Outline a 90-day plan: recruitment, events, content, partnerships, retention.",
  "What support do you need from Ajinava Edge HQ? What can you commit weekly/monthly — time, budget, team, venue, etc.?",
  "Share links to your social media handles and any city/community pages you manage — LinkedIn, Instagram, X, WhatsApp/Telegram/Discord, Meetup, etc.",
];

const ambassadorQuestions = [
  "Tell us about your college, company, community, or city and the audience you can reach.",
  "Why do you want to become an Ajinava Edge Ambassador, and what impact would you like to create?",
  "What experience do you have with communities, events, content, outreach, or leadership? Share examples.",
  "How would you introduce Ajinava Edge and engage new members during your first 90 days?",
  "How much time can you commit each week, and what support would help you succeed?",
  "Share your LinkedIn, Instagram, X, portfolio, or any community pages you manage.",
];

const roleDetails: Record<CommunityRole, RoleDetails> = {
  partner: {
    title: "Community Partner",
    shortLabel: "Partner",
    subtitle: "Co-host workshops, share a venue, or bring your community members together.",
    defaultNote: "Tell us about your community or company and how you'd like to collaborate...",
  },
  speaker: {
    title: "Speaker / Mentor",
    shortLabel: "Speaker",
    subtitle: "Give a talk, run a hands-on session, or mentor at our Impact Lab.",
    defaultNote: "Share your proposed talk title, key takeaways, and your bio or LinkedIn...",
  },
  volunteer: {
    title: "Volunteer & Crew",
    shortLabel: "Volunteer",
    subtitle: "Help with check-in, stage coordination, photography, logistics, and hospitality.",
    defaultNote: "Tell us what areas you're excited to help with: stage, check-in, tech, photos, or logistics...",
  },
  ambassador: {
    title: "Community Ambassador",
    shortLabel: "Ambassador",
    subtitle: "Represent Ajinava Edge, connect builders, and grow the community in your network.",
    defaultNote: "",
    questions: ambassadorQuestions,
  },
  "city-lead": {
    title: "City Lead",
    shortLabel: "City Lead",
    subtitle: "Lead a local chapter and build meaningful programs, partnerships, and events in your city.",
    defaultNote: "",
    questions: cityLeadQuestions,
  },
};

const roles = Object.keys(roleDetails) as CommunityRole[];

export function RoleApplyDialog({ role, onClose }: RoleApplyDialogProps) {
  const [activeRole, setActiveRole] = useState<CommunityRole>(role ?? "partner");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (role) setActiveRole(role);
  }, [role]);

  useEffect(() => {
    setAnswers(Array(roleDetails[activeRole].questions?.length ?? 0).fill(""));
    setSubmitted(false);
  }, [activeRole]);

  if (!role) return null;
  const current = roleDetails[activeRole];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/75 p-3 backdrop-blur-sm animate-fade-in" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="role-dialog-title">
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-background p-5 text-foreground shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
        <Button type="button" variant="ghost" size="icon" onClick={onClose} className="absolute right-3 top-3 z-10" aria-label="Close application form">
          <X size={20} />
        </Button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary"><CheckCircle2 size={32} /></div>
            <h3 id="role-dialog-title" className="font-display text-2xl font-bold">Application Received!</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">Thank you for applying as a <span className="font-semibold text-primary">{current.title}</span>. Our community team will contact you shortly.</p>
            <Button type="button" onClick={onClose} className="mt-6">Close</Button>
          </div>
        ) : (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">✻ Open Call</p>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Choose a community role">
              {roles.map((item) => (
                <Button key={item} type="button" size="sm" variant={activeRole === item ? "default" : "outline"} onClick={() => setActiveRole(item)}>
                  {roleDetails[item].shortLabel}
                </Button>
              ))}
            </div>

            <h3 id="role-dialog-title" className="mt-6 pr-10 font-display text-2xl font-bold sm:text-3xl">Join as a <span className="italic text-primary">{current.title}</span></h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{current.subtitle}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Full Name *"><input type="text" required minLength={2} maxLength={100} value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Alex Sharma" className={inputClass} /></Field>
                <Field label="Email Address *"><input type="email" required maxLength={255} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="alex@domain.com" className={inputClass} /></Field>
              </div>

              {current.questions ? current.questions.map((question, index) => (
                <Field key={question} label={`${index + 1}. ${question}`}>
                  <textarea required minLength={10} maxLength={1500} rows={index === 3 ? 5 : 4} value={answers[index] ?? ""} onChange={(event) => setAnswers((previous) => previous.map((answer, answerIndex) => answerIndex === index ? event.target.value : answer))} placeholder="Your answer..." className={`${inputClass} resize-y`} />
                </Field>
              )) : (
                <>
                  <Field label="LinkedIn / Website / Portfolio"><input type="url" maxLength={300} value={link} onChange={(event) => setLink(event.target.value)} placeholder="https://..." className={inputClass} /></Field>
                  <Field label="How would you like to contribute?"><textarea required minLength={10} maxLength={1500} rows={4} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder={current.defaultNote} className={`${inputClass} resize-y`} /></Field>
                </>
              )}

              <Button type="submit" className="w-full gap-2 py-6 text-xs font-bold uppercase tracking-widest">Submit Application <ArrowRight size={15} /></Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-medium leading-relaxed text-foreground"><span className="mb-2 block">{label}</span>{children}</label>;
}

const inputClass = "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";