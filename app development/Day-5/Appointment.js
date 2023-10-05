import React, { useState } from 'react';
import './Appointment.css';
import HeaderComponent from './HeaderComponent'; // Import HeaderComponent

const Appointment = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Appointment submitted:', { name, email, phone, selectedDate, selectedTime });
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
        <button type="submit">Submit Appointment</button>
      </form>
      </div>
      </div>
    
  );
};

export default Appointment;
