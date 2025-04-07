import React from "react";
import "../styles/About.css"; 
import allStudents from "../assets/allstudents.jpg";
// import { div } from "framer-motion/client";


const About = () => {
  return (
    <div>
    { <img src={allStudents} alt="Students" className="students" 
        style={{ width: "100%", maxWidth: "1000px", height: "auto", margin: "60px auto", display: "block",alignItems: "right", justifyContent: "center"
         }} 
      /> }
    <section className="about-container">
      <h1 className="about-title">A Symbol of Excellence in Placement Training</h1>
      <p className="about-description">
        Aptitude Guru Hem was born from the aspiration to create a learning environment that
        inspires greatness. Our founder, driven by personal experiences and a desire to make a 
        difference, established the company with a mission to empower students with the right 
        skills and mindset for success.
      </p>

      <div className="vision-mission-container">
        <div className="vision">
          <h2><span className="vision-bar">|</span> <span className="vision-title">Our Vision</span></h2>
          <p>
            Our vision is to empower individuals from diverse backgrounds to 
            become accomplished professionals. At Aptitude Guru Hem, we believe 
            that knowledge has the power to transcend boundaries.
          </p>
        </div>

        <div className="divider"></div>

        <div className="mission">
          <h2><span className="mission-bar">|</span> <span className="mission-title">Our Mission</span></h2>
          <p>
            Our mission is to revolutionize education by providing comprehensive 
            training in aptitude, coding, and web/mobile development. We foster a 
            culture of inclusivity and personal growth.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;