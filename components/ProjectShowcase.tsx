"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { CSSProperties } from "react";

type ProjectVisual = "image" | "learning" | "video" | "concept" | "mapmycoles";

interface ProjectShowcaseProps {
  number: string;
  title: string;
  categories: string;
  year: string;
  description: string;
  accent: string;
  background?: string;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  visual?: ProjectVisual;
  label?: string;
}

export default function ProjectShowcase({
  number,
  title,
  categories,
  year,
  description,
  accent,
  background = "#111111",
  image,
  imageAlt,
  liveUrl,
  visual = "concept",
  label,
}: ProjectShowcaseProps) {
  const lines = title.split("\n");
  const style = {
    "--project-accent": accent,
    "--project-background": background,
  } as CSSProperties;

  return (
    <section className="projectIntro projectShowcase" style={style}>
      <div className="projectMeta">
        <span>{number} / Selected Work</span>
        <span>{categories}</span>
        <span>{year}</span>
      </div>

      <motion.div
        className="projectHeading"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="projectNumber">{number}</span>
        <h2>
          {lines.map((line, index) => (
            <span key={line}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </motion.div>

      <div className="projectStatement">
        <p>{description}</p>
        {liveUrl && visual !== "mapmycoles" && (
          <div className="projectLinks">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Visit live site ↗
            </a>
          </div>
        )}
      </div>

      <motion.div
        className="projectCanvas"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {visual === "image" && image ? (
          <div className="browserMockup">
            <div className="browserTop">
              <div className="browserDots"><span /><span /><span /></div>
              <span>{label ?? title.replace("\n", " ")}</span>
            </div>
            <div className="browserImage">
              <Image
                src={image}
                alt={imageAlt ?? title.replace("\n", " ")}
                width={1704}
                height={864}
                className="enactusScreenshot"
                priority={number === "01"}
              />
            </div>
          </div>
        ) : visual === "mapmycoles" ? (
          <div className="mapMyColesVisual">
            <div className="mapPresentation">
              <img
                src="/projects/mapmycoles/presentation.jpg"
                alt="Mihini presenting the MapMyColes project at Cisco Live"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://img.youtube.com/vi/pjy-h0N4EQg/maxresdefault.jpg";
                }}
              />
              <span className="mapPresentationLabel">Presenting MapMyColes · Cisco Live</span>
            </div>

            <div className="mapLogoCard" aria-label="MapMyColes">
              <img
                className="mapLogoImage"
                src="/projects/mapmycoles/logo.jpg"
                alt="MapMyColes logo"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="mapLogoFallback">
                <div className="mapLogoType">
                  <strong>MapMy</strong>
                  <span>Coles</span>
                </div>
              </div>
              <span className="mapFinalist">Cisco Live · MasterTech Finalist</span>
            </div>

            <a
              className="mapPitchButton"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the MapMyColes pitch on YouTube"
            >
              <span className="mapPitchIcon">▶</span>
              <span>Watch pitch ↗</span>
            </a>

            <div className="mapCaption">
              <span>Interactive retail navigation</span>
              <span>Mapping · Spatial UI · AR</span>
            </div>
          </div>
        ) : (
          <div className={`projectPlaceholder projectPlaceholder--${visual}`}>
            <span className="placeholderEyebrow">{categories}</span>
            <div className="placeholderTitle">
              {visual === "learning" && <>Learn.<br />Try.<br />Understand.</>}
              {visual === "video" && <>People.<br />Energy.<br />Community.</>}
              {visual === "concept" && <>{title.replace("\n", " ")}</>}
            </div>
            <span className="placeholderNote">Visual preview coming next</span>
          </div>
        )}
      </motion.div>
    </section>
  );
}
