import React from 'react';
import HeaderComponent from './HeaderComponent';
import './Dashboard.css';

const Dashboard = () => {
    const imageUrl = 'https://cdn.dribbble.com/users/881900/screenshots/10444262/salon_dashboard_4x.jpg'; // Replace with your image URL
  
    return (
      <div>
      <HeaderComponent/>
        <img src={imageUrl} alt="Dashboard Image" />
      </div>
    );
  };

export default Dashboard;
