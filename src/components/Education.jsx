import React from 'react';

const Education = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ fontSize: '2rem', color: '#0077b6' }}>Education</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%', padding: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h3>Bachelor's Degree in Computer Science</h3>
          <p>XYZ University (2015 - 2019)</p>
          <p>Focus: Full Stack Development, Algorithms, Data Structures</p>
        </div>
        <div style={{ width: '45%', padding: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h3>Master's Degree in Computer Science</h3>
          <p>ABC University (2020 - 2022)</p>
          <p>Focus: Machine Learning, AI, Web Development</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
