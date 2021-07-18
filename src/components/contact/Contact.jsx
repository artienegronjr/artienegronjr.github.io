import "./contact.css"
import Form from "./form/Form"

export default function Contact() {
  return (
    <div className="section" id="contact">
      <div className="section-content">
        <h4 className="colorful-heading">get a hold of me</h4>
        <h1 className="section-heading">Contact</h1>
        <div className="contact-info">
          <span className="contact-type">Telephone:</span>
          <span className="contact-value">(216) 732-1800</span>
          <span className="contact-type">Email:</span>
          <span className="contact-value">hello@artienegron.dev</span>
        </div>
        <Form />
      </div>
    </div>
  )
}
