import "./navbar.css"
import Logo from "./logo/Logo"

export default function Navbar(props) {

  return (
    <div className={`navbar ${props.hasScrolled ? "scroll" : ""}`} >
      <Logo />
      <div className='navigation'>
        <a 
        href="#home" 
        className={`nav-item ${props.currentSection === "hero" ? "active" : ""}`} 
        id="nav-home">Home</a>
        <a 
        href="#about" 
        className={`nav-item ${props.currentSection === "about" ? "active" : ""}`} 
        id="nav-about">About</a>
        <a 
        href="#projects" 
        className={`nav-item ${props.currentSection === "projects" ? "active" : ""}`}  
         id="nav-projects">Projects</a>
        <a 
        href="#contact" 
        className={`nav-item ${props.currentSection === "contact" ? "active" : ""}`}  
        id="nav-contact">Contact</a>
      </div>
    </div>
  )
}
