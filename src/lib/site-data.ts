import aiMl from "@/assets/services/ai-ml.jpg";
import webApp from "@/assets/services/web-app.jpg";
import research from "@/assets/services/research.jpg";
import edtech from "@/assets/services/edtech.jpg";
import incubation from "@/assets/services/incubation.jpg";
import data from "@/assets/services/data.jpg";
import internship from "@/assets/services/internship.jpg";

import posterYesist12 from "@/assets/partners/poster-yesist12.png";
import posterHackBaroda from "@/assets/partners/poster-hackbaroda.png";
import posterOSW from "@/assets/partners/poster-osw.png";
import posterBharatTech from "@/assets/partners/poster-bharattech.png";
import posterEnfinity from "@/assets/partners/poster-enfinity.png";
import posterPhoenix from "@/assets/partners/poster-phoenix.png";
import posterCodeNakshatra from "@/assets/partners/poster-codenakshatra.png";
import posterVerge from "@/assets/partners/poster-verge.png";
import posterEliteHack from "@/assets/partners/poster-elitehack.png";
import codecrafter from "@/assets/partners/codecrafter.png";
import posterCommunityPartner from "@/assets/partners/poster-community-partner.png";
import posterHacknwin from "@/assets/partners/poster-hacknwin.png";
import posterCyberSentinels from "@/assets/partners/poster-cyber-sentinels.png";
import posterTechtribeDevaix from "@/assets/partners/poster-techtribe-devaix.png";
import posterGirlsWhoYap from "@/assets/partners/poster-girls-who-yap.png";
import posterEscapeDavinci from "@/assets/partners/poster-escape-davinci.png";
import posterCodezen from "@/assets/partners/poster-codezen.png";
import posterCalcuttaHacks from "@/assets/partners/poster-calcutta-hacks.png";
import posterFossHack from "@/assets/partners/poster-foss-hack.png";
import aeContestImg from "@/assets/events/ae-contest.jpeg";
import aeMeetupJabalpur from "@/assets/events/ae-meetup-jabalpur.png.asset.json";
import githubWorkshop from "@/assets/events/github-workshop.jpeg.asset.json";
import edgeHack2026 from "@/assets/events/edge-hack-2026.jpeg.asset.json";
import dsaSession from "@/assets/events/dsa-session.png.asset.json";
import graphicDesignWorkshop from "@/assets/events/graphic-design-workshop.png.asset.json";
import ideaToMvp from "@/assets/events/idea-to-mvp.jpg";

export const services = [
  {
    icon: "Sparkles",
    title: "AI & ML Solutions",
    desc: "Custom artificial intelligence and machine learning models tailored to your business needs.",
    image: aiMl,
    tags: ["Predictive Analytics", "NLP", "Computer Vision", "GenAI"],
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Pipelines",
      "Custom GPT Agents & RAG",
    ],
  },
  {
    icon: "Globe",
    title: "Web & App Development",
    desc: "Full-stack development services creating scalable and performant digital solutions.",
    image: webApp,
    tags: ["React", "Next.js", "React Native", "Node"],
    features: [
      "React & Next.js",
      "Mobile Apps (iOS / Android)",
      "API & Backend Engineering",
      "Performance & SEO Optimization",
    ],
  },
  {
    icon: "FlaskConical",
    title: "Research & Innovation",
    desc: "Cutting-edge research in emerging technologies and innovative problem-solving methodologies.",
    image: research,
    tags: ["R&D", "Prototyping", "Innovation Labs"],
    features: [
      "Technology Research",
      "Innovation Labs",
      "Rapid Prototyping",
      "White-papers & PoCs",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Ed-Tech Initiatives",
    desc: "Educational technology solutions and training programs for skill development.",
    image: edtech,
    tags: ["LMS", "Workshops", "Bootcamps"],
    features: [
      "Online Courses",
      "Workshops & Bootcamps",
      "Custom Learning Platforms",
      "Mentor Programs",
    ],
  },
  {
    icon: "Rocket",
    title: "Startup Incubation",
    desc: "Support and resources for early-stage startups to transform ideas into successful ventures.",
    image: incubation,
    tags: ["Idea → MVP", "Funding", "Go-to-market"],
    features: [
      "Business Planning",
      "Funding Guidance",
      "MVP Engineering",
      "Mentor & Investor Network",
    ],
  },
  {
    icon: "Database",
    title: "Data Solutions",
    desc: "Comprehensive data management, analytics, and visualization services.",
    image: data,
    tags: ["Big Data", "Warehousing", "BI"],
    features: [
      "Big Data Engineering",
      "Data Warehousing",
      "Dashboards & BI",
      "ETL & Real-time Pipelines",
    ],
  },
  {
    icon: "Briefcase",
    title: "Internship Program",
    desc: "Professional training and real-world experience for students, freshers, and final-year graduates looking to kickstart their tech careers.",
    image: internship,
    tags: ["3–6 months", "Remote / Onsite", "Certified"],
    features: [
      "Duration: Flexible 3–6 months (Remote / Onsite)",
      "Tech: AI/ML, Cloud, Web Dev, Java & more",
      "Live projects with mentors",
      "Certificate + LOR on completion",
    ],
  },
] as const;

export const events = [
  {
    date: "Apr 13 – Apr 30, 2026",
    title: "AE Referral Contest 1.0 — 100K Prize Pool",
    type: "Contest",
    location: "Online · Worldwide",
    desc: "20 days of community-powered fun! Theme: The Power of Connection. Request your personal referral link, share it with friends and on socials, and climb the leaderboard for the 1st–4th prizes. NB: Your referral only counts when the number is saved.",
    image: aeContestImg,
    link: "https://www.aecontest.online/",
    cta: "Register Now",
  },
  {
    date: "May 20, 2025",
    title: "AI Builder Meetup — Build the Future. Together.",
    type: "Community Event",
    location: "Jabalpur, India (Venue shared with registered participants)",
    desc: "Connect. Learn. Build. A community gathering for developers, creators, students and innovators passionate about AI. Expert talks, hands-on AI workshops, networking, goodies & certificates. Powered by Team ILM Tech.",
    image: aiBuilderMeetup,
    link: "https://ajinavaedge.in/events",
    cta: "Register Now",
  },
  {
    date: "Apr 27, 2026",
    title: "Hack the Edge — 48h Hackathon",
    type: "Hackathon",
    location: "Online",
    desc: "Build an AI-powered MVP in a weekend with mentors from Ajinava Edge.",
  },
  {
    date: "Apr 12, 2026",
    title: "From Idea to MVP — Workshop",
    type: "Workshop",
    location: "Online",
    desc: "Live-build a startup MVP using Lovable, React and Supabase in 3 hours.",
  },
];

export const announcements = [
  {
    tag: "New",
    date: "Apr 19, 2026",
    title: "Ajinava Edge AI Studio is live",
    body: "Our new in-house AI studio helps startups ship custom GPT agents and RAG apps in days, not months.",
  },
  {
    tag: "Community",
    date: "Apr 10, 2026",
    title: "We crossed 5,000 community members 🎉",
    body: "Thank you to every builder who joined us. New mentorship tracks coming next month.",
  },
  {
    tag: "Partnership",
    date: "Mar 30, 2026",
    title: "Ajinava Edge x CodeHive partnership",
    body: "Exclusive workshops and joint hackathons rolling out across India and SEA.",
  },
];

export const partners = [
  { name: "Escape Da-Vinci", role: "Tamboobaba × Ascent Circle · ₹2,00,000 Prize Pool", logo: posterEscapeDavinci },
  { name: "Hack-N-Win 3.0", role: "D4 Community · Welcoming Ajinava Edge", logo: posterHacknwin },
  { name: "Republic of Cyber Sentinels", role: "Official Community Partner · 30 Jan", logo: posterCyberSentinels },
  { name: "TechTribe × DevAIx", role: "Community Partner · Feb 21, 2026 · Noida", logo: posterTechtribeDevaix },
  { name: "Girls Who Yap Conf", role: "Powered by DoraDAO × Ajinava Edge", logo: posterGirlsWhoYap },
  { name: "Codezen 2", role: "Code Geeks · Feb 2026 · Delhi NCR", logo: posterCodezen },
  { name: "Calcutta <Hacks/>", role: "Apex Circle × GDG · Heritage · Innovation", logo: posterCalcuttaHacks },
  { name: "FOSS Hack 2026", role: "FOSS United · 01–31 March · Hybrid", logo: posterFossHack },
  { name: "Introducing Community Partner", role: "Tamboobaba · Genesis · Innovxus · Ascent · EDV", logo: posterCommunityPartner },
  { name: "YESIST12 2026", role: "CGC Landran × IEEE · Indonesia Finale", logo: posterYesist12 },
  { name: "Hack Baroda", role: "Coder's Corner · Vadodara · 12-hr Offline", logo: posterHackBaroda },
  { name: "Open Source Weekend", role: "OSW · Connect · Share · Thrive", logo: posterOSW },
  { name: "BharatTech Xperience 3", role: "The Uniques Community · Hackathon of a lifetime", logo: posterBharatTech },
  { name: "Enfinity by WolfStreet", role: "CEV · Powering Infinite Possibilities", logo: posterEnfinity },
  { name: "Phoenix 2026", role: "Xplorica × Future Education · 25 Years", logo: posterPhoenix },
  { name: "Code Nakshatra II", role: "Code Rangers × TIIPS · Stars aligned", logo: posterCodeNakshatra },
  { name: "Verge 26", role: "SRM University Delhi-NCR · Technical Fest", logo: posterVerge },
  { name: "Elite Hack 1.0", role: "Elite Coders · 50K+ Prize · Global", logo: posterEliteHack },
  { name: "Code Crafter 3.0", role: "CT University · Hackathon", logo: codecrafter },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/ajinava-edge-in/",
  instagram: "https://www.instagram.com/ajinava.edge.official/",
  youtube: "https://www.youtube.com/@ajinavaedge",
  whatsapp: "https://chat.whatsapp.com/IJw256xuepP956JsufMY6g",
};
