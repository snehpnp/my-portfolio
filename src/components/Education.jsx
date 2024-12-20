import React from 'react';

const Education = () => {
  return (
    <section
      style={{
        padding: '40px',
        backgroundColor: 'black', // Dark background for the section
        color: 'white', // White text color
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', color: '#00bcd4', textAlign: 'center', marginBottom: '40px' }}>
        🎓 Education
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '30px',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        {/* Bachelor's Degree Card */}
        <div
          style={{
            width: '45%',
            padding: '25px',
            backgroundColor: '#1e1e1e', // Darker card background
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
        >
          <h3 style={{ fontSize: '1.9rem', color: '#00bcd4' }}>
            🎓 Bachelor's Degree in Computer Science
          </h3>
          <p style={{ fontSize: '1.3rem' }}>XYZ University (2015 - 2019)</p>
          <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
            Focus: Full Stack Development, Algorithms, Data Structures
          </p>
        </div>

        {/* Master's Degree Card */}
        <div
          style={{
            width: '45%',
            padding: '25px',
            backgroundColor: '#1e1e1e', // Darker card background
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
        >
          <h3 style={{ fontSize: '1.9rem', color: '#00bcd4' }}>
            🎓 Master's Degree in Computer Science
          </h3>
          <p style={{ fontSize: '1.3rem' }}>ABC University (2020 - 2022)</p>
          <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
            Focus: Machine Learning, AI, Web Development
          </p>
        </div>
      </div>

      {/* Adding hover effects for the cards */}
      <style>
        {`
          div:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </section>
  );
};

export default Education;
