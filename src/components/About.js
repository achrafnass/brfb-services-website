import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src={`${process.env.PUBLIC_URL}/products-photos/image-bloc-a-propos.webp`} alt="B.R.F.B services - Imprimerie à Marrakech" className="about-main-image" />
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
  );
};

export default About;
