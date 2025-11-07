import { useEffect } from "react";

const Navigation = ({ brand, navLinks, activeSection, navOpen, onToggleNav, onCloseNav, cta }) => {
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <header className="site-header" data-open={navOpen}>
      <div className="container">
        <a className="brand" href="#hero" onClick={onCloseNav}>
          {brand}
        </a>
        <nav className="site-nav" aria-label="Primary" data-open={navOpen}>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="nav-list"
            onClick={onToggleNav}
          >
            <span className="nav-toggle__bar"></span>
            <span className="sr-only">Toggle navigation</span>
          </button>
          <ul id="nav-list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.replace("#", "") ? "active" : undefined}
                  onClick={onCloseNav}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {cta && (
          <a className="button button--ghost" href={cta.href} onClick={onCloseNav}>
            {cta.label}
          </a>
        )}
        <span className="scroll-progress" aria-hidden="true"></span>
      </div>
    </header>
  );
};

export default Navigation;


