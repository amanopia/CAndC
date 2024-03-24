import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer">
      <nav>
        <ul className="footerNav">
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Award</li>
          <li>Education</li>
          <li>Skill</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="contactContent">
        <div className="contactContentLeft">
          <h1>Contacts</h1>
          <p>+1000000000</p>
          <p>Basedd in Netherlands</p>
        </div>
        <div className="contactContentRight">
          <div className="inputContainer">
            <input type="email" name="" id="" />
            <button>Copy</button>
          </div>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/aman-verma-82b823185/">
              LinkedIn
            </a>
            <a href="https://www.linkedin.com/in/aman-verma-82b823185/">
              Behance
            </a>
            <a href="https://www.linkedin.com/in/aman-verma-82b823185/">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/aman-verma-82b823185/">
              Awwwards
            </a>
            <a href="https://www.linkedin.com/in/aman-verma-82b823185/">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/aman-verma-82b823185/">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
