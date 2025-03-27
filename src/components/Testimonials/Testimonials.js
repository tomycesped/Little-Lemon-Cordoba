import React from "react";
import "./Testimonials.css";
import thomas from "../../assets/roman.jpg";
import pablo from "../../assets/pablo.jpg";
import selena from "../../assets/selena.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Thomas Cespedes",
      rating: 5,
      review: "The bruschetta was absolutely divine! Perfectly crispy bread with the freshest toppings. I'll definitely be back!",
      photo: thomas
    },
    {
      id: 2,
      name: "Pablo Benitez",
      rating: 4,
      review: "Great atmosphere and delicious lemon dessert. The service was excellent, though the wait time was a bit long.",
      photo: pablo
    },
    {
      id: 3,
      name: "Selena Acevedo",
      rating: 5,
      review: "Every dish we tried was exceptional. The Greek salad was so fresh and flavorful. Highly recommend this place!",
      photo: selena
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</div>
            <div className="reviewer">
              <img src={testimonial.photo} alt={testimonial.name} />
              <span>{testimonial.name}</span>
            </div>
            <p>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;