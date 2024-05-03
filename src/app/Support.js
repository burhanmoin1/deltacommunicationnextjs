'use client'; // This is necessary for client-side hooks like useRouter
import { useState } from 'react';

import './Support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    customer_complaint_name: '',
    complaint: '',
    customer_email: '',
    customer_phone: '',
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
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Complaint submitted successfully!');
      } else {
        console.error('Failed to submit complaint');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
    return (
        <div className="supportcontainer">
            <h2 className='supportheading'>Support</h2>
            <div className='twopartcontainer'>
                <div className='Contact-Information'>
                    <h2>Contact Information</h2>
                    <p>If you prefer to contact us directly, you can reach us using the following details:</p>
                    <p>
                    <strong>Address:</strong> Plot no.23-F, 3rd floor Muhammad Ali Society, Karachi
                    </p>
                    <p>
                    <strong>Phone:</strong> <a href="tel:+923219244672">+923219244672</a>
                    </p>
                    <p>
                    <strong>Email:</strong> <a href="mailto:deltacn@gmail.com">deltacn@gmail.com</a>
                    </p>
                </div>
                <div className='contactus'>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
                    <p>For customer support, please use the form below:</p>

                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-divider">
                        <label className='sup-label' htmlFor="customer_complaint_name">Full Name:</label>
                        <input
                            type="text"
                            id="customer_complaint_name"
                            name="customer_complaint_name"
                            value={formData.customer_complaint_name}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-divider">
                        <label className='sup-label' htmlFor="complaint">Complaint:</label>
                        <textarea
                            id="complaint"
                            name="complaint"
                            rows="4"
                            cols="50"
                            value={formData.complaint}
                            onChange={handleChange}
                            required
                        ></textarea>
                        </div>

                        <div className="form-divider">
                        <label className='sup-label' htmlFor="customer_email">Email:</label>
                        <input
                            type="email"
                            id="customer_email"
                            name="customer_email"
                            value={formData.customer_email}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-divider">
                        <label className='sup-label' htmlFor="customer_phone">Phone number:</label>
                        <input
                            type="tel"
                            id="customer_phone"
                            name="customer_phone"
                            value={formData.customer_phone}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-divider">
                        <button className="supportform-button" type="submit">
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;