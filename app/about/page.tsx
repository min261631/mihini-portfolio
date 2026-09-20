import Link from "next/link";
import AboutIntro from "@/components/AboutIntro";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main>
      <nav className="aboutPageNav">
        <Link href="/" className="logo" aria-label="Mihini Ranasinghe home">
          MR<span>.</span>
        </Link>
        <div className="navLinks">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
      <AboutIntro />
      <About />
    </main>
  );
}
