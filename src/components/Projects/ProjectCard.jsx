import React from "react";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project, onClick }) {
  return (
    <div className={styles.previewCard} onClick={onClick}>
      <img
        className={styles.previewImage}
        src={`/dynamicassets/${project.imageSrc}`}
        alt={project.title}
      />
      <h3 className={styles.previewTitle}>{project.title}</h3>
    </div>
  );
}