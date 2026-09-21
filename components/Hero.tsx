"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const digitalX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const experienceX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const lineAnimation = {
    initial: { y: "110%" },
    animate: { y: "0%" },
  };

  return (
    <motion.section
      ref={heroRef}
      className="hero"
      style={{ opacity: heroOpacity }}
    >
      <motion.nav
        className="nav"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <a href="/" className="logo" aria-label="Mihini Ranasinghe home">
          MR<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="/about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      <motion.div
        className="heroIntro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>Designer × Developer</p>

        <p className="heroLocation">
          Australia
          <span className="statusDot" />
        </p>
      </motion.div>

      <motion.div
        className="heroSocials"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        aria-label="Social links"
      >
        <a
          href="https://www.linkedin.com/in/mihini-ranasinghe/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM21 13.65c0-3.86-2.06-5.65-4.81-5.65-2.22 0-3.21 1.22-3.77 2.08V8.2H9.1V21h3.32v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.35Z" />
          </svg>
        </a>

        <a
          href="https://github.com/min261631"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>

        <a
          href="mailto:mihininiweka@gmail.com"
          aria-label="Email Mihini"
          title="Email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.75 5h16.5A1.75 1.75 0 0 1 22 6.75v10.5A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25V6.75A1.75 1.75 0 0 1 3.75 5Zm.18 2 8.07 5.57L20.07 7H3.93Zm16.07 2.02-7.43 5.13a1 1 0 0 1-1.14 0L4 9.02v8h16v-8Z" />
          </svg>
        </a>
      </motion.div>

      <div className="heroTitle">
        <div className="titleMask">
          <motion.div
            className="titleLine"
            variants={lineAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            I DESIGN
          </motion.div>
        </div>

        <div className="titleMask titleLineOffset">
          <motion.div
            className="titleLine"
            style={{ x: digitalX }}
            variants={lineAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="titleAccent">DIGITAL</span>
          </motion.div>
        </div>

        <div className="titleMask">
          <motion.div
            className="titleLine"
            style={{ x: experienceX }}
            variants={lineAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            EXPERIENCES.
          </motion.div>
        </div>
      </div>

      <motion.div
        className="heroPortraitWrap"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="heroPortraitAccent" />
        <div className="heroPortrait">
          <Image
            src="/projects/about/about-mihini.png"
            alt="Mihini Ranasinghe"
            fill
            sizes="(max-width: 700px) 42vw, 28vw"
            className="heroPortraitImage"
            priority
          />
        </div>
        <div className="heroHello">
          <span>Hi, I’m Mihini</span>
          <span className="heroHelloArrow">↙</span>
        </div>
      </motion.div>

      <motion.div
        className="heroBottom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85 }}
      >
        <p className="heroDescription">
          I combine design and technology to turn complex ideas into
          experiences that feel simple, useful and human.
        </p>

        <a href="#work" className="explore">
          <span>Explore my work</span>
          <span className="arrow">↓</span>
        </a>
      </motion.div>

      <motion.div
        className="heroFooter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Web Design</span>
        <span>Creative Development</span>
        <span>Interaction</span>
        <span>Multimedia</span>
      </motion.div>
    </motion.section>
  );
}