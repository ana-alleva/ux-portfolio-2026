import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

export const featuredProjectsData = {
  badge: "Selected Work",
  title: "Featured Projects",
  description:
    "A selection of projects where I combined research, strategy, and visual design to solve complex product challenges.",
  link: "Read Case Study",

  projects: [
    {
      id: "01",
      slug: "construction-management",
      title: "Construction Management Platform",
      description:
        "Redesigned the dashboard and project creation flow for a SaaS platform used by construction teams.",
      tags: ["UX Research", "UI Design", "Design System"],
      image: project1,
    },
    {
      id: "02",
      slug: "ecommerce-checkout",
      title: "E-commerce Checkout",
      description:
        "Improved the checkout experience to reduce friction and increase conversion.",
      tags: ["E-commerce", "UX", "Prototype"],
      image: project2,
    },
    {
      id: "03",
      slug: "ai-recruitment-platform",
      title: "AI Recruitment Platform",
      description:
        "Designed AI-assisted workflows for candidate matching, content generation, and workspace management.",
      tags: ["AI Product", "UX/UI", "SaaS"],
      image: project3,
    },
  ],
};
