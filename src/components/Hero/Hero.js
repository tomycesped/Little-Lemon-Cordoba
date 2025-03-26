import React from "react";
import "./Hero.css";
import restaurantFood from "../../assets/restaurant.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="btn-primary">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="Little Lemon dishes" />
      </div>
    </section>
  );
};

export default Hero;