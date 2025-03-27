import React, { useState, useContext } from 'react';
import { ReservationContext } from '../../../context/ReservationContext';
import './BookingForm.css';

const BookingForm = () => {
  const { availableTimes, dispatch } = useContext(ReservationContext);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateAvailableTimes = () => {
    const times = [];
    for (let hour = 18; hour <= 23; hour++) {
      times.push(`${hour}:00`);
    }
    return times;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    if (!guests || isNaN(guests) || Number(guests) < 1 || Number(guests) > 20) {
      newErrors.guests = 'Please enter a number between 1 and 20';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log("Reservation submitted:", { date, time, guests: Number(guests), occasion });
      setDate('');
      setTime('');
      setGuests('1');
      setOccasion('');
      setErrors({});
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const handleGuestsChange = (e) => {
    const value = e.target.value;
    setGuests(value);
    
    if (errors.guests && value && !isNaN(value) && Number(value) >= 1 && Number(value) <= 20) {
      setErrors(prev => ({ ...prev, guests: undefined }));
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate aria-labelledby="reservation-heading">
      {isSubmitted && (
        <section aria-live="polite" className="success-message">
          ¡Reserva enviada con éxito! Pronto nos contactaremos contigo.
        </section>
      )}
      
      <h2 id="reservation-heading" className="visually-hidden">Reservation Form</h2>
      
      <fieldset>
        <legend className="visually-hidden">Reservation Details</legend>
        
        <div className="form-group">
          <label htmlFor="res-date">
            Choose date <span className="required-indicator">*</span>
          </label>
          <input 
            type="date" 
            id="res-date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            aria-invalid={!!errors.date}
            aria-required="true"
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date && <p id="date-error" className="error" role="alert">{errors.date}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="res-time">
            Choose time <span className="required-indicator">*</span>
          </label>
          <select 
            id="res-time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-invalid={!!errors.time}
            aria-required="true"
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            <option value="">Select a time</option>
            {generateAvailableTimes().map((timeOption) => (
              <option key={timeOption} value={timeOption}>{timeOption}</option>
            ))}
          </select>
          {errors.time && <p id="time-error" className="error" role="alert">{errors.time}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="guests">
            Number of guests <span className="required-indicator">*</span>
          </label>
          <input 
            type="number" 
            id="guests" 
            value={guests}
            onChange={handleGuestsChange}
            placeholder="1" 
            min="1" 
            max="20" 
            required
            aria-invalid={!!errors.guests}
            aria-required="true"
            aria-describedby={errors.guests ? "guests-error" : undefined}
          />
          {errors.guests && <p id="guests-error" className="error" role="alert">{errors.guests}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select 
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            aria-describedby="occasion-help"
          >
            <option value="">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <p id="occasion-help" className="help-text">Optional</p>
        </div>
      </fieldset>
      
      <button 
        type="submit" 
        className="submit-btn"
        aria-label="On Click, Make your reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;