// HomeComponent.js

import React from 'react';
import HeaderComponent from './HeaderComponent';
import VideoBackground from './VideoBackground';
import './HomeComponent.css';
import FooterComponent from './FooterComponent';

const HomeComponent = () => {
  return (
    <div>
    <div className="home-container">
      <HeaderComponent />
      <VideoBackground />
      <div className="content">
        <h1>Unveil Your Inner Beauty, Pamper Your Outer Self.</h1>
        <p>Where Every Cut Tells a Story of Glamour.</p>
      </div>
    </div>

      <FooterComponent/>
    </div>
  );
};

export default HomeComponent;
