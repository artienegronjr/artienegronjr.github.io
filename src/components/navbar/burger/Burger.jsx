import "./burger.css"

export default function Burger(props) {
  return (
    <div className={`burger ${props.isOpen ? "open " : ""} ${props.hasScrolled ? "scroll " : ""}`} onClick={props.onClick}>
    <div className="main-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="cross-burger">
      <span></span>
      <span></span>
    </div>
  </div>
  )
}
