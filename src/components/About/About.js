import React from "react";
import "./About.css";
import marioandadrian from "../../assets/marioandadrian.jpg";
import mario from "../../assets/mario.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h3>Little Lemon</h3>
        <h4>Córdoba</h4>
        <p>
          Founded in 1995, Little Lemon brings authentic Mediterranean flavors to Córdoba. 
          Our chefs combine traditional recipes with modern techniques to create unforgettable dishes.
        </p>
      </div>
      <div className="about-images">
        <img src={marioandadrian} alt="Our chefs" className="image1" />
        <img src={mario} alt="Our restaurant" className="image2" />
      </div>
    </section>
  );
};

export default About;