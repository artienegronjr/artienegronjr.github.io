import "./card.css"

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" className="card-image" />
      <div className="card-content">
        <h4 className="card-category">{props.category}</h4>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  )
}
