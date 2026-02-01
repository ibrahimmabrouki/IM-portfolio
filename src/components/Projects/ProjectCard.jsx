import React from "react";
import projects from '../../data/projects.json';
import styles from './ProjectCard.module.css';

export function ProjectCard({project}){
    return(
        <div className={styles.container}>

            <img 
            className={styles.image}
            src = {`/dynamicassets/${project.imageSrc}`} 
            alt = {`Image of ${project.title}`}>
            </img>

            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description} >{project.description}</p>
            <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                    return(
                        <li key = {id} className={styles.skill}>
                        {skill}
                    </li>
                    );
                    
                })}
            </ul>

            {/* <div className={styles.links}>
                <a className={styles.link} href={project.demo}>Demo</a>
                <a className={styles.link} href={project.source}>Source</a>
            </div> */}

            { (project.demo || project.source) && (
            <div className={styles.links}>
                {project.demo && <a className={styles.link} href={project.demo}>Demo</a>}
                {project.source && <a className={styles.link} href={project.source}>Source</a>}
            </div>
            )}
        </div>
        
                   
    );
}