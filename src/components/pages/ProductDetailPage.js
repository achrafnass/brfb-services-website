import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { findProductBySlug } from '../../utils/slugs';
import '../../styles/pages.css';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { slug } = useParams();
  
  // Données des produits (idéalement, ceci viendrait d'une API ou d'un store)
  const products = [
    {
      id: 1,
      title: "Fournitures de Bureau",
      shortDescription: "Cartes de visite, en-têtes, cachets et tous vos documents professionnels...",
      fullDescription: "Créez une identité professionnelle forte avec notre gamme complète de fournitures de bureau. Cartes de visite sur différents supports, papiers à en-tête personnalisés, cachets d'entreprise, tampons encreurs. Nous proposons une large gamme de supports et de finitions pour tous vos besoins administratifs et commerciaux. Quality professionnelle garantie pour renforcer votre image de marque.",
      image: "/Products photos/Fournitures de bureau .webp",
      features: ["Cartes de visite premium", "Papiers à en-tête", "Cachets d'entreprise", "Finitions sur mesure"]
    },
    {
      id: 2,
      title: "Flyers & Brochures",
      shortDescription: "Supports publicitaires percutants pour promouvoir vos événements et services...",
      fullDescription: "Maximisez l'impact de vos campagnes marketing avec nos flyers et brochures. Imprimés sur papier de qualité supérieure, nos supports publicitaires garantissent une excellente reproduction des couleurs et des détails. Disponibles en plusieurs formats (A4, A5, A6, format personnalisé) et finitions (brillant, mat, soft-touch). Parfaits pour vos événements, promotions, lancements de produits ou communication institutionnelle.",
      image: "/Products photos/flyers.webp",
      features: ["Format A4, A5, A6 disponibles", "Papier haute qualité", "Finitions variées", "Quantités flexibles"]
    },
    {
      id: 3,
      title: "Impression Bâche",
      shortDescription: "Bâches publicitaires résistantes pour extérieur et événements...",
      fullDescription: "Donnez de la visibilité à vos messages avec nos impressions sur bâche. Parfaites pour la signalétique extérieure, les événements, les chantiers et les campagnes publicitaires de grande envergure. Matériaux résistants aux intempéries avec encres UV pour une durabilité maximale. Formats sur mesure jusqu'à très grande taille avec œillets et finitions renforcées.",
      image: "/Products photos/Impression bache .webp",
      features: ["Résistant aux intempéries", "Formats jusqu'à 5m de large", "Encres UV durables", "Œillets et finitions"]
    },
    {
      id: 4,
      title: "Roll-up et PLV",
      shortDescription: "Supports de communication portables et efficaces pour vos événements...",
      fullDescription: "Optimisez votre communication événementielle avec nos roll-ups et solutions PLV. Supports portables, faciles à installer et réutilisables. Kakémonos, totems, présentoirs, panneaux directionnels. Matériaux durables et impression haute définition pour une communication visuelle impactante. Conception graphique et conseils inclus pour maximiser votre visibilité.",
      image: "/Products photos/Rollup avec support .webp",
      features: ["Facile à transporter", "Installation rapide", "Réutilisable", "Conception incluse"]
    },
    {
      id: 5,
      title: "X-Banner",
      shortDescription: "Supports publicitaires économiques et pratiques pour vos promotions...",
      fullDescription: "Les X-banners sont la solution idéale pour vos communications temporaires et promotions. Légers, économiques et faciles à installer, ils sont parfaits pour les points de vente, les événements éphémères et les campagnes saisonnières. Structure aluminium robuste avec impression haute qualité sur bâche ou vinyle. Transport et stockage optimisés.",
      image: "/Products photos/X banner .webp",
      features: ["Économique et pratique", "Installation sans outils", "Transport facile", "Impression HD"]
    },
    {
      id: 6,
      title: "Impression Adhésif",
      shortDescription: "Autocollants et stickers personnalisés pour tous supports...",
      fullDescription: "Créez des autocollants durables et attractifs avec notre service d'impression adhésif. Stickers promotionnels, étiquettes produit, vinyle décoratif, marquage véhicule. Large choix de matériaux : vinyle, papier, matières spéciales. Découpe à la forme, impression couleur haute résolution. Adhésifs repositionnables ou permanents selon vos besoins.",
      image: "/Products photos/Impression adhésif.webp",
      features: ["Découpe à la forme", "Adhésifs permanents/repositionnables", "Résistant UV", "Tous supports"]
    },
    {
      id: 7,
      title: "Impression sur T-shirts",
      shortDescription: "Textiles personnalisés pour vos événements et votre communication...",
      fullDescription: "Personnalisez vos textiles avec nos techniques d'impression professionnelles. T-shirts, polos, sweat-shirts, tabliers pour vos équipes, événements ou boutiques. Sérigraphie, flex, flocage, broderie selon vos besoins. Textile de qualité, marquage durable, couleurs éclatantes. Petites et grandes séries avec conseils techniques inclus.",
      image: "/Products photos/Impression sur tshirts.webp",
      features: ["Sérigraphie et flex", "Textiles de qualité", "Marquage durable", "Petites et grandes séries"]
    },
    {
      id: 8,
      title: "Impression sur Verre",
      shortDescription: "Décoration et signalétique sur supports verriers...",
      fullDescription: "Personnalisez vos surfaces vitrées avec nos impressions sur verre. Vitrophanie, film dépoli, impression couleur directe sur verre. Idéal pour la décoration d'intérieur, la signalétique de magasins, les séparations de bureaux. Techniques spécialisées garantissant adhérence parfaite et rendu professionnel. Découpe sur mesure et pose possible.",
      image: "/Products photos/Impression sur verre.webp",
      features: ["Vitrophanie décorative", "Film dépoli", "Adhérence parfaite", "Découpe sur mesure"]
    },
    {
      id: 9,
      title: "Tirage de Plans",
      shortDescription: "Impression technique et plans d'architecte haute précision...",
      fullDescription: "Service spécialisé dans l'impression de plans techniques, architecturaux et d'ingénierie. Formats A0, A1, A2 sur papier technique ou calque. Précision millimétrique garantie, trait fin préservé. Idéal pour cabinets d'architectes, bureaux d'études, entreprises du BTP. Livraison rapide et conditionnement soigné pour vos dossiers professionnels.",
      image: "/Products photos/Tirage des plans .webp",
      features: ["Formats A0, A1, A2", "Précision millimétrique", "Papier technique", "Livraison rapide"]
    },
    {
      id: 10,
      title: "Encollage de Livres",
      shortDescription: "Reliure et façonnage professionnel de vos documents...",
      fullDescription: "Donnez une finition professionnelle à vos documents avec notre service d'encollage et reliure. Dos carré collé, spirale, agrafage, reliure cousue pour tous vos projets éditoriaux. Livres, catalogues, mémoires, rapports annuels. Finitions de qualité éditoriale avec choix de couvertures et papiers. Conseil éditorial et suivi de fabrication inclus.",
      image: "/Products photos/Encollage des livres .webp",
      features: ["Dos carré collé", "Reliure spirale", "Qualité éditoriale", "Conseil inclus"]
    },
    {
      id: 11,
      title: "Trophées Personnalisés",
      shortDescription: "Récompenses sur mesure pour vos événements et cérémonies...",
      fullDescription: "Créez des trophées uniques pour récompenser vos lauréats. Gravure sur plexi, métal, bois ou verre. Coupes, médailles, plaques commémoratives entièrement personnalisées. Design sur mesure selon votre événement : sportif, corporate, associatif. Techniques de marquage variées pour un rendu exceptionnel qui marquera les esprits.",
      image: "/Products photos/Trophés personalisé .webp",
      features: ["Gravure multi-supports", "Design sur mesure", "Rendu exceptionnel", "Tous événements"]
    },
    {
      id: 12,
      title: "Cachets Personnalisés",
      shortDescription: "Tampons et cachets d'entreprise sur mesure...",
      fullDescription: "Fabrication de cachets et tampons personnalisés pour tous vos besoins administratifs. Tampons encreurs automatiques, cachets à sec, numeroteurs, dateurs. Fabrication rapide avec gravure laser pour une précision parfaite. Encres de différentes couleurs disponibles. Idéal pour administrations, entreprises, professions libérales et associations.",
      image: "/Products photos/Caché personalisé.webp",
      features: ["Gravure laser précise", "Encres multi-couleurs", "Fabrication rapide", "Usage professionnel"]
    }
  ];

  const product = findProductBySlug(products, slug);

  if (!product) {
    return (
      <div className="product-detail-page">
        <section className="page-hero">
          <div className="container">
            <h1>Produit non trouvé</h1>
            <Link to="/produits" className="back-btn">
              ← Retour aux produits
            </Link>
          </div>
        </section>
      </div>
    );
  }


  return (
    <div className="product-detail-page">
      {/* Navigation retour */}
      <section className="detail-navigation">
        <div className="container">
          <Link to="/produits" className="back-btn">
            <span className="back-arrow">←</span>
            Retour aux produits
          </Link>
        </div>
      </section>

      {/* Hero avec titre */}
      <section className="page-hero">
        <div className="container">
          <h1>{product.title}</h1>
          <p>Solution d'impression professionnelle sur mesure</p>
        </div>
      </section>
      
      {/* Contenu principal */}
      <section className="product-detail-content">
        <div className="container">
          <div className="detail-layout">
            {/* Image dans un cadre élégant */}
            <div className="product-image-frame">
              <div className="image-container">
                <img src={product.image} alt={product.title} />
                <div className="frame-decoration">
                  <div className="corner corner-tl"></div>
                  <div className="corner corner-tr"></div>
                  <div className="corner corner-bl"></div>
                  <div className="corner corner-br"></div>
                </div>
              </div>
              
              {/* Badge qualité */}
              <div className="quality-badge">
                <span className="badge-icon">✨</span>
                <span className="badge-text">Qualité Premium</span>
              </div>
            </div>
            
            {/* Texte détaillé */}
            <div className="product-text-content">
              <div className="product-intro">
                <h2 className="detail-title">{product.title}</h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="description-section">
                <p className="full-description">{product.fullDescription}</p>
              </div>
              
              {/* Bouton demande de devis */}
              <div className="cta-section">
                <Link to="/demande-devis" className="quote-btn">
                  <span className="btn-icon">💬</span>
                  Demande de Devis
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
              <div className="contact-info">
                <p className="contact-text">
                  Réponse sous 2h • Devis gratuit • Conseil personnalisé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
