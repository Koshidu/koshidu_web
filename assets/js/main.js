document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (nav && navToggle) {
    nav.dataset.open = "false";
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.dataset.open = String(!expanded);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        nav.dataset.open = "false";
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navToggle.setAttribute("aria-expanded", "false");
        nav.dataset.open = "false";
      }
    });
  }

  const sectionIds = Array.from(navLinks).map((link) => link.getAttribute("href"));
  const sections = sectionIds
    .filter((id) => id && id.startsWith("#"))
    .map((id) => document.querySelector(id));

  if (navLinks.length) {
    navLinks[0].classList.add("active");
  }

  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`.site-nav a[href="#${id}"]`);

          if (!navLink) {
            return;
          }

          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            navLink.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
  }
});

