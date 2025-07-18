import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GuideSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={itemWrapper}>
      <button onClick={() => setOpen(!open)} style={triggerStyle}>
        {open ? '🔽' : '▶️'} {title}
      </button>
      <div
        style={{
          maxHeight: open ? '1000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.6s ease-in-out',
          paddingTop: open ? '1rem' : '0',
        }}
      >
        {open && <div style={contentStyle}>{children}</div>}
      </div>
    </div>
  );
};

const DigitalBuddyGuide = () => {
  const { t } = useTranslation();

  const getSteps = (key) =>
    t(key, { returnObjects: true }) || [];

  return (
    <div style={pageStyle}>
      <div style={headerWrapper}>
        <h2 style={titleStyle}>{t('guide.title')}</h2>
        <p style={subtitleStyle}>{t('guide.subtitle')}</p>
        <div style={fadeLine} />
        <p style={taglineStyle}>{t('guide.tagline')}</p>
      </div>

      <div style={wrapper}>
        <GuideSection title={t('guide.sections.send_money.title')}>
          <ul style={listStyle}>
            {getSteps('guide.sections.send_money.steps').map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </GuideSection>

        <GuideSection title={t('guide.sections.generate_upi.title')}>
          <ul style={listStyle}>
            {getSteps('guide.sections.generate_upi.steps').map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </GuideSection>

        <GuideSection title={t('guide.sections.check_balance.title')}>
          <ul style={listStyle}>
            {getSteps('guide.sections.check_balance.steps').map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </GuideSection>

        <GuideSection title={t('guide.sections.check_passbook.title')}>
          <ul style={listStyle}>
            {getSteps('guide.sections.check_passbook.steps').map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </GuideSection>

        <GuideSection title={t('guide.sections.withdraw_atm.title')}>
          <ul style={listStyle}>
            {getSteps('guide.sections.withdraw_atm.steps').map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </GuideSection>

        <GuideSection title={t('guide.sections.net_banking.title')}>
          <ul style={listStyle}>
            {getSteps('guide.sections.net_banking.steps').map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
          <ul style={subListStyle}>
            {getSteps('guide.sections.net_banking.substeps').map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </GuideSection>
      </div>
    </div>
  );
};

export default DigitalBuddyGuide;
// ---------- STYLE DEFINITIONS BELOW ----------

const pageStyle = {
    background: '#fef6ff',
    padding: '3rem 1rem',
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
  };
  
  const headerWrapper = {
    textAlign: 'center',
    marginBottom: '2.5rem',
  };
  
  const titleStyle = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    background: 'linear-gradient(to right,rgb(228, 221, 234),rgb(200, 144, 230))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  
  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#663399',
    fontWeight: '500',
    marginBottom: '0.6rem',
  };
  
  const taglineStyle = {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#7a5285',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  };
  
  const fadeLine = {
    height: '2px',
    width: '60%',
    margin: '0.8rem auto',
    background: 'linear-gradient(to right, transparent, #c084fc, transparent)',
    borderRadius: '10px',
  };
  
  const wrapper = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  };
  
  const itemWrapper = {
    marginBottom: '1.8rem',
  };
  
  const triggerStyle = {
    backgroundColor: '#f3e3fa',
    color: '#4a0072',
    border: '1px solid #d6b1ef',
    borderRadius: '10px',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: '0.3s',
  };
  
  const contentStyle = {
    padding: '1.2rem',
    marginTop: '0.5rem',
    borderLeft: '5px solid #c77dff',
    backgroundColor: '#fdf6ff',
    borderRadius: '0 10px 10px 10px',
    animation: 'fadeInUp 0.4s ease',
  };
  
  const listStyle = {
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
    fontSize: '1.05rem',
    color: '#333',
  };
  
  const subListStyle = {
    paddingLeft: '2rem',
    listStyleType: 'circle',
    marginTop: '0.5rem',
    color: '#444',
  };
  
  // Animation Keyframes
  if (!document.getElementById('fadeInKey')) {
    const style = document.createElement('style');
    style.id = 'fadeInKey';
    style.innerHTML = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
  