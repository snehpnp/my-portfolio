import React, { useState } from 'react';
import Contactsvg from '../assets/Contact.svg';

const Contact = ({ formData, handleInputChange, handleSubmit, submitted }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Animation for form fade-in
  React.useEffect(() => {
    setIsFormVisible(true);
  }, []);

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#000000', color: '#ffffff' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#ffffff', textAlign: 'center' }}>Contact Me</h2>
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
