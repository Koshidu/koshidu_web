import { useEffect, useMemo, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import TimelineSection from "./components/TimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";
import {
  ABOUT_PARAGRAPHS,
  ABOUT_PILLARS,
  HERO_COPY,
  HERO_HIGHLIGHTS,
  NAV_LINKS,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
  TIMELINE,
} from "./data/content";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.body.classList.toggle("is-loading", isLoading);
    document.body.classList.toggle("is-loaded", !isLoading);
  }, [isLoading]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const finishLoading = () => {
      setIsLoading(false);
    };

    if (prefersReducedMotion.matches) {
      finishLoading();
      return undefined;
    }

    const onLoad = () => {
      window.setTimeout(finishLoading, 150);
    };

    window.addEventListener("load", onLoad, { once: true });

    if (document.readyState === "complete") {
      window.setTimeout(finishLoading, 150);
    }

    const fallback = window.setTimeout(finishLoading, 4000);

    return () => {
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const sectionElements = document.querySelectorAll("[data-section]");
    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollHeight > clientHeight ? (scrollTop / (scrollHeight - clientHeight)) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setNavOpen(false);
    }
  }, [isLoading]);

  return (
    <>
      <div className="page-backdrop" aria-hidden="true"></div>
      {isLoading && (
        <div className="page-loader" aria-hidden={!isLoading}>
          <div className="page-loader__spinner"></div>
          <span className="page-loader__label">Loading portfolio…</span>
        </div>
      )}

      <Navigation
        brand="KOSHIDU."
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((open) => !open)}
        onCloseNav={() => setNavOpen(false)}
        cta={{ label: "Let's talk", href: "#contact" }}
      />

      <main>
        <Hero copy={HERO_COPY} highlights={HERO_HIGHLIGHTS} />
        <About paragraphs={ABOUT_PARAGRAPHS} pillars={ABOUT_PILLARS} />
        <TimelineSection timeline={TIMELINE} />
        <ProjectsSection projects={PROJECTS} />
        <SkillsSection skills={SKILLS} />
        <ContactSection email="koshiduayon@gmail.com" socials={SOCIAL_LINKS} />
      </main>

      <SiteFooter year={currentYear} />
    </>
  );
}

export default App;

