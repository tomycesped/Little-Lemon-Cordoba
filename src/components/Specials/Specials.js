import React from "react";
import "./Specials.css";
import bruschetta from "../../assets/bruchetta.jpg";
import lemonDessert from "../../assets/lemon dessert.jpg";
import greekSalad from "../../assets/ensaladagriega.jpg";
import { MdDeliveryDining } from "react-icons/md";

const Specials = () => {
  const specials = [
    {
      id: 1,
      title: "Bruschetta",
      price: "$8.99",
      description: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, topped with fresh tomatoes and basil.",
      image: bruschetta
    },
    {
      id: 2,
      title: "Lemon Dessert",
      price: "$6.99",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert
    },
    {
      id: 3,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="btn-secondary">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="btn-order">Order for Delivery <MdDeliveryDining className="delivery-icon"/></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;