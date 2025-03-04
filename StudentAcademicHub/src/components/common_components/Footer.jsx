import React from "react";
import "./Footer.css"; // Importing Footer-specific CSS

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Web Links */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Web Links</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Signup">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
      </ul>

      {/* Social Media */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Social Media</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Facebook</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Instagram</a>
        </li>
      </ul>

      {/* About Us */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled bold-text">Our website helps students</span>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled bold-text">to connect with seniors and their classmates</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
