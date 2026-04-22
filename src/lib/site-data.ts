import aiMl from "@/assets/services/ai-ml.jpg";
import webApp from "@/assets/services/web-app.jpg";
import research from "@/assets/services/research.jpg";
import edtech from "@/assets/services/edtech.jpg";
import incubation from "@/assets/services/incubation.jpg";
import data from "@/assets/services/data.jpg";
import internship from "@/assets/services/internship.jpg";

import codecrafter from "@/assets/partners/codecrafter.png";
import escapeDavinci from "@/assets/partners/escape-davinci.png";
import hacknwin from "@/assets/partners/hacknwin.png";
import cyberSentinels from "@/assets/partners/cyber-sentinels.png";
import devaix from "@/assets/partners/devaix.png";
import girlsWhoYap from "@/assets/partners/girls-who-yap.png";
import escapeDavinci2 from "@/assets/partners/escape-davinci-2.png";
import codezen from "@/assets/partners/codezen.png";
import calcuttaHacks from "@/assets/partners/calcutta-hacks.png";
import fossHack from "@/assets/partners/foss-hack.png";

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
    date: "May 18, 2026",
    title: "AI Builders Summit 2026",
    type: "Conference",
    location: "Bengaluru + Online",
    desc: "A full day with founders shipping AI products. Talks, demos, fireside chats.",
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
  { name: "Code Crafter 3.0", role: "CT University · Hackathon", logo: codecrafter },
  { name: "Escape Da Vinci", role: "Tamboo Baba × Ascent Circle", logo: escapeDavinci },
  { name: "Hack-N-Win 3.0", role: "D4 Community", logo: hacknwin },
  { name: "Republic of Cyber Sentinels", role: "Cybersecurity Collective", logo: cyberSentinels },
  { name: "DevAIx", role: "TechTribe Community", logo: devaix },
  { name: "Girls Who Yap Conf", role: "Powered by DoraDAO", logo: girlsWhoYap },
  { name: "Escape Da Vinci 2026", role: "Prizepool ₹2,00,000", logo: escapeDavinci2 },
  { name: "CodeZen 2", role: "Code Geeks · Delhi NCR", logo: codezen },
  { name: "Calcutta Hacks", role: "Apex Circle × GDG", logo: calcuttaHacks },
  { name: "FOSS Hack 2026", role: "FOSS United · Hybrid", logo: fossHack },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/ajinava-edge-in/",
  instagram: "https://www.instagram.com/ajinava.edge.official/",
  youtube: "https://www.youtube.com/@ajinavaedge",
  whatsapp: "https://chat.whatsapp.com/IJw256xuepP956JsufMY6g",
};
