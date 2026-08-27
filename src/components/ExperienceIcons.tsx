"use client";

import React from "react";
import Image from "next/image";

interface ExperienceIconProps {
  name: string;
  className?: string;
}

export function ExperienceIcon({ name, className = "w-full h-full" }: ExperienceIconProps) {
  switch (name) {
    case "hackoverflow":
    case "hackathon":
      return (
        <div className={`relative overflow-hidden rounded-[7px] bg-black ${className}`}>
          <Image
            src="/hackoverflow-logo.jpg"
            alt="Hackoverflow 4.0"
            width={40}
            height={40}
            quality={95}
            priority
            className="w-full h-full object-cover p-[1px]"
          />
        </div>
      );

    case "odysis":
    case "odysis-group":
      return (
        <div className={`relative overflow-hidden rounded-[7px] bg-black ${className}`}>
          <Image
            src="/odysis-logo.png"
            alt="Odysis Group"
            width={40}
            height={40}
            quality={95}
            priority
            className="w-full h-full object-cover p-[2px]"
          />
        </div>
      );

    case "aktu":
    case "aktu-university":
      return (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* University Navy Shield */}
          <rect width="40" height="40" rx="7" fill="#0f172a" />
          {/* Graduation Mortarboard & Shield Crest */}
          <path
            d="M20 10L31 16L20 22L9 16L20 10Z"
            fill="url(#aktu-gold)"
          />
          <path
            d="M13 18.5V24.5C13 24.5 16 28 20 28C24 28 27 24.5 27 24.5V18.5"
            stroke="#e2e8f0"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M31 16V23"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="31" cy="24" r="1.5" fill="#f59e0b" />
          <defs>
            <linearGradient id="aktu-gold" x1="9" y1="10" x2="31" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" />
              <stop offset="1" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "iitm":
    case "iit-madras":
      return (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* IIT Madras Maroon / Crimson Base */}
          <rect width="40" height="40" rx="7" fill="#450a0a" />
          {/* Data Science Neural / Atom Crest */}
          <circle cx="20" cy="20" r="12" stroke="#fca5a5" strokeWidth="1.2" strokeOpacity="0.4" />
          <ellipse cx="20" cy="20" rx="13" ry="5" stroke="#fecaca" strokeWidth="1.2" transform="rotate(-30 20 20)" />
          <ellipse cx="20" cy="20" rx="13" ry="5" stroke="#fecaca" strokeWidth="1.2" transform="rotate(30 20 20)" />
          <circle cx="20" cy="20" r="4" fill="#ef4444" />
          <circle cx="20" cy="20" r="2" fill="#ffffff" />
        </svg>
      );

    case "oracle":
    case "oracle-cert":
      return (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Oracle Red & Charcoal */}
          <rect width="40" height="40" rx="7" fill="#18181b" />
          {/* Oracle Red Oval / Hex Badge */}
          <rect
            x="8"
            y="13"
            width="24"
            height="14"
            rx="7"
            stroke="#f87171"
            strokeWidth="3.5"
          />
          <path
            d="M20 9V12"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 28V31"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "anthropic":
    case "claude":
      return (
        <div className={`relative overflow-hidden rounded-[7px] bg-[#141416] flex items-center justify-center p-2 border border-white/10 ${className}`}>
          <svg viewBox="0 0 24 24" fill="#faf8f5" className="w-full h-full">
            <path d="M13.827 3.524l5.352 14.18h-3.09l-1.127-3.136H8.971l-1.127 3.136H4.754L10.106 3.524h3.721zm-1.047 3.236h-1.63L9.77 12.016h4.39l-1.38-5.256z" />
          </svg>
        </div>
      );

    case "google-cloud":
    case "google":
      return (
        <div className={`relative overflow-hidden rounded-[7px] bg-[#0c101d] flex items-center justify-center p-2 border border-blue-500/20 ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          </svg>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-100 text-xs font-bold">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}

export default ExperienceIcon;
