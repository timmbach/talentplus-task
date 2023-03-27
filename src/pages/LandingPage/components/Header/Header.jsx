import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__brand">
        <span>TechTime</span>
      </div>
      <div className="header__actions">
        <nav>
          <a href="#home" className="defaultFocus">
            Home
          </a>
          <a href="#about-us">About Us</a>
          <a href="#courses">Courses</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#community">Community</a>
        </nav>
        <button>Enroll Now</button>
      </div>
    </div>
  );
};

export default Header;
