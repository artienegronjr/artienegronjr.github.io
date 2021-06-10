import "./cards.css"
import Card from "./card/Card"
import Placeholder from "../../../images/project.jpg"
import Image1 from "../../../images/card1.png"
import Image2 from "../../../images/card2.png"

export default function Cards() {
  return (
    <div className="cards">
      <Card image={Image1} category="Web Design" title="Personal Portfolio" description="The page you're on! Built in React." />
      <Card image={Placeholder} category="Placeholder" title="Future Project" description="Lorem ipsum dolor sit amet, conse ctetur adipiscing elit." /> 
      <Card image={Image2} category="Placeholder" title="Future Project" description="Lorem ipsum dolor sit amet, conse ctetur adipiscing elit." />
    </div>
  )
}
