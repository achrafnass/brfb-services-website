import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_CONFIG, openWhatsApp } from '../config/whatsapp';
import { openLocation, GPS_COORDINATES } from '../utils/maps';
import './Footer.css';

const Footer = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);

  const handleWhatsAppClick = () => {
    openWhatsApp(WHATSAPP_CONFIG.messages.footer);
  };

  const handleLocationClick = () => {
    openLocation();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src={`${process.env.PUBLIC_URL}/logo.jpg`} 
                alt="B.R.F.B services" 
                className="footer-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="footer-logo-icon" style={{display: 'none'}}>🖨️</span>
              <span className="footer-logo-text">B.R.F.B services</span>
            </div>
            <p className="footer-description">
              Votre partenaire d'impression de confiance depuis plus de 15 ans. 
              Qualité, rapidité et service client exceptionnel.
            </p>
            <div className="footer-social">
              <button className="social-btn whatsapp" onClick={handleWhatsAppClick}>
                <span>💬</span>
                WhatsApp
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À Propos</Link></li>
              <li><Link to="/produits">Produits</Link></li>
              <li><Link to="/demande-devis">Demande Devis</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li>Fournitures de Bureau</li>
              <li>Impression Bâche</li>
              <li>Roll-up & X-Banner</li>
              <li>Impression Textile</li>
              <li>Trophées & Gravure</li>
            </ul>
          </div>

          <div className="footer-section contact-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info-simple">
              <p className="contact-line">
                <span className="contact-icon">📍</span>
                <button 
                  onClick={handleLocationClick} 
                  className="location-btn"
                  title={`Ouvrir dans la navigation (${GPS_COORDINATES.formatted})`}
                >
                  123 Rue de l'Impression,<br/>75000 Paris
                  <span className="location-hint">📍 Cliquez pour naviguer</span>
                </button>
              </p>
              <p className="contact-line">
                <span className="contact-icon">📞</span>
                06 61 09 75 19<br/>06 89 13 91 09
              </p>
              <div className="contact-line">
                <span className="contact-icon">✉️</span>
                <a 
                  href="mailto:Brfbbureau@gmail.com" 
                  className="email-link"
                  title="Envoyer un email à B.R.F.B services"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:Brfbbureau@gmail.com';
                  }}
                >
                  Brfbbureau@gmail.com
                </a>
              </div>
              <p className="contact-line">
                <span className="contact-icon">⏰</span>
                Lun-Ven: 8h-18h<br/>Sam: 9h-12h
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 B.R.F.B services. Tous droits réservés.</p>
          </div>
          <div className="footer-legal">
            <Link to="/mentions-legales">Mentions légales</Link>
            <span>•</span>
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            <span>•</span>
            <Link to="/cgv">CGV</Link>
            <span>•</span>
            <button onClick={() => setShowDeveloper(!showDeveloper)} className="developer-btn">
              Développeur
            </button>
          </div>
        </div>
      </div>
      
      {/* Popup Développeur */}
      {showDeveloper && (
        <div className="developer-popup-overlay" onClick={() => setShowDeveloper(false)}>
          <div className="developer-popup" onClick={(e) => e.stopPropagation()}>
            <div className="developer-header">
              <h3>Développeur du Site</h3>
              <button onClick={() => setShowDeveloper(false)} className="close-btn">×</button>
            </div>
            <div className="developer-info">
              <p><strong>Nom et prénom :</strong> Achraf Nassar</p>
              <p><strong>Email :</strong> achrafnassar18@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
