import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import QuoteRequestPage from './components/pages/QuoteRequestPage';
import ContactPage from './components/pages/ContactPage';
import LegalPage from './components/pages/LegalPage';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsPage from './components/pages/TermsPage';
import './styles/colors.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/produits" element={<ProductsPage />} />
            <Route path="/produit/:slug" element={<ProductDetailPage />} />
            <Route path="/demande-devis" element={<QuoteRequestPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/politique-confidentialite" element={<PrivacyPage />} />
            <Route path="/cgv" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
