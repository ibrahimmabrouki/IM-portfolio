import React from "react";
import styles from './Hero.module.css';
import heroimage from '../assets/hero/heroImage.png';
import { FiDownload } from "react-icons/fi";


export function Hero(){
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ibrahim Mabrouki</h1>
                <p className={styles.description}>Computer Science graduate and Software Engineer with hands-on experience 
                in full-stack development, cloud computing, and system performance optimization. 
                I enjoy building scalable applications and continuously expanding my technical skills.
                </p>
                <div className={styles.buttonsContainer}>
                    <a
                    className={styles.contactBtn}
                    href="mailto:ibrahimmabrouki32@gmail.com">
                    Contact Me
                    </a>
                    <a href="/cv.pdf" download className={styles.cvBtn}>
                    <FiDownload size={22}/>CV
                    </a>
                    
                </div>
            </div>
            <img 
            className={styles.heroImg}
            src = {heroimage} 
            alt = "Image for my self">

            </img>
            <div className = {styles.topBlur} ></div>
            <div className = {styles.bottomBlur} ></div>
        </section>
    );
}