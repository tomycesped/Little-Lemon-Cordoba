import React from 'react';
import BookingForm from './Form/BookingForm';

const BookingPage = () => {
  return (
    <section className="booking-page">
      <h2>Make a Reservation</h2>
      <BookingForm />
    </section>
  );
};

export default BookingPage;