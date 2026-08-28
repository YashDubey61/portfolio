"use client";

import React, { useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { projectsData, Project } from "@/data/projectsData";
import { ArrowUpRight } from "lucide-react";

interface ProjectHoverCardProps {
  slug?: string;
  projectName?: string;
  children: React.ReactNode;
  className?: string;
}

export function ProjectHoverCard({
  slug,
  projectName,
  children,
  className,
}: ProjectHoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const project: Project | undefined = slug
    ? projectsData.find((p) => p.slug === slug)
    : projectName
      ? projectsData.find(
          (p) =>
            p.title.toLowerCase() === projectName.toLowerCase() ||
            p.slug.toLowerCase() === projectName.toLowerCase()
        )
      : undefined;

  if (!project) {
    return <>{children}</>;
  }

  const isComingSoon = project.slug === "odysis-studio" || project.slug === "finxfer";
  const isLive = Boolean(project.live);

  const statusColor = isComingSoon
    ? "bg-amber-500"
    : isLive
      ? "bg-emerald-500"
      : "bg-blue-500";

  const statusLabel = isComingSoon
    ? "Coming Soon"
    : isLive
      ? "Live"
      : "Repository";

  return (
    <HoverCard.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      openDelay={100}
      closeDelay={150}
    >
      <HoverCard.Trigger asChild>
        <span
          className={cn("inline-block cursor-pointer", className)}
          onClick={(e) => {
            const isTouch =
              typeof window !== "undefined" &&
              (window.matchMedia("(hover: none)").matches ||
                window.matchMedia("(pointer: coarse)").matches ||
                navigator.maxTouchPoints > 0);
            if (isTouch) {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }
          }}
        >
          {children}
        </span>
      </HoverCard.Trigger>
      <AnimatePresence>
        {isOpen && (
          <HoverCard.Portal forceMount>
            <HoverCard.Content
              asChild
              forceMount
              side="top"
              align="center"
              sideOffset={8}
              className="z-50 select-none outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 3, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "w-[260px] sm:w-[280px] rounded-xl shadow-2xl backdrop-blur-md overflow-hidden",
                  "bg-white/95 dark:bg-[#0c0c0e]/95 border border-black/10 dark:border-white/10",
                  "text-zinc-900 dark:text-zinc-100 select-none"
                )}
              >
                {/* Preview Image */}
                <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden border-b border-black/5 dark:border-white/5">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-medium">
                    <span className={cn("w-1.5 h-1.5 rounded-full", statusColor)} />
                    {statusLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-[13.5px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {project.title}
                    </h4>
                    {project.category && (
                      <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                        {project.category.split("/")[0]}
                      </span>
                    )}
                  </div>
                  <p className="text-[11.5px] text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-2.5">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-900 dark:text-zinc-200 hover:underline"
                  >
                    View Project <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            </HoverCard.Content>
          </HoverCard.Portal>
        )}
      </AnimatePresence>
    </HoverCard.Root>
  );
}

export default ProjectHoverCard;
