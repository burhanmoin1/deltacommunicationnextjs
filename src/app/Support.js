'use client';
import { useState } from 'react';
import axios from 'axios';

const Support = () => {
  const [formData, setFormData] = useState({
    customer_complaint_name: '',
    complaint: '',
    customer_email: '',
    customer_phone: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(''); // New state variable for submission status

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
      const response = await axios.post('/api/complaints', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('failure');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder='Full Name'
        id="customer_complaint_name"
        name="customer_complaint_name"
        value={formData.customer_complaint_name}
        onChange={handleChange}
        required
      />

      <textarea
        id="complaint"
        name="complaint"
        placeholder='Message'
        value={formData.complaint}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        id="customer_email"
        name="customer_email"
        placeholder='Email Address'
        value={formData.customer_email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        id="customer_phone"
        name="customer_phone"
        placeholder='Phone number'
        value={formData.customer_phone}
        onChange={handleChange}
        required
      />

      <button className="supportform-button" type="submit">
        Submit
      </button>

      {submissionStatus === 'success' && (
        <div className="success-message">Complaint submitted successfully!</div>
      )}
      {submissionStatus === 'failure' && (
        <div className="failure-message">Failed to submit complaint. Please try again.</div>
      )}
      {submissionStatus === 'error' && (
        <div className="error-message">An error occurred while submitting the complaint. Please try again later.</div>
      )}
    </form>
  );
};

export default Support;
