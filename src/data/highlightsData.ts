export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image?: string;
  customPoster?: "oracle" | "iit-madras" | "anthropic" | "google-cloud";
  link?: string;
};

export const highlightsData: Highlight[] = [
  {
    id: "hackoverflow-pindora",
    title: "Hackoverflow 4.0 • Built Pindora Shield AI Healthcare Solution",
    badge: "Hackathon Winner",
    image: "/project-image/pindora-shield.png",
    link: "/projects/pindora-shield",
  },
  {
    id: "policywise-live",
    title: "PolicyWise AI • Insurance Policy Analysis & Claim Support",
    badge: "Live Platform",
    image: "/project-image/policywise-ai.png",
    link: "/projects/policywise-ai",
  },
  {
    id: "vision-verify",
    title: "VisionVerify • Multiface Facial Recognition Attendance System",
    badge: "Computer Vision",
    image: "/project-image/vision-verify.png",
    link: "/projects/vision-verify",
  },
  {
    id: "ai-stethoscope",
    title: "AI-Powered Stethoscope • Real-time Auscultation Sound Analysis",
    badge: "Acoustic ML",
    image: "/project-image/ai-stethoscope.png",
    link: "/projects/ai-stethoscope",
  },
  {
    id: "anthropic-claude",
    title: "Certificate of Completion: Claude 101 • Anthropic Academy",
    badge: "Certification",
    customPoster: "anthropic",
    link: "https://verify.skilljar.com/c/warcgvo47zgm",
  },
  {
    id: "google-cloud-genai",
    title: "Introduction to Generative AI • Google Cloud Completion Badge",
    badge: "Certification",
    customPoster: "google-cloud",
    link: "https://www.skills.google/public_profiles/31e31176-a110-46fb-b3d1-a36b2411d886/badges/25522889",
  },
  {
    id: "oracle-certifications",
    title: "Oracle Certified • AI Foundations & Generative AI Professional",
    badge: "Certification",
    customPoster: "oracle",
    link: "https://www.linkedin.com/in/yash-dubey61",
  },
  {
    id: "iit-madras",
    title: "Selected for IIT Madras BS in Data Science & Applications",
    badge: "Academics",
    customPoster: "iit-madras",
    link: "https://www.linkedin.com/in/yash-dubey61",
  },
];



