import React from 'react';
import '../../styles/pages.css';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>À Propos de Nous</h1>
          <p>Découvrez notre histoire, notre expertise et nos valeurs</p>
        </div>
      </section>
      
      {/* Section Principale - Contenu de l'accueil */}
      <section className="about-main-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <img src="/products-photos/image-bloc-a-propos.webp" alt="B.R.F.B services - Imprimerie à Marrakech" className="about-main-image" />
              </div>
            </div>
            
            <div className="about-text">
              <p className="about-subtitle">IMPRIMERIE À MARRAKECH | PRINT & DESIGN</p>
              <h2 className="about-title">
                Votre Partenaire<br/>
                Impression et Design<br/>
                pour Tous Vos Projets
              </h2>
              <p className="about-description">
                Bienvenue chez <strong>B.R.F.B services</strong>, votre <strong>imprimerie à Marrakech</strong>, 
                spécialisée dans l'<strong>impression offset, numérique, PLV et signalétique</strong>. 
                Nous mettons notre expertise au service de vos idées pour des impressions de haute qualité, 
                qu'il s'agisse de vos supports de communication, de décoration ou de promotion.
              </p>
              <p className="about-description">
                Notre équipe d'experts utilise les dernières technologies pour garantir des résultats 
                exceptionnels sur une multitude de supports : cartes de visite, brochures, affiches, 
                textiles, bâches, adhésifs, trophées, et bien plus encore.
              </p>
              <p className="about-description">
                <strong>Nous nous engageons à vous offrir :</strong>
              </p>
              
              <ul className="about-features-simple">
                <li>Service rapide et efficace</li>
                <li>Qualité d'impression garantie</li>
                <li>Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission et Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-content">
            <div className="mission-block">
              <h3 className="block-title">Notre Mission</h3>
              <p className="block-description">
                Offrir des solutions d'impression innovantes et de qualité supérieure qui 
                dépassent les attentes de nos clients. Nous nous engageons à transformer 
                chaque projet en une réussite, en combinant expertise technique, créativité 
                et service client exceptionnel. Notre mission est de faire de vos idées 
                une réalité tangible et impactante.
              </p>
              <div className="block-highlights">
                <span className="highlight">Excellence technique</span>
                <span className="highlight">Innovation continue</span>
                <span className="highlight">Satisfaction client</span>
              </div>
            </div>

            <div className="vision-block">
              <h3 className="block-title">Notre Vision</h3>
              <p className="block-description">
                Devenir la référence incontournable en matière d'impression au Maroc, 
                reconnue pour notre excellence, notre innovation et notre engagement 
                environnemental. Nous aspirons à créer un écosystème d'impression 
                durable qui contribue au succès de nos clients tout en respectant 
                notre planète et nos communautés.
              </p>
              <div className="block-highlights">
                <span className="highlight">Leadership régional</span>
                <span className="highlight">Développement durable</span>
                <span className="highlight">Impact communautaire</span>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Années d'Expérience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Clients Satisfaits</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50k+</div>
              <div className="stat-label">Projets Réalisés</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24h</div>
              <div className="stat-label">Délai Express</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
