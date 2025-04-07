import React from "react";
import "../styles/Banner.css"; // Ensure you style it properly
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2>Learners Today, Leaders Tomorrow</h2>
        <p>
          With our continuous research and development, we provide you with an
          excellent Aptitude training.
        </p>
      </div>
      <button className="register-btn">REGISTER NOW</button>
    </div>
  );
};
export default Banner;
