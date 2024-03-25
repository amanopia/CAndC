import "./Footer.css";

import isEmail from "validator/lib/isEmail";

import React from "react";
import { useEffect, useState, useRef } from "react";

const Footer = () => {
  const [emailValue, setEmailValue] = useState("");

  const inpRef = useRef();

  const inputRef = useRef();
  useEffect(() => {
    if (emailValue == "") {
      inputRef.current.style.background = linearGradientUnedited;
      inputRef.current.style.borderColor = "#2478d7";
    } else if (isEmail(emailValue)) {
      inputRef.current.style.background = linearGradientValid;
      inputRef.current.style.borderColor = "#58ef0d";
    } else {
      inputRef.current.style.background = linearGradientInvalid;
      inputRef.current.style.borderColor = "#c41010";
    }
  }, [emailValue]);

  //? LINEAER GRADIENTS
  const linearGradientUnedited =
    "linear-gradient(90deg, #2478d7, #2478d7,  #002b5c, #000)";
  const linearGradientValid =
    "linear-gradient(90deg, #58ef0d, #58ef0d,  #2A7F00, #000)";
  const linearGradientInvalid =
    "linear-gradient(90deg, #c41010, #c41010,  #7A0000, #000)";

  function inputChangeHandler(value) {
    setEmailValue(value);
  }

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
          <p>+1&nbsp;00&nbsp;000&nbsp;00&nbsp;00</p>
          <p>Based in Netherlands</p>
        </div>
        <div className="contactContentRight">
          <div
            ref={inputRef}
            className="inputContainer"
            style={{
              background: linearGradientUnedited,
            }}>
            <input
              type="email"
              name=""
              id="emailField"
              placeholder="email"
              ref={inpRef}
              value={emailValue}
              onChange={(event) => inputChangeHandler(event.target.value)}
            />
            <button>Submit</button>
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
