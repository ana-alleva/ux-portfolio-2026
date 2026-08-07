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

import travelHero from "@/assets/travel/hero.png";
import travelResearch from "@/assets/travel/research.png";
import travelSolution1 from "@/assets/travel/solution-1.png";
import travelSolution2 from "@/assets/travel/solution-2.png";
import travelSolution3 from "@/assets/travel/solution-3.png";

export const caseStudies = [
  {
    slug: "travel-insurance-audit",

    hero: {
      badge: "UX Research • Product Strategy • Audit",
      title: "Travel Insurance UX Audit",
      description:
        "I reviewed the travel insurance journey to understand where people could get confused, hesitate, or abandon the purchase.",

      image: travelHero,

      actions: [
        {
          label: "View Live Experience",
          href: "https://www.amatravel.ca/",
          external: true,
        },
      ],
    },

    overview: {
      badge: "Overview",
      title: "Evaluating the Insurance Purchase Experience",
      description:
        "Buying travel insurance asks people to compare unfamiliar plans, prices, and exclusions—often while preparing for a trip. I audited the journey to find where the product made that decision harder than it needed to be.",

      details: [
        {
          label: "Role",
          value: "UX Researcher & Product Designer",
        },
        {
          label: "Scope",
          value: "UX Audit",
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
    },

    challenge: {
      badge: "The Challenge",

      title: "Helping Users Choose the Right Insurance Plan",

      description:
        "Users were being asked to make a high-stakes decision with unfamiliar terminology and few clear signals about which plan suited them. I looked for the points where the interface added uncertainty instead of reducing it.",

      cards: [
        {
          title: "Complex Information",
          description:
            "Coverage details, exclusions, and pricing were difficult to compare, increasing users' cognitive load.",
        },
        {
          title: "Decision Confidence",
          description:
            "Users lacked enough guidance to understand which insurance plan best matched their needs.",
        },
        {
          title: "Purchase Friction",
          description:
            "Several interaction patterns introduced unnecessary steps and interrupted the buying flow.",
        },
      ],
    },

    research: {
      badge: "Methodology",

      title: "Research & Evaluation",

      description:
        "I walked through the purchase flow step by step, documented usability issues, and compared how other insurance products explained plans, prices, and coverage. The goal was not to copy competitors, but to understand where user expectations had already been established.",

      metrics: [
        {
          value: "UX",
          label: "Heuristic Audit",
        },
        {
          value: "Flow",
          label: "Journey Analysis",
        },
        {
          value: "Benchmark",
          label: "Competitor Review",
        },
        {
          value: "Strategy",
          label: "Recommendations",
        },
      ],

      image: travelResearch,
    },

    insights: {
      badge: "Key Findings",

      title: "Main Opportunities",

      description:
        "The evaluation revealed recurring usability issues that affected understanding, comparison, and confidence throughout the purchase process.",

      cards: [
        {
          number: "01",
          title: "Reduce Cognitive Load",
          description:
            "Breaking information into smaller, more digestible sections would make plans easier to evaluate.",
        },
        {
          number: "02",
          title: "Improve Comparisons",
          description:
            "Users needed clearer ways to compare plans, pricing, and coverage before making a decision.",
        },
        {
          number: "03",
          title: "Increase Transparency",
          description:
            "Important information should be surfaced earlier to reduce uncertainty and build trust.",
        },
      ],
    },

    solution: {
      badge: "Recommendations",

      title: "Strategic Design Opportunities",

      description:
        "I did not jump straight into redesigning screens. I first organized the findings by severity and user impact, then proposed changes to the flow, plan comparison, and information hierarchy.",

      features: [
        {
          eyebrow: "Opportunity 01",
          title: "Simplify the Purchase Flow",
          description:
            "Reduce unnecessary steps and present information progressively so users can focus on one decision at a time.",
          image: travelSolution1,
        },
        {
          eyebrow: "Opportunity 02",
          title: "Improve Plan Comparison",
          description:
            "Introduce clearer comparison patterns and highlight the differences between plans to support informed decisions.",
          image: travelSolution2,
        },
        {
          eyebrow: "Opportunity 03",
          title: "Build User Confidence",
          description:
            "Clarify coverage details, pricing, and key information to create a more transparent and trustworthy experience.",
          image: travelSolution3,
        },
      ],
    },

    results: {
      badge: "Outcome & Learnings",

      title: "Knowing What to Fix Before Redesigning",

      description:
        "The audit gave the team a shared view of the most important usability problems and a prioritized direction for improving the purchase journey before investing in visual redesign.",

      metrics: [
        {
          value: "UX",
          label: "Audit",
        },
        {
          value: "Benchmark",
          label: "Completed",
        },
        {
          value: "Journey",
          label: "Reviewed",
        },
        {
          value: "Product",
          label: "Recommendations",
        },
      ],

      learnings: [
        "Users need help understanding differences between plans, not simply more information.",
        "Important exclusions and coverage details should appear before users commit to a plan.",
        "A UX audit can reduce the risk of redesigning the wrong part of a journey.",
      ],
    },
  },

  {
    slug: "rh-ai-product",

    hero: {
      badge: "AI Product • Discovery • Recruitment",
      title: "Airforce AI Workspace",
      description:
        "I designed a recruiting workspace where conversations, CVs, files, and AI-generated information stayed connected instead of living across separate tools.",

      image: airforceHero,

      actions: [
        {
          label: "View Prototype",
          href: "https://www.figma.com/proto/6b8SRyuki2madfT3sDhYHF/Ana-Clara-Alleva---Portfolio?node-id=9-13971&viewport=42%2C774%2C0.22&t=zER39uegmfJrmeMm-1&scaling=contain&content-scaling=fixed&starting-point-node-id=9%3A13971&page-id=9%3A320",
          external: true,
        },
      ],
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
        "A recruiter might be reviewing several roles and dozens of candidates at the same time. The hard part was not simply adding a chat—it was making sure each conversation remembered the right files, candidates, and history.",

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
    slug: "atala-prism",

    hero: {
      badge: "Decentralized Identity • Product Design • React",
      title: "Atala PRISM",
      description:
        "Designing a connected digital credential ecosystem for issuing, receiving, managing, and verifying credentials across web, mobile, and browser experiences.",

      image: atalaHero,

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
      badge: "Product Understanding",

      title: "Learning the System Through Its Flows",

      description:
        "I inherited an existing product rather than participating in the initial research phase. I studied the available flows and collaborated with developers to understand how credentials moved from issuing authorities to credential holders and verification experiences.",

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
];
