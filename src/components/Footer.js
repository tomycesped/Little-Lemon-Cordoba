import React from "react";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer style={{display:"flex", justifyContent:"center"}}>
        <img style={{alignSelf:"self-start"}} src={logo} alt="logo" />
      <ul style={{margin:"0"}}>
        <label>Doormat Navigation</label>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <ul style={{margin:"0"}}>
        <label>Contact</label>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
      <ul style={{margin:"0"}}>
        <label>Social Media Links</label>
        <li><a href="XXXXXXXXXXXXXXXXXXXXXXXX">Facebook</a></li>
        <li><a href="XXXXXXXXXXXXXXXXXXXXXXX">Twitter</a></li>
        <li><a href="XXXXXXXXXXXXXXXXXXXXXXXXX">Instagram</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
