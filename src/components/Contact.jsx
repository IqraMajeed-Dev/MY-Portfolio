import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-info">
        <p><FaMapMarkerAlt className="icon" /> Lahore, Punjab, Pakistan</p>
        <p>
          <FaWhatsapp className="icon" /> 
          <a href="https://wa.me/923096032412" target="_blank" rel="noreferrer">
            +92 309 6032412
          </a>
        </p>
        <p>
          <MdEmail className="icon" /> 
          <a href="mailto:iqra37277@gmail.com">iqra37277@gmail.com</a>
        </p>
        <p>
          <FaLinkedin className="icon" /> 
          <a href="https://linkedin.com/in/iqra-majeed-5a221a2b9" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <p>
          <FaGithub className="icon" /> 
          <a href="https://github.com/iqramajeed-dev" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
