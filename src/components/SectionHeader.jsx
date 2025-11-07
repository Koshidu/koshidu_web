const SectionHeader = ({ eyebrow, title, description, align = "left" }) => {
  return (
    <header className="section__header" data-align={align}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
};

export default SectionHeader;


