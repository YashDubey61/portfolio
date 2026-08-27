import type { ComponentType } from "react";
import { Network, Search, FileCode2, Stethoscope, Camera } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
  SiFlutter,
  SiSupabase,
  SiMongodb,
  SiNumpy,
  SiCplusplus,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama"
  | "flutter" | "supabase" | "mongodb" | "numpy" | "cplusplus" | "rdkit" | "audio" | "agents" | "vision";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  category?: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  post?: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta, flutter: SiFlutter, supabase: SiSupabase,
  mongodb: SiMongodb, numpy: SiNumpy, cplusplus: SiCplusplus, rdkit: FileCode2,
  audio: Stethoscope, agents: Network, vision: Camera,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA", flutter: "Flutter", supabase: "Supabase",
  mongodb: "MongoDB", numpy: "NumPy", cplusplus: "C++", rdkit: "RDKit",
  audio: "Audio Processing", agents: "AI Agents", vision: "Computer Vision",
};

export const projectsData: Project[] = [
  {
    slug: "pindora-shield",
    title: "Pindora Shield",
    imageTitle: "AI Drug Discovery Assistant",
    category: "BioTech AI / Drug Safety",
    src: "/project-image/pindora-shield.png",
    lightModeSrc: "/project-image/pindora-shield.png",
    video: "https://www.youtube.com/embed/_aCUQl-zC7s?si=agnov2tsoNlzZ3he",
    description: "AI-powered platform to analyze molecular compounds and predict toxicity risks and drug interactions. Implements SMILES string processing, RDKit descriptors, and machine learning models. Presented at Hackoverflow 4.0.",
    tech: ["python", "fastapi", "numpy", "rdkit", "gemini", "rag"],
    github: "https://github.com/YashDubey61/Pindora_Shield",
    live: "",
    post: "https://www.linkedin.com/in/yash-dubey61",
    backgroundImage: "/project-image/bg-pindora.png",
    hasPin: true,
  },
  {
    slug: "policywise-ai",
    title: "PolicyWise AI",
    imageTitle: "Insurance Policy Analysis",
    category: "InsurTech / RAG Intelligence",
    src: "/project-image/policywise-ai.png",
    lightModeSrc: "/project-image/policywise-ai.png",
    video: "https://www.youtube.com/embed/z7TytxThvoU?si=frYqob4o0aPgO1Zp",
    description: "AI-powered insurance policy analysis and claim assessment platform. Features large document ingestion, policy interpretation, claim eligibility assessment, and AI-assisted decision support.",
    tech: ["python", "rag", "fastapi", "react", "ts", "langchain"],
    github: "https://github.com/YashDubey61/PolicyWise-AI",
    live: "https://www.yashdubey.codes/",
    post: "https://lnkd.in/p/gQ9qGiSJ",
    backgroundImage: "/project-image/bg-1.jpg",
    hasPin: true,
  },
  {
    slug: "vision-verify",
    title: "VisionVerify",
    imageTitle: "Facial Recognition Attendance System",
    category: "Computer Vision / Biometrics",
    src: "/project-image/vision-verify.png",
    lightModeSrc: "/project-image/vision-verify.png",
    video: "",
    description: "Facial-recognition attendance system featuring multiface recognition from single classroom photographs, InsightFace/ArcFace embeddings, Flutter mobile client, and FastAPI backend.",
    tech: ["python", "vision", "fastapi", "flutter", "ts"],
    github: "https://github.com/YashDubey61",
    live: "",
    post: "https://lnkd.in/p/gFCNNxMh",
    backgroundImage: "/project-image/bg-2.jpg",
    hasPin: true,
  },
  {
    slug: "ai-stethoscope",
    title: "AI-Powered Stethoscope",
    imageTitle: "Acoustic ML Analysis",
    category: "Healthcare / Audio ML",
    src: "/project-image/ai-stethoscope.png",
    lightModeSrc: "/project-image/ai-stethoscope.png",
    video: "",
    description: "Healthcare AI / hackathon prototype exploring machine learning analysis of acoustic data captured through a stethoscope. Focuses on audio processing, spectral analysis, and pattern classification.",
    tech: ["python", "numpy", "fastapi", "audio"],
    github: "https://github.com/YashDubey61/AI-Stethoscope-",
    live: "",
    post: "https://www.linkedin.com/in/yash-dubey61",
    backgroundImage: "/project-image/bg-3.jpg",
    hasPin: false,
  },
  {
    slug: "odysis-studio",
    title: "Odysis Studio",
    imageTitle: "AI Video Editing Platform",
    category: "Creative AI / Video Studio",
    src: "/project-image/coming-soon-dark.png",
    lightModeSrc: "/project-image/coming-soon-light.png",
    video: "",
    description: "AI-assisted video editing tool combining timeline manipulation with natural-language and voice-guided commands for automated trimming, scene navigation, and smart generative edits.",
    tech: ["react", "python", "fastapi", "agents", "ts"],
    github: "https://github.com/YashDubey61",
    live: "",
    post: "https://www.linkedin.com/in/yash-dubey61",
    backgroundImage: "",
    hasPin: false,
  },
  {
    slug: "finxfer",
    title: "FinXfer",
    imageTitle: "Cross-Border Payment Platform",
    category: "FinTech / Global Payments",
    src: "/project-image/coming-soon-dark.png",
    lightModeSrc: "/project-image/coming-soon-light.png",
    video: "",
    description: "FinTech concept and MVP planning for instant, low-cost international payments inspired by India's UPI ecosystem, with QR-based workflows, Flutter UI, and currency conversion.",
    tech: ["flutter", "node", "fastapi", "mongodb", "ts"],
    github: "https://github.com/YashDubey61",
    live: "",
    post: "https://www.linkedin.com/in/yash-dubey61",
    backgroundImage: "",
    hasPin: false,
  },
];
