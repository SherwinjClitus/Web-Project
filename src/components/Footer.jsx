import React from "react";
import "../styles/footer.css"; // Ensure this CSS file exists

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>My Courses</li>
            <li>Affiliate</li>
          </ul>
        </div>

        {/* Colleges Section */}
        <div className="footer-section">
          <h3>Colleges</h3>
          <ul>
            <li>Placement Prep</li>
            <li>Higher Studies Prep</li>
            <li>Government Jobs</li>
            <li>Aptitude Prep</li>
            <li>Technical Prep</li>
          </ul>
        </div>

        {/* Schools Section */}
        <div className="footer-section">
          <h3>Schools</h3>
          <ul>
            <li>IIT JEE</li>
            <li>NEET</li>
            <li>Maths Olympiad</li>
            <li>Science Olympiad</li>
            <li>Cyber Olympiad</li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li>Placement Prep</li>
            <li>Higher Studies Prep</li>
            <li>Government Jobs Prep</li>
            <li>IIT JEE/NEET</li>
            <li>Olympiad Prep</li>
          </ul>
        </div>
       
        {/* Exams Section */}
        <div className="footer-section">
          <h3>Exams</h3>
          <ul>
            <li>UPSC</li>
            <li>CAT/XAT/MAT</li>
            <li>GRE/GMAT</li>
            <li>GATE</li>
            <li>SSC/Bank Exams RRB</li>
          </ul>
        </div>

        {/* Skill Development Section */}
        <div className="footer-section">
          <h3>Skill Development</h3>
          <ul>
            <li>Web Development (FullStack)</li>
            <li>Backend Development</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Soft Skills</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a> */}
            <a href="#"><img src="/image/images.png" alt="Facebook" /></a>
            <a href="#"><img src="/image/linkedin.svg" alt="LinkedIn" /></a>
            <a href="#"><img src="/image/youtube.svg" alt="YouTube" /></a>
            <a href="#"><img src="/image/x.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <p className="footer-bottom">© 2025 APTITUDE GURU. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
