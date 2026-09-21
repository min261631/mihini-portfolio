const capabilities = [
  "Web Design",
  "Front-end",
  "Interaction",
  "Multimedia",
  "Accessibility",
  "Creative Technology",
];

export default function About() {
  return (
    <section className="aboutSection aboutDetails">
      <div className="aboutMeta">
        <span>05 / More about me</span>
        <span>Design meets technology</span>
      </div>

      <div className="aboutBody">
        <p className="aboutLead">
          My background is in software engineering, but I’ve always been drawn
          to the space where design and technology meet.
        </p>

        <div className="aboutCopy">
          <p>
            I work across web, interaction, multimedia and emerging technology —
            from designing websites and learning experiences to experimenting
            with spatial interfaces and AR.
          </p>
          <p>
            I enjoy the whole process: understanding the problem, shaping the
            experience, and then building something people can actually use.
          </p>
        </div>
      </div>

      <div className="aboutCapabilities">
        <div className="aboutCapabilitiesHeader">
          <span>What I work with</span>
          <span>Selected capabilities</span>
        </div>
        <div className="aboutCapabilityGrid">
          {capabilities.map((capability, index) => (
            <div className="aboutCapability" key={capability}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{capability}</strong>
            </div>
          ))}
        </div>
      </div>

      <p className="aboutClosing">
        Curious about technology, people, and building things that make an impact.
      </p>
    </section>
  );
}
