import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <div id="work">
      <ProjectShowcase
        number="01"
        title={"ENACTUS\nLA TROBE"}
        categories="Web Design · Development · UX"
        year="2025 — 2026"
        description="A digital home designed and built for a student-led community creating social and environmental impact."
        accent="#f2cb3f"
        image="/projects/enactus/hero.png"
        imageAlt="Enactus La Trobe website designed and developed by Mihini Ranasinghe"
        liveUrl="https://enactuslatrobe.org/"
        visual="image"
        label="enactuslatrobe.org"
      />

      <ProjectShowcase
        number="02"
        title={"LEARNING\nLAB"}
        categories="Learning Design · Interaction · Accessibility"
        year="2026"
        description="An experimental learning experience exploring how interaction, feedback and visual design can make complex information easier to understand."
        accent="#c8b8ff"
        background="#15131a"
        visual="learning"
      />

      <ProjectShowcase
        number="03"
        title={"GDG\nSHOWREEL"}
        categories="Video Editing · Motion · Visual Storytelling"
        year="2025 — 2026"
        description="A fast-paced visual story capturing the people, energy and community behind GDG on Campus La Trobe."
        accent="#ff6b4a"
        background="#090909"
        visual="video"
      />

      <ProjectShowcase
        number="04"
        title={"MAP MY\nCOLES"}
        categories="Interactive Design · Mapping · AR"
        year="2025"
        description="An interactive in-store navigation concept combining mapping and augmented reality to help shoppers find products and explore the store more intuitively."
        accent="#d84b3d"
        background="#121212"
        visual="mapmycoles"
        liveUrl="https://www.youtube.com/watch?v=pjy-h0N4EQg"
      />
    </div>
  );
}
