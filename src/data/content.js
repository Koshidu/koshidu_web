import cardiffLogo from "../assets/images/cardiff.png";
import portraitImage from "../assets/images/photo_1.jpg";
import timelineSchoolLogo from "../assets/images/spc.jpg";

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const HERO_COPY = {
  eyebrow: "Software Engineer · Designer · Lifelong Learner",
  title: "Hi, I'm Koshidu Ayon Pietersz",
  paragraphs: [
    "I’m a curious builder who loves transforming bold ideas into seamless digital experiences. From the first sketch to the final ship, I combine thoughtful design, precise engineering, and empathetic storytelling to create work that feels as good as it functions.",
    "My mission is simple: craft modern, responsive, and user-friendly products that solve real-world problems while inviting people to explore, connect, and imagine what’s next.",
  ],
  ctaPrimary: { label: "View projects", href: "#projects" },
  ctaSecondary: { label: "Education", href: "#education" },
  image: {
    src: portraitImage,
    alt: "Portrait of Koshidu Ayon Pietersz",
  },
};

export const HERO_HIGHLIGHTS = [
  { title: "Craft", description: "End-to-end product design & development" },
  { title: "Approach", description: "Curiosity, empathy, and continuous learning" },
  { title: "Currently", description: "Working as a software engineer" },
];

export const ABOUT_PARAGRAPHS = [
  "Technology captured my imagination the moment I realised how a few lines of code could grow into something powerful, interactive, and meaningful. That spark set me on a journey to explore how digital experiences can make everyday life better.",
  "Today, I design and develop modern, responsive, and user-friendly applications. Whether it’s enhancing performance, refining storytelling through UI/UX, or building feature-rich mobile apps, I blend creativity with functionality to craft products that truly serve people.",
  "I’m detail-oriented, curious, and driven to keep experimenting. I love diving into new tools, exploring design trends, and challenging myself to grow as both a creator and technologist. Great design, to me, is rooted in empathy, clarity, and purpose.",
  "Beyond the screen, I value collaboration, lifelong learning, and translating complex ideas into intuitive solutions. Technology is the bridge between imagination and reality—and I’m here to build that bridge, one project at a time.",
];

export const ABOUT_PILLARS = [
  {
    heading: "Design thinking",
    description: "Shaping intuitive journeys with story-driven UI systems, motion, and accessibility at the forefront.",
  },
  {
    heading: "Engineering impact",
    description: "Architecting scalable products with resilient code, rigorous testing, and observability built-in.",
  },
  {
    heading: "Team partnership",
    description: "Facilitating collaboration across product, design, and engineering to ship work that resonates.",
  },
];

export const TIMELINE = [
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

export const PROJECTS = [
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

export const SKILLS = [
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

export const SOCIAL_LINKS = [
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


