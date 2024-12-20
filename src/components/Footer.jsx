import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#000000', // Set background to black
        color: 'white', // Set font color to white
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <p>&copy; 2024 Sneh Jaiswal. All rights reserved.</p>
      <div>
        <a href="https://linkedin.com" style={{ margin: '0 10px' }}>
          <FaLinkedin color="white" />
        </a>
        <a href="https://github.com/snehpnp" style={{ margin: '0 10px' }}>
          <FaGithub color="white" />
        </a>
        <a href="https://twitter.com" style={{ margin: '0 10px' }}>
          <FaTwitter color="white" />
        </a>
        <a href="https://instagram.com" style={{ margin: '0 10px' }}>
          <FaInstagram color="white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
