// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, link }) => {
  const isYoutube = link.includes('youtube.com');
  const isPDF = link.endsWith('.pdf');

  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>{title}</h4>
      <p style={descStyle}>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        {isYoutube ? '▶️ Watch Video' : isPDF ? '📄 View PDF' : '🔗 Open Link'}
      </a>
    </div>
  );
};

// 🔧 Styles
const cardStyle = {
  background: '#fff',
  padding: '1rem',
  margin: '1rem 0',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const titleStyle = {
  margin: '0 0 0.5rem',
  color: '#6a0572',
};

const descStyle = {
  marginBottom: '0.75rem',
  color: '#444',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#9d4edd',
  fontWeight: 'bold',
};

export default Card;
