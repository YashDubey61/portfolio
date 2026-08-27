"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CommandMenu } from "./command-menu";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";

export function TopNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 160);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    const sections = ["experience", "projects", "opensource", "skills", "blogs", "highlights"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blogs" },
  ];

  if (pathname !== "/") return null;

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto transition-all duration-300 ${
        scrolled
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      } lg:hidden`}
    >
      <div className="flex items-center gap-3 sm:gap-4 px-4 py-1.5 rounded-full bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/40 border border-black/10 dark:border-white/10">
        {links.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11.5px] font-medium tracking-[0.02em] transition-colors duration-200 ${
                isActive
                  ? "text-zinc-900 dark:text-zinc-100 font-semibold"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        <div className="w-[1px] h-3 bg-zinc-300 dark:bg-zinc-800" />

        <div className="flex items-center gap-1.5">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
