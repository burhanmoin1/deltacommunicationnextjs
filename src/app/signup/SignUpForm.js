'use client'
import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    internetPackage: 'basic',
    cablePackage: 'cable',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Customer created successfully!');
      } else {
        console.error('Failed to create new customer');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="form-container">
      <form className="formsignup" onSubmit={handleSubmit}>
        <div className="sup-label">
          <h2 className="form-heading">Sign Up</h2>
          <p className="form-paragraph">Please fill in this form to create an account.</p>
        </div>
        <div>
          <input
            type="text"
            name="name" // Ensure all elements have a name attribute
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="address" // Ensure the name attribute matches formData key
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="internet-value">
          <select
            name="internetPackage" // Corrected to use handleChange
            value={formData.internetPackage}
            onChange={handleChange} // Consistent event handler
          >
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="void">Void</option>
          </select>
        </div>
        <div className="cable-value">
          <select
            name="cablePackage" // Corrected to use handleChange
            value={formData.cablePackage}
            onChange={handleChange} // Consistent event handler
          >
            <option value="cable">Yes</option>
            <option value="no-cable">No</option>
          </select>
        </div>
        <button className="signup-button" type="submit">
          Create Customer
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
