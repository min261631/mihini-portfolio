"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="contactSection" id="contact">
      <div className="contactMeta">
        <span>06 / Contact</span>
        <span>Have something in mind?</span>
      </div>

      <motion.div
        className="contactHeading"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>HAVE AN IDEA?</span>
        <span className="contactAccent">LET’S MAKE</span>
        <span>IT REAL.</span>
      </motion.div>

      <div className="contactAction">
        <p>
          I’m always interested in thoughtful digital projects, creative
          collaborations and opportunities to build something useful.
        </p>
        <a className="contactEmail" href="mailto:mihininiweka@gmail.com">
          <span>Get in touch</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <footer className="contactFooter">
        <div className="contactIdentity">
          <strong>Mihini Ranasinghe</strong>
          <span>Designer × Developer</span>
        </div>

        <div className="contactLinks">
          <a href="mailto:mihininiweka@gmail.com">Email ↗</a>
          <a href="https://www.linkedin.com/in/mihini-ranasinghe/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://github.com/min261631" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>

        <span className="contactYear">© 2026</span>
      </footer>
    </section>
  );
}
