import React from "react";
import logo from "../../assets/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Little Lemon logo" className="footer-logo" />
      <div className="footer-section">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>123 Lemon St, Chicago</li>
          <li>(312) 555-1234</li>
          <li>contact@littlelemon.com</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Social Media</h4>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;