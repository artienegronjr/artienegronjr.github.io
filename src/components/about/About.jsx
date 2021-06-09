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
        <p className="about-blurb">There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour. </p>
        <Details />
      </div>
      </div>
    </div>
  )
}
