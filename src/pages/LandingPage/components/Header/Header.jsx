import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  console.log(navOpen);

  return (
    <div className="header">
      {navOpen ? (
        <div className="header__nav-mobile">
          <div className="nav__top">
            <div className="header__brand">
              <span>TechTime</span>
            </div>
            <div onClick={() => setNavOpen(false)} className="header__navIcons">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <nav className="nav__bottom">
            <a
              onClick={() => setNavOpen(false)}
              href="#home"
              className="defaultFocus"
            >
              Home
            </a>
            <a onClick={() => setNavOpen(false)} href="#about-us">
              About Us
            </a>
            <a onClick={() => setNavOpen(false)} href="#courses">
              Courses
            </a>
            <a onClick={() => setNavOpen(false)} href="#testimonials">
              Testimonial
            </a>
            <a onClick={() => setNavOpen(false)} href="#community">
              Community
            </a>
            <button>Enroll Now</button>
          </nav>
        </div>
      ) : (
        <div className="header__nav-desk">
          <div className="header__brand">
            <span>TechTime</span>
          </div>
          <div className="header__actions-desk">
            <nav className="header__desk_nav">
              <a href="#home" className="defaultFocus">
                Home
              </a>
              <a href="#about-us">About Us</a>
              <a href="#courses">Courses</a>
              <a href="#testimonials">Testimonial</a>
              <a href="#community">Community</a>
              <button>Enroll Now</button>
            </nav>
            <div onClick={() => setNavOpen(true)} className="header__navIcons">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
