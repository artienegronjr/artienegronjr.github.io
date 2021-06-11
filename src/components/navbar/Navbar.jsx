import "./navbar.css"
import Logo from "./logo/Logo"
import Burger from "./burger/Burger"
import { useState } from 'react'

export default function Navbar(props) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    if(isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }

  }

  return (
    <div className={`navbar ${props.hasScrolled ? "scroll" : ""}`} >
      <Logo />
      <div className={`navigation ${isOpen ? "open" : ""}`}>
        <a 
        href="#home" 
        className={`nav-item ${props.currentSection === "hero" ? "active" : ""}`} 
        id="nav-home"
        onClick={handleClick}>Home</a>
        <a 
        href="#about" 
        className={`nav-item ${props.currentSection === "about" ? "active" : ""}`} 
        id="nav-about"
        onClick={handleClick}>About</a>
        <a 
        href="#projects" 
        className={`nav-item ${props.currentSection === "projects" ? "active" : ""}`}  
         id="nav-projects"
         onClick={handleClick}>Projects</a>
        <a 
        href="#contact" 
        className={`nav-item ${props.currentSection === "contact" ? "active" : ""}`}  
        id="nav-contact"
        onClick={handleClick}>Contact</a>
      </div>
      <Burger onClick={handleClick} isOpen={isOpen} hasScrolled={props.hasScrolled} />
    </div>
  )
}
