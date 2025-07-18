import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import DigitalLiteracy from './pages/BasicsOfBanking';
import DigitalBanking from './pages/DigitalBanking';
import SavingsSafety from './pages/SavingsSafety';
import AboutUs from './pages/Aboutus'; // ✅ Active import

// Optional pages (import later when needed)
// import Join from './pages/Join';
// import ContactUs from './pages/ContactUs';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/literacy" element={<DigitalLiteracy />} />
        <Route path="/digital-banking" element={<DigitalBanking />} />
        
        <Route path="/shg" element={<SavingsSafety />} />
        <Route path="/about" element={<AboutUs />} /> {/* ✅ Activated AboutUs Route */}

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
