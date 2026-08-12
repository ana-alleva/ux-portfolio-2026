import airforceHero from "@/assets/aiforce/hero.png";
import atalaHero from "@/assets/atala/hero.png";
import travelHero from "@/assets/travel/hero.png";
import cxdHero from "@/assets/cxd/hero.png";

export const featuredProjectsData = {
  badge: "Selected Work",
  title: "Featured Projects",
  description:
    "A selection of projects across AI products, UX research, visual design, and complex digital ecosystems.",
  link: "Read Case Study",

  projects: [
    {
      id: "01",
      slug: "travel-insurance-audit",
      title: "Travel Insurance UX Audit",
      description:
        "A UX audit and competitive benchmark that turned usability findings into a clearer, faster insurance purchase experience.",
      tags: ["UX Research", "Heuristic Audit", "Benchmark"],
      image: travelHero,
      problem: "Plan comparison friction",
      role: "UX Research + Audit",
      outcome: "Redesign proposal",
    },
    {
      id: "02",
      slug: "rh-ai-product",
      title: "Airforce AI Workspace",
      description:
        "Designed the UX flows and visual system for an AI recruiting workspace, helping teams manage candidate documents and processes, and partnered with engineers on React components.",
      tags: ["AI Product Design", "Visual Design", "React"],
      image: airforceHero,
      problem: "Fragmented recruiting workflows",
      role: "Product & Visual Design",
      outcome: "Product discovery",
    },
    {
      id: "03",
      slug: "atala-prism",
      title: "Atala PRISM",
      description:
        "Turned research insights into UX flows and polished UI for a digital identity platform, while contributing to its React implementation.",
      tags: ["Identity", "Product Design", "React"],
      image: atalaHero,
      problem: "Complex credential workflows",
      role: "Product Design + UX Flows",
      outcome: "Product discovery",
    },
    {
      id: "04",
      slug: "cxd",
      title: "CXD",
      description:
        "Designed UX flows and polished UI for a B2B SaaS platform managing digital employee cards across Apple and Google Wallet, partnering with engineers on React components.",
      tags: ["Identity", "Product Design", "React"],
      image: cxdHero,
      problem: "Complex benefit delivery workflows",
      role: "UI Design + Product Flows",
      outcome: "Product discovery",
    },
  ],
};
