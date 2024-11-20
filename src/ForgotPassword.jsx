import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setMessage('A reset link has been sent to your email.');
    } else {
      setMessage('Please enter a valid email.');
    }

    setEmail('');
  };

  return (
    <div className='forgot-password-container'>
      <h1>Reset Password</h1>
      <p className='motivational-text'>
        Enter your email where the reset link will be sent
      </p>

      {message && <div className='message'>{message}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type='submit'>Send Reset Link</button>
      </form>

      <p>
        <a href='/login'>Want to return to login? Click here</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
