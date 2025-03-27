import React from "react";
import logo from "../../assets/logobien.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-header-text">
          <div className="title">
            <img src={logo} alt="Little Lemon logo" className="footer-logo" />
            <span>Authentic Mediterranean cuisine</span>
          </div>
          <p className="subtitle">by @tomcesped</p>
        </div>
      </div>
      <div className="footer-content">
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
            <li>123 Lemon St, Córdoba</li>
            <li>(312) 123-4567</li>
            <li>tomcesped7@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Socials</h4>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/tomycesped">Github</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/tomcesped">Linkedin</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://tomcesped.vercel.app">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;