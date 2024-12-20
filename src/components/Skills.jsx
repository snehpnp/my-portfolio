import React from 'react';

const Skills = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#e9ecef' }}>
      <h2 style={{ fontSize: '2rem', color: '#0077b6' }}>Skills</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li style={{ marginBottom: '10px' }}>Frontend: React, Redux, HTML5, CSS3, JavaScript</li>
        <li style={{ marginBottom: '10px' }}>Backend: Node.js, Express, MongoDB</li>
        <li style={{ marginBottom: '10px' }}>Tools: Git, Docker, VS Code, Postman</li>
        <li style={{ marginBottom: '10px' }}>Languages: JavaScript, TypeScript, Python</li>
      </ul>
    </section>
  );
};

export default Skills;
