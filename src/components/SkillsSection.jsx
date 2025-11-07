import SectionHeader from "./SectionHeader";

const SkillsSection = ({ skills }) => {
  return (
    <section className="section skills" data-section>
      <div className="container skills__grid">
        <div>
          <SectionHeader
            eyebrow="Toolbox"
            title="What I work with"
            description="From cloud architectures to interface systems, I enjoy pairing the right tool with the right problem."
          />
        </div>
        <div className="skills__list">
          {skills.map(({ heading, description }) => (
            <div key={heading}>
              <h3>{heading}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


