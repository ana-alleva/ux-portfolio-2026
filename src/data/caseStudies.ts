import atalaHero from "@/assets/atala/hero.png";
import atalaResearch from "@/assets/atala/research.png";
import atalaSolution1 from "@/assets/atala/solution-1.png";
import atalaSolution2 from "@/assets/atala/solution-2.png";
import atalaSolution3 from "@/assets/atala/solution-3.png";

import aiforceHero from "@/assets/aiforce/hero.png";
import aiforceResearch from "@/assets/aiforce/research.png";
import aiforceSolution1 from "@/assets/aiforce/solution-1.png";
import aiforceSolution2 from "@/assets/aiforce/solution-2.png";
import aiforceSolution3 from "@/assets/aiforce/solution-3.png";

import cxdHero from "@/assets/cxd/hero.png";
import cxdResearch from "@/assets/cxd/research.png";
import cxdSolution1 from "@/assets/cxd/solution-1.png";
import cxdSolution2 from "@/assets/cxd/solution-2.png";
import cxdSolution3 from "@/assets/cxd/solution-3.png";

import travelHero from "@/assets/travel/travelCaseHero.png";
import travelChallenge from "@/assets/travel/travelChallenge.png";
import travelSolution1 from "@/assets/travel/solution-1.png";
import travelSolution2 from "@/assets/travel/solution-2.png";
import travelSolution3 from "@/assets/travel/solution-3.png";

export const caseStudies = [
  {
    slug: "travel-insurance-audit",

    hero: {
      badge: "Travel Insurance",
      title: "Making Travel Insurance Easier to Understand and Compare",
      description:
        "I reviewed the travel insurance journey to understand where people get confused, hesitate, or abandon the purchase.",

      image: travelHero,
      details: [
        {
          label: "Role",
          value: "UX Researcher & Product Design Proposal",
        },
        {
          label: "Scope",
          value: "UX audit, Competitive Benchmark and redesign proposal",
        },
        {
          label: "Methods",
          value: "Heuristic Evaluation & Benchmark",
        },
        {
          label: "Platform",
          value: "Responsive Web",
        },
      ],

      actions: [
        {
          label: "View current AMA site",
          href: "https://www.amatravel.ca/",
          external: true,
        },
      ],
    },

    context: {
      badge: "The challenge",
      title: "A cross-product with a difficult decision journey",
      description:
        "Travel insurance is a high-consideration product. People need to understand coverage, exclusions, and pricing while making decisions under uncertainty. The existing journey made those decisions harder by spreading information across multiple steps and presenting plans in ways that were difficult to compare.",

      opportunity: {
        title: "The opportunity",
        description:
          "Reduce uncertainty by simplifying the journey, improving plan comparison, and helping users understand what matters before committing to a purchase.",
      },

      image: travelChallenge,
    },

    role: {
      title: "My Role",
      items: [
        "Evaluated the end-to-end travel insurance experience, benchmarked AMA against leading competitors, identified recurring UX patterns and friction points, and translated those findings into design recommendations and interface concepts.",
        "UX heuristic evaluation",
        "Competitive benchmarking & flow analysis",
        "Information architecture, interaction and UI recommendations, redesign concepts",
      ],
    },

    learnings: {
      title: "What I learned before designing",

      tags: [
        "Navigation",
        "Language",
        "Visual Design",
        "Cognitive Load",
        "Trust & Confidence",
      ],

      cards: [
        {
          number: "01",
          label: "Speed",
          title: "Too much effort before value",
          description:
            "AMA required seven steps before reaching a quote, while the benchmarked competitors surfaced pricing through much shorter entry flows.",
        },
        {
          number: "02",
          label: "Comparison",
          title: "Users had to assemble the answer themselves",
          description:
            "Plan categories were separated across tabs, making differences harder to compare at a glance and increasing the amount of information users had to remember.",
        },
        {
          number: "03",
          label: "Clarity",
          title: "The problem wasn’t simply the amount of information",
          description:
            "AMA used a similar number of inputs to some competitors, but unclear grouping and validation made the experience feel more demanding.",
        },
      ],
    },
    designDecisions: [
      {
        number: "01",
        title: "Move from a seven-step journey toward a faster path to value",

        problem:
          "The benchmark showed that speed wasn’t only about page performance. AMA loaded quickly, but users still had to complete seven steps before seeing their options.",

        decision:
          "I explored consolidating the fragmented quote journey into a shorter, more continuous interaction so users could reach meaningful options with less navigation overhead.",

        why: "Ask for what is necessary, preserve context, and surface useful plan information earlier.",

        image: travelSolution1,

        imageLabel: "Redesigned Quote Experience",

        takeaway: {
          label: "Why this matters",
          description:
            "Reducing unnecessary transitions lowers interaction cost and gets users to the information they came for sooner.",
        },
      },
      {
        number: "02",
        title: "Turn plan selection into a comparison task",

        problem:
          "The audit showed that users make important decisions directly from plan cards, but AMA’s existing structure made differences difficult to evaluate without switching views.",

        decision:
          "I redesigned plan options around a consistent card structure, exposing price, key coverage, relevant differences, and primary actions in a predictable hierarchy.",

        why: "Keep equivalent information in equivalent positions.",

        image: travelSolution2,

        imageLabel: "Three-plan Quote Results",

        takeaway: {
          label: "Borrowing the right pattern",
          description:
            "The benchmark showed that consistent columns, aligned benefits, and visible decision cues make complex insurance products significantly easier to scan.",
        },
      },
      {
        number: "03",
        title: "Build trust at the moment of purchase",

        problem:
          "The purchase experience asked users to commit without providing enough reassurance around payment security, pricing transparency, and purchase protection.",

        decision:
          "I benchmarked high-consideration checkout experiences to identify trust patterns that could strengthen the insurance purchase flow.",

        why: "At the point of payment, reducing perceived risk is as important as explaining the product clearly.",

        image: travelSolution3,

        imageLabel: "Improved Travel Insurance Experience",

        takeaway: {
          label: "Design principle",
          description:
            "The goal was to reduce uncertainty at the moment of purchase by making security, pricing, and protection cues more visible and easier to understand.",
        },
      },
    ],
    solutionOverview: {
      title: "The solution",
      description:
        "A clearer path from exploration to confident selection. The resulting direction connects three parts of the experience that previously required too much interpretation: finding the right insurance product, understanding what it offers, and choosing between plans.",

      items: [
        {
          number: "01",
          title: "Earlier access to relevant plans",
          description:
            "A more direct insurance entry experience brings trip details and plan discovery closer together, reducing unnecessary steps before users can evaluate their options.",
          image: travelSolution1,
        },
        {
          number: "02",
          title: "Plans designed to be compared",
          description:
            "Consistent cards align price, coverage, benefits, and actions so users can scan horizontally instead of reconstructing differences from separate views.",
          image: travelSolution2,
        },
        {
          number: "03",
          title: "Coverage explained in context",
          description:
            "Product information is reorganized around the questions users need answered: what is covered, why it matters, and which option fits their trip.",
          image: travelSolution3,
        },
      ],
    },
    evaluation: {
      title: "How I evaluated the solution",

      description:
        "Because this work was an audit and design exploration rather than a launched product experiment, I evaluated the direction against the same criteria used in the benchmark rather than claiming post-launch impact.",

      criteria: [
        "Clarity and visibility",
        "Ease of comparison and cognitive load",
        "Efficiency, error prevention, and decision support",
      ],
    },
    outcomes: {
      title: "What changed in the proposed experience",

      metrics: [
        {
          value: "7 → 4",
          label: "Proposed quote-flow steps",
        },
        {
          value: "Earlier",
          label: "Price visibility",
        },
        {
          value: "Side-by-side",
          label: "Plan comparison",
        },
        {
          value: "Clearer",
          label: "Decision guidance",
        },
      ],

      description:
        "The redesign direction addresses the major opportunities identified in the audit: shorten the path to a quote, surface price earlier, standardize plan comparison, strengthen visual decision cues, improve navigation, and reduce unnecessary cognitive load.",
    },
    validation: {
      title: "What I’d validate next",

      paragraphs: [
        "The next step would be usability testing the redesigned quote and comparison flow with travelers, focusing on whether people can reach a relevant plan faster, explain the differences between options, recover from input errors, and choose coverage with greater confidence.",

        "Complex products don't always need less information. They need better decisions. This project reinforced that reducing cognitive load isn't simply about removing content. In high-consideration products like insurance, hierarchy, comparison, timing, and context determine whether information feels useful or overwhelming.",
      ],
    },
  },

  {
    slug: "rh-ai-product",

    hero: {
      badge: "AI Product Design",
      title: "Airforce AI Workspace",
      description:
        "I designed a recruiting workspace where conversations, CVs, files, and AI-generated information stayed connected instead of living across separate tools.",

      images: [
        aiforceHero,
        aiforceResearch,
        aiforceSolution1,
        aiforceSolution2,
        aiforceSolution3,
      ],

      actions: [],
    },

    overview: {
      badge: "Overview",
      title: "Designing a Conversational Recruiting Workspace",
      description:
        "Airforce was an internal product explored during discovery. Recruiters could create separate workspaces for different hiring processes, upload CVs and files, and use chat to retrieve or generate information without losing the context of each search.",

      details: [
        {
          label: "Company",
          value: "Renaiss AI",
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
        "A recruiter might be reviewing several roles and dozens of candidates at the same time. The hard part was not simply adding a chat, it was making sure each conversation remembered the right files, candidates, and history.",

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
      badge: "From Research to Design",
      title: "Translating Research Into Interface Decisions",
      description:
        "I worked within a three-person design team alongside a UX Researcher. My role was to translate research findings and product requirements into interaction flows and polished interfaces, iterating with the team throughout the discovery process.",

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

      image: aiforceResearch,
    },

    insights: {
      badge: "Design Principles",
      title: "Translating Insights Into the Interface",
      description:
        "Research findings and product requirements helped define how workspaces, conversations, files, and histories should come together as one connected system.",

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
            "Keeping conversations, CVs, files, and generated content together minimized the need to move between different parts of the experience.",
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
          image: aiforceSolution1,
        },
        {
          eyebrow: "AI Conversation",
          title: "Designing Tools for AI-Assisted Tasks",
          description:
            "I designed a command panel that gave recruiters quick access to AI-assisted actions such as extracting text, searching information, analyzing files, and generating content within the same workspace.",
          image: aiforceSolution2,
        },
        {
          eyebrow: "Supporting Flows",
          title: "Authentication, Accounts, and Payments",
          description:
            "I also designed supporting flows including login, workspace management, and payment-related screens to create a complete end-to-end experience.",
          image: aiforceSolution3,
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
          value: "3",
          label: "Design Team",
        },
      ],

      learnings: [
        "AI interactions need to feel predictable, understandable, and connected to a clear product structure.",
        "The workspace model helped users organize several recruiting processes without losing context.",
        "Chat history, files, CVs, and generated content needed to behave as one coherent system.",
        "Collaborating directly with developers connected design decisions with reusable React components",
      ],
    },
  },

  {
    slug: "atala-prism",

    hero: {
      badge: "Decentralized Identity",
      title: "Atala PRISM",
      description:
        "Designing a connected digital credential ecosystem for issuing, receiving, managing, and verifying credentials across web, mobile, and browser experiences.",

      images: [atalaHero, atalaSolution1, atalaSolution2, atalaSolution3],

      actions: [
        {
          label: "View Live Demo",
          href: "https://www.youtube.com/watch?v=wemcgPA3IPQ",
          external: true,
        },
      ],
    },

    overview: {
      badge: "Overview",
      title: "A Connected Credential Management Ecosystem",
      description:
        "Atala PRISM was a decentralized identity product created for IOHK. I joined the project through ATIX Labs and designed interfaces across three connected products: a management console for issuing authorities, a mobile wallet for credential holders, and a browser wallet for reviewing and verifying credentials.",

      details: [
        {
          label: "Client",
          value: "IOHK",
        },
        {
          label: "Company",
          value: "ATIX Labs",
        },
        {
          label: "Role",
          value: "Product Designer",
        },
        {
          label: "Scope",
          value: "Web App, Mobile App & Browser Wallet",
        },
      ],
    },

    challenge: {
      badge: "The Challenge",

      title: "Making Digital Credentials Easier to Understand",

      description:
        "The product needed to support the creation, issuance, storage, presentation, and verification of different types of digital credentials. The challenge was to translate decentralized identity and KYC processes into interfaces that felt clear, trustworthy, and consistent.",

      cards: [
        {
          title: "Complex Identity Flows",
          description:
            "I needed to understand credential issuance, verification, decentralized identity, and KYC before translating them into usable product flows.",
        },
        {
          title: "Three Connected Products",
          description:
            "The management console, mobile wallet, and browser wallet needed to behave as one coherent ecosystem.",
        },
        {
          title: "Trust and Security",
          description:
            "Sensitive identity actions needed to communicate control and clarity without overwhelming users with technical complexity.",
        },
      ],
    },

    research: {
      badge: "From Research to Design",

      title: "Translating Research Into Product Flows",

      description:
        "I joined the project after the initial research phase. Working from the research and product requirements already defined by the team, I translated those findings into user flows and interfaces across the management console, mobile wallet, and browser wallet.",

      metrics: [
        {
          value: "3",
          label: "Connected Products",
        },
        {
          value: "1",
          label: "Product Designer",
        },
        {
          value: "Web",
          label: "Management Console",
        },
        {
          value: "Mobile",
          label: "Credential Wallet",
        },
      ],

      image: atalaResearch,
    },

    insights: {
      badge: "Key Design Principles",

      title: "What Guided the Interface",

      description:
        "Because the underlying technology was complex, each screen needed to clearly explain the current state, the expected action, and what would happen next.",

      cards: [
        {
          number: "01",
          title: "Explain the Next Action",
          description:
            "Flows needed to communicate what was happening, what users needed to do, and the result of each decision.",
        },
        {
          number: "02",
          title: "Create Cross-Platform Consistency",
          description:
            "Shared visual and interaction patterns connected the console, mobile wallet, and browser wallet.",
        },
        {
          number: "03",
          title: "Balance Flexibility and Control",
          description:
            "Issuing authorities needed to customize credentials without turning the process into an overwhelming configuration experience.",
        },
      ],
    },

    solution: {
      badge: "The Solution",

      title: "Designing Across the Credential Lifecycle",

      description:
        "I designed interfaces for the key moments of the credential lifecycle: creating and issuing credentials, receiving and managing them, and reviewing credential requests through a browser-based wallet.",

      features: [
        {
          eyebrow: "Management Console",
          title: "Credential Creation and Customization",
          description:
            "I designed the web experience used by issuing authorities to create, manage, and personalize different types of digital credentials while keeping the configuration workflow structured and predictable.",
          image: atalaSolution1,
        },
        {
          eyebrow: "Mobile Wallet",
          title: "Receiving and Managing Credentials",
          description:
            "The mobile wallet enabled credential holders, including students, to complete identity-related steps, receive credentials, and manage them from a personal app.",
          image: atalaSolution2,
        },
        {
          eyebrow: "Browser Wallet",
          title: "Reviewing Credential Requests",
          description:
            "The browser wallet helped users review credential requests and make informed decisions before approving or rejecting them.",
          image: atalaSolution3,
        },
      ],
    },

    results: {
      badge: "Results & Learnings",

      title: "From Design to Production",

      description:
        "The product was released to production as a connected ecosystem spanning web, mobile, and browser experiences. The project strengthened my ability to work within a technically complex domain and collaborate closely with engineering.",

      metrics: [
        {
          value: "3",
          label: "Connected Products",
        },
        {
          value: "Live",
          label: "Released to Production",
        },
        {
          value: "React",
          label: "Component Collaboration",
        },
      ],

      learnings: [
        "Understanding the domain is essential before simplifying a complex technical workflow.",
        "Consistent interaction patterns help users move confidently across connected products.",
        "Credential customization needs to balance organizational flexibility with a clear and controlled workflow.",
        "Collaborating directly with developers connected design decisions with reusable React components.",
      ],
    },
  },
  {
    slug: "cxd",

    hero: {
      badge: "Enterprise Platform",
      title: "ConnectXD",
      description:
        "Designing an enterprise platform for creating and delivering personalized employee benefits across messages, forms, email, and digital wallet experiences.",

      images: [cxdHero, cxdResearch, cxdSolution1, cxdSolution2, cxdSolution3],

      actions: [
        {
          label: "View Live Demo",
          href: "https://www.youtube.com/watch?v=wemcgPA3IPQ",
          external: true,
        },
      ],
    },

    overview: {
      badge: "Overview",
      title: "A Platform for Personalized Employee Benefits",
      description:
        "CXD enabled organizations to manage accounts and members, create benefit experiences, and deliver them through different channels. Working from Product Owner requirements, I designed the interfaces that brought these workflows together into a clear and consistent enterprise experience.",

      details: [
        {
          label: "Product",
          value: "CXD",
        },
        {
          label: "Company",
          value: "ConnectXD",
        },
        {
          label: "Role",
          value: "UX/UI Designer",
        },
        {
          label: "Scope",
          value: "Enterprise Web Platform",
        },
      ],
    },

    challenge: {
      badge: "The Challenge",

      title: "Making Complex Benefit Workflows Manageable",

      description:
        "The platform needed to support multiple organizations, members, communication channels, benefit cards, and delivery conditions within the same system. My challenge was to translate Product Owner requirements into interfaces that made these interconnected workflows easier to configure and manage.",

      cards: [
        {
          title: "Multiple Configuration Layers",
          description:
            "Organizations needed to manage accounts, members, content, benefits, and delivery settings without losing context as they moved through the platform.",
        },
        {
          title: "Multiple Communication Channels",
          description:
            "The experience needed to support different types of communication, including text messages, email, forms, alerts, and digital wallet cards.",
        },
        {
          title: "Conditional Delivery",
          description:
            "Benefits and communications could be triggered by different conditions, including timing and location, requiring flexible configuration without making the interface feel overly complex.",
        },
      ],
    },

    research: {
      badge: "Product Understanding",

      title: "Translating Requirements Into Product Flows",

      description:
        "This was not a research-led project. I worked from Product Owner requirements and the existing product logic to understand how organizations, members, messages, triggers, and benefits connected. From there, I translated those requirements into structured interface flows and reusable interaction patterns.",

      metrics: [
        {
          value: "B2B",
          label: "Enterprise Platform",
        },
        {
          value: "1",
          label: "Product Designer",
        },
        {
          value: "Web",
          label: "Management Platform",
        },
        {
          value: "Multi-channel",
          label: "Benefit Delivery",
        },
      ],

      image: cxdResearch,
    },

    insights: {
      badge: "Key Design Principles",

      title: "What Guided the Interface",

      description:
        "The interface needed to give administrators flexibility while keeping complex configuration tasks structured, understandable, and predictable.",

      cards: [
        {
          number: "01",
          title: "Make Complex Flows Sequential",
          description:
            "Multi-step tasks were broken into clear stages so administrators could understand where they were, what they were configuring, and what came next.",
        },
        {
          number: "02",
          title: "Keep Configuration Consistent",
          description:
            "Shared patterns across members, messaging, benefits, and delivery settings reduced the amount of new interaction logic users needed to learn.",
        },
        {
          number: "03",
          title: "Balance Flexibility and Control",
          description:
            "The interface needed to support different channels, audiences, and delivery conditions without turning every workflow into an overwhelming configuration screen.",
        },
      ],
    },

    solution: {
      badge: "The Solution",

      title: "Designing the Benefit Delivery Workflow",

      description:
        "I designed the core interfaces administrators used to configure benefit experiences, from creating the content and selecting an audience to defining how and when it should be delivered.",

      features: [
        {
          eyebrow: "Benefit Configuration",
          title: "Creating Digital Benefit Experiences",
          description:
            "I designed structured workflows for configuring benefit content and digital cards, helping administrators move through complex setup tasks without losing context.",
          image: cxdSolution1,
        },
        {
          eyebrow: "Messaging & Personalization",
          title: "Creating Personalized Communications",
          description:
            "Administrators could create and customize communications for specific audiences using channels such as text messages, email, and forms while previewing the experience before delivery.",
          image: cxdSolution2,
        },
        {
          eyebrow: "Delivery & Automation",
          title: "Controlling When Benefits Reach Members",
          description:
            "I designed interfaces for selecting audiences and configuring delivery conditions, supporting scheduled and contextual experiences such as time- or location-based communications.",
          image: cxdSolution3,
        },
      ],
    },

    results: {
      badge: "Results & Learnings",

      title: "From Requirements to a Scalable Interface",

      description:
        "The project strengthened my ability to translate complex Product Owner requirements into structured enterprise interfaces and to design reusable patterns across interconnected workflows.",

      metrics: [
        {
          value: "B2B",
          label: "Enterprise Experience",
        },
        {
          value: "Multi-channel",
          label: "Benefit Communication",
        },
        {
          value: "React",
          label: "Component Collaboration",
        },
      ],

      learnings: [
        "Complex enterprise workflows become easier to manage when configuration is divided into clear, predictable stages.",
        "Reusable interaction patterns are especially important when a platform supports many different types of content and delivery.",
        "Flexible business rules need strong hierarchy and progressive disclosure to keep configuration manageable.",
        "Working closely with Product Owners and developers helped translate business requirements into reusable interface patterns.",
        "Collaborating directly with developers connected design decisions with reusable React components",
      ],
    },
  },
];
