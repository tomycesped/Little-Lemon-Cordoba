import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { ReactComponent as Hamburger } from "../../assets/🦆 icon _hamburger menu_.svg";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Little Lemon logo" className="nav-logo" />
      </Link>
      
      <button 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Hamburger />
      </button>
      
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;