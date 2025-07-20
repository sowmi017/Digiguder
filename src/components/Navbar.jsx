import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav style={navStyle}>
      <div style={leftSection}>
        <NavLink to="/" style={logoWrapper}>
          <img src="/logo.PNG" alt="Jnanadeepa Logo" style={logoImage} />
          <span style={logoText}>Jnanadeepa</span>
        </NavLink>

        <div style={linkGroup}>
          <NavLink to="/" style={navLinkStyle}>{t('navbar.home')}</NavLink>
          <NavLink to="/about" style={navLinkStyle}>{t('navbar.about_us')}</NavLink>
          <NavLink to="/literacy" style={navLinkStyle}>{t('navbar.basic_banking')}</NavLink>
          <NavLink to="/digital-banking" style={navLinkStyle}>{t('navbar.digital_banking')}</NavLink>
          <NavLink to="/shg" style={navLinkStyle}>{t('navbar.savings_safety')}</NavLink>
          <NavLink to="/schemes" style={navLinkStyle}>{t('navbar.schemes_links')}</NavLink>
        </div>
      </div>

      <div style={rightSection}>
        <label htmlFor="lang-select" style={languageLabel}>
          🌐 {t('change language')}:
        </label>
        <select
          id="lang-select"
          onChange={changeLanguage}
          value={i18n.language}
          style={languageSelect}
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="ta">தமிழ்</option>
          <option value="te">తెలుగు</option>
          <option value="ml">മലയാളം</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;

// 🎨 Styles
const navStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 24px',
  background: 'linear-gradient(to right, #e6ccff, #ffe6f2)',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
  fontFamily: `'Segoe UI', sans-serif`,
  flexWrap: 'wrap',
};

const leftSection = {
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexWrap: 'wrap',
};

const rightSection = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
};

const logoWrapper = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  gap: '10px',
};

const logoImage = {
  width: '40px',
  height: '40px',
};

const logoText = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#6a0572',
};

const linkGroup = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
};

const navLinkStyle = ({ isActive }) => ({
  textDecoration: 'none',
  color: isActive ? '#6a0572' : '#4a148c',
  fontWeight: isActive ? '700' : '500',
  transition: 'color 0.3s ease',
  padding: '4px 6px',
});

const languageSelect = {
  padding: '6px 10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  background: '#fff',
  fontWeight: '500',
};

const languageLabel = {
  fontWeight: '600',
  fontSize: '0.95rem',
  color: '#4a148c',
};
