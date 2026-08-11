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
    },
    {
      id: "02",
      slug: "rh-ai-product",
      title: "Airforce AI Workspace",
      description:
        "An AI-powered recruiting workspace designed to help users manage candidates, documents, conversations, and multiple hiring processes.",
      tags: ["AI Product", "Visual Design", "React"],
      image: airforceHero,
    },
    {
      id: "03",
      slug: "atala-prism",
      title: "Atala PRISM",
      description:
        "Designed a decentralized identity ecosystem spanning a management console, mobile wallet, and browser extension for issuing, managing, and verifying digital credentials.",
      tags: ["Identity", "Product Design", "React"],
      image: atalaHero,
    },
    {
      id: "04",
      slug: "cxd",
      title: "CXD",
      description:
        "Designed a decentralized identity ecosystem spanning a management console, mobile wallet, and browser extension for issuing, managing, and verifying digital credentials.",
      tags: ["Identity", "Product Design", "React"],
      image: cxdHero,
    },
  ],
};
