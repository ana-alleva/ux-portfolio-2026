import airforceHero from "@/assets/airforce/hero.png";
import atalaHero from "@/assets/atala/hero.png";

/*
  Por ahora, hasta que tengas una imagen propia para el proyecto de viajes,
  usamos un placeholder.

  Después podés reemplazar este import por:
  import travelHero from "@/assets/travel/hero.png";
*/
import travelPlaceholder from "@/assets/project-3.png";

export const featuredProjectsData = {
  badge: "Selected Work",
  title: "Featured Projects",
  description:
    "A selection of projects across AI products, UX research, visual design, and complex digital ecosystems.",
  link: "Read Case Study",

  projects: [
    {
      id: "01",
      slug: "rh-ai-product",
      title: "Airforce AI Workspace",
      description:
        "An AI-powered recruiting workspace designed to help users manage candidates, documents, conversations, and multiple hiring processes.",
      tags: ["AI Product", "Visual Design", "React"],
      image: airforceHero,
    },
    {
      id: "02",
      slug: "travel-insurance-audit",
      title: "Travel Insurance UX Audit",
      description:
        "A UX audit and competitive benchmark focused on improving quote speed, plan comparison, clarity, and purchase confidence.",
      tags: ["UX Research", "Heuristic Audit", "Benchmark"],
      image: travelPlaceholder,
    },
    {
      id: "03",
      slug: "atala-prism",
      title: "THIS IS A PLACEHOLDER",
      description:
        "This card is temporarily using placeholder content while the final Atala PRISM case study presentation is being completed.",
      tags: ["Placeholder", "Work in Progress", "Coming Soon"],
      image: atalaHero,
    },
  ],
};
