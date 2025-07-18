// ✅ Multilingual Support for Digital Banking Guide
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GuideItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={itemWrapper}>
      <button onClick={() => setOpen(!open)} style={triggerStyle}>
        {open ? '▼' : '▶'} {title}
      </button>

      <div style={{
        maxHeight: open ? '2000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.6s ease',
      }}>
        {open && <div style={contentStyle}>{children}</div>}
      </div>
    </div>
  );
};

const BankDropdown = () => {
  const [selectedState, setSelectedState] = useState('');
  const { t } = useTranslation();

  const banksByState = {
    'Tamil Nadu': [
      { name: 'Indian Bank', link: 'https://www.indianbank.in/' },
      { name: 'Canara Bank', link: 'https://canarabank.com/' },
    ],
    'Karnataka': [
      { name: 'Karnataka Bank', link: 'https://karnatakabank.com/' },
      { name: 'SBI', link: 'https://sbi.co.in/' },
    ],
    'Telangana': [
      { name: 'Union Bank (Andhra Bank)', link: 'https://www.unionbankofindia.co.in/' },
      { name: 'HDFC Bank', link: 'https://www.hdfcbank.com/' },
    ],
    'Kerala': [
      { name: 'Federal Bank', link: 'https://www.federalbank.co.in/' },
      { name: 'South Indian Bank', link: 'https://www.southindianbank.com/' },
    ],
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        style={dropdownStyle}
      >
        <option value="">-- {t('bank_guide.select_state')} --</option>
        {Object.keys(banksByState).map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      {selectedState && (
        <ul style={linkListStyle}>
          {banksByState[selectedState].map((bank, index) => (
            <li key={index}>
              🔗{' '}
              <a href={bank.link} target="_blank" rel="noopener noreferrer">
                {bank.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DigitalBuddyGuide = () => {
  const { t } = useTranslation();

  return (
    <div style={pageStyle}>
      <div style={headerWrapper}>
        <h1 style={titleStyle}>{t('bank_guide.title')}</h1>
        <p style={subtitleStyle}>{t('bank_guide.subtitle')}</p>
        <div style={fadeLine}></div>
        <p style={taglineStyle}>{t('bank_guide.tagline')}</p>
        <div style={fadeLine}></div>
      </div>

      <div style={wrapper}>
        <GuideItem title={t('bank_guide.open_account_title')}>
          <ol style={listStyle}>
            {t('bank_guide.open_account_steps', { returnObjects: true }).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div style={videoWrapper}>
            <iframe
              width="100%"
              height="320"
              src="https://www.youtube.com/embed/zWDZEMJZxn4"
              title="How to Open a Bank Account"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </GuideItem>

        <GuideItem title={t('bank_guide.account_types_title')}>
          <ul style={listStyle}>
            {t('bank_guide.account_types_list', { returnObjects: true }).map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </GuideItem>

        <GuideItem title={t('bank_guide.kyc_title')}>
          <ul style={listStyle}>
            {t('bank_guide.kyc_steps', { returnObjects: true }).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </GuideItem>

        <GuideItem title={t('bank_guide.locate_title')}>
          <p style={{ marginBottom: '0.5rem' }}>{t('bank_guide.locate_description')}</p>
          <BankDropdown />
        </GuideItem>
      </div>
    </div>
  );
};

export default DigitalBuddyGuide;

// ⬇️ Use existing style objects from your previous code (already well done)


// ---------- STYLES ----------

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

const dropdownStyle = {
  padding: '0.7rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #d48ad4',
  backgroundColor: '#fff0fb',
  color: '#5a0072',
  fontWeight: '500',
};

const linkListStyle = {
  marginTop: '1rem',
  paddingLeft: '1.5rem',
  color: '#5a0072',
  fontSize: '1rem',
  lineHeight: '1.6',
};

const videoWrapper = {
  marginTop: '1rem',
  border: '2px solid #ffcaf5',
  borderRadius: '12px',
  overflow: 'hidden',
};

// Inject animation
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
