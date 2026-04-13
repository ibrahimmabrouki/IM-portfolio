import React, { useState } from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import styles from "./Projects.module.css";

export function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("");

  const getIndex = (index) => {
    return (index + projects.length) % projects.length;
  };

  const nextProject = () => {
    if (isAnimating) return;

    setDirection("next");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => getIndex(prev + 1));
      setIsAnimating(false);
      setDirection("");
    }, 500);
  };

  const prevProject = () => {
    if (isAnimating) return;

    setDirection("prev");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => getIndex(prev - 1));
      setIsAnimating(false);
      setDirection("");
    }, 500);
  };

  const leftIndex = getIndex(currentIndex - 1);
  const rightIndex = getIndex(currentIndex + 1);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${styles.mobileArrow}`}
          onClick={prevProject}
        >
          ◀
        </button>

        <div
          className={`${styles.carousel} ${
            isAnimating ? styles[direction] : ""
          }`}

          onClick={() => setSelectedProject(projects[currentIndex])}
        >
          <div className={`${styles.card} ${styles.left}`}>
            <ProjectCard project={projects[leftIndex]} />
          </div>

          <div className={`${styles.card} ${styles.center}`}>
            <ProjectCard project={projects[currentIndex]} />
          </div>

          <div className={`${styles.card} ${styles.right}`}>
            <ProjectCard project={projects[rightIndex]} />
          </div>
        </div>

        <button
          className={`${styles.arrow} ${styles.mobileArrow}`}
          onClick={nextProject}
        >
          ▶
        </button>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}