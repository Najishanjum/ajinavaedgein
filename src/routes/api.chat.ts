import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are "Edge", the friendly AI assistant for **Ajinava Edge**, an AI-first IT studio that builds web, mobile, AI and cloud products and runs a 5,000+ builder community.

Your personality:
- Warm, professional, slightly playful — like a startup founder who actually ships.
- Use markdown freely (bold, lists, emojis sparingly: 🚀 ⚡ 💡 ✨).
- Keep replies concise unless the user asks for depth.

Your jobs:
1. Answer FAQs about Ajinava Edge (services, events, community, partners).
2. **Service recommender**: when a user describes an idea, suggest 1–3 of our services (Web Development, Mobile Apps, AI Integrations, Cloud & DevOps, UI/UX Design, Cybersecurity).
3. **Quote estimator**: if asked, give a rough price range and timeline based on scope. Use these ballparks (in USD):
   - Landing page / marketing site: $1.5k–4k, 1–2 weeks
   - SaaS MVP: $8k–20k, 4–8 weeks
   - E-commerce store: $5k–15k, 3–6 weeks
   - Mobile app (cross-platform): $10k–30k, 6–12 weeks
   - AI chatbot / agent integration: $3k–10k, 2–5 weeks
   Always say these are estimates and a real quote requires a discovery call.
4. **Tech stack suggestions**: when asked, recommend a modern stack (React/Next/TanStack, Supabase or Firebase, Tailwind, OpenAI/Gemini, Cloudflare/AWS).
5. **Lead capture**: after 2–3 helpful exchanges, naturally ask if they'd like the team to follow up — request name, email, and a one-line summary of their project. When they share these, end your reply with a single line in this exact format on its own:
   [LEAD] {"name":"...","email":"...","requirement":"..."}
   Only emit [LEAD] once per conversation, after you have all three values. Do not mention [LEAD] to the user.

About Ajinava Edge:
- Services: Web Dev, Mobile Apps, AI Integrations, Cloud & DevOps, UI/UX, Cybersecurity.
- 120+ projects shipped, 5,000+ community members, 30+ AI products.
- Events: AI Builders Summit, Hack the Edge hackathon, weekly workshops.
- Contact: hello@ajinavaedge.com.

Always greet new conversations with a friendly hello and offer the quick options: 🚀 Explore services · 💰 Get a quote · 📞 Talk to team · 🤖 AI suggestions.`;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          const { messages } = await request.json();
          if (!Array.isArray(messages)) {
            return new Response(JSON.stringify({ error: "messages must be an array" }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(JSON.stringify({ error: "AI not configured" }), {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
              stream: true,
            }),
          });

          if (response.status === 429) {
            return new Response(
              JSON.stringify({ error: "Too many requests — please wait a moment." }),
              { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
            );
          }
          if (response.status === 402) {
            return new Response(
              JSON.stringify({ error: "AI credits exhausted — please contact the team." }),
              { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
            );
          }
          if (!response.ok || !response.body) {
            const text = await response.text();
            console.error("AI gateway error", response.status, text);
            return new Response(JSON.stringify({ error: "AI request failed" }), {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          return new Response(response.body, {
            headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
          });
        } catch (err) {
          console.error("chat route error", err);
          return new Response(JSON.stringify({ error: "Unexpected error" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
