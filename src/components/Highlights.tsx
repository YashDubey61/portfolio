"use client";

import Image from "next/image";
import Link from "next/link";
import { SiAnthropic, SiGooglecloud } from "react-icons/si";
import { highlightsData, type Highlight } from "@/data/highlightsData";

function AnthropicPoster() {
  return (
    <div className="relative w-full h-full bg-[#0e0e10] flex flex-col items-center justify-center p-3 overflow-hidden select-none">
      <Image
        src="/project-image/bg-3.jpg"
        alt=""
        fill
        sizes="(min-width: 640px) 300px, 280px"
        className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center gap-1.5">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-black/70 border border-stone-400/30 shadow-lg shadow-stone-500/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
          <SiAnthropic className="w-6 h-6 text-[#faf8f5]" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#faf8f5] uppercase">
            Anthropic
          </span>
          <span className="text-[9.5px] text-zinc-400 font-mono tracking-wider">
            Claude 101 Certified
          </span>
        </div>
      </div>
    </div>
  );
}

function GoogleCloudPoster() {
  return (
    <div className="relative w-full h-full bg-[#0a0e1a] flex flex-col items-center justify-center p-3 overflow-hidden select-none">
      <Image
        src="/project-image/bg-2.jpg"
        alt=""
        fill
        sizes="(min-width: 640px) 300px, 280px"
        className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center gap-1.5">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-black/70 border border-blue-500/30 shadow-lg shadow-blue-500/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
          <SiGooglecloud className="w-6 h-6 text-[#4285F4]" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#4285F4] uppercase">
            Google Cloud
          </span>
          <span className="text-[9.5px] text-zinc-400 font-mono tracking-wider">
            Intro to Generative AI
          </span>
        </div>
      </div>
    </div>
  );
}

function OraclePoster() {
  return (
    <div className="relative w-full h-full bg-[#0c0c0e] flex flex-col items-center justify-center p-3 overflow-hidden select-none">
      <Image
        src="/project-image/bg-1.jpg"
        alt=""
        fill
        sizes="(min-width: 640px) 300px, 280px"
        className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
      
      <div className="relative z-10 flex flex-col items-center text-center gap-1.5">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-black/70 border border-red-500/30 shadow-lg shadow-red-500/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#F80000"
              d="M16.562 17.58H7.438C3.33 17.58 0 14.25 0 10.142c0-4.107 3.33-7.437 7.438-7.437h9.124c4.108 0 7.438 3.33 7.438 7.438 0 4.108-3.33 7.438-7.438 7.438zM7.55 14.938h8.9c2.651 0 4.8-2.149 4.8-4.796 0-2.648-2.149-4.797-4.8-4.797H7.55c-2.65 0-4.8 2.149-4.8 4.797 0 2.647 2.15 4.796 4.8 4.796z"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-red-500 uppercase">
            Oracle Cloud
          </span>
          <span className="text-[9.5px] text-zinc-400 font-mono tracking-wider">
            AI Foundations & GenAI
          </span>
        </div>
      </div>
    </div>
  );
}

function IITMPoster() {
  return (
    <div className="relative w-full h-full bg-[#0c0c0e] flex flex-col items-center justify-center p-3 overflow-hidden select-none">
      <Image
        src="/project-image/bg-2.jpg"
        alt=""
        fill
        sizes="(min-width: 640px) 300px, 280px"
        className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center gap-1.5">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-black/70 border border-amber-500/30 shadow-lg shadow-amber-500/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <circle cx="20" cy="20" r="12" stroke="#fca5a5" strokeWidth="1.2" strokeOpacity="0.4" />
            <ellipse cx="20" cy="20" rx="13" ry="5" stroke="#fecaca" strokeWidth="1.2" transform="rotate(-30 20 20)" />
            <ellipse cx="20" cy="20" rx="13" ry="5" stroke="#fecaca" strokeWidth="1.2" transform="rotate(30 20 20)" />
            <circle cx="20" cy="20" r="4" fill="#ef4444" />
            <circle cx="20" cy="20" r="2" fill="#ffffff" />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-amber-400 uppercase">
            IIT Madras
          </span>
          <span className="text-[9.5px] text-zinc-400 font-mono tracking-wider">
            BS Data Science & AI
          </span>
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ item }: { item: Highlight }) {
  const inner = (
    <div className="relative group w-[280px] sm:w-[300px] flex-shrink-0">
      {/* Outer subtle double-border frame matching portfolio design language */}
      <div className="absolute -inset-[4px] border border-black/5 dark:border-white/5 rounded-[10px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />

      {/* Main Card Body */}
      <div className="relative flex flex-col rounded-[6px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/5 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/80 transition-all duration-300 group-hover:bg-zinc-100/80 dark:group-hover:bg-[#121214]">
        {/* Screenshot / Poster Image Container */}
        <div className="relative w-full aspect-video bg-zinc-100 dark:bg-[#0a0a0a] overflow-hidden">
          {item.customPoster === "anthropic" ? (
            <AnthropicPoster />
          ) : item.customPoster === "google-cloud" ? (
            <GoogleCloudPoster />
          ) : item.customPoster === "oracle" ? (
            <OraclePoster />
          ) : item.customPoster === "iit-madras" ? (
            <IITMPoster />
          ) : item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 640px) 300px, 280px"
              className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 23px,currentColor 23px,currentColor 24px),repeating-linear-gradient(90deg,transparent,transparent 23px,currentColor 23px,currentColor 24px)",
              }}
            />
          )}
        </div>

        {/* Signature Dashed Divider Motif */}
        <div
          className="h-px bg-black/30 dark:bg-white/[0.15]"
          style={{
            maskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          }}
        />

        {/* Info Content Section */}
        <div className="flex flex-col gap-1.5 p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-black/5 dark:bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
              {item.badge}
            </span>
            {item.link && (
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            )}
          </div>
          <p className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors group-hover:text-zinc-900 dark:group-hover:text-white line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );

  if (item.link) {
    const isExternal = item.link.startsWith("http");
    return (
      <Link
        href={item.link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

export function Highlights() {
  const items = [...highlightsData, ...highlightsData];

  return (
    <div className="relative mt-4 overflow-hidden py-2">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

      <div className="highlights-track flex gap-4 w-max">
        {items.map((item, i) => (
          <HighlightCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Highlights;
