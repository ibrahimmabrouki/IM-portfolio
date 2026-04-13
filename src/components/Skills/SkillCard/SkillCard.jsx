import React from "react";
import styles from "./SkillCard.module.css";
import { SkillItem } from "../SkillItem/SkillItem";

export function SkillCard({ category }) {
  return (
    <div className={styles.skillCardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.categoryImageContainer}>
          <img
            src={category.categoryImageSrc}
            alt={category.category}
            className={styles.categoryImage}
          />
        </div>
        <h3 className={styles.categoryTitle}>{category.category}</h3>
      </div>
      <div className={styles.skillsContainer}>
        {category.skills.map((skill, id) => (
          <SkillItem key={id} skill={skill} />
        ))}
      </div>
    </div>
  );
}