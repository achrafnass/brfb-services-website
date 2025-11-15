import React from 'react';
import { WHATSAPP_CONFIG, openWhatsApp } from '../config/whatsapp';
import { openLocation, GPS_COORDINATES } from '../utils/maps';
import './Contact.css';

const Contact = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp(WHATSAPP_CONFIG.messages.default);
  };

  const handleLocationClick = () => {
    openLocation();
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-nous</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Adresse</h3>
                <button 
                  onClick={handleLocationClick} 
                  className="location-btn contact-location-btn"
                  title={`Ouvrir dans la navigation (${GPS_COORDINATES.formatted})`}
                >
                  123 Rue de l'Impression<br />75000 Paris, France
                  <span className="location-hint">📍 Cliquez pour naviguer</span>
                </button>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Téléphone</h3>
                <p>06 61 09 75 19<br />06 89 13 91 09</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <a 
                  href="mailto:Brfbbureau@gmail.com" 
                  className="email-link contact-email-link"
                  title="Envoyer un email à B.R.F.B services"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:Brfbbureau@gmail.com';
                  }}
                >
                  Brfbbureau@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <h3>Horaires</h3>
                <p>Lun - Ven: 8h00 - 18h00<br />Sam: 9h00 - 12h00</p>
              </div>
            </div>
          </div>
          
          <div className="whatsapp-section">
            <h3>Commande Rapide</h3>
            <p>Contactez-nous directement sur WhatsApp pour un devis instantané !</p>
            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
              <span className="whatsapp-icon">💬</span>
              Contacter sur WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
