import React from 'react';
import { Link } from 'react-router-dom';
import './DreamSection.css';

const DreamSection = () => {

  return (
    <section className="dream-section">
      <div className="dream-background">
        <div className="floating-papers">
          <div className="paper-item paper-1">📄</div>
          <div className="paper-item paper-2">🎨</div>
          <div className="paper-item paper-3">📊</div>
          <div className="paper-item paper-4">💼</div>
          <div className="paper-item paper-5">📋</div>
          <div className="paper-item paper-6">🎯</div>
        </div>
        
        <div className="design-elements">
          <div className="color-palette">
            <div className="color-circle pink"></div>
            <div className="color-circle cyan"></div>
            <div className="color-circle yellow"></div>
            <div className="color-circle black"></div>
          </div>
          
          <div className="business-cards">
            <div className="card card-1"></div>
            <div className="card card-2"></div>
            <div className="card card-3"></div>
          </div>
        </div>
      </div>
      
      <div className="dream-content">
        <div className="container">
          <div className="brand-signature">B.R.F.B services</div>
          <h2 className="dream-title">
            <span className="title-line">Dream it.</span>
            <span className="title-line yellow">Print it.</span>
          </h2>
          <p className="dream-description">
            Transformez vos idées en réalité avec nos services d'impression professionnelle. 
            De la conception à la réalisation, nous donnons vie à tous vos projets.
          </p>
          <Link to="/demande-devis" className="dream-cta-button">
            Demande de devis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
