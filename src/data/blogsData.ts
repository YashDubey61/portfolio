export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug?: string;
  description?: string;
  readingTime?: string;
  content?: BlogBlock[];
}

export type BlogBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "links";
      items: {
        title: string;
        href: string;
        description: string;
      }[];
    };

export const blogsData: Blog[] = [
  {
    title: "Building Pindora Shield: AI-Driven Drug Discovery & Molecular Analysis",
    date: "Aug 2025",
    claps: 142,
    tags: ["AI/ML", "Drug Discovery", "RDKit", "FastAPI"],
    link: "/blogs/ai-drug-discovery",
    isExternal: false,
    slug: "ai-drug-discovery",
    readingTime: "8 min read",
    description:
      "A deep dive into building AI systems that analyze SMILES strings, calculate IC50 properties, process chemical fingerprints with RDKit, and leverage ML models for molecular property prediction.",
    content: [
      {
        type: "heading",
        text: "The Intersection of AI, Chemistry, and Fast Computation",
      },
      {
        type: "paragraph",
        text: "Modern drug discovery requires navigating through vast chemical spaces. Rather than manually parsing thousands of scientific papers and running exhaustive trials, AI-assisted computational chemistry accelerates early-stage candidate filtering and molecular validation.",
      },
      {
        type: "quote",
        text: "The goal of AI in drug discovery is not to replace the laboratory, but to guide researchers toward high-probability molecular leads with speed and precision.",
      },
      {
        type: "heading",
        text: "Key Pipeline Components",
      },
      {
        type: "list",
        items: [
          "SMILES String Validation: Parsing 2D and 3D molecular structures using RDKit to ensure chemical validity.",
          "Bioactivity & IC50 Prediction: Utilizing regression and classification models to estimate binding affinities.",
          "Biological Dataset Integration: Ingesting scientific literature and dataset targets from ChEMBL and Open Targets.",
          "High-Performance API Backend: Serving fast inferencing pipelines with FastAPI and NumPy.",
        ],
      },
    ],
  },
  {
    title: "Acoustic ML: Signal Processing & Heart Sound Classification",
    date: "Jul 2025",
    claps: 98,
    tags: ["Healthcare AI", "Audio ML", "Python", "NumPy"],
    link: "/blogs/acoustic-ml-heart-sounds",
    isExternal: false,
    slug: "acoustic-ml-heart-sounds",
    readingTime: "6 min read",
    description:
      "Exploration of acoustic signal processing, spectrogram generation, feature extraction, and ML classification for digital stethoscope audio data.",
    content: [
      {
        type: "heading",
        text: "Transforming Sound Waves into Actionable Insights",
      },
      {
        type: "paragraph",
        text: "Stethoscope audio captures complex acoustic frequencies. By converting raw wave signals into spectrograms and extracting spectral features, machine learning models can detect subtle rhythmic variations and acoustic anomalies.",
      },
      {
        type: "paragraph",
        text: "This prototype research highlights how lightweight signal processing algorithms combined with Python audio pipelines can power assistive diagnostic tools.",
      },
    ],
  },
  {
    title: "VisionVerify: Architecture of a Multiface Attendance System",
    date: "Jun 2025",
    claps: 114,
    tags: ["Computer Vision", "InsightFace", "Flutter", "FastAPI"],
    link: "/blogs/vision-verify-architecture",
    isExternal: false,
    slug: "vision-verify-architecture",
    readingTime: "7 min read",
    description:
      "Design and engineering of a multiface recognition pipeline capable of identifying multiple students from single classroom photographs with InsightFace / ArcFace embeddings and Flutter client.",
    content: [
      {
        type: "heading",
        text: "Moving Beyond Single-Face Capture",
      },
      {
        type: "paragraph",
        text: "Traditional facial attendance systems require individuals to queue up one by one in front of a camera. VisionVerify processes classroom group photographs, detects multiple faces in a single pass, and runs embedding comparisons against registered student records.",
      },
      {
        type: "list",
        items: [
          "Detection & Alignment: Localize bounding boxes and facial landmarks across varying angles.",
          "ArcFace Embeddings: Generate 512-dimensional normalized feature vectors for each detected face.",
          "Vector Distance Matching: Efficient cosine similarity search across enrolled student embeddings.",
          "Flutter Client & FastAPI: Instant feedback on attendance records and session summaries.",
        ],
      },
    ],
  },
];

export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}
