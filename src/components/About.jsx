import React from 'react';

const About = () => {
  // Generate a unique query parameter using the current timestamp
  const uniqueImageUrl = `https://avatars.githubusercontent.com/u/90446545?v=4&t=${new Date().getTime()}`;

  return (
    <section
      style={{
        padding: '20px',
        backgroundColor: '#f4f4f4',
        marginBottom: '30px',
        animation: 'fadeIn 1.5s ease-out',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          color: '#0077b6',
          textAlign: 'center',
          animation: 'slideIn 1s ease-out',
          marginBottom: '20px',
        }}
      >
        About Me 😊
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeIn 1.5s ease-out',
        }}
      >
        <img
          src={uniqueImageUrl}
          alt="Sneh Jaiswal"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '10%',
            marginRight: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            animation: 'bounce 2s infinite',
          }}
        />
        <p style={{ maxWidth: '600px', textAlign: 'justify', animation: 'fadeIn 2s ease-out' }}>
          Hi! 👋 I am Sneh Jaiswal, a passionate Full Stack Developer 🚀 with a knack for building dynamic, 
          responsive, and user-friendly web applications. I have a strong academic background 📚, having 
          completed my graduation and post-graduation. My journey in the world of tech has been fueled by 
          my love for innovation, problem-solving, and continuous learning. 🌟
          <br />
          When I’m not coding, you can find me exploring new technologies 🖥️, working on exciting side 
          projects ✨, or diving into the world of design to create intuitive user interfaces 🎨. I believe 
          in staying curious and always pushing the boundaries of what’s possible.
          <br />
          Here are a few things that define me:
          <ul>
            <li>🌱 Always learning and growing.</li>
            <li>⚡ Enthusiastic about creating efficient and scalable solutions.</li>
            <li>🤝 Enjoy collaborating with like-minded individuals and teams.</li>
            <li>🎯 Focused on delivering value through my work.</li>
          </ul>
          Let’s connect and build something amazing together! 🌍
        </p>
      </div>

      {/* Adding animations using CSS keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
