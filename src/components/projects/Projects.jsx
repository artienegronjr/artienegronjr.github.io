import Cards from "./cards/Cards"

export default function Projects() {
  return (
    <div className="section projects" id="projects">
      <div className="section-content">
        <h4 className="colorful-heading">what I've been working on</h4>
        <h1 className="section-heading">My Latest Projects</h1>
        <p className="section-description">My older projects aren't a great representation of what I'm capable of today, so I'm currently in the middle of working on new ones to display! </p>
        <Cards />
      </div>
    </div>
  )
}
