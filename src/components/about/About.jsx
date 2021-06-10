import "./about.css"
import Headshot from "../../images/headshot.jpg"
import Details from "./details/Details"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
      <div className="about-picture">
        <img src={Headshot} alt="Artie's Headshot" className="headshot" />
      </div>
      <div className="about-content">
        <span className="about-intro">Hey, nice to meet you!</span>
        <h1 className="about-title">About Me</h1>
        <p className="about-blurb">I'm a 28 year old Software Developer based in the beautiful city of Cleveland, Ohio. I've always been passionate about programming, ever since I first learned HTML, CSS, and JavaScript back in middle school, but have had to take a bit of a detour in my career path. After spending the better part of five years cultivating a strong work ethic in the cable industry, I can finally say I'm a full time Software Developer!</p>
        <Details />
      </div>
      </div>
    </div>
  )
}
