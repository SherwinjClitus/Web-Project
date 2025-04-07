import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">APTITUDE GURU</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/promise">Our Promise</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>{" "}
          {/* Anchor links for sections are okay */}
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">Signup</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
