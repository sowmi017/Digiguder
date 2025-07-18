import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={headingStyle}>📱 Jnanadeepa</h3>
          <p style={textStyle}>
            {t('footer.description')}
          </p>
        </div>

        <div style={columnStyle}>
          <h4 style={subHeadingStyle}>📞 {t('footer.contact_us')}</h4>
          <ul style={listStyle}>
            <li>📧 {t('footer.email')}: <a href="mailto:jnanadeepa@gmail.com" style={linkStyle}>jnanadeepa@gmail.com</a></li>
            <li>📸 {t('footer.instagram')}: <a href="https://www.instagram.com/jnanadeepa" target="_blank" rel="noopener noreferrer" style={linkStyle}>@jnanadeepa</a></li>
            <li>💬 {t('footer.whatsapp')}: <a href="https://chat.whatsapp.com/YourGroupLink" target="_blank" rel="noopener noreferrer" style={linkStyle}>{t('footer.join_now')}</a></li>
          </ul>
        </div>
      </div>

      <div style={copyright}>
        © {new Date().getFullYear()} Jnanadeepa. {t('footer.rights')}
      </div>
    </footer>
  );
};

// 🎨 Classic & clean styling
const footerStyle = {
  backgroundColor: '#f4ecff',
  color: '#333',
  padding: '2.5rem 1rem',
  fontFamily: 'Segoe UI, sans-serif',
  borderTop: '1px solid #ccc'
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '2rem',
  maxWidth: '1000px',
  margin: '0 auto'
};

const columnStyle = {
  flex: '1',
  minWidth: '250px'
};

const headingStyle = {
  fontSize: '1.3rem',
  marginBottom: '1rem',
  color: '#5a189a'
};

const subHeadingStyle = {
  fontSize: '1.1rem',
  marginBottom: '1rem',
  color: '#7b2cbf'
};

const textStyle = {
  lineHeight: '1.6',
  fontSize: '0.95rem',
  color: '#444'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  fontSize: '0.95rem'
};

const linkStyle = {
  color: '#5a189a',
  textDecoration: 'none',
  fontWeight: '500'
};

const copyright = {
  textAlign: 'center',
  marginTop: '2rem',
  fontSize: '0.85rem',
  color: '#888'
};

export default Footer;
