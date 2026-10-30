import { useState } from "react";
import "./Contactus.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <Header />
      <section className="contactus-page">
        <div className="contactus-header">
          <h1>Contact Us</h1>
          <p>
            Have a project in mind? Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="contactus-container">
          <div className="contactus-info">
            <h2>Get in Touch</h2>
            <p>Email: modestatech.com</p>
            <p>Phone: +2348036685206</p>
            <p>Address: imo state, Nigeria</p>
          </div>

          <form className="contactus-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
            {submitted && (
              <p className="contactus-success">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contactus;
