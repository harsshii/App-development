import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import './Appointment.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';


const Appointment = () => {
  // const history = useHistory();
 
  const nav=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const newAppointment = {
    name,
    email,
    phone,
    selectedDate,
    selectedTime
  };

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
    // Retrieve existing appointments from local storage
  const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

  // Update the list of appointments with the new appointment
  const updatedAppointments = [...existingAppointments, newAppointment];

  // Save the updated appointments to local storage
  localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    // Handle form submission here

    // Redirect to the view appointments page
    // history.push('/viewappointment');
    nav("/viewappointment")
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
      <FooterComponent/>
    </div>
  );
};

export default Appointment;
