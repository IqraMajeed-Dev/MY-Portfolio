
import React from 'react';
import './Aboutme.css';
import profile_img from './iqra9.jpg';   

export const Aboutme = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={profile_img} alt='Iqra Majeed' />
      </div>
      <div className='about-right'>
        <div className='about-title'>
          <h1>About Me</h1>
        </div>

        <div className='about-para'>
          <p>
            I'm <strong>Iqra Majeed</strong>, a <b>Full Stack Developer</b> currently
            pursuing a <b>Bachelor of Science in Engineering Technology</b> at the
            University of Lahore. My expertise covers backend development with
            <b> Python, Django, and RESTful APIs</b>, as well as frontend technologies
            such as <b>React, JavaScript, and Flutter</b>. I am also skilled in database
            management with <b>MySQL</b> and <b>PostgreSQL</b>, and I work confidently
            with cloud platforms like <b>AWS</b>.
          </p>

          <p>
            I have developed and deployed scalable web and mobile applications,
            including a full-stack e-commerce platform with secure payment
            integration, a cross-platform e-commerce app, and a hotel booking system
            with real-time functionality. My work demonstrates
            <b> problem-solving ability</b>, <b>clean code practices</b>, and a strong
            focus on <b>performance optimization</b>.
          </p>
        </div>
        <div className='about-skills'>
          <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>React JS</p><hr style={{ width: "70%" }} /></div>
          <div className='about-skill'><p>Django</p><hr style={{ width: "80%" }} /></div>
          <div className='about-skill'><p>Python</p><hr style={{ width: "90%" }} /></div>
          <div className='about-skill'><p>AWS</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>MySQL</p><hr style={{ width: "70%" }} /></div>
          <div className='about-skill'><p>Git</p><hr style={{ width: "80%" }} /></div>
          <div className='about-skill'><p>C++</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>Flutter</p><hr style={{ width: "80%" }} /></div>
          <div className='about-skill'><p>UI/UX Design</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>JavaScript</p><hr style={{ width: "90%" }} /></div>
        </div>
        <div className='about-achievements'>
          <div className='about-achievement'>
            <h1>6+</h1>
            <p>Projects Completed</p>
          </div>
          <div className='about-achievement'>
            <h1>2+</h1>
            <p>Certificates</p>
          </div> 
          <div className='about-achievement'>
            <h1>90+</h1>
            <p>RESTFUL APIS create</p> 
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
