import atalaHero from "@/assets/atala/hero.png";
import atalaResearch from "@/assets/atala/research.png";
import atalaSolution1 from "@/assets/atala/solution-1.png";
import atalaSolution2 from "@/assets/atala/solution-2.png";
import atalaSolution3 from "@/assets/atala/solution-3.png";

import airforceHero from "@/assets/airforce/hero.png";
import airforceResearch from "@/assets/airforce/research.png";
import airforceSolution1 from "@/assets/airforce/solution-1.png";
import airforceSolution2 from "@/assets/airforce/solution-2.png";
import airforceSolution3 from "@/assets/airforce/solution-3.png";

export const caseStudies = [
  {
    slug: "rh-ai-product",

    hero: {
      badge: "AI Product • Discovery • Recruitment",
      title: "Airforce AI Workspace",
      description:
        "Designing an AI-powered workspace that helps recruiters organize candidates, manage documents, and retrieve information through a conversational interface.",

      image: airforceHero,

      actions: [
        {
          label: "View Prototype",
          href: "PEGÁ_ACÁ_EL_LINK_REAL",
          external: true,
        },
      ],
    },

    overview: {
      badge: "Overview",
      title: "Designing a Conversational Recruiting Workspace",
      description:
        "Airforce was an internal AI product developed at Aluxion during the discovery phase. The goal was to rethink how recruiters access candidate information by combining AI conversations, document management, and multiple workspaces into a single product experience.",

      details: [
        {
          label: "Company",
          value: "Aluxion",
        },
        {
          label: "Role",
          value: "Visual Designer",
        },
        {
          label: "Stage",
          value: "Product Discovery",
        },
        {
          label: "Platform",
          value: "AI Recruiting Workspace",
        },
      ],
    },

    challenge: {
      badge: "The Challenge",
      title: "Helping Recruiters Navigate Complex Information",
      description:
        "Recruiters often move between candidates, CVs, documents, conversations, and hiring processes. The challenge was to create a conversational experience that gave users fast access to information while keeping multiple workspaces and chat histories organized.",

      cards: [
        {
          title: "Multiple Workspaces",
          description:
            "Users needed to manage several recruiting processes simultaneously without losing context or conversation history.",
        },
        {
          title: "Conversational Access",
          description:
            "Candidate information needed to be accessible through natural-language interactions instead of relying only on traditional navigation and filters.",
        },
        {
          title: "Context Preservation",
          description:
            "Each workspace needed to retain its own chats, files, CVs, and generated content while remaining easy to navigate.",
        },
      ],
    },

    research: {
      badge: "Collaboration",
      title: "From Research to Interface",
      description:
        "I worked within a three-person design team and collaborated closely with the UX Researcher. My role was to translate research findings into interaction flows and polished interfaces, while iterating with developers throughout the discovery process.",

      metrics: [
        {
          value: "3",
          label: "Designers",
        },
        {
          value: "AI",
          label: "Product",
        },
        {
          value: "React",
          label: "Implementation",
        },
        {
          value: "Discovery",
          label: "Phase",
        },
      ],

      image: airforceResearch,
    },

    insights: {
      badge: "Key Insights",
      title: "Design Principles",
      description:
        "The product became more understandable when workspaces, conversations, files, and histories were treated as parts of one connected system rather than separate features.",

      cards: [
        {
          number: "01",
          title: "Workspace First",
          description:
            "Recruiters think in terms of hiring processes and projects, not isolated conversations.",
        },
        {
          number: "02",
          title: "Conversation as Navigation",
          description:
            "The chat became the primary interface for retrieving candidate information, extracting text, generating content, and viewing statistics.",
        },
        {
          number: "03",
          title: "Reduce Context Switching",
          description:
            "Keeping conversations, CVs, files, and generated content together reduced unnecessary navigation between tools.",
        },
      ],
    },

    solution: {
      badge: "The Solution",
      title: "Building an AI Workspace for Recruiters",
      description:
        "My work focused on the core product experience: creating workspaces, switching between them, preserving chat histories, and supporting recruiters through a conversational interface.",

      features: [
        {
          eyebrow: "Workspace Creation",
          title: "Organizing Recruiting Projects",
          description:
            "I designed the flows for creating, organizing, and switching between workspaces, helping recruiters manage several hiring processes without losing context.",
          image: airforceSolution1,
        },
        {
          eyebrow: "AI Conversation",
          title: "Accessing Candidate Information Through Chat",
          description:
            "The chat interface allowed recruiters to upload CVs and files, ask questions, extract information, generate content, and access statistics without leaving the conversation.",
          image: airforceSolution2,
        },
        {
          eyebrow: "Supporting Flows",
          title: "Authentication, Accounts, and Payments",
          description:
            "I also designed supporting flows including login, workspace management, and payment-related screens to create a complete end-to-end experience.",
          image: airforceSolution3,
        },
      ],
    },

    results: {
      badge: "Results & Learnings",
      title: "What I Learned",
      description:
        "Airforce was developed as a functional internal discovery initiative, although it was not ultimately commercialized. The project strengthened my experience designing AI-first products, translating research into visual solutions, and contributing to React implementation.",

      metrics: [
        {
          value: "AI",
          label: "Product",
        },
        {
          value: "React",
          label: "Implementation",
        },
        {
          value: "Discovery",
          label: "Delivered",
        },
        {
          value: "3",
          label: "Design Team",
        },
      ],

      learnings: [
        "AI interactions need to feel predictable, understandable, and connected to a clear product structure.",
        "The workspace model helped users organize several recruiting processes without losing context.",
        "Chat history, files, CVs, and generated content needed to behave as one coherent system.",
        "Working directly with React improved collaboration between design and development.",
      ],
    },
  },

  {
    slug: "ecommerce-checkout",

    hero: {
      badge: "E-commerce • UX/UI",
      title: "E-commerce Checkout",
      description:
        "Improved the checkout experience to reduce friction and increase conversion.",

      image: airforceHero,
    },
    overview: {
      badge: "Overview",
      title: "Project Overview",
      description:
        "I redesigned a complex construction management platform to help teams create projects, monitor progress, manage information, and make operational decisions with greater clarity.",

      details: [
        {
          label: "Role",
          value: "Senior Product Designer",
        },
        {
          label: "Duration",
          value: "6 months",
        },
        {
          label: "Team",
          value: "Product, Engineering & Stakeholders",
        },
        {
          label: "Platform",
          value: "Enterprise SaaS",
        },
      ],
    },
    challenge: {
      badge: "The Challenge",

      title: "Understanding the Problem",

      description:
        "Construction teams struggled with fragmented workflows, difficult navigation, and poor visibility into project progress.",

      cards: [
        {
          title: "Fragmented Navigation",
          description:
            "Users had to move through multiple disconnected screens to complete common tasks.",
        },
        {
          title: "Information Overload",
          description:
            "Critical information competed for attention, making decision-making slower.",
        },
        {
          title: "Steep Learning Curve",
          description:
            "New users required significant onboarding before becoming productive.",
        },
      ],
    },
    research: {
      badge: "Research",
      title: "Research & Discovery",

      description:
        "Through stakeholder interviews, contextual inquiry and workflow analysis, I identified the main pain points affecting productivity and decision making.",

      metrics: [
        {
          value: "12",
          label: "Stakeholder Interviews",
        },
        {
          value: "8",
          label: "Workshops",
        },
        {
          value: "14",
          label: "User Flows",
        },
        {
          value: "40hr",
          label: "Research Time",
        },
      ],

      image: airforceResearch,
    },
    insights: {
      badge: "Key Insights",

      title: "What We Learned",

      description:
        "Research revealed recurring patterns that informed every design decision throughout the project.",

      cards: [
        {
          number: "01",
          title: "Mental Models",
          description:
            "Users expected workflows to match the real-world construction process.",
        },
        {
          number: "02",
          title: "Reduce Cognitive Load",
          description:
            "Prioritizing actions over excessive information improved usability.",
        },
        {
          number: "03",
          title: "Scalable Components",
          description:
            "Reusable patterns reduced implementation effort and improved consistency.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      title: "Designing a Clearer Product Experience",
      description:
        "I translated the research findings into focused product improvements that simplified critical workflows and created a more scalable interface.",

      features: [
        {
          eyebrow: "Solution 01",
          title: "Unified Dashboard",
          description:
            "A centralized dashboard gives users immediate visibility into project status, priorities, risks, and the actions that require attention.",
          image: atalaSolution1,
        },
        {
          eyebrow: "Solution 02",
          title: "Simplified Workflow Builder",
          description:
            "A guided workflow reduces cognitive load by breaking complex configuration into clear, predictable steps.",
          image: atalaSolution2,
        },
        {
          eyebrow: "Solution 03",
          title: "Contextual Notifications",
          description:
            "Notifications were redesigned around urgency, context, and the next action users needed to take.",
          image: atalaSolution3,
        },
      ],
    },
    results: {
      badge: "Results & Learnings",

      title: "Measurable Impact",

      description:
        "The redesign simplified critical workflows, improved usability, and created a stronger foundation for future product growth.",

      metrics: [
        {
          value: "+40%",
          label: "Faster Task Completion",
        },
        {
          value: "-32%",
          label: "Reduced User Errors",
        },
        {
          value: "98%",
          label: "Positive User Feedback",
        },
      ],

      learnings: [
        "Validate assumptions early through continuous user research.",
        "Design around users' mental models instead of system constraints.",
        "A scalable design system accelerates product development and consistency.",
      ],
    },
  },

  {
    slug: "ai-recruitment-platform",

    hero: {
      badge: "AI Product • SaaS",
      title: "AI Recruitment Platform",
      description:
        "Designed AI-assisted workflows for candidate matching and content generation.",

      image: atalaHero,
    },
    overview: {
      badge: "Overview",
      title: "Project Overview",
      description:
        "I redesigned a complex construction management platform to help teams create projects, monitor progress, manage information, and make operational decisions with greater clarity.",

      details: [
        {
          label: "Role",
          value: "Senior Product Designer",
        },
        {
          label: "Duration",
          value: "6 months",
        },
        {
          label: "Team",
          value: "Product, Engineering & Stakeholders",
        },
        {
          label: "Platform",
          value: "Enterprise SaaS",
        },
      ],
    },
    challenge: {
      badge: "The Challenge",

      title: "Understanding the Problem",

      description:
        "Construction teams struggled with fragmented workflows, difficult navigation, and poor visibility into project progress.",

      cards: [
        {
          title: "Fragmented Navigation",
          description:
            "Users had to move through multiple disconnected screens to complete common tasks.",
        },
        {
          title: "Information Overload",
          description:
            "Critical information competed for attention, making decision-making slower.",
        },
        {
          title: "Steep Learning Curve",
          description:
            "New users required significant onboarding before becoming productive.",
        },
      ],
    },
    research: {
      badge: "Research",
      title: "Research & Discovery",

      description:
        "Through stakeholder interviews, contextual inquiry and workflow analysis, I identified the main pain points affecting productivity and decision making.",

      metrics: [
        {
          value: "12",
          label: "Stakeholder Interviews",
        },
        {
          value: "8",
          label: "Workshops",
        },
        {
          value: "14",
          label: "User Flows",
        },
        {
          value: "40hr",
          label: "Research Time",
        },
      ],

      image: atalaResearch,
    },
    insights: {
      badge: "Key Insights",

      title: "What We Learned",

      description:
        "Research revealed recurring patterns that informed every design decision throughout the project.",

      cards: [
        {
          number: "01",
          title: "Mental Models",
          description:
            "Users expected workflows to match the real-world construction process.",
        },
        {
          number: "02",
          title: "Reduce Cognitive Load",
          description:
            "Prioritizing actions over excessive information improved usability.",
        },
        {
          number: "03",
          title: "Scalable Components",
          description:
            "Reusable patterns reduced implementation effort and improved consistency.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      title: "Designing a Clearer Product Experience",
      description:
        "I translated the research findings into focused product improvements that simplified critical workflows and created a more scalable interface.",

      features: [
        {
          eyebrow: "Solution 01",
          title: "Unified Dashboard",
          description:
            "A centralized dashboard gives users immediate visibility into project status, priorities, risks, and the actions that require attention.",
          image: atalaSolution1,
        },
        {
          eyebrow: "Solution 02",
          title: "Simplified Workflow Builder",
          description:
            "A guided workflow reduces cognitive load by breaking complex configuration into clear, predictable steps.",
          image: atalaSolution2,
        },
        {
          eyebrow: "Solution 03",
          title: "Contextual Notifications",
          description:
            "Notifications were redesigned around urgency, context, and the next action users needed to take.",
          image: atalaSolution3,
        },
      ],
    },
    results: {
      badge: "Results & Learnings",

      title: "Measurable Impact",

      description:
        "The redesign simplified critical workflows, improved usability, and created a stronger foundation for future product growth.",

      metrics: [
        {
          value: "+40%",
          label: "Faster Task Completion",
        },
        {
          value: "-32%",
          label: "Reduced User Errors",
        },
        {
          value: "98%",
          label: "Positive User Feedback",
        },
      ],

      learnings: [
        "Validate assumptions early through continuous user research.",
        "Design around users' mental models instead of system constraints.",
        "A scalable design system accelerates product development and consistency.",
      ],
    },
  },
];
