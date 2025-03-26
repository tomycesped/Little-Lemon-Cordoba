import React from "react";
import "./About.css";
import restaurant from "../../assets/restaurant.jpg";
import restaurantChef from "../../assets/restaurant chef B.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h3>Little Lemon</h3>
        <h4>Chicago</h4>
        <p>
          Founded in 1995, Little Lemon brings authentic Mediterranean flavors to Chicago. 
          Our chefs combine traditional recipes with modern techniques to create unforgettable dishes.
        </p>
      </div>
      <div className="about-images">
        <img src={restaurantChef} alt="Our chefs" className="image1" />
        <img src={restaurant} alt="Our restaurant" className="image2" />
      </div>
    </section>
  );
};

export default About;