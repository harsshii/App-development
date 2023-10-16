import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const Contact = () => {
  return (
    
      <div>
        
      <HeaderComponent/>
      <div>

      <div className="contact-container">
      <h2>Contact Information</h2>
      <p>
        <strong>Address:</strong> 123 Salon Street, Cityville, State, 12345
      </p>
      <p>
        <strong>Phone:</strong> 8667470164
      </p>
      <p>
        <strong>Email:</strong> xenturysalonandmakeover@gmail.com
      </p>
      </div>
      </div>
      <FooterComponent/>
    </div>
    
  );
};

export default Contact;
