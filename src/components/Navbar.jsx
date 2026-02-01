import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../utils'
import closeicon from "../assets/nav/closeicon.png";
import menuicon from "../assets/nav/menuicon.png";



export function Navbar(){
    const [menuOpen, setmenuOpen] = useState(false);

    return (
        <nav className ={styles.navbar}>
            <a className = {styles.title} href="/">Portfolio</a>
            <div className = {styles.menu} >
                <img className = {styles.menuBtn} src = {menuOpen? closeicon :menuicon } alt = "menu-button" 
                onClick={()=>setmenuOpen(!menuOpen)}></img> 
               
                <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setmenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#experience">Experience</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}   