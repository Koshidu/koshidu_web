import SectionHeader from "./SectionHeader";

const TimelineSection = ({ timeline }) => {
  return (
    <section id="education" className="section timeline" data-section>
      <div className="container">
        <SectionHeader
          eyebrow="Journey"
          title="Education Timeline"
          description="The formative chapters that shaped my love for technology and design."
        />
        <ol className="timeline__list timeline__list--education">
          {timeline.map(({ id, years, datetime, title, description, logo, logoAlt }) => (
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
  );
};

export default TimelineSection;


