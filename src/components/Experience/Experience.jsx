import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.timeline}>
        {history.map((historyItem, id) => {
          return (
            <div
              key={id}
              className={`${styles.timelineItem} ${
                id % 2 === 0 ? styles.right : styles.left
              }`}
            >
              <div className={styles.timelineDot}></div>

              <div className={styles.historyItem}>
                <img
                  src={`/dynamicassets/${historyItem.imageSrc}`}
                  alt={`${historyItem.organisation} logo`}
                  className={styles.historyImage}
                />

                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                  <ul>
                    {historyItem.experiences.map((experience, expId) => {
                      return <li key={expId}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}