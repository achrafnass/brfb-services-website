import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SeoPages.css';

const ImpressionDigitaleMarrakechPage = () => {
  useEffect(() => {
    document.title = 'Impression Digitale à Marrakech | Qualité HD – BRFB Services';
  }, []);

  return (
    <div className="seo-page">
      <section className="page-hero">
        <div className="container">
          <h1>Impression digitale à Marrakech – Qualité haute définition</h1>
          <p>Des impressions digitales professionnelles, rapides et de haute qualité à Marrakech.</p>
        </div>
      </section>

      <section className="seo-content">
        <div className="container">
          <h2>L'impression digitale professionnelle à Marrakech</h2>
          <p>
            L'<strong>impression digitale à Marrakech</strong> est la solution idéale pour vos projets 
            d'impression en petites et moyennes séries. Chez <strong>BRFB Services</strong>, nous disposons 
            d'équipements d'impression digitale de dernière génération qui garantissent une qualité 
            haute définition sur tous vos supports.
          </p>
          <p>
            Contrairement à l'impression offset traditionnelle, l'<strong>impression digitale</strong> 
            ne nécessite pas de plaques d'impression, ce qui permet de réduire les coûts pour les 
            petites quantités et d'obtenir des délais de production très courts.
          </p>

          <h2>Nos services d'impression digitale</h2>
          <ul>
            <li><strong>Flyers et dépliants</strong> en impression digitale haute qualité</li>
            <li><strong>Cartes de visite</strong> sur papiers premium</li>
            <li>Brochures et catalogues en petites séries</li>
            <li>Affiches et posters grand format</li>
            <li>Impressions personnalisées (données variables)</li>
            <li>Documents administratifs et commerciaux</li>
          </ul>

          <h2>Avantages de l'impression digitale</h2>
          <h3>Rapidité d'exécution</h3>
          <p>
            L'<strong>impression digitale à Marrakech</strong> chez BRFB Services vous permet d'obtenir 
            vos documents en un temps record. Pas besoin de préparer des plaques : vos fichiers sont 
            imprimés directement depuis votre fichier numérique.
          </p>

          <h3>Qualité haute définition</h3>
          <p>
            Nos imprimantes digitales professionnelles offrent une résolution exceptionnelle avec des 
            couleurs vives et fidèles. Chaque détail est reproduit avec précision pour un rendu 
            professionnel irréprochable.
          </p>

          <h3>Flexibilité des quantités</h3>
          <p>
            Besoin de 50 flyers ou de 5 000 brochures ? L'impression digitale s'adapte à toutes les 
            quantités sans surcoût de mise en route. Idéal pour les entreprises à Marrakech qui 
            souhaitent tester un support avant de commander en grande série.
          </p>

          <h3>Personnalisation avancée</h3>
          <p>
            L'impression digitale permet la personnalisation de chaque exemplaire (nom, QR code, 
            numérotation). Parfait pour les invitations, cartes de fidélité et mailings personnalisés.
          </p>

          <h2>Pour qui est l'impression digitale ?</h2>
          <p>
            Notre service d'<strong>impression digitale à Marrakech</strong> s'adresse à tous les professionnels : 
            entreprises, commerçants, associations, cabinets, restaurants, hôtels et particuliers. 
            Quel que soit votre secteur d'activité, nous avons la solution adaptée à vos besoins.
          </p>
        </div>
      </section>

      <section className="seo-cta">
        <div className="container">
          <h2>Lancez votre projet d'impression digitale</h2>
          <p>Obtenez un devis gratuit pour votre impression digitale à Marrakech.</p>
          <Link to="/demande-devis" className="cta-button">Demander un devis gratuit</Link>
        </div>
      </section>
    </div>
  );
};

export default ImpressionDigitaleMarrakechPage;
