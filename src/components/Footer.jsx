import React, { memo } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = memo(() => {
  return (
    <footer
      style={{
        backgroundColor: '#000000',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <p>&copy; 2025 Sneh Jaiswal. All rights reserved.</p>
      <div>
        <a
          href="https://linkedin.com"
          style={{
            margin: '0 10px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          <FaLinkedin color="white" style={{ transition: 'none' }} />
        </a>
        <a
          href="https://github.com/snehpnp"
          style={{
            margin: '0 10px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          <FaGithub color="white" style={{ transition: 'none' }} />
        </a>
        <a
          href="https://twitter.com"
          style={{
            margin: '0 10px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          <FaTwitter color="white" style={{ transition: 'none' }} />
        </a>
        <a
          href="https://instagram.com"
          style={{
            margin: '0 10px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          <FaInstagram color="white" style={{ transition: 'none' }} />
        </a>
      </div>
    </footer>
  );
});

export default Footer;