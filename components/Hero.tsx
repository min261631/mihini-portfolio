"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
          <a href="#about">About</a>
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