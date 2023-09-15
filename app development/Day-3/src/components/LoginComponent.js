import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (username === 'Username' && password === 'Password') {
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
    
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

export default LoginComponent;
