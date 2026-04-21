import aiMl from "@/assets/services/ai-ml.jpg";
import webApp from "@/assets/services/web-app.jpg";
import research from "@/assets/services/research.jpg";
import edtech from "@/assets/services/edtech.jpg";
import incubation from "@/assets/services/incubation.jpg";
import data from "@/assets/services/data.jpg";
import internship from "@/assets/services/internship.jpg";

import dsdd from "@/assets/partners/dsdd.png";
import genesis from "@/assets/partners/genesis.png";
import innovxus from "@/assets/partners/innovxus.png";
import techtribe from "@/assets/partners/techtribe.png";
import zerotheory from "@/assets/partners/zerotheory.png";
import tamboobaba from "@/assets/partners/tamboobaba.png";
import doradao from "@/assets/partners/doradao.png";
import codegeeks from "@/assets/partners/codegeeks.png";
import mitcode from "@/assets/partners/mitcode.png";

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
  { name: "DSDD", role: "Dissect · Develop · Debug · Deploy", logo: dsdd },
  { name: "Genesis", role: "Creator Community", logo: genesis },
  { name: "InnovXus", role: "Innovation Network", logo: innovxus },
  { name: "TechTribe Community", role: "Tech Community", logo: techtribe },
  { name: "ZeroTheory", role: "Zeroes to Heroes", logo: zerotheory },
  { name: "Tamboo Baba", role: "Creative Collective", logo: tamboobaba },
  { name: "DoraDAO", role: "Web3 Community", logo: doradao },
  { name: "Code Geeks", role: "Developer Community", logo: codegeeks },
  { name: "MITCODE", role: "Tech Academy", logo: mitcode },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/ajinava-edge-in/",
  instagram: "https://www.instagram.com/ajinava.edge.official/",
  youtube: "https://www.youtube.com/@ajinavaedge",
  whatsapp: "https://chat.whatsapp.com/IJw256xuepP956JsufMY6g",
};
