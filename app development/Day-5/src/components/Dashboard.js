import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import HeaderComponent from './HeaderComponent';
import './Dashboard.css';

const data = [
  { name: 'Jan', lineValue: 400, barValue: 200 },
  { name: 'Feb', lineValue: 300, barValue: 250 },
  { name: 'Mar', lineValue: 600, barValue: 350 },
  { name: 'Apr', lineValue: 200, barValue: 150 },
  { name: 'May', lineValue: 700, barValue: 300 },
  { name: 'June', lineValue: 300, barValue: 180 },
  { name: 'July', lineValue: 500, barValue: 400 },
  { name: 'August', lineValue: 450, barValue: 300 },
];

const dataa = [
  { name: 'Jan', lineValue: 10000, barValue: 5000 },
  { name: 'Feb', lineValue: 30000, barValue: 15000 },
  { name: 'Mar', lineValue: 45000, barValue: 20000 },
  { name: 'Apr', lineValue: 20000, barValue: 10000 },
  { name: 'May', lineValue: 78000, barValue: 40000 },
  { name: 'June', lineValue: 85000, barValue: 45000 },
  { name: 'July', lineValue: 41000, barValue: 20000 },
  { name: 'August', lineValue: 15000, barValue: 7000 },
];

const Dashboard = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="charts-container">
        <div className="chart">
          <h2>Customers</h2>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="lineValue" stroke="#000000" />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>

        <div className="chart">
          <h2>Income</h2>
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Bar
  dataKey="barValue"
  fill="#FFC0CB"  
  stroke="#FF1493" 
  strokeWidth={1} 
/>
            <Tooltip />
            <Legend />
          </BarChart>
        </div>

        <div className="chart">
          <h2>Stylists booked</h2>
          <LineChart width={400} height={300} data={dataa}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="lineValue" stroke="#000000" />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>

        <div className="chart">
          <h2>Income</h2>
          <BarChart width={400} height={300} data={dataa}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Bar
  dataKey="barValue"
  fill="#FFC0CB"  
  stroke="#FF1493" 
  strokeWidth={1} 
/>
            <Tooltip />
            <Legend />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
