"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  type TechIcon,
  type TechKey,
  type TechItem,
  type Project,
  iconMap,
  techNames,
  projectsData,
} from "@/data/projectsData";

export {
  type TechIcon,
  type TechKey,
  type TechItem,
  type Project,
  iconMap,
  techNames,
  projectsData,
};

export const ProjectCard = ({
  project,
  setActiveVideo,
  isPriority = false,
}: {
  project: Project;
  setActiveVideo: (v: string) => void;
  isPriority?: boolean;
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: "-15% 0px -15% 0px",
    amount: 0.2,
  });
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        window.matchMedia("(hover: none) and (pointer: coarse)").matches
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isComingSoon = project.slug === "odysis-studio" || project.slug === "finxfer";
  const isLive = Boolean(project.live);

  // Distinct behaviors:
  // - Mobile: in-view scroll animation
  // - Laptop/Desktop: strict mouse cursor hover only
  const isCardActive = isMobile ? isInView : isHovered;

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

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <div
      ref={cardRef}
      className="flex flex-col group cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Outer Wrapper */}
      <motion.div
        className={cn(
          "relative w-full aspect-[1.25] rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50/80 dark:bg-[#09090b]/80 shadow-sm p-3.5 pb-0 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md hover:border-black/10 dark:hover:border-white/10 sm:aspect-[1.4] sm:p-4 sm:pb-0",
          isCardActive && "shadow-md border-black/10 dark:border-white/10"
        )}
        initial="rest"
        whileHover="hover"
        animate={isCardActive ? "hover" : "rest"}
      >
        <div className="flex items-center justify-end z-10 min-h-[24px]">
          {project.hasPin && (
            <div className="w-6 h-6 rounded-[6px] bg-transparent border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17v5" /><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
              </svg>
            </div>
          )}
        </div>

        {/* Ambient Hover Background */}
        {project.backgroundImage && (
          <motion.div
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            variants={{
              rest: { opacity: 0, scale: 1 },
              hover: { opacity: 1, scale: 1.05 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src={project.backgroundImage}
              alt={`${project.title} background`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-center"
              quality={80}
              priority={isPriority}
            />
          </motion.div>
        )}

        <motion.h1
          className="absolute top-4 left-4 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 z-30 uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none"
          variants={{
            rest: { left: "1rem", top: "1rem", x: "0%", color: "#71717a", opacity: 0 },
            hover: { left: "50%", top: "25%", x: "-50%", color: "#ffffff", opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {project.video ? "Play Video" : "View Details"}
        </motion.h1>

        {project.video && (
          <motion.div
            className={cn(
              "absolute inset-0 z-40 flex items-center justify-center transition-opacity",
              isCardActive ? "pointer-events-auto" : "pointer-events-none md:group-hover:pointer-events-auto"
            )}
            variants={{ rest: { scale: 0.5, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
          >
            <div
              role="button"
              tabIndex={0}
              className="h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 border border-white/50 pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                if (project.video) setActiveVideo(project.video);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  if (project.video) setActiveVideo(project.video);
                }
              }}
              aria-label="Play video"
            >
              <svg className="w-4 h-4 text-zinc-900 ml-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M5.25 5.653v12.694c0 .856.926 1.39 1.668.958l11.1-6.347a1.125 1.125 0 000-1.916L6.918 4.695c-.742-.432-1.668.102-1.668.958z" />
              </svg>
            </div>
          </motion.div>
        )}

        {/* Floating screenshot */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-[85%] rounded-t-[10px] bg-white dark:bg-[#0a0a0a] p-0 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.5)] z-20 border border-black/5 dark:border-white/[0.15] border-b-0 pointer-events-none"
          variants={{
            rest: { height: "78%", y: 0, x: "-50%" },
            hover: { height: "72%", y: 4, x: "-50%" },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="size-full overflow-hidden rounded-t-[9px]">
            {project.lightModeSrc ? (
              <>
                <Image
                  src={project.src}
                  alt={`${project.title} preview`}
                  width={600}
                  height={400}
                  preload={isPriority}
                  sizes="(min-width: 768px) 17vw, calc(100vw - 2rem)"
                  quality={85}
                  className="size-full object-cover hidden dark:block"
                />
                <Image
                  src={project.lightModeSrc}
                  alt={`${project.title} preview`}
                  width={600}
                  height={400}
                  preload={isPriority}
                  sizes="(min-width: 768px) 17vw, calc(100vw - 2rem)"
                  quality={85}
                  className="size-full object-cover dark:hidden"
                />
              </>
            ) : (
              <Image
                src={project.src}
                alt={`${project.title} preview`}
                width={600}
                height={400}
                preload={isPriority}
                sizes="(min-width: 768px) 17vw, calc(100vw - 2rem)"
                quality={85}
                className="size-full object-cover"
              />
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Content Area directly below the wrapper */}
      <div className="mt-4 flex flex-col px-0.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
          <div>
            <h3 className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{project.title}</h3>
            {project.category && (
              <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">{project.category}</p>
            )}
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50 w-fit shrink-0 self-start sm:self-auto">
            <div className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">{statusLabel}</span>
          </div>
        </div>

        <p className="mt-2 sm:mt-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed pr-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((item) => {
              const key = typeof item === "string" ? item : item.label;
              const isIconItem = typeof item === "string";
              const tooltipText = isIconItem ? techNames[item] : item.tooltip || item.label;
              const uniqueId = `${project.title}-${key}`;

              return (
                <div
                  key={key}
                  className="relative group/icon"
                  onMouseEnter={() => setHoveredTech(uniqueId)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="w-6 h-6 rounded-[6px] border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-100/50 dark:bg-zinc-900/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover/icon:text-zinc-900 dark:group-hover/icon:text-zinc-100 transition-colors">
                    {isIconItem && iconMap[item] ? (
                      (() => {
                        const Icon = iconMap[item];
                        return <Icon className="w-3.5 h-3.5" />;
                      })()
                    ) : (
                      <span className="text-[10px] font-semibold">{(item as { label: string }).label}</span>
                    )}
                  </div>

                  {hoveredTech === uniqueId && tooltipText && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] rounded font-medium whitespace-nowrap z-50 pointer-events-none shadow-md">
                      {tooltipText}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className={cn(
              "flex items-center gap-1 text-[12px] font-medium transition-colors",
              isCardActive
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
            )}
          >
            <span>View Project</span>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsGrid = ({ limit = 4 }: { limit?: number }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            setActiveVideo={setActiveVideo}
            isPriority={index < 2}
          />
        ))}
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {activeVideo.includes("youtube") ? (
                <iframe
                  src={`${activeVideo}${activeVideo.includes("?") ? "&" : "?"}autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={activeVideo}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
