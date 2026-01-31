import React, { useState } from "react";
import projects from '../../data/projects.json';
import { ProjectCard } from "./ProjectCard";
import styles from './Projects.module.css';

export function Project() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className={styles.container} id="projects">

            <h2 className={styles.title}>Projects</h2>

            <div className={styles.sliderWrapper}>

                <button 
                    className={styles.arrow} 
                    onClick={prevProject}
                    disabled={currentIndex === 0}
                >
                    ◀
                </button>

                <div className={styles.projects}>
                    <div
                        className={styles.sliderTrack}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {projects.map((project, id) => (
                            <div key={id} className={styles.slide}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    className={styles.arrow} 
                    onClick={nextProject}
                    disabled={currentIndex === projects.length - 1}
                >
                    ▶
                </button>

            </div>

        </section>
    );
}


