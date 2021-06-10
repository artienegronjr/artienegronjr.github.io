import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import "./App.css"
import { useEffect, useState, useRef } from "react"

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");
  const appRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return function cleanup(){
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const heroSection = appRef.current.childNodes[1];
    const aboutSection = appRef.current.childNodes[2];
    const projectsSection = appRef.current.childNodes[3];
    const contactSection = appRef.current.childNodes[4];
    const navbarHeight = appRef.current.childNodes[0].scrollHeight;

    if (window.scrollY > 20) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }

    if (window.scrollY + navbarHeight >= heroSection.offsetTop && window.scrollY + navbarHeight < aboutSection.offsetTop){
      setCurrentSection("hero");
    }
    else if (window.scrollY + navbarHeight >= aboutSection.offsetTop && window.scrollY + navbarHeight < projectsSection.offsetTop){
      setCurrentSection("about");
    }
    else if (window.scrollY + navbarHeight >= projectsSection.offsetTop && window.scrollY + navbarHeight < contactSection.offsetTop){
      setCurrentSection("projects");
    }
    else if (window.scrollY + navbarHeight >= contactSection.offsetTop){
      setCurrentSection("contact");
    }
  };

  return (
    <div className="App" ref={appRef}>
      <Navbar hasScrolled={hasScrolled} currentSection={currentSection} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
