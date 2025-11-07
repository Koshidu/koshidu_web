import SectionHeader from "./SectionHeader";

const About = ({ paragraphs, pillars }) => {
  return (
    <section id="about" className="section about" data-section>
      <div className="container about__grid">
        <div>
          <SectionHeader
            eyebrow="Welcome"
            title="A world of code, craft, and curiosity"
            description="I build experiences that balance beauty, performance, and purpose."
          />
          <div className="about__copy">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="about__pillars">
          {pillars.map(({ heading, description }) => (
            <article key={heading}>
              <h3>{heading}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


