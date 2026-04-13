import React from "react";
import styles from "./SkillItem.module.css";

export function SkillItem({ skill }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillImageContainer}>
        <img src={skill.imageSrc} alt={skill.title} />
      </div>
      <p className={styles.skillTitle}>{skill.title}</p>
    </div>
  );
}