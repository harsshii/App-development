import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminSignup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = { email, password, username };

    // ... validation code

    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:8181/usersignup/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      });

      if (response.ok) {
        console.log('New details Added');
        console.log(JSON.stringify(details));
        console.log(e);
        navigate('/login');
      } else {
        const error = await response.json();
        setErrorMessage(error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="form-group">
          <p>
            Already a Customer? <Link to="/login">Login here</Link>.
          </p>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default AdminSignup;
