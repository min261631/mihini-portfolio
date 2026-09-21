"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef, useState, type CSSProperties } from "react";

type ProjectVisual = "image" | "video" | "concept" | "mapmycoles" | "telescope";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mapVideosPlaying, setMapVideosPlaying] = useState(true);
  const [telescopePlaying, setTelescopePlaying] = useState(true);
  const telescopeVideoRef = useRef<HTMLVideoElement>(null);
  const navigationVideoRef = useRef<HTMLVideoElement>(null);
  const arVideoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  const toggleTelescopeVideo = () => {
    const video = telescopeVideoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setTelescopePlaying(true);
    } else {
      video.pause();
      setTelescopePlaying(false);
    }
  };

  const toggleMapVideos = () => {
    const videos = [navigationVideoRef.current, arVideoRef.current].filter(
      (video): video is HTMLVideoElement => Boolean(video)
    );

    if (mapVideosPlaying) {
      videos.forEach((video) => video.pause());
      setMapVideosPlaying(false);
    } else {
      videos.forEach((video) => {
        void video.play();
      });
      setMapVideosPlaying(true);
    }
  };

  const enterFrom = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 };
  const canvasFrom = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 };

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
        initial={enterFrom}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
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
        initial={canvasFrom}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
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
        ) : visual === "video" ? (
          <div className="gdgVisual">
            <div className="gdgVideoFrame">
              <video
                ref={videoRef}
                className="gdgVideo"
                src="/projects/gdg/showreel.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="GDG on Campus La Trobe community and event showreel"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              <div className="gdgVideoTopline">
                <span>Community / Events / Technology</span>
                <span>00:30 · 4K</span>
              </div>

              <button
                type="button"
                className="gdgVideoControl"
                onClick={toggleVideo}
                aria-label={isPlaying ? "Pause GDG showreel" : "Play GDG showreel"}
              >
                <span>{isPlaying ? "Ⅱ" : "▶"}</span>
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>

            <div className="gdgVideoFooter">
              <span>GDG on Campus · La Trobe University</span>
              <span>Motion · Editing · Visual Storytelling</span>
            </div>
          </div>
        ) : visual === "telescope" ? (
          <div className="telescopeVisual">
            <div className="telescopeVideoFrame">
              <video
                ref={telescopeVideoRef}
                src="/projects/telescope/demo.mp4"
                autoPlay={!prefersReducedMotion}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Demonstration of the remote observatory web interface"
                onPlay={() => setTelescopePlaying(true)}
                onPause={() => setTelescopePlaying(false)}
              />
              <div className="telescopeVideoTopline" aria-hidden="true">
                <span>Remote Scientific Data Capture &amp; Control</span>
                <span>Live interface</span>
              </div>
              <button
                type="button"
                className="telescopeVideoControl"
                onClick={toggleTelescopeVideo}
                aria-label={telescopePlaying ? "Pause remote observatory demo" : "Play remote observatory demo"}
              >
                <span aria-hidden="true">{telescopePlaying ? "Ⅱ" : "▶"}</span>
                {telescopePlaying ? "Pause" : "Play"}
              </button>
            </div>

            <figure className="telescopeShot telescopeShot--feed">
              <Image
                src="/projects/telescope/telescope-feed.png"
                alt="Remote observatory telescope feed showing a live astronomical view, weather information and telescope controls"
                width={1728}
                height={886}
                unoptimized
              />
              <figcaption>Live telescope feed · Remote control</figcaption>
            </figure>

            <figure className="telescopeShot telescopeShot--status">
              <Image
                src="/projects/telescope/system-status.png"
                alt="Remote observatory system status dashboard showing availability, viewing schedule, weather and system information"
                width={2048}
                height={700}
                unoptimized
              />
              <figcaption>System status · Monitoring</figcaption>
            </figure>

            <figure className="telescopeShot telescopeShot--home">
              <Image
                src="/projects/telescope/home.png"
                alt="La Trobe Observatory home interface with launch telescope control and system status actions"
                width={1728}
                height={886}
                unoptimized
              />
              <figcaption>Observatory home · Entry point</figcaption>
            </figure>

            <figure className="telescopeShot telescopeShot--weather">
              <Image
                src="/projects/telescope/weather.png"
                alt="Weather monitoring interface showing live atmospheric and observation conditions"
                width={1728}
                height={886}
                unoptimized
              />
              <figcaption>Weather · Observation conditions</figcaption>
            </figure>

            <div className="telescopeFooter">
              <span>Live control · Streaming · Monitoring</span>
              <span>Web interface · Connected systems</span>
            </div>
          </div>
        ) : visual === "mapmycoles" ? (
          <div className="mapMyColesVisual">
            <div className="mapPresentation">
              <Image
                src="/projects/mapmycoles/presentation.jpg"
                alt="Mihini presenting the MapMyColes project at Cisco Live"
                width={1600}
                height={900}
                unoptimized
                onError={(event) => {
                  event.currentTarget.src =
                    "https://img.youtube.com/vi/pjy-h0N4EQg/maxresdefault.jpg";
                }}
              />
              <span className="mapPresentationLabel">Presenting MapMyColes · Cisco Live</span>
            </div>

            <div className="mapDemoStack">
              <figure className="mapDemoCard">
                <video
                  ref={navigationVideoRef}
                  src="/projects/mapmycoles/navigation-demo.mp4"
                  autoPlay={!prefersReducedMotion}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="MapMyColes navigation demo"
                />
                <figcaption>In-store navigation</figcaption>
              </figure>

              <figure className="mapDemoCard">
                <video
                  ref={arVideoRef}
                  src="/projects/mapmycoles/ar-demo.mp4"
                  autoPlay={!prefersReducedMotion}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="MapMyColes augmented reality demo"
                />
                <figcaption>AR experience</figcaption>
              </figure>
            </div>

            <button
              type="button"
              className="mapDemoControl"
              onClick={toggleMapVideos}
              aria-pressed={!mapVideosPlaying}
              aria-label={mapVideosPlaying ? "Pause MapMyColes demo videos" : "Play MapMyColes demo videos"}
            >
              <span aria-hidden="true">{mapVideosPlaying ? "Ⅱ" : "▶"}</span>
              {mapVideosPlaying ? "Pause demos" : "Play demos"}
            </button>

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
              {visual === "concept" && <>{title.replace("\n", " ")}</>}
            </div>
            <span className="placeholderNote">Visual preview coming next</span>
          </div>
        )}
      </motion.div>
    </section>
  );
}
