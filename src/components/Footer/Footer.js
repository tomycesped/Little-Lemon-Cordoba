import React from "react";
import logo from "../../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src={logo} alt="Little Lemon logo" className="footer-logo" />
        <p>Authentic Mediterranean cuisine</p>
        <p>By @tomcesped</p>
      </div>

      <div className="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/booking">Reservations</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>123 Lemon St, Chicago</li>
          <li>(312) 555-1234</li>
          <li>tomcesped7@gmail.com</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Socials</h4>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/tomycesped">Github</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/tomcesped">Linkedin</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://tomcesped.vercel.app">My Portfolio</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;