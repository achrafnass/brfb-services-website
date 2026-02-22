import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SeoPages.css';

const ImprimerieMarrakechPage = () => {
  useEffect(() => {
    document.title = 'Imprimerie à Marrakech | Services d\'impression professionnelle – BRFB Services';
  }, []);

  return (
    <div className="seo-page">
      <section className="page-hero">
        <div className="container">
          <h1>Imprimerie à Marrakech – Votre partenaire impression professionnelle</h1>
          <p>BRFB Services, votre imprimerie de référence à Marrakech pour tous vos projets d'impression.</p>
        </div>
      </section>

      <section className="seo-content">
        <div className="container">
          <h2>BRFB Services : votre imprimerie professionnelle à Marrakech</h2>
          <p>
            Vous cherchez une <strong>imprimerie à Marrakech</strong> capable de répondre à tous vos besoins 
            en impression ? <strong>BRFB Services</strong> est une imprimerie spécialisée, implantée au cœur 
            de Marrakech, qui accompagne entreprises, associations et particuliers dans la réalisation de 
            leurs projets d'impression depuis de nombreuses années.
          </p>
          <p>
            Notre équipe de professionnels met à votre disposition un savoir-faire reconnu en 
            <strong>impression digitale</strong>, <strong>impression offset</strong>, signalétique et PLV. 
            Nous nous engageons à fournir des produits de qualité supérieure avec des délais respectés 
            et des prix compétitifs.
          </p>

          <h2>Nos services d'impression à Marrakech</h2>
          <p>
            En tant qu'<strong>imprimerie complète à Marrakech</strong>, nous proposons une large gamme 
            de services pour couvrir l'ensemble de vos besoins :
          </p>
          <ul>
            <li>Impression de <strong>cartes de visite</strong> professionnelles</li>
            <li>Impression de <strong>flyers</strong> et dépliants publicitaires</li>
            <li>Brochures, catalogues et livrets</li>
            <li>Bâches publicitaires et banderoles</li>
            <li>Roll-ups, X-banners et PLV</li>
            <li>Signalétique intérieure et extérieure</li>
            <li>Impression sur t-shirts et textiles</li>
            <li>Trophées et objets personnalisés</li>
            <li>Tirage de plans techniques</li>
            <li>Cachets et tampons d'entreprise</li>
          </ul>

          <h2>Pourquoi choisir BRFB Services ?</h2>
          <h3>Qualité professionnelle garantie</h3>
          <p>
            Nous utilisons des équipements d'impression de dernière génération pour garantir un rendu 
            exceptionnel sur chaque projet. Que ce soit pour de l'<strong>impression digitale</strong> 
            ou de l'<strong>impression offset</strong>, la qualité est notre priorité.
          </p>

          <h3>Délais rapides à Marrakech</h3>
          <p>
            Basés à <strong>Marrakech</strong>, nous proposons des délais de production rapides. 
            Besoin d'une commande urgente ? Notre équipe s'adapte à vos contraintes pour vous 
            livrer dans les meilleurs délais.
          </p>

          <h3>Prix compétitifs</h3>
          <p>
            Notre <strong>imprimerie à Marrakech</strong> vous propose des tarifs adaptés à tous les budgets, 
            que vous soyez une grande entreprise ou un auto-entrepreneur. Demandez un devis gratuit 
            et sans engagement.
          </p>

          <h3>Conseil et accompagnement</h3>
          <p>
            Notre équipe vous accompagne de la conception à la livraison. Nous vous conseillons 
            sur le choix des supports, formats et finitions pour un résultat optimal.
          </p>
        </div>
      </section>

      <section className="seo-cta">
        <div className="container">
          <h2>Besoin d'une impression à Marrakech ?</h2>
          <p>Contactez-nous dès maintenant pour obtenir un devis gratuit et personnalisé.</p>
          <Link to="/demande-devis" className="cta-button">Demander un devis gratuit</Link>
        </div>
      </section>
    </div>
  );
};

export default ImprimerieMarrakechPage;
