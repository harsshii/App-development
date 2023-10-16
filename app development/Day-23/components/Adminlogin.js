import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(email, password);
      if (response.ok) {
        const token = await response.text();
        localStorage.setItem('token', token);
        alert('Login successful!');
        navigate('/');
      } else {
        const error = await response.json();
        setErrorMessage(error.message || 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const loginUser = async (email, password) => {
    const response = await fetch('http://localhost:8181/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>

      <form onSubmit={handleFormSubmit}>
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

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="form-group">
          <p>
            New Customer? <Link to="/signup">Sign up here</Link>.
          </p>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
