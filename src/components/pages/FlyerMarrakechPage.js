import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SeoPages.css';

const FlyerMarrakechPage = () => {
  useEffect(() => {
    document.title = 'Impression de Flyers à Marrakech | Flyers Publicitaires – BRFB Services';
  }, []);

  return (
    <div className="seo-page">
      <section className="page-hero">
        <div className="container">
          <h1>Impression de flyers à Marrakech – Flyers publicitaires de qualité</h1>
          <p>Des flyers percutants pour promouvoir votre activité à Marrakech et au-delà.</p>
        </div>
      </section>

      <section className="seo-content">
        <div className="container">
          <h2>Flyers publicitaires professionnels à Marrakech</h2>
          <p>
            Le <strong>flyer</strong> reste l'un des supports de communication les plus efficaces et 
            économiques pour promouvoir votre activité. Chez <strong>BRFB Services</strong>, votre 
            <strong> imprimerie à Marrakech</strong>, nous imprimons des flyers publicitaires de haute 
            qualité qui captent l'attention et transmettent votre message avec impact.
          </p>
          <p>
            Que ce soit pour annoncer un événement, promouvoir une offre spéciale, lancer un 
            nouveau produit ou communiquer sur vos services, nos <strong>flyers imprimés à Marrakech</strong> 
            sont conçus pour maximiser votre visibilité.
          </p>

          <h2>Nos formats de flyers disponibles</h2>
          <ul>
            <li>Flyers <strong>A4</strong> (210 x 297 mm) – Idéal pour les détails</li>
            <li>Flyers <strong>A5</strong> (148 x 210 mm) – Le format le plus populaire</li>
            <li>Flyers <strong>A6</strong> (105 x 148 mm) – Compact et distribuable</li>
            <li>Flyers <strong>DL</strong> (99 x 210 mm) – Format porte-courrier</li>
            <li>Formats <strong>personnalisés</strong> sur demande</li>
          </ul>

          <h2>Options d'impression pour vos flyers</h2>
          <h3>Papiers de qualité</h3>
          <p>
            Nous proposons plusieurs grammages de papier pour vos <strong>flyers à Marrakech</strong> : 
            papier couché 135g pour une distribution économique, 170g pour un bon rapport 
            qualité-prix, ou 250g pour un rendu premium. Finitions mates, brillantes ou satinées 
            disponibles.
          </p>

          <h3>Impression recto ou recto-verso</h3>
          <p>
            Optimisez l'espace de communication avec nos flyers recto-verso. Présentez votre offre 
            au recto et vos coordonnées, plan d'accès ou conditions au verso.
          </p>

          <h3>Petites et grandes séries</h3>
          <p>
            De 100 à 100 000 exemplaires, notre <strong>imprimerie à Marrakech</strong> s'adapte à 
            vos besoins. Impression digitale pour les petites séries, impression offset pour les 
            grandes quantités avec des tarifs dégressifs avantageux.
          </p>

          <h2>Pourquoi choisir BRFB Services pour vos flyers ?</h2>
          <p>
            Notre expertise en <strong>impression de flyers à Marrakech</strong> nous permet de vous 
            garantir :
          </p>
          <ul>
            <li>Des couleurs vives et fidèles à votre charte graphique</li>
            <li>Des délais de production rapides (24h en express)</li>
            <li>Des prix compétitifs adaptés à tous les budgets</li>
            <li>Un accompagnement créatif si besoin (conception graphique)</li>
            <li>Un contrôle qualité à chaque étape de production</li>
          </ul>

          <h2>Distribution de flyers à Marrakech</h2>
          <p>
            En plus de l'impression, nous pouvons vous conseiller sur les meilleures stratégies 
            de distribution de vos flyers à Marrakech : boîtage, street marketing, dépôt en 
            points de vente partenaires. Maximisez le retour sur investissement de votre campagne 
            de communication print.
          </p>
        </div>
      </section>

      <section className="seo-cta">
        <div className="container">
          <h2>Imprimez vos flyers à Marrakech</h2>
          <p>Obtenez un devis gratuit pour l'impression de vos flyers publicitaires.</p>
          <Link to="/demande-devis" className="cta-button">Demander un devis gratuit</Link>
        </div>
      </section>
    </div>
  );
};

export default FlyerMarrakechPage;
