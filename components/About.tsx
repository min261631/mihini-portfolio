"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
    <section className="aboutSection" id="about">
      <div className="aboutMeta">
        <span>05 / About</span>
        <span>Designer + Developer</span>
      </div>

      <div className="aboutHero">
        <motion.div
          className="aboutTitle"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Designer.</span>
          <span>Developer.</span>
          <span className="aboutTitleAccent">Builder.</span>
        </motion.div>

        <motion.figure
          className="aboutPortrait"
          initial={{ opacity: 0, y: 50, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/projects/about/about-mihini.jpg"
            alt="Mihini Ranasinghe"
            fill
            sizes="(max-width: 800px) 72vw, 32vw"
            className="aboutPortraitImage"
          />
          <figcaption>Mihini Ranasinghe · Australia</figcaption>
        </motion.figure>
      </div>

      <div className="aboutBody">
        <p className="aboutLead">
          I’m Mihini — a designer and developer who likes turning ideas into
          digital experiences that feel simple, useful and a little unexpected.
        </p>

        <div className="aboutCopy">
          <p>
            My background is in software engineering, but I’ve always been drawn
            to the space where design and technology meet.
          </p>
          <p>
            I work across web, interaction, multimedia and emerging technology —
            from designing websites and learning experiences to experimenting
            with spatial interfaces and AR.
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
