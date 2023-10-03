import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';

import Contact from './components/Contact';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Dashboard from './components/Dashboard';
import HomeComponent from './components/HomeComponent';
import ViewAppointment from './components/ViewAppointment';
import Terms from './components/Terms';
import PrivacyPolicy from './components/Privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path='/home' element={<HomeComponent/>}/> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/viewappointment' element={<ViewAppointment/>}/> 
        

      </Routes>
    </Router>
  );
}

export default App;
