import React from "react";
import styles from './Contact.module.css';
import emailicon from "../../assets/contact/emailIcon.png";
import linkedinicon from "../../assets/contact/linkedinIcon.png";
import githubicon from "../../assets/contact/githubIcon.png";



export function Contact(){
    return(
        <footer id = "contact" className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.title}>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>

            <div className={styles.divtobecenterd}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img  src={emailicon} alt="Email Icon" />
                    <a href = 'mailto:ibrahimmabrouki32@gmail.com'>ibrahimmabrouki32@gmail.com</a>
                </li>    
                <li className={styles.link}>
                    <img  src={linkedinicon} alt="LinkedIn Icon" />
                    <a href = 'https://www.linkedin.com/in/ibrahim-mabrouki-70465b266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>LinkedIn.com/ibrahimmabrouki</a>
                </li>    
                <li className={styles.link}>
                <img  src={githubicon} alt="Github Icon" />
                    <a href = 'https://github.com/ibrahimmabrouki'>github.com/ibrahimmabrouki</a>
                </li>                
            </ul>
            </div>
            
        </footer>
    );
}