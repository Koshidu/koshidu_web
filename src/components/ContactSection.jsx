import SectionHeader from "./SectionHeader";

const ContactSection = ({ email, socials }) => {
  return (
    <section id="contact" className="section contact" data-section>
      <div className="container contact__content">
        <div>
          <SectionHeader
            eyebrow="Connect"
            title="Let's build something resonant"
            description="I'm open to collaborating on thoughtful products, resilient platforms, and communities that elevate people."
          />
        </div>
        <div className="contact__actions">
          <a className="contact__link" href={`mailto:${email}`}>
            {email}
          </a>
          <ul className="social-list">
            {socials.map(({ href, label }) => (
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
  );
};

export default ContactSection;


