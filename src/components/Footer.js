// Footer.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import GitHub icon
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span>&#169;</span> Made By Priyanka Marathe
      </p>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/priyanka-marathe-/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/priyankamarathecode/food-app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
