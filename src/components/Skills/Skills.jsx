import React from "react";
import styles from "./Skills.module.css";
import { SkillCard } from "./SkillCard/SkillCard";
import skills from "../../data/skills.json";

export function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills & Technologies</h2>
      <div className={styles.skillsCardContainer}>
        {skills.map((category) => (
          <SkillCard key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
}