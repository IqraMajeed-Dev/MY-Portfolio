import React from "react";
import "./Achievements.css"; 

const Achievements = () => {
  const certificates = [
    {
      title: "Certificate 1",
      link: "https://drive.google.com/file/d/1e3_VJbV3-eoUXPHLgJJi3h9ruxHxFfQK/view?usp=drive_link",
    },
    {
      title: "Certificate 2",
      link: "https://drive.google.com/file/d/1wudakuzS29dAfXOsXg4uBjYFUR1R5Fcn/view?usp=drive_link",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="achievements-title">🎓 Achievements & Certificates</h2>
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
