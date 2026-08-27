"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Mail, Phone, MapPin, Award, GraduationCap, Code2, Briefcase, Eye, Layout } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { FooterBackground } from "@/components/FooterBackground";
import SoftPillButton from "@/components/pixel-perfect/soft-pill-button";
import { ThemeToggle } from "@/components/theme-toggle";

const resumePath = "/Yash-Dubey-Resume.pdf";

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"pdf" | "structured">("pdf");

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">
      <div
        className="pointer-events-none absolute bottom-0 left-[30%] top-0 hidden w-0 border-r border-black/30 dark:border-white/[0.15] md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[30%] top-0 hidden w-0 border-r border-black/30 dark:border-white/[0.15] md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      <div
        className="pointer-events-none absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15]"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15]"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {[
        { top: "22vh", left: "30%" },
        { top: "22vh", right: "30%" },
        { top: "calc(22vh + 112px)", left: "30%" },
        { top: "calc(22vh + 112px)", right: "30%" },
      ].map((position, index) => (
        <div
          key={index}
          className="pointer-events-none absolute z-10 hidden h-[2px] w-[2px] bg-black/50 dark:bg-white/[0.25] md:block"
          style={{
            top: position.top,
            left: position.left,
            right: position.right,
            transform: `translate(${position.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      <div className="pointer-events-auto absolute left-0 right-0 top-0 h-[22vh] md:left-[30%] md:right-[30%]">
        <FooterBackground />
        <div className="pointer-events-auto absolute bottom-3 right-2 z-10">
          <CurrentTime />
        </div>
      </div>

      <header className="absolute left-0 right-0 top-[22vh] z-50 flex h-[112px] items-center px-4 md:left-[30%] md:right-[30%]">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <Link
              href="/"
              aria-label="Back to home"
              className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200/50 bg-zinc-100 text-zinc-400 transition-all hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-800/50 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </Link>
            <div className="flex min-w-0 flex-col justify-center">
              <h1 className="truncate text-[20px] font-bold leading-none text-zinc-800 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:text-zinc-100 dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)] sm:text-[24px]">
                Resume
              </h1>
              <p className="mt-1 truncate text-[12px] text-zinc-500 dark:text-zinc-400">
                Yash Dubey • B.Tech CSE (AI/ML)
              </p>
            </div>
          </div>

          <div className="flex h-20 shrink-0 items-start justify-end gap-2 py-1 sm:h-24 sm:gap-3">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </header>

      <section className="relative z-10 ml-0 mr-0 flex min-h-screen flex-col px-4 pb-12 pt-[calc(22vh+112px)] md:ml-[30%] md:mr-[30%]">
        <div className="flex flex-wrap items-center justify-between gap-3 py-4">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-[#111111] rounded-lg border border-black/10 dark:border-white/10">
            <button
              onClick={() => setViewMode("pdf")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                viewMode === "pdf"
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              PDF Document
            </button>
            <button
              onClick={() => setViewMode("structured")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                viewMode === "structured"
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              Overview
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
              title="Open full PDF in new tab"
              className="flex h-8 items-center gap-1.5 px-3 rounded-[6px] border border-black/10 bg-zinc-50 text-[12px] font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-zinc-300 dark:hover:bg-[#121214] dark:hover:text-zinc-100"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open PDF
            </a>
            <a
              href={resumePath}
              download="Yash-Dubey-Resume.pdf"
              aria-label="Download resume PDF"
              title="Download resume"
            >
              <SoftPillButton
                as="span"
                variant="primary"
                className="px-3 py-1.5 !text-[12px]"
              >
                <span className="flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </span>
              </SoftPillButton>
            </a>
          </div>
        </div>

        {/* View Mode: Interactive PDF Viewer */}
        {viewMode === "pdf" ? (
          <div className="w-full rounded-[8px] border border-black/10 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-[#09090b]">
            <iframe
              src={`${resumePath}#toolbar=1&navpanes=0`}
              title="Yash Dubey Resume PDF"
              className="w-full h-[750px] sm:h-[920px] rounded-[6px] bg-white border-0"
            />
          </div>
        ) : (
          /* View Mode: Structured Document Layout */
          <div className="w-full rounded-[8px] border border-black/10 bg-white p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-[#09090b] space-y-6">
            {/* Header */}
            <div className="border-b border-black/10 pb-5 dark:border-white/10">
              <h2 className="text-[22px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">YASH DUBEY</h2>
              <p className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400 mt-0.5">
                B.Tech CSE (AI/ML) | Aspiring Developer | AI Enthusiast
              </p>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-2 italic">
                Building impactful tech solutions at the intersection of AI, Full Stack Development, and Product Innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[12px] text-zinc-500 dark:text-zinc-400 mt-3">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-zinc-400" /> dubeyy426@gmail.com</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-zinc-400" /> +91 9987642612</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-zinc-400" /> Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4" /> Education
              </div>
              <div className="space-y-2 text-[13px]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Bachelor of Technology (B.Tech) - Computer Science Engineering (AI/ML Specialization)</p>
                  </div>
                  <span className="text-zinc-500 font-mono text-[12px] shrink-0">Sep 2024 – Jul 2028</span>
                </div>
                <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
                  <strong className="text-zinc-700 dark:text-zinc-300">Relevant Coursework:</strong> Data Structures & Algorithms, Operating Systems, Theory of Automata, OOP with Java, Python Programming, Computer Networks, Machine Learning.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-2">
                <Code2 className="w-4 h-4" /> Technical Skills
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px] text-zinc-600 dark:text-zinc-400">
                <div><strong className="text-zinc-800 dark:text-zinc-200">Languages:</strong> Python, C++, C, Java, JavaScript, Dart</div>
                <div><strong className="text-zinc-800 dark:text-zinc-200">Frameworks:</strong> FastAPI, Flutter, Node.js, Express.js, React.js</div>
                <div><strong className="text-zinc-800 dark:text-zinc-200">Databases:</strong> MongoDB, MySQL, Supabase</div>
                <div><strong className="text-zinc-800 dark:text-zinc-200">AI / ML:</strong> NumPy, Pandas, Scikit-learn, RDKit, InsightFace, RAG</div>
                <div><strong className="text-zinc-800 dark:text-zinc-200">Tools:</strong> Git, GitHub, VS Code, Postman, Xcode, Docker</div>
                <div><strong className="text-zinc-800 dark:text-zinc-200">Core:</strong> DSA, OOP, Machine Learning, REST APIs, System Design</div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" /> Key Projects
              </div>
              <div className="space-y-3 text-[13px]">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">Pindora Shield - AI Drug Safety & Discovery Assistant</h4>
                    <span className="text-zinc-500 font-mono text-[12px]">Feb 2025 – Apr 2025</span>
                  </div>
                  <p className="text-[12px] text-zinc-500 font-mono">Python, FastAPI, RDKit, NumPy, ChEMBL, Open Targets</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[12.5px]">
                    Developed an AI platform analyzing molecular structures (SMILES), calculating IC50 properties, and predicting toxicity risks. Integrated scientific data pipelines and presented at Hackoverflow 4.0.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">VisionVerify - Facial Recognition Attendance System</h4>
                    <span className="text-zinc-500 font-mono text-[12px]">2025</span>
                  </div>
                  <p className="text-[12px] text-zinc-500 font-mono">Python, FastAPI, InsightFace / ArcFace, Flutter, Docker</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[12.5px]">
                    Built a multiface recognition attendance system capable of identifying multiple students from single classroom photographs with high-throughput embedding search and Flutter UI.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">PolicyWise AI - Insurance Policy Analysis & Claim Support</h4>
                    <span className="text-zinc-500 font-mono text-[12px]">2025</span>
                  </div>
                  <p className="text-[12px] text-zinc-500 font-mono">Python, FastAPI, React, RAG, LangChain</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[12.5px]">
                    Engineered large document ingestion and RAG QA pipeline to evaluate policy coverage and automate claim eligibility checks.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">FinXfer - Global Cross-Border Payments Platform</h4>
                    <span className="text-zinc-500 font-mono text-[12px]">Jan 2025 – Present</span>
                  </div>
                  <p className="text-[12px] text-zinc-500 font-mono">Flutter, Node.js, FastAPI, MongoDB</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[12.5px]">
                    FinTech concept and MVP for instant cross-border payments inspired by India&apos;s UPI ecosystem with QR workflows and real-time conversion.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" /> Certifications & Achievements
              </div>
              <ul className="list-disc pl-5 space-y-1 text-[12.5px] text-zinc-600 dark:text-zinc-400">
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">Anthropic Academy:</strong>{" "}
                  <a
                    href="https://verify.skilljar.com/c/warcgvo47zgm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    Certificate of Completion — Claude 101
                  </a>{" "}
                  (Credential ID: warcgvo47zgm)
                </li>
                <li>
                  <strong className="text-zinc-800 dark:text-zinc-200">Google Cloud:</strong>{" "}
                  <a
                    href="https://www.skills.google/public_profiles/31e31176-a110-46fb-b3d1-a36b2411d886/badges/25522889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    Introduction to Generative AI Completion Badge
                  </a>{" "}
                  (Credential ID: 25522889)
                </li>
                <li><strong className="text-zinc-800 dark:text-zinc-200">Oracle Certifications:</strong> Oracle Cloud Infrastructure AI Foundations, Oracle Generative AI Foundations, Oracle AI Vector Search</li>
                <li><strong className="text-zinc-800 dark:text-zinc-200">Hackoverflow 4.0:</strong> Team Pixels member; engineered Pindora Shield AI healthcare solution</li>
                <li><strong className="text-zinc-800 dark:text-zinc-200">IIT Madras:</strong> Selected for IIT Madras BS in Data Science & Applications</li>
                <li><strong className="text-zinc-800 dark:text-zinc-200">Python 100 Projects Challenge:</strong> Building 100 modular projects covering automation, APIs, and mini applications</li>
              </ul>
            </div>
          </div>
        )}

        <div className="relative mt-8">
          <div
            className="pointer-events-none absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="pointer-events-none absolute -left-4 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
          <div className="pointer-events-none absolute -right-4 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
        </div>
      </section>
    </main>
  );
}
