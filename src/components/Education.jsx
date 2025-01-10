import React from 'react';

const Education = () => {
  return (
    <section
      style={{
        padding: '50px',
        backgroundColor: 'Black', // Dark background for the section
        color: 'white', // White text color
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        marginBottom: '40px', // Space below the section
        animation: 'fadeIn 1s ease-out',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          color: '#00bcd4',
          textAlign: 'center',
          marginBottom: '40px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
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
            padding: '30px',
            backgroundColor: '#1a1a1a', // Darker background for the card
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <h3 style={{ fontSize: '2rem', color: '#00bcd4' }}>
            🎓 BCA + IT from SSIM College & Vikram University
          </h3>
          <p style={{ fontSize: '1.3rem' }}>SSIM College, Vikram University (2015 - 2019)</p>
          <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
            Focus: Full Stack Development, Algorithms, IT Infrastructure
          </p>
        </div>

        {/* Master's Degree Card */}
        <div
          style={{
            width: '45%',
            padding: '30px',
            backgroundColor: '#1a1a1a', // Darker background for the card
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <h3 style={{ fontSize: '2rem', color: '#00bcd4' }}>
            🎓 MCA from Mathura Devi College
          </h3>
          <p style={{ fontSize: '1.3rem' }}>Mathura Devi College (2020 - 2022)</p>
          <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
            Focus: Machine Learning, AI, Web Development
          </p>
        </div>
      </div>

      {/* Adding hover effects for the cards */}
      <style>
        {`
          div:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Education;
