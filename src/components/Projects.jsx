import React from 'react';

const Projects = () => {
  const projectCardStyle = {
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const projectCardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const iframeStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '10px',
    border: 'none',
    marginBottom: '15px',
  };

  const projects = [
    {
      title: 'Smart Algo',
      description:
        'An advanced algorithmic trading platform supporting multiple brokers like Angel, Zerodha, Market Hub, Dhan, and others. Includes features like Algo Bridge for seamless trading.',
      technology: 'React, Redux, Node.js, Express, MongoDB',
      github: 'https://github.com/example/smart-algo',
      demo: 'https://newpenal.pandpinfotech.com/#/login',
    },
    {
      title: 'Out Book',
      description:
        'A project designed for Chartered Accountants to manage customers and complex queries. Includes SSO authentication and advanced customer management features.',
      technology: 'React, Node.js, SQL Server',
      github: 'https://github.com/example/out-book',
      demo: 'https://outbooks.tradestreet.in/#/login'
    },
    {
      title: 'Esign',
      description:
        'An e-signature platform utilizing government-approved APIs like SurePass. Streamlines document signing with advanced verification.',
      technology: 'React, Firebase, SurePass API',
      github: 'https://github.com/example/esign',
      demo: 'https://app.esignaadhaar.com',
    },
    {
      title: 'Connect Box',
      description:
        'A trading-related B2B application that allows businesses to provide services to multiple clients. Includes online payment integration using Razorpay and multi-broker setup.',
      technology: 'React, Redux, Node.js, Razorpay API',
      github: 'https://github.com/example/connect-box',
      demo: 'https://connectbox.tradestreet.in/#/login',
    },
  ];

  return (
    <section style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#0077b6', textAlign: 'center', marginBottom: '30px' }}>
        Projects
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={projectCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style = { ...projectCardStyle, ...projectCardHoverStyle })}
            onMouseLeave={(e) => (e.currentTarget.style = projectCardStyle)}
          >
            <h3>{project.title}</h3>
            <iframe src={project.demo} title={project.title} style={iframeStyle}></iframe>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Technology:</strong> {project.technology}</p>
            {/* <p>
              <strong>GitHub:</strong>{' '}
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                {project.github}
              </a>
            </p> */}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
