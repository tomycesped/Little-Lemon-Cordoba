import React from 'react';
import BookingForm from './Form/BookingForm';
import restaurantImage from '../../assets/restaurant.jpg';
import './BookingPage.css';

const BookingPage = () => {
  return (
    <section className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h1>Make a Reservation</h1>
          <p>
            Reserve your table at Little Lemon and enjoy an authentic 
            Mediterranean dining experience with fresh ingredients and 
            traditional recipes.
          </p>
        </div>

        <div className="booking-content">
          <div className="booking-form-container">
            <BookingForm />
          </div>
          
          <img 
            src={restaurantImage} 
            alt="Little Lemon Restaurant interior" 
            className="booking-image"
          />
        </div>

        <div className="booking-info">
          <h2>Reservation Information</h2>
          <ul>
            <li>We hold reservations for 15 minutes past the booked time</li>
            <li>Large groups (12+ people) please call us directly</li>
            <li>Special dietary requirements can be noted when booking</li>
            <li>Outdoor seating is available weather permitting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;