
import React from "react";
import "./Hero.css";
import iqraImg from "./iqra6.jpg"; 

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-image">
        <img src={iqraImg} alt="Iqra Majeed" />
      </div>
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Iqra Majeed</span></h1>
        <h2>Full Stack Developer</h2>
        <p>
          Passionate about crafting modern, scalable, and user-friendly web & mobile 
          applications. Skilled in <strong>React.js, Django, Python, Flutter</strong> 
          and experienced in building end-to-end solutions.
        </p>
        <div className="hero-action">
          <a
            href="mailto:iqra37277@gmail.com"
            className="hero-connect"
          >
            📧 Connect with me
          </a>

          <a
            href="https://drive.google.com/file/d/1jvShr6sypVZnmI2W5L-ShGd_9IrNEItN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume"
          >
            📄 My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
