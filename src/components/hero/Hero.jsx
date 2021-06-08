import "./hero.css"
import background from "../../images/land.jpg"
import Resume from "./resume/Resume"
import Ticker from "./ticker/Ticker"

export default function Hero() {
  return (
    <div className='hero'  style={{backgroundImage: `url(${background})`}}>
      <div className='hero-content'>
        <h1 className='hero-name'>I’m Artie Negrón,</h1>
        <Ticker />
        <h1 className='hero-location'>
        <i class="fas fa-map-marker-alt location-icon"></i>
          Cleveland, Ohio.
          </h1>
        <Resume />
      </div>
    </div>
  )
}
