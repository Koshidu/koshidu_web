const Hero = ({ copy, highlights }) => {
  return (
    <section id="hero" className="section hero" data-section>
      <div className="container hero__content">
        <div className="hero__text">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="hero__actions">
            <a className="button" href={copy.ctaPrimary.href}>
              {copy.ctaPrimary.label}
            </a>
            <a className="button button--ghost" href={copy.ctaSecondary.href}>
              {copy.ctaSecondary.label}
            </a>
          </div>
          <dl className="hero__highlights">
            {highlights.map(({ title, description }) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero__visual">
          <figure className="hero__portrait" aria-label={copy.image.alt}>
            <span className="hero__portrait-glow" aria-hidden="true"></span>
            <span className="hero__portrait-frame" aria-hidden="true">
              <img src={copy.image.src} alt={copy.image.alt} />
            </span>
            <span className="hero__portrait-ring hero__portrait-ring--outer" aria-hidden="true"></span>
            <span className="hero__portrait-ring hero__portrait-ring--inner" aria-hidden="true"></span>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;


