"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectIntro() {
  return (
    <section id="work" className="projectIntro">
      <div className="projectMeta">
        <span>01 / Selected Work</span>
        <span>Web Design · Development · UX</span>
        <span>2025 — 2026</span>
      </div>

      <motion.div
        className="projectHeading"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="projectNumber">01</span>

        <h2>
          ENACTUS
          <br />
          LA TROBE
        </h2>
      </motion.div>

      <div className="projectStatement">
        <p>
          A digital home designed and built for a student-led community
          creating social and environmental impact.
        </p>

        <div className="projectLinks">
          <a href="/work/enactus">
            View case study →
          </a>

          <a
            href="https://enactuslatrobe.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live site ↗
          </a>
        </div>
      </div>

      <div className="projectCanvas">
        <div className="browserMockup">
          <div className="browserTop">
            <div className="browserDots">
              <span />
              <span />
              <span />
            </div>

            <span>enactuslatrobe.org</span>
          </div>

          <div className="browserImage">
            <Image
              src="/projects/enactus/hero.png"
              alt="Enactus La Trobe website designed and developed by Mihini Ranasinghe"
              width={1704}
              height={864}
              className="enactusScreenshot"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}