// Appointment.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Appointment.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const Appointment = () => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentDetails = {
      name,
      email,
      phone,
      selectedDate,
      selectedTime
    };

    try {
      const response = await fetch('http://localhost:8181/appointments/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentDetails),
      });

      if (response.ok) {
        console.log('Appointment booked successfully');
        nav('/paymentmethod');
      } else {
        const error = await response.json();
        console.error('Appointment booking failed:', error);
      }
    } catch (error) {
      console.error('Appointment booking failed:', error);
    }
  };

  return (
    <div>
      <HeaderComponent />
      <div className="appointment-container">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input type="date" id="date" value={selectedDate} onChange={handleDateChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} required />
          </div>
          <button type="submit">Book Slot</button>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Appointment;
