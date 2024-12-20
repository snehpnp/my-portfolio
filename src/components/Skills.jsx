import React from 'react';

const Skills = () => {
  return (
    <section
      style={{
        padding: '40px 20px',
        backgroundColor: 'black', // Dark background for the section
        color: 'white', // White text color
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: 'white', // Light blue header
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Skills
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {/* Frontend Skills */}
        <div
          style={{
            width: '45%',
            padding: '20px',
            backgroundColor: '#333',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Frontend</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li>React</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div
          style={{
            width: '45%',
            padding: '20px',
            backgroundColor: '#333',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Backend</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>GraphQL</li>
          </ul>
        </div>

        {/* Tools */}
        <div
          style={{
            width: '45%',
            padding: '20px',
            backgroundColor: '#333',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Tools</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li>Git</li>
            <li>Docker</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Webpack</li>
          </ul>
        </div>

        {/* Languages */}
        <div
          style={{
            width: '45%',
            padding: '20px',
            backgroundColor: '#333',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Languages</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
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

export default Skills;
