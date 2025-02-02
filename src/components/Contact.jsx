import React, { useState, useEffect } from 'react';
import Contactsvg from '../assets/Contact.svg';

const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Animation for form fade-in
  useEffect(() => {
    setIsFormVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzQnpf5y_-4OSHac3voTyw_ezFaK8e-rWBCTB666GCjD1FQnvvdOWaxOBvdvgZ94Qgd/exec';  // Your Apps Script URL
  
    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data.status === 'success') {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        }
      })
      .catch((error) => console.error('Error!', error.message));
  };
  
  

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#000000', color: '#ffffff' }}>
       <h2
        style={{
          fontSize: "3rem",
          color: "#00bcd4",
          textAlign: "center",
          marginBottom: "40px",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
          Contect Me 📞
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '30px' }}>
        {/* Image Column */}
        <div
          style={{
            flex: '1 1 45%',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            position: 'relative',
            opacity: isFormVisible ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <img
            src={Contactsvg} // Replace with your image URL
            alt="Contact"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>

        {/* Form Column */}
        <div
          style={{
            flex: '1 1 45%',
            backgroundColor: '#1a1a1a',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            opacity: isFormVisible ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            <label style={{ fontSize: '1.1rem' }}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #444',
                fontSize: '1rem',
                backgroundColor: '#333',
                color: '#ffffff',
              }}
            />
            <label style={{ fontSize: '1.1rem' }}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #444',
                fontSize: '1rem',
                backgroundColor: '#333',
                color: '#ffffff',
              }}
            />
            <label style={{ fontSize: '1.1rem' }}>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #444',
                fontSize: '1rem',
                resize: 'vertical',
                backgroundColor: '#333',
                color: '#ffffff',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px',
                backgroundColor: '#0077b6',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.1rem',
              }}
            >
              Submit
            </button>
          </form>
          {submitted && (
            <p style={{ color: 'green', marginTop: '10px', fontSize: '1.1rem' }}>
              Form submitted successfully!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
