import React from "react";
import "./Hero.css";
import restaurantFood from "../../assets/fotoinicial.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Córdoba</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          <br />
          This site was made by @tomcesped</p>
        <button className="btn-primary">
          <Link className="btn-link" to="/booking">Reserve a Table</Link></button>
          
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="Little Lemon dishes" />
      </div>
    </section>
  );
};

export default Hero;