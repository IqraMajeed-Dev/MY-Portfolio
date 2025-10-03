import React, { useState } from "react";
import { Link } from "react-scroll";  
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConnect, setShowConnect] = useState(false); 

  return (
    <nav className="navbar">
      <div className="logo">Iqra</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          About Me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="achievements"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Achievements
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="nav-connect">
        <button
          className="connect-btn"
          onClick={() => setShowConnect(!showConnect)}
        >
          Connect With Me ⬇
        </button>

        {showConnect && (
          <div className="connect-dropdown">
            <a
              href="mailto:iqra37277@gmail.com"
              className="connect-link"
              onClick={() => setShowConnect(false)}
            >
              📧 Gmail: iqra37277@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/iqra-majeed"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
              onClick={() => setShowConnect(false)}
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/IqraMajeed-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
              onClick={() => setShowConnect(false)}
            >
              🖥️ GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
