import "./form.css"
import { useState } from 'react'
import { send } from 'emailjs-com'

export default function Form() {
  const [toSend, setToSend] = useState({
    fromName: '',
    fromEmail: '',
    subject: '',
    message: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_s84kq08',
      'template_nwxll37',
      toSend,
      "user_fPxcSOQssq8sjDCd0nQwT"
    ).then((response) => {
      console.log("Email sent successfully.");
      setToSend({...toSend, fromName: '', fromEmail: '', subject: '', message: 'Message sent successfully!'});
    }).catch((err) => {
      console.log("Email delivery failed.", err);
    });
  };

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input type="text" name="fromName" placeholder="Your Name *" 
        value={toSend.fromName} onChange={handleChange} />
        <input type="text" name="fromEmail" placeholder="Your email *"
        value={toSend.fromEmail} onChange={handleChange} />
        <input type="text" name="subject" placeholder="Write a Subject" 
        value={toSend.subject} onChange={handleChange} />
        <textarea type="text" name="message" placeholder="Your Message"
        value={toSend.message} onChange={handleChange} ></textarea>
        <button className="submit-btn" type="submit" value="submit" name="submit">Submit</button> 
      </form>
    </div>
  )
}
