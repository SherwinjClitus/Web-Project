import React from "react";
import "../styles/courses.css";

const Courses = () => {
  return (
    <section className="courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        <div className="course">Full Stack Web Development</div>
        <div className="course">Aptitude & Competitive Exam Training</div>
        <div className="course">Government Job Preparation</div>
      </div>
    </section>
  );
};

export default Courses;
