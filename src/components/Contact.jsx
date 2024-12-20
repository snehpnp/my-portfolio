import React from 'react';

const Contact = ({ formData, handleInputChange, handleSubmit, submitted }) => {
  return (
    <section style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '2rem', color: '#0077b6' }}>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: '0 auto' }}
      >
        <label style={{ marginBottom: '10px' }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={{
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <label style={{ marginBottom: '10px' }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={{
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <label style={{ marginBottom: '10px' }}>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          style={{
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            resize: 'vertical',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#0077b6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      {submitted && <p style={{ color: 'green', marginTop: '10px' }}>Form submitted successfully!</p>}
    </section>
  );
};

export default Contact;
