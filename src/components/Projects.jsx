import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Web Platform (Full Stack)",
    date: "May 2025",
    description: `Developed and deployed a scalable e-commerce web platform.
Built RESTful APIs in Django for smooth data exchange between frontend and backend.
Integrated payment gateways and implemented secure user authentication.
Optimized overall performance to improve user experience.`,
    link: "https://github.com/IqraMajeed-Dev/Ziksha-style.git",
  },
  {
    title: "Cross-Platform E-Commerce Application",
    date: "April 2025",
    description: `Built a cross-platform e-commerce app using Flutter (Mobile), Django (Backend), and React.js (Web).
Implemented key features: product catalog, shopping cart, checkout, and admin dashboard.`,
    link: "https://github.com/IqraMajeed-Dev/Cross-Platform-E-Commerce-Application.git",
  },
  {
    title: "Hotel Booking Web Platform (Full Stack)",
    date: "March 2025",
    description: `Developed a web-based hotel booking platform using React.js (Frontend) and Node.js/Express (Backend).
Implemented core features: hotel listings, room booking, secure payments, and an admin panel for hotel management.`,
    link: "https://github.com/IqraMajeed-Dev/Hotel-Booking-Web-Platform-Full-Stack-.git",
  },
  {
    title: "Seamless Food Ordering Platform (FEASTFLOW)",
    date: "Feb 2025",
    description: `Final Year Project: Designed and developed a seamless food ordering platform for both Web and Mobile.
Built using React.js (Web), Flutter (Mobile), and Django (Backend).
Features: product catalog, cart & checkout system, real-time order tracking, customer reviews, and admin panel for managing products, users, and orders.`,
    link: "https://github.com/IqraMajeed-Dev/Seamless-Food-Ordering-Platform-FEASTFLOW-.git",
  },
  {
    title: "Advanced Password Generator (Python)",
    date: "Jan 2025",
    description: `Developed a secure password generator in Python that creates strong, randomized passwords.
Features include custom length, mix of uppercase/lowercase letters, numbers, and special characters.
Improves security by reducing risk of weak passwords.`,
    link: "https://github.com/IqraMajeed-Dev/Advanced-Password-Generator",
  },
  {
    title: "Dynamic Table Generator (React.js)",
    date: "Dec 2024",
    description: `Built a dynamic table generator in React.js where users can add rows and columns.
Implemented features: editable cells, real-time updates, and export to CSV option.
Helps users create custom data tables quickly and interactively.`,
    link: "https://github.com/IqraMajeed-Dev/Dynamic-Table-Generator-React.js-.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p className="date">{proj.date}</p>
              <p className="desc">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  🔗 View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


