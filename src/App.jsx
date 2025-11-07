import { useEffect, useMemo, useState } from "react";
import cardiffLogo from "./assets/images/cardiff.png";
import portraitImage from "./assets/images/photo_1.jpg";
import timelineSchoolLogo from "./assets/images/spc.jpg";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const HERO_HIGHLIGHTS = [
  { title: "Craft", description: "End-to-end product design & development" },
  { title: "Approach", description: "Curiosity, empathy, and continuous learning" },
  { title: "Currently", description: "Working as a software engineer" },
];

const TIMELINE = [
  {
    id: "cardiff",
    years: "2022 - Present",
    datetime: "2022",
    title: "Cardiff Metropolitan University",
    description:
      "Pursuing my degree in computing and software development, strengthening my expertise in web and app development, UI/UX design, and modern programming practices.",
    logo: cardiffLogo,
    logoAlt: "Cardiff Metropolitan University logo",
  },
  {
    id: "st-peters",
    years: "2009 - 2022",
    datetime: "2010",
    title: "St. Peter’s College, Colombo",
    description:
      "Completed my school education with a strong foundation in technology, creativity, and problem-solving—where my fascination with computers and innovation first took root.",
    logo: timelineSchoolLogo,
    logoAlt: "St. Peter's College Colombo logo",
  },
];

const PROJECTS = [
  {
    badge: "Mobile · Android",
    title: "🐾 Nutripaws – Dog Nutrition App",
    description:
      "A feature-rich Android companion for dog owners with product discovery, detailed nutrition guidance, authenticated shopping, and educational content built in Java with SQLite.",
    tags: ["Java", "SQLite", "Android Studio"],
  },
  {
    badge: "Mobile · Commerce",
    title: "🛍️ E-Commerce Mobile App",
    description:
      "An Android shopping experience with sign-up, product catalog, cart, checkout, and in-app admin tooling so sellers can manage inventory on the go.",
    tags: ["Java", "SQLite", "Material Design"],
  },
  {
    badge: "Web · Hospitality",
    title: "🍽️ Gallery Café Website",
    description:
      "A full-stack restaurant platform with reservations, pre-orders, and order management, blending HTML, CSS, JavaScript, PHP, and SQL into a cohesive service hub.",
    tags: ["PHP", "SQL", "JavaScript"],
  },
  {
    badge: "Enterprise · Desktop",
    title: "💼 TechFix Procurement System",
    description:
      "A C# and MySQL SOC-based procurement suite streamlining supplier onboarding, quoting, and inventory control for a computer repair business.",
    tags: ["C#", "MySQL", "WinForms"],
  },
  {
    badge: "Mobile · Hospitality",
    title: "🛏️ LuxeVista Resort App",
    description:
      "A polished resort booking app featuring room reservations, service scheduling, and profile management with a smooth, visual-first interface.",
    tags: ["Java", "SQLite", "UX Motion"],
  },
  {
    badge: "Web · Marketplace",
    title: "🌐 Seller–Buyer Management",
    description:
      "A PHP and SQL marketplace where sellers showcase work, negotiate orders, deliver final files, and admins track payments and progress.",
    tags: ["PHP", "SQL", "Bootstrap"],
  },
  {
    badge: "Web · CRM",
    title: "⚙️ CRM System (MERN)",
    description:
      "A modern CRM built on MongoDB, Express, React, and Node.js with role-based access, analytics dashboards, and responsive workflows for sales teams.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const SKILLS = [
  {
    heading: "Languages",
    description: "TypeScript, Go, Rust, Python, SQL",
  },
  {
    heading: "Frameworks",
    description: "React, Next.js, Node.js, FastAPI, Electron",
  },
  {
    heading: "Cloud & Ops",
    description: "Azure, AWS, Kubernetes, Terraform, CI/CD pipelines",
  },
  {
    heading: "Practices",
    description: "Domain-driven design, design systems, observability, inclusive leadership",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/koshidu-pietersz-889568320",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Koshidu",
    label: "GitHub",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
  },
];

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
      <header className="site-header">
        <div className="container">
          <a className="brand" href="#hero">
            KOSHIDU.
          </a>
          <nav className="site-nav" aria-label="Primary" data-open={navOpen}>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded={navOpen}
              aria-controls="nav-list"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className="nav-toggle__bar"></span>
              <span className="sr-only">Toggle navigation</span>
            </button>
            <ul id="nav-list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.replace("#", "") ? "active" : undefined}
                    onClick={() => setNavOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="button button--ghost" href="#contact">
            Let's talk
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="section hero" data-section>
          <div className="container hero__content">
            <div className="hero__text">
              <span className="eyebrow">Software Engineer · Designer · Lifelong Learner</span>
              <h1>Hi, I'm Koshidu Ayon Pietersz</h1>
              <p>
                I’m a curious builder who loves transforming bold ideas into seamless digital experiences. From the first
                sketch to the final ship, I combine thoughtful design, precise engineering, and empathetic storytelling to
                create work that feels as good as it functions.
              </p>
              <p>
                My mission is simple: craft modern, responsive, and user-friendly products that solve real-world problems while
                inviting people to explore, connect, and imagine what’s next.
              </p>
              <div className="hero__actions">
                <a className="button" href="#projects">
                  View projects
                </a>
                <a className="button button--ghost" href="#education">
                  Education
                </a>
              </div>
              <dl className="hero__highlights">
                {HERO_HIGHLIGHTS.map(({ title, description }) => (
                  <div key={title}>
                    <dt>{title}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hero__visual">
              <figure className="hero__portrait" aria-label="Portrait of Koshidu Ayon Pietersz">
                <span className="hero__portrait-glow" aria-hidden="true"></span>
                <span className="hero__portrait-frame" aria-hidden="true">
                  <img src={portraitImage} alt="Portrait of Koshidu Ayon Pietersz" />
                </span>
              </figure>
            </div>
          </div>
        </section>

        <section id="about" className="section about" data-section>
          <div className="container about__grid">
            <div>
              <h2>Welcome to my world of code, creativity, and innovation</h2>
              <p>
                Technology captured my imagination the moment I realised how a few lines of code could grow into something
                powerful, interactive, and meaningful. That spark set me on a journey to explore how digital experiences can
                make everyday life better.
              </p>
              <p>
                Today, I design and develop modern, responsive, and user-friendly applications. Whether it’s enhancing
                performance, refining storytelling through UI/UX, or building feature-rich mobile apps, I blend creativity with
                functionality to craft products that truly serve people.
              </p>
              <p>
                I’m detail-oriented, curious, and driven to keep experimenting. I love diving into new tools, exploring design
                trends, and challenging myself to grow as both a creator and technologist. Great design, to me, is rooted in
                empathy, clarity, and purpose.
              </p>
              <p>
                Beyond the screen, I value collaboration, lifelong learning, and translating complex ideas into intuitive
                solutions. Technology is the bridge between imagination and reality—and I’m here to build that bridge, one
                project at a time.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="section timeline" data-section>
          <div className="container">
            <header className="section__header">
              <span className="eyebrow">Journey</span>
              <h2>Education Timeline</h2>
              <p>The formative chapters that shaped my love for technology and design.</p>
            </header>
            <ol className="timeline__list timeline__list--education">
              {TIMELINE.map(({ id, years, datetime, title, description, logo, logoAlt }) => (
                <li key={id}>
                  <div className="timeline__point"></div>
                  <div className="timeline__content">
                    <div className="timeline__heading">
                      <div className="timeline__logo" aria-hidden="true">
                        <img src={logo} alt={logoAlt} />
                      </div>
                      <div>
                        <time dateTime={datetime}>{years}</time>
                        <h3>{title}</h3>
                      </div>
                    </div>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="section projects" data-section>
          <div className="container">
            <header className="section__header">
              <span className="eyebrow">Selected work</span>
              <h2>Projects I’ve Worked On</h2>
              <p>
                A snapshot of the 85+ mobile applications and digital products I’ve delivered—each crafted to pair intuitive
                experiences with reliable engineering.
              </p>
            </header>
            <div className="projects__grid">
              {PROJECTS.map(({ badge, title, description, tags }) => (
                <article className="project-card" key={title}>
                  <div className="project-card__badge">{badge}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="tag-list">
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills" data-section>
          <div className="container skills__grid">
            <div>
              <span className="eyebrow">Toolbox</span>
              <h2>What I work with</h2>
              <p>From cloud architectures to interface systems, I enjoy pairing the right tool with the right problem.</p>
            </div>
            <div className="skills__list">
              {SKILLS.map(({ heading, description }) => (
                <div key={heading}>
                  <h3>{heading}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact" data-section>
          <div className="container contact__content">
            <div>
              <span className="eyebrow">Connect</span>
              <h2>Let's build something resonant</h2>
              <p>I'm open to collaborating on thoughtful products, resilient platforms, and communities that elevate people.</p>
            </div>
            <div className="contact__actions">
              <a className="contact__link" href="mailto:koshiduayon@gmail.com">
                koshiduayon@gmail.com
              </a>
              <ul className="social-list">
                {SOCIAL_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {currentYear} Koshidu Ayon Pietersz. Built with curiosity and care.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

