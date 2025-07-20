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
import AboutUs from './pages/Aboutus';
import SchemeLinks from './pages/SchemeLinks'; // ✅ New import

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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/schemes" element={<SchemeLinks />} /> {/* ✅ New route */}

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
