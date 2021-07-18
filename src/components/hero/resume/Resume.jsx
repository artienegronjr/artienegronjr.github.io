import "./resume.css"
import pdf from "../../../files/Artie Negron Resume.pdf"

export default function Resume() {
  const handleClick = () => {
    window.open(pdf);
  };

  return (
    <div className="resume" onClick={handleClick}>
      DOWNLOAD RESUME
    </div>
  )
}
