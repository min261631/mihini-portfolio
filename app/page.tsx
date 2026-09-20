export default function Home() {
  return (
    <main>
      <section className="hero">
        {/* Navigation */}
        <nav className="nav">
          <a href="/" className="logo" aria-label="Mihini Ranasinghe home">
            MR<span>.</span>
          </a>

          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Small intro */}
        <div className="heroIntro">
          <p>Designer × Developer</p>

          <p className="heroLocation">
            Australia
            <span className="statusDot" />
          </p>
        </div>

        {/* Main statement */}
        <div className="heroTitle">
          <div className="titleLine">
            <span>I DESIGN</span>
          </div>

          <div className="titleLine titleLineOffset">
            <span className="titleAccent">DIGITAL</span>
          </div>

          <div className="titleLine">
            <span>EXPERIENCES.</span>
          </div>
        </div>

        {/* Bottom content */}
        <div className="heroBottom">
          <p className="heroDescription">
            I combine design and technology to turn complex ideas into
            experiences that feel simple, useful and human.
          </p>

          <a href="#work" className="explore">
            <span>Explore my work</span>
            <span className="arrow">↓</span>
          </a>
        </div>

        <div className="heroFooter">
          <span>Web Design</span>
          <span>Creative Development</span>
          <span>Interaction</span>
          <span>Multimedia</span>
        </div>
      </section>

      {/* Temporary section so scrolling works */}
      <section id="work" className="workPlaceholder">
        <span>01 / Selected Work</span>

        <h2>
          Things I&apos;ve
          <br />
          designed &amp; built.
        </h2>
      </section>
    </main>
  );
}