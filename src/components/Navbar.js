import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img 
            src="/logo.jpg" 
            alt="B.R.F.B services" 
            className="brand-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline';
            }}
            onLoad={(e) => {
              e.target.nextSibling.style.display = 'none';
            }}
          />
          <span className="brand-icon" style={{display: 'none'}}>🖨️</span>
          <span className="brand-text">B.R.F.B services</span>
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link 
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={handleMobileMenuClose}
          >
            Accueil
          </Link>
          <Link 
            to="/a-propos"
            className={`navbar-link ${location.pathname === '/a-propos' ? 'active' : ''}`}
            onClick={handleMobileMenuClose}
          >
            À Propos
          </Link>
          <Link 
            to="/produits"
            className={`navbar-link ${location.pathname === '/produits' || location.pathname.startsWith('/produit/') ? 'active' : ''}`}
            onClick={handleMobileMenuClose}
          >
            Nos Produits
          </Link>
          <Link 
            to="/demande-devis"
            className={`navbar-link ${location.pathname === '/demande-devis' ? 'active' : ''}`}
            onClick={handleMobileMenuClose}
          >
            Demande Devis
          </Link>
          <Link 
            to="/contact"
            className={`navbar-link navbar-link-cta ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={handleMobileMenuClose}
          >
            Contact
          </Link>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
