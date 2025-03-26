import React from "react";
import "./Testimonials.css";
import john from "../../assets/lemon dessert.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "The best Mediterranean food in town!",
      photo: john
    },
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "The best Mediterranean food in town!",
      photo: john
    },
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "The best Mediterranean food in town!",
      photo: john
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">{"★".repeat(testimonial.rating)}</div>
            <div className="reviewer">
              <img src={testimonial.photo} alt={testimonial.name} />
              <span>{testimonial.name}</span>
            </div>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;