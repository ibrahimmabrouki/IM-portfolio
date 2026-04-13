import React from "react";
import styles from "./ProjectModal.module.css";

export function ProjectModal({ project, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}  // ✅ prevent closing when clicking inside
      >

        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <img
          src={`/dynamicassets/${project.imageSrc}`}
          alt={project.title}
          className={styles.image}
        />

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <ul className={styles.skills}>
          {project.skills.map((skill, id) => (
            <li key={id}>{skill}</li>
          ))}
        </ul>

        {(project.demo || project.source) && (
          <div className={styles.links}>
            {project.demo && <a href={project.demo}>Demo</a>}
            {project.source && <a href={project.source}>Source</a>}
          </div>
        )}

      </div>
    </div>
  );
}