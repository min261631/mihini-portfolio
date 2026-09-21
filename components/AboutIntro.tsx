"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutIntro() {
  return (
    <section className="aboutIntro" id="about">
      <div className="aboutMeta">
        <span>About / Mihini Ranasinghe</span>
        <span>Designer + Developer</span>
      </div>

      <div className="aboutIntroGrid">
        <motion.div
          className="aboutIntroTitle"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Designer.</span>
          <span>Developer.</span>
          <span className="aboutIntroAccent">Builder.</span>
        </motion.div>

        <motion.figure
          className="aboutIntroPortrait"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/projects/about/about-mihini.png"
            alt="Mihini Ranasinghe"
            fill
            sizes="(max-width: 800px) 84vw, 38vw"
            className="aboutPortraitImage"
            priority
          />
        </motion.figure>

        <div className="aboutIntroCopy">
          <p>
            I’m Mihini — a designer and developer who likes turning ideas into
            digital experiences that feel simple, useful and a little unexpected.
          </p>
          <span>Web · Interaction · Multimedia · Creative Technology</span>
        </div>
      </div>
    </section>
  );
}
