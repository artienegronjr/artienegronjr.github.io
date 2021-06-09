import "./cards.css"
import Card from "./card/Card"
import Placeholder from "../../../images/project.jpg"

export default function Cards() {
  return (
    <div className="cards">
      <Card image={Placeholder} category="Bot Development" title="Discord Bot" description="A Discord bot developed in C#. Click to invite to your server!" />
      <Card image={Placeholder} category="Web Design" title="Personal Portfolio" description="The page you're on! Built in React." />
      <Card image={Placeholder} category="Placeholder" title="Future Project" description="Lorem ipsum dolor sit amet, conse ctetur adipiscing elit." />
    </div>
  )
}
