import React from 'react';
import { Link } from 'react-router-dom';
import { createSlug } from '../../utils/slugs';
import '../../styles/pages.css';
import './ProductsPage.css';

// Helper pour construire les URLs d'images
const getImageUrl = (imagePath) => {
  return `${process.env.PUBLIC_URL}${imagePath}`;
};

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: "Fournitures de Bureau",
      shortDescription: "Cartes de visite, en-têtes, cachets et tous vos documents professionnels...",
      fullDescription: "Créez une identité professionnelle forte avec notre gamme complète de fournitures de bureau. Cartes de visite sur différents supports, papiers à en-tête personnalisés, cachets d'entreprise, tampons encreurs. Nous proposons une large gamme de supports et de finitions pour tous vos besoins administratifs et commerciaux. Quality professionnelle garantie pour renforcer votre image de marque.",
      image: getImageUrl("/products-photos/fournitures-de-bureau.webp"),
      features: ["Cartes de visite premium", "Papiers à en-tête", "Cachets d'entreprise", "Finitions sur mesure"]
    },
    {
      id: 2,
      title: "Flyers & Brochures",
      shortDescription: "Supports publicitaires percutants pour promouvoir vos événements et services...",
      fullDescription: "Maximisez l'impact de vos campagnes marketing avec nos flyers et brochures. Imprimés sur papier de qualité supérieure, nos supports publicitaires garantissent une excellente reproduction des couleurs et des détails. Disponibles en plusieurs formats (A4, A5, A6, format personnalisé) et finitions (brillant, mat, soft-touch). Parfaits pour vos événements, promotions, lancements de produits ou communication institutionnelle.",
      image: getImageUrl("/products-photos/flyers.webp"),
      features: ["Format A4, A5, A6 disponibles", "Papier haute qualité", "Finitions variées", "Quantités flexibles"]
    },
    {
      id: 3,
      title: "Impression Bâche",
      shortDescription: "Bâches publicitaires résistantes pour extérieur et événements...",
      fullDescription: "Donnez de la visibilité à vos messages avec nos impressions sur bâche. Parfaites pour la signalétique extérieure, les événements, les chantiers et les campagnes publicitaires de grande envergure. Matériaux résistants aux intempéries avec encres UV pour une durabilité maximale. Formats sur mesure jusqu'à très grande taille avec œillets et finitions renforcées.",
      image: getImageUrl("/products-photos/impression-bache.webp"),
      features: ["Résistant aux intempéries", "Formats jusqu'à 5m de large", "Encres UV durables", "Œillets et finitions"]
    },
    {
      id: 4,
      title: "Roll-up et PLV",
      shortDescription: "Supports de communication portables et efficaces pour vos événements...",
      fullDescription: "Optimisez votre communication événementielle avec nos roll-ups et solutions PLV. Supports portables, faciles à installer et réutilisables. Kakémonos, totems, présentoirs, panneaux directionnels. Matériaux durables et impression haute définition pour une communication visuelle impactante. Conception graphique et conseils inclus pour maximiser votre visibilité.",
      image: getImageUrl("/products-photos/rollup-avec-support.webp"),
      features: ["Facile à transporter", "Installation rapide", "Réutilisable", "Conception incluse"]
    },
    {
      id: 5,
      title: "X-Banner",
      shortDescription: "Supports publicitaires économiques et pratiques pour vos promotions...",
      fullDescription: "Les X-banners sont la solution idéale pour vos communications temporaires et promotions. Légers, économiques et faciles à installer, ils sont parfaits pour les points de vente, les événements éphémères et les campagnes saisonnières. Structure aluminium robuste avec impression haute qualité sur bâche ou vinyle. Transport et stockage optimisés.",
      image: getImageUrl("/products-photos/x-banner.webp"),
      features: ["Économique et pratique", "Installation sans outils", "Transport facile", "Impression HD"]
    },
    {
      id: 6,
      title: "Impression Adhésif",
      shortDescription: "Autocollants et stickers personnalisés pour tous supports...",
      fullDescription: "Créez des autocollants durables et attractifs avec notre service d'impression adhésif. Stickers promotionnels, étiquettes produit, vinyle décoratif, marquage véhicule. Large choix de matériaux : vinyle, papier, matières spéciales. Découpe à la forme, impression couleur haute résolution. Adhésifs repositionnables ou permanents selon vos besoins.",
      image: getImageUrl("/products-photos/impression-adhesif.webp"),
      features: ["Découpe à la forme", "Adhésifs permanents/repositionnables", "Résistant UV", "Tous supports"]
    },
    {
      id: 7,
      title: "Impression sur T-shirts",
      shortDescription: "Textiles personnalisés pour vos événements et votre communication...",
      fullDescription: "Personnalisez vos textiles avec nos techniques d'impression professionnelles. T-shirts, polos, sweat-shirts, tabliers pour vos équipes, événements ou boutiques. Sérigraphie, flex, flocage, broderie selon vos besoins. Textile de qualité, marquage durable, couleurs éclatantes. Petites et grandes séries avec conseils techniques inclus.",
      image: getImageUrl("/products-photos/impression-sur-tshirts.webp"),
      features: ["Sérigraphie et flex", "Textiles de qualité", "Marquage durable", "Petites et grandes séries"]
    },
    {
      id: 8,
      title: "Impression sur Verre",
      shortDescription: "Décoration et signalétique sur supports verriers...",
      fullDescription: "Personnalisez vos surfaces vitrées avec nos impressions sur verre. Vitrophanie, film dépoli, impression couleur directe sur verre. Idéal pour la décoration d'intérieur, la signalétique de magasins, les séparations de bureaux. Techniques spécialisées garantissant adhérence parfaite et rendu professionnel. Découpe sur mesure et pose possible.",
      image: getImageUrl("/products-photos/impression-sur-verre.webp"),
      features: ["Vitrophanie décorative", "Film dépoli", "Adhérence parfaite", "Découpe sur mesure"]
    },
    {
      id: 9,
      title: "Tirage de Plans",
      shortDescription: "Impression technique et plans d'architecte haute précision...",
      fullDescription: "Service spécialisé dans l'impression de plans techniques, architecturaux et d'ingénierie. Formats A0, A1, A2 sur papier technique ou calque. Précision millimétrique garantie, trait fin préservé. Idéal pour cabinets d'architectes, bureaux d'études, entreprises du BTP. Livraison rapide et conditionnement soigné pour vos dossiers professionnels.",
      image: getImageUrl("/products-photos/tirage-des-plans.webp"),
      features: ["Formats A0, A1, A2", "Précision millimétrique", "Papier technique", "Livraison rapide"]
    },
    {
      id: 10,
      title: "Encollage de Livres",
      shortDescription: "Reliure et façonnage professionnel de vos documents...",
      fullDescription: "Donnez une finition professionnelle à vos documents avec notre service d'encollage et reliure. Dos carré collé, spirale, agrafage, reliure cousue pour tous vos projets éditoriaux. Livres, catalogues, mémoires, rapports annuels. Finitions de qualité éditoriale avec choix de couvertures et papiers. Conseil éditorial et suivi de fabrication inclus.",
      image: getImageUrl("/products-photos/encollage-des-livres.webp"),
      features: ["Dos carré collé", "Reliure spirale", "Qualité éditoriale", "Conseil inclus"]
    },
    {
      id: 11,
      title: "Trophées Personnalisés",
      shortDescription: "Récompenses sur mesure pour vos événements et cérémonies...",
      fullDescription: "Créez des trophées uniques pour récompenser vos lauréats. Gravure sur plexi, métal, bois ou verre. Coupes, médailles, plaques commémoratives entièrement personnalisées. Design sur mesure selon votre événement : sportif, corporate, associatif. Techniques de marquage variées pour un rendu exceptionnel qui marquera les esprits.",
      image: getImageUrl("/products-photos/trophees-personnalise.webp"),
      features: ["Gravure multi-supports", "Design sur mesure", "Rendu exceptionnel", "Tous événements"]
    },
    {
      id: 12,
      title: "Cachets Personnalisés",
      shortDescription: "Tampons et cachets d'entreprise sur mesure...",
      fullDescription: "Fabrication de cachets et tampons personnalisés pour tous vos besoins administratifs. Tampons encreurs automatiques, cachets à sec, numeroteurs, dateurs. Fabrication rapide avec gravure laser pour une précision parfaite. Encres de différentes couleurs disponibles. Idéal pour administrations, entreprises, professions libérales et associations.",
      image: getImageUrl("/products-photos/cachet-personnalise.webp"),
      features: ["Gravure laser précise", "Encres multi-couleurs", "Fabrication rapide", "Usage professionnel"]
    }
  ];

  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="container">
          <h1>Nos Produits</h1>
          <p>Découvrez notre gamme complète de solutions d'impression</p>
        </div>
      </section>
      
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <div className="product-overlay">
                    <Link 
                      to={`/produit/${createSlug(product.title)}`}
                      className="view-details-btn"
                    >
                      <span className="arrow-icon">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.shortDescription}</p>
                  
                  <div className="product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/produit/${createSlug(product.title)}`}
                    className="see-more-btn"
                  >
                    Voir plus
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
