import React from 'react';

const Education = () => {
  return (
    <section
      style={{
        padding: '20px',
        backgroundColor: 'black', // Black background for the section
        color: 'white', // White text color
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', color: 'white', textAlign: 'center', marginBottom: '30px' }}>
        Education
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <div
          style={{
            width: '45%',
            padding: '20px',
            backgroundColor: '#333', // Dark background for the card
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Bachelor's Degree in Computer Science</h3>
          <p style={{ fontSize: '1.2rem' }}>XYZ University (2015 - 2019)</p>
          <p style={{ fontSize: '1rem', marginTop: '10px' }}>
            Focus: Full Stack Development, Algorithms, Data Structures
          </p>
        </div>
        <div
          style={{
            width: '45%',
            padding: '20px',
            backgroundColor: '#333', // Dark background for the card
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Master's Degree in Computer Science</h3>
          <p style={{ fontSize: '1.2rem' }}>ABC University (2020 - 2022)</p>
          <p style={{ fontSize: '1rem', marginTop: '10px' }}>
            Focus: Machine Learning, AI, Web Development
          </p>
        </div>
      </div>

      {/* Adding hover effects for the cards */}
      <style>
        {`
          div:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </section>
  );
};

export default Education;
