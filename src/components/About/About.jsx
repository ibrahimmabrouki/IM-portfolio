import React from "react";
import styles from './About.module.css';
import aboutimage from '../../assets/About/aboutImage.png';
import cursoricon from '../../assets/About/cursorIcon.png';
import uiIcon from '../../assets/About/uiIcon.png';
import serverIcon from '../../assets/About/serverIcon.png';
import mobileIcon from '../../assets/About/mobileIcon.png';


export function About(){
    return(
       <section className = {styles.container} id = "about">
            <h2 className = {styles.title} >About</h2>
            <div className = {styles.content} >
                <img
                    className = {styles.aboutImage} 
                    src = {aboutimage}
                    alt = "Me sitting with a Laptop">
                </img>
                <ul className = {styles.aboutItems} >
                    <li className = {styles.aboutItem} >
                        <img src ={cursoricon}
                        alt = "Cursor pointer icon" ></img>

                        <div className = {styles.aboutItemText}>
                            <h3>Full-Stack Development</h3>
                            <p>
                            Experience building responsive and dynamic web applications using HTML, CSS, JavaScript, and React for frontend development, combined with PHP and MySQL for backend logic and database management. Focused on creating structured, maintainable, and user-friendly systems.                            </p>
                        </div>
                    </li>

                    <li className = {styles.aboutItem}>
                        <img src = {serverIcon} 
                        alt = "Server icon" ></img>

                        <div className = {styles.aboutItemText}>
                            <h3>Cloud & Deployment</h3>
                            <p>
                            Hands-on experience deploying and managing applications using AWS services such as EC2, S3, and RDS, along with containerization using Docker. Focused on building scalable and efficiently managed cloud-based solutions.
                            </p>
                        </div>
                    </li>

                    <li className = {styles.aboutItem}>
                        <img src = {uiIcon} 
                        alt = "UI icon" ></img>

                        <div className = {styles.aboutItemText}>
                            <h3>Performance & Systems Programming</h3>
                            <p>
                             Worked on performance optimization and parallel computing using MPI, OpenMP, and CUDA. Built and optimized system-level programs with attention to efficiency, resource management, and execution speed.
                            </p>
                        </div>
                    </li>
                    <li className = {styles.aboutItem}>
                        <img src = {mobileIcon}
                        alt = "mobileIcon icon" ></img>

                        <div className = {styles.aboutItemText}>
                            <h3>Mobile Application Development</h3>
                            <p>
                            Developed Android applications with structured architecture, secure authentication, and real-time functionality. Built role-based systems with backend integration for healthcare and wellness management solutions.                           
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
       </section>
    );
}