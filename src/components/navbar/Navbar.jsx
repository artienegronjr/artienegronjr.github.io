import "./navbar.css"
import { useEffect } from 'react'
import Logo from "./logo/Logo"

export default function Navbar() {
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
        <a href="#home" className='nav-item active'>Home</a>
        <a href="#about" className='nav-item'>About</a>
        <a href="#projects" className='nav-item'>Projects</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>
    </div>
  )
}
