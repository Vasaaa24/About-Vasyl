import React from "react";

//CSS
import './App.css'
import "./components/navigace/menu.css"
import "./components/homepage/homepage.css"
import "./components/vzdelani/education.css"
import "./components/znalosti/skills.css"
import "./components/projekty/projects.css"
import "./components/kontakt/contact.css"
import "./components/footer/footer.css"

//JSX
import Menu from "./components/navigace/Menu";
import Home from "./components/homepage/Home";
import Education from "./components/vzdelani/Education";
import Skills from "./components/znalosti/Skills";
import Projects from "./components/projekty/Projects";
import Contact from "./components/kontakt/Contact";
import Footer from "./components/footer/Footer";

//SCRIPTS

function App() {

  return (
   <>
        <Menu/>
        <Home/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
   </>
  )
}

export default App
