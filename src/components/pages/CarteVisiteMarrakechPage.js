import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SeoPages.css';

const CarteVisiteMarrakechPage = () => {
  useEffect(() => {
    document.title = 'Carte de Visite à Marrakech | Impression Pro – BRFB Services';
  }, []);

  return (
    <div className="seo-page">
      <section className="page-hero">
        <div className="container">
          <h1>Impression de cartes de visite à Marrakech</h1>
          <p>Des cartes de visite professionnelles et personnalisées pour renforcer votre image de marque.</p>
        </div>
      </section>

      <section className="seo-content">
        <div className="container">
          <h2>Cartes de visite professionnelles à Marrakech</h2>
          <p>
            La <strong>carte de visite</strong> reste un outil incontournable pour tout professionnel. 
            Chez <strong>BRFB Services</strong>, votre <strong>imprimerie à Marrakech</strong>, nous réalisons 
            des cartes de visite de haute qualité qui reflètent le professionnalisme et le sérieux 
            de votre entreprise.
          </p>
          <p>
            Que vous soyez entrepreneur, commerçant, artisan ou profession libérale à Marrakech, 
            une carte de visite bien conçue et correctement imprimée fait toute la différence 
            lors de vos échanges professionnels.
          </p>

          <h2>Nos options de cartes de visite</h2>
          <ul>
            <li>Cartes de visite <strong>classiques</strong> sur papier couché 300g/350g</li>
            <li>Cartes <strong>premium</strong> sur papier texturé ou coton</li>
            <li>Finition <strong>mate</strong>, brillante ou soft-touch</li>
            <li>Pelliculage mat ou brillant</li>
            <li>Vernis sélectif et dorure à chaud</li>
            <li>Cartes de visite <strong>recto-verso</strong></li>
            <li>Coins arrondis ou découpe spéciale</li>
            <li>Formats standard (85x55mm) ou personnalisés</li>
          </ul>

          <h2>Pourquoi imprimer vos cartes de visite chez BRFB Services ?</h2>
          <h3>Qualité d'impression supérieure</h3>
          <p>
            Nos équipements d'<strong>impression digitale</strong> et offset garantissent des couleurs 
            vives, des textes nets et un rendu professionnel qui impressionne dès le premier regard. 
            Chaque <strong>carte de visite imprimée à Marrakech</strong> dans notre atelier est soumise 
            à un contrôle qualité rigoureux.
          </p>

          <h3>Large choix de supports</h3>
          <p>
            Nous proposons une variété de papiers et finitions pour créer la carte de visite qui 
            correspond parfaitement à votre identité visuelle. Du papier couché classique au papier 
            texturé haut de gamme, vous avez le choix.
          </p>

          <h3>Délais rapides</h3>
          <p>
            Besoin de vos <strong>cartes de visite à Marrakech</strong> en urgence ? Notre service 
            express vous permet de recevoir vos cartes en 24 à 48 heures. Production standard 
            en 3 à 5 jours ouvrables.
          </p>

          <h3>Tarifs compétitifs</h3>
          <p>
            Des tarifs dégressifs selon les quantités commandées. À partir de 100 cartes de visite, 
            nous vous proposons les meilleurs prix de Marrakech sans compromis sur la qualité.
          </p>

          <h2>Comment commander vos cartes de visite ?</h2>
          <p>
            C'est simple : envoyez-nous votre fichier prêt à imprimer ou confiez-nous la création 
            graphique. Notre équipe de designers peut concevoir votre carte de visite selon vos 
            indications et votre charte graphique. Demandez un devis gratuit dès maintenant.
          </p>
        </div>
      </section>

      <section className="seo-cta">
        <div className="container">
          <h2>Commandez vos cartes de visite à Marrakech</h2>
          <p>Recevez un devis gratuit et personnalisé pour vos cartes de visite.</p>
          <Link to="/demande-devis" className="cta-button">Demander un devis gratuit</Link>
        </div>
      </section>
    </div>
  );
};

export default CarteVisiteMarrakechPage;
