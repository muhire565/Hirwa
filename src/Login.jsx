import React, { useState } from 'react';
import './Login.css'; // Add styling for the component
import loginIcon from './images/icon30.png'; // Ensure the image is in the correct path
import ForgotPassword from './ForgotPassword';
const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [logoutMessage, setLogoutMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating login validation (replace with actual API call)
    if (formData.username === 'admin' && formData.password === 'admin') {
      setMessage('Login successful!');
      setError('');
    } else {
      setError('Invalid username or password.');
      setMessage('');
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      {/* Farmer Icon */}
      <img src={loginIcon} alt='Farmer Icon' className='login-icon' />

      {/* Dynamic Messages */}
      {message && <p className='success-message'>{message}</p>}
      {error && <p className='error-message'>{error}</p>}
      {logoutMessage && (
        <p className='logout-message'>You have been logged out successfully.</p>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>Login</button>
      </form>

      {/* Links */}
      <p>
        <a href='/register'>Don't have an account? Register here</a>
      </p>
      <p>
        <a href='/ForgotPassword'>Forgot Password?</a>
      </p>
    </div>
  );
};

export default Login;
