import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__brand">
        <span>TechTime</span>
        <p>Reach out to us on any of our social media networks</p>
        <div className="footer__socialIcons">
          <img src="src/assets/images/icons/facebookIcon.png" alt="icon" />
          <img src="src/assets/images/icons/twitterIcon.png" alt="icon" />
          <img src="src/assets/images/icons/youtubeIcon.png" alt="icon" />
          <img src="src/assets/images/icons/instaIcon.png" alt="icon" />
          <img src="src/assets/images/icons/discordIcon.png" alt="icon" />
        </div>
      </div>
      <div className="footer__links">
        <h1>Useful Links</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#our-courses">Our Courses</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#our-community">Our Community</a>
        </nav>
      </div>
      <div className="footer__community">
        <h1>Community</h1>
        <nav>
          <a href="#home">Help Centers</a>
          <a href="#about-us">Partners</a>
          <a href="#our-courses">Suggestion</a>
          <a href="#testimonials">Blog</a>
          <a href="#our-community">Newsletter</a>
        </nav>
      </div>
      <div className="footer__subscribe">
        <h1>Subscribe Us</h1>
        <div className="form-group">
          <input type="text" placeholder="nft123@gmail.com" />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
