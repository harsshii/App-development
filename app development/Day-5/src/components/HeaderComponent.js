import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className='typewriter'>
        <h1>
          <i>XENTURY SALON AND MAKEOVER</i>
        </h1>
      </div>

      <button onClick={toggleDropdown} className="main-menu-button">
        ☰
      </button>

      <nav>
        <div className="navbar">
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="nav-item">
          <div className="nav-item dropdown">
            <div onClick={toggleDropdown} className="dropdown-button">
              
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/services">HairCuts</Link>
                <Link to="/services">HairStyles</Link>
                <Link to="/services">Bridal makeup</Link>
              </div>
            )}
            <Link to="/services">Services</Link>
          </div>
          </div>
          <div className="nav-item dropdown">
            <div onClick={toggleDropdown} className="dropdown-button">
             <h3>Appointment</h3>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/appointment">Book Appointment</Link>
                <Link to="/appointment">View Appointments</Link>
              </div>
            )}
          </div>
          <div className="nav-item">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
