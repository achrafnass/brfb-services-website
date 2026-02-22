import React from 'react';
import HeroCarousel from '../HeroCarousel';
import About from '../About';
import DreamSection from '../DreamSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroCarousel />
      
      {/* H1 SEO optimisé */}
      <section className="seo-hero-section">
        <div className="container">
          <h1>Imprimerie professionnelle à Marrakech – Impression digitale, offset et signalétique</h1>
        </div>
      </section>

      <About />
      <DreamSection />

      {/* Section texte SEO */}
      <section className="seo-text-section">
        <div className="container">
          <h2>Votre imprimerie de confiance à Marrakech</h2>
          <p>
            <strong>BRFB Services</strong> est une imprimerie basée à <strong>Marrakech</strong> spécialisée dans 
            l'<strong>impression digitale</strong>, l'impression <strong>offset</strong>, les <strong>cartes de visite</strong>, 
            les <strong>flyers</strong>, brochures, <strong>PLV</strong> et <strong>signalétique</strong>. 
            Nous accompagnons entreprises et particuliers à Marrakech avec un service rapide et de qualité.
          </p>
          <p>
            Que vous ayez besoin d'une <strong>impression de flyers à Marrakech</strong>, de 
            <strong> cartes de visite professionnelles</strong>, de bâches publicitaires, de roll-ups ou de 
            trophées personnalisés, notre équipe met son savoir-faire à votre service. 
            Nous proposons également l'impression sur t-shirts, verre, adhésif et le tirage de plans techniques.
          </p>
          <p>
            Faites confiance à <strong>BRFB Services</strong>, votre <strong>imprimerie à Marrakech</strong>, 
            pour des impressions de qualité, des délais respectés et des prix compétitifs. 
            Demandez votre <a href="/demande-devis">devis gratuit</a> dès maintenant.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
