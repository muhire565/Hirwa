import React, { useState } from 'react';
import './Register.css'; // Create a corresponding CSS file for styles

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission (e.g., via fetch or axios)
    console.log('Submitted Data:', formData);

    // Example: Post to the backend
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Registration successful!');
        } else {
          throw new Error('Registration failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Choose a Username'
          required
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Your Email'
          required
        />
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Create a Password'
          required
        />

        {/* Role Selection */}
        <select
          name='role'
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value='' disabled>
            Select Your Role
          </option>
          <option value='ROLE_USER'>Customer</option>
          <option value='ROLE_SELLER'>Farmer</option>
        </select>

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
