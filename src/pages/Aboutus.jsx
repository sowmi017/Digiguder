// ✅ AboutUs.jsx (Multilingual with Translations)
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div style={outerContainer}>
      <h1 style={pageTitle}>✨ {t('about.title')} ✨</h1>

      {/* Vision Section */}
      <section style={cardSection}>
        <div style={textBlock}>
          <h2 style={cardHeading}>🌟 {t('about.vision_heading')}</h2>
          <p style={cardText}>{t('about.vision_text')}</p>
        </div>
        <img
          src="ww.jpeg"
          alt="Vision"
          style={cardImage}
        />
      </section>

      {/* Mission Section */}
      <section style={cardSectionReverse}>
        <img
          src="mis.jpg"
          alt="Mission"
          style={cardImage}
        />
        <div style={textBlock}>
          <h2 style={cardHeading}>🚀 {t('about.mission_heading')}</h2>
          <p style={cardText}>{t('about.mission_text')}</p>
        </div>
      </section>

      {/* Why Jnanadeepa Section */}
      <section style={cardSection}>
        <div style={textBlock}>
          <h2 style={cardHeading}>💡 {t('about.why_heading')}</h2>
          <p style={cardText}>{t('about.why_text')}</p>
        </div>
        <img
           src="/logo.PNG" alt="Jnanadeepa Logo"
          style={cardImage}
        />
      </section>
    </div>
  );
};

export default AboutUs;

// 🔧 Styles
const outerContainer = {
  padding: '3rem 1.5rem',
  background: 'linear-gradient(to bottom right, #fff5fc, #f1edff)',
  fontFamily: "'Poppins', sans-serif",
  color: '#36125e',
};

const pageTitle = {
  fontSize: '2.4rem',
  textAlign: 'center',
  color: '#620d91',
  marginBottom: '3rem',
  fontWeight: '600',
};

const cardSection = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '2rem',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '2rem',
  marginBottom: '3rem',
  boxShadow: '0 8px 24px rgba(100, 40, 160, 0.08)',
};

const cardSectionReverse = {
  ...cardSection,
  flexDirection: 'row-reverse',
};

const cardImage = {
  width: '380px',
  maxWidth: '100%',
  borderRadius: '12px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
};

const textBlock = {
  flex: '1 1 460px',
};

const cardHeading = {
  fontSize: '1.6rem',
  marginBottom: '1rem',
  borderBottom: '1px solid #dab0f7',
  paddingBottom: '0.5rem',
  color: '#7b179d',
};

const cardText = {
  fontSize: '0.95rem',
  lineHeight: '1.7',
  color: '#42225b',
  textAlign: 'justify',
};