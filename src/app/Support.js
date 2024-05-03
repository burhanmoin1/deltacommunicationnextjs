'use client';
import { useState } from 'react';

import './Support.css';

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
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        setSubmissionStatus('success'); // Set submission status to success
      } else {
        setSubmissionStatus('failure'); // Set submission status to failure
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setSubmissionStatus('error'); // Set submission status to error
    }
  };

  return (
    <section id='support'>
      <div className="supportcontainer">
        <h2 className='supportheading'>Support</h2>
        <div className='twopartcontainer'>
          <div className='Contact-Information'>
            <h2 className='contactheading'>Contact Information</h2>
            <p className='contactparagraph'>If you prefer to contact us directly, you can reach us using the following details:</p>
            <p className='contactparagraph'>
              <strong>Address:</strong> Plot no.23-F, 3rd floor Muhammad Ali Society, Karachi
            </p>
            <p className='contactparagraph'>
              <strong>Phone:</strong> <a href="tel:+923219244672">+923219244672</a>
            </p>
            <p className='contactparagraph'>
              <strong>Email:</strong> <a href="mailto:deltacn@gmail.com">deltacn2011@gmail.com</a>
            </p>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7086306984525!2d67.07586637607524!3d24.873799144722373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ebbda85f009%3A0xfb68fac05dceb842!2s23%20Street%203%2C%20Block%20B%20Al%20Hamra%20Society%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714746717134!5m2!1sen!2s"
                className="google-map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className='contactus'>
            <h2 className='contact-heading'>Contact Us</h2>
            <p className='contact-paragraph'>If you have any questions or inquiries, please feel free to get in touch with us.</p>
            <p className='contact-paragraph'>For customer support, please use the form below:</p>

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
              ></textarea>

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
                <div className="success-message">
                  Complaint submitted successfully!
                </div>
              )}
              {submissionStatus === 'failure' && (
                <div className="failure-message">
                  Failed to submit complaint. Please try again.
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="error-message">
                  An error occurred while submitting the complaint. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
