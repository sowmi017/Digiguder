import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('home.features.0.title'),
      description: t('home.features.0.description'),
      image: '/dl.png',
    },
    {
      title: t('home.features.1.title'),
      description: t('home.features.1.description'),
      image: '/fa.png',
    },
    {
      title: t('home.features.2.title'),
      description: t('home.features.2.description'),
      image: '/cc.png',
    },
  ];

  return (
    <div style={backgroundStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>
            {t('home.title')} <span style={{ color: '#b5179e' }}>Jnanadeepa</span>
          </h1>
          <p style={subtitleStyle}>{t('home.subtitle')}</p>

          <img
            src="ew.png"
            alt="Empowering Women"
            style={imageStyle}
            className="floating"
          />
        </header>

        <section style={sectionContainerStyle}>
          <h2 style={sectionTitleStyle}>{t('home.what_heading')}</h2>
          <p style={jnanadeepaTextStyle}>{t('home.what_text')}</p>

          <h2 style={sectionTitleStyle}>{t('home.why_heading')}</h2>
          <p style={jnanadeepaTextStyle}>{t('home.why_text')}</p>
          <ul style={listStyle}>
            <li>{t('home.why_list.0')}</li>
            <li>{t('home.why_list.1')}</li>
            <li>{t('home.why_list.2')}</li>
            <li>{t('home.why_list.3')}</li>
          </ul>

          <h2 style={sectionTitleStyle}>{t('home.how_heading')}</h2>
          <div style={featureGridStyle}>
            {features.map((feature, index) => (
              <div key={index} style={featureCardStyle} className="feature-card">
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={featureImageStyle}
                />
                <h3 style={featureTitleStyle}>{feature.title}</h3>
                <p style={featureTextStyle}>{feature.description}</p>
              </div>
            ))}
          </div>

          <style>{embeddedAnimationStyle}</style>
        </section>
      </div>
    </div>
  );
};

export default Home;

// 🎨 Styles
const backgroundStyle = { background: 'linear-gradient(135deg, #fff0f7 0%, #f4dfff 100%)', minHeight: '100vh', padding: '3rem 1.5rem', fontFamily: `'Segoe UI', sans-serif`, animation: 'fadeIn 1s ease-in-out' };
const containerStyle = { maxWidth: '1140px', margin: '0 auto', color: '#2e2e2e' };
const headerStyle = { textAlign: 'center', marginBottom: '3rem', animation: 'slideDown 1s ease' };
const titleStyle = { fontSize: '3.2rem', fontWeight: '800', color: '#b30086', marginBottom: '0.5rem', textShadow: '1px 1px 3px rgba(0,0,0,0.05)', letterSpacing: '1px' };
const subtitleStyle = { fontSize: '1.25rem', color: '#5a5a5a', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto', fontStyle: 'italic' };
const imageStyle = { width: '100%', maxWidth: '550px', borderRadius: '14px', marginTop: '2rem', boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)' };
const sectionContainerStyle = { marginTop: '4rem', padding: '2.5rem 2rem', background: 'linear-gradient(to right, #ffffff, #fae9ff)', borderRadius: '20px', boxShadow: '0 0 30px rgba(255, 160, 245, 0.2)', backdropFilter: 'blur(6px)', animation: 'fadeInUp 1s ease' };
const sectionTitleStyle = { textAlign: 'center', fontSize: '2rem', color: '#9b008f', marginBottom: '1.8rem', fontWeight: '700', borderBottom: '2px dashed #dda0dd', paddingBottom: '0.5rem' };
const jnanadeepaTextStyle = { fontSize: '1.1rem', lineHeight: '1.9', color: '#444', marginBottom: '2rem', padding: '0 1.5rem', textAlign: 'justify' };
const listStyle = { padding: '0 2rem', marginTop: '0.5rem', lineHeight: '2', color: '#4a4a4a', fontSize: '1.05rem' };
const featureGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '3rem' };
const featureCardStyle = { backgroundColor: '#ffffff', borderRadius: '18px', padding: '1.8rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(200, 80, 200, 0.15)', transition: 'transform 0.4s ease, box-shadow 0.4s ease', cursor: 'pointer' };
const featureImageStyle = { width: '100%', height: '170px', objectFit: 'cover', borderRadius: '14px', marginBottom: '1.2rem', transition: 'transform 0.4s ease' };
const featureTitleStyle = { fontSize: '1.4rem', color: '#a20096', marginBottom: '0.6rem', fontWeight: '600' };
const featureTextStyle = { fontSize: '1rem', color: '#555', lineHeight: '1.65' };
const embeddedAnimationStyle = `@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } } .floating { animation: float 3s ease-in-out infinite; } .feature-card:hover { transform: translateY(-8px); box-shadow: 0 16px 36px rgba(255, 80, 200, 0.25); } .feature-card:hover img { transform: scale(1.05); }`;
