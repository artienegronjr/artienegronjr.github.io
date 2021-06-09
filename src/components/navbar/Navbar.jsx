import "./navbar.css"
import { useEffect, useState } from 'react'
import Logo from "./logo/Logo"

export default function Navbar() {
  const [activeItem, setActive] = useState("nav-home");

  const handleClick = (e) => {
    setActive(e.target.id);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup(){
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className = "navbar scroll";
    } else {
      document.querySelector(".navbar").className = "navbar";
    }
  };

  return (
    <div className='navbar'>
      <Logo />
      <div className='navigation'>
        <a 
        href="#home" 
        className={`nav-item ${activeItem === "nav-home" ? "active" : ""}`} 
        onClick={handleClick} 
        id="nav-home">Home</a>
        <a 
        href="#about" 
        className={`nav-item ${activeItem === "nav-about" ? "active" : ""}`} 
        onClick={handleClick} 
        id="nav-about">About</a>
        <a 
        href="#projects" 
        className={`nav-item ${activeItem === "nav-projects" ? "active" : ""}`}  
        onClick={handleClick}
         id="nav-projects">Projects</a>
        <a 
        href="#contact" 
        className={`nav-item ${activeItem === "nav-contact" ? "active" : ""}`}  
        onClick={handleClick} 
        id="nav-contact">Contact</a>
      </div>
    </div>
  )
}
