import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.svg";
import { ReactComponent as Hamburger } from "../../assets/🦆 icon _hamburger menu.svg";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Añade/remueve la clase al body
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Limpia el efecto
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <img src={logo} alt="Little Lemon logo" className="nav-logo" />
      
      <button 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Hamburger />
      </button>
      
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="/#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="/#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
        <li><a href="/#reservations" onClick={() => setIsOpen(false)}>Reservations</a></li>
        <li><a href="/#order" onClick={() => setIsOpen(false)}>Order Online</a></li>
        <li><a href="/#login" onClick={() => setIsOpen(false)}>Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;