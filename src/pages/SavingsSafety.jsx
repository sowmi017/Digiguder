import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GuideSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={guideItem}>
      <button onClick={() => setOpen(!open)} style={guideTrigger}>
        {open ? '🔽' : '▶️'} {title}
      </button>
      <div
        style={{
          maxHeight: open ? '1000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-in-out',
        }}
      >
        {open && <div style={guideContent}>{children}</div>}
      </div>
    </div>
  );
};

const SavingsSafety = () => {
  const { t } = useTranslation();
  const sections = t('savings.sections', { returnObjects: true });

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>{t('savings.title')}</h2>
        <div style={fadeLine}></div>
        <p style={subtitleStyle}>{t('savings.subtitle')}</p>
        <p style={taglineStyle}>{t('savings.tagline')}</p>
      </div>

      <div style={contentWrapper}>
        {sections && typeof sections === 'object' &&
          Object.entries(sections).map(([key, section], idx) => (
            <GuideSection key={idx} title={section.title}>
              <ul style={guideList}>
                {Array.isArray(section.items) &&
                  section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
            </GuideSection>
        ))}
      </div>
    </div>
  );
};

export default SavingsSafety;

// ---------- Inline Styles ----------
const pageStyle = {
  background: '#fef6ff',
  padding: '3rem 1rem',
  fontFamily: 'Segoe UI, sans-serif',
  minHeight: '100vh',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '2.5rem',
};

const titleStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, rgb(228, 221, 234), rgb(200, 144, 230))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const fadeLine = {
  height: '2px',
  width: '60%',
  margin: '0.8rem auto',
  background: 'linear-gradient(to right, transparent, #c084fc, transparent)',
  borderRadius: '10px',
};

const subtitleStyle = {
  fontSize: '1.2rem',
  color: '#663399',
  fontWeight: 500,
  marginBottom: '0.6rem',
};

const taglineStyle = {
  fontSize: '1rem',
  fontStyle: 'italic',
  color: '#7a5285',
  marginTop: '0.5rem',
  marginBottom: '1rem',
};

const contentWrapper = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '2rem',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
};

const guideItem = {
  marginBottom: '1.8rem',
};

const guideTrigger = {
  backgroundColor: '#f3e3fa',
  color: '#4a0072',
  border: '1px solid #d6b1ef',
  borderRadius: '10px',
  padding: '1rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const guideContent = {
  padding: '1.2rem',
  marginTop: '0.5rem',
  borderLeft: '5px solid #c77dff',
  backgroundColor: '#fdf6ff',
  borderRadius: '0 10px 10px 10px',
  animation: 'fadeInUp 0.4s ease',
};

const guideList = {
  paddingLeft: '1.5rem',
  lineHeight: '1.8',
  fontSize: '1.05rem',
  color: '#333',
};

// Inject animation once
if (!document.getElementById('fadeInKey')) {
  const style = document.createElement('style');
  style.id = 'fadeInKey';
  style.innerHTML = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    a { color: #6c3aa3; text-decoration: none; }
    a:hover { text-decoration: underline; }
  `;
  document.head.appendChild(style);
}
