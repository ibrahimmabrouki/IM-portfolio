
import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import {Project} from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Skills } from './components/Skills/Skills'



function App() {

  return (
    <>

      <div className= {styles.App}>
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>
          <Skills/>
          <Project/>
          <Contact/> 
      </div>

    </>
  )
}

export default App
