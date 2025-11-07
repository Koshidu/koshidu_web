import SectionHeader from "./SectionHeader";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="section projects" data-section>
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I’ve Worked On"
          description="A snapshot of the 85+ mobile applications and digital products I’ve delivered—each crafted to pair intuitive experiences with reliable engineering."
        />
        <div className="projects__grid">
          {projects.map(({ badge, title, description, tags }) => (
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
  );
};

export default ProjectsSection;


