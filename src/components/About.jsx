import React from 'react';
import DummyImg from '../assets/Images/tt.png'

const About = () => {
  // Generate a unique query parameter using the current timestamp
  // const uniqueImageUrl = `https://avatars.githubusercontent.com/u/90446545?v=4&t=${new Date().getTime()}`;
  const uniqueImageUrl = DummyImg


  return (
    <section
      style={{
        padding: '20px',
        backgroundColor: 'black', // Dark background for contrast
        marginBottom: '20px',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(5, 5, 5, 0.93)',
        color: 'white',
        display: 'flex',
        flexDirection: 'row', // Horizontal layout
        justifyContent: 'space-between', // Distribute space between image and content
        alignItems: 'center', // Vertically center the content
        // animation: 'fadeIn 2s ease-out',
      }}
    >
      <div style={{ width: '50%', textAlign: 'center' }}>
        <img
          src={uniqueImageUrl}
          alt="Sneh Jaiswal"
          style={{
            width: '800px',
            height: '600px',
            // maxWidth: '300px', // Limit the image size
            borderRadius: '5%',
            boxShadow: '0 4px 6px rgb(0, 0, 0)',
            marginBottom: '20px',
            // animation: 'bounce 2s infinite',
          }}
        />
      </div>

      <div style={{ width: '50%', paddingLeft: '20px', textAlign: 'left' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            color: '#00bcd4', // Light blue for header
            marginBottom: '30px',
            // animation: 'slideIn 1s ease-out',
          }}
        >
          About Me 😊
        </h2>
        <p style={{ maxWidth: '800px', lineHeight: '1.6' }}>
          Hi! 👋 I am Sneh Jaiswal, a passionate Full Stack Developer 🚀 with a knack for building dynamic,
          responsive, and user-friendly web applications. I have a strong academic background 📚, having completed
          my graduation and post-graduation. My journey in the world of tech has been fueled by my love for innovation,
          problem-solving, and continuous learning. 🌟
          <br />
          When I’m not coding, you can find me exploring new technologies 🖥️, working on exciting side projects ✨,
          or diving into the world of design to create intuitive user interfaces 🎨. I believe in staying curious and
          always pushing the boundaries of what’s possible.
          <br />
          Here are a few things that define me:
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
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
