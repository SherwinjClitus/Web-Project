import React from "react"; // Import React library
import "../styles/Trusty.css"; // Import CSS file for styling
const Trusty = () => {
  return (
    <div className="trusted-by-container">
      <h2>Trusted By</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="icon">
            <i className="fas fa-university"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">70</span>
            <span className="stat-label">Colleges</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">27</span>
            <span className="stat-label">Professional Trainers</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Study Materials</span>
            <span className="stat-sublabel">AGH LMS</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">50000+</span>
            <span className="stat-label">Students</span>
            <span className="stat-sublabel">B2B Placement Training</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trusty;
