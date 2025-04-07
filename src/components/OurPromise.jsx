import React from "react";
import "../styles/OurPromise.css"; // Import CSS file for styling
const OurPromise = () => {
  return (
    <section className="our-promise">
      <h2 className="section-title">Our Promise</h2>
      <p className="section-subtitle">
        As part of our high-quality service, we'd like to offer something extra too.
      </p>

      <div className="promise-container">
        <div className="promise-card">
          <h3 className="promise-title">
            <span className="icon">💰</span> Top Code Quality
          </h3>
          <p>You receive W3C fully compliant markup, without any compromise on quality.</p>
        </div>

        <div className="promise-card">
          <h3 className="promise-title">
            <span className="icon">📱</span> Responsive
          </h3>
          <p>We ensure timely responsiveness and adaptability to serve you efficiently.</p>
        </div>

        <div className="promise-card">
          <h3 className="promise-title">
            <span className="icon">👨‍💻</span> Rockstar Team
          </h3>
          <p>Our expert team is dedicated to delivering high-quality services.</p>
        </div>

        <div className="promise-card">
          <h3 className="promise-title">
            <span className="icon">⚡</span> Fast Turn-arounds
          </h3>
          <p>We deliver high-quality code within a timeframe that suits your needs.</p>
        </div>

        <div className="promise-card">
          <h3 className="promise-title">
            <span className="icon">🔁</span> Life-time Support
          </h3>
          <p>If any bugs emerge in the future, feel free to reach out to us.</p>
        </div>

        <div className="promise-card">
          <h3 className="promise-title">
            <span className="icon">🔏</span> Secured Agreement
          </h3>
          <p>Your work is entirely your own, with formal NDAs for security.</p>
        </div>
      </div>
    </section>
  );
};
export default OurPromise;
