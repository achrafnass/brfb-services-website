export interface Product {
  slug: string;
  title: string;
  short: string;
  long: string;
  image: string;
  features: string[];
  featured?: boolean;
}

const img = (f: string) => `/products-photos/${f}`;

export const products: Product[] = [
  {
    slug: 'fournitures-de-bureau',
    title: 'Fournitures de Bureau',
    short: 'Cartes de visite, en-têtes, cachets et tous vos documents professionnels.',
    long: "Créez une identité professionnelle forte avec notre gamme complète de fournitures de bureau. Cartes de visite sur différents supports, papiers à en-tête personnalisés, cachets d'entreprise, tampons encreurs. Nous proposons une large gamme de supports et de finitions pour tous vos besoins administratifs et commerciaux.",
    image: img('fournitures-de-bureau.webp'),
    features: ['Cartes de visite premium', 'Papiers à en-tête', "Cachets d'entreprise", 'Finitions sur mesure'],
    featured: true,
  },
  {
    slug: 'flyers-brochures',
    title: 'Flyers & Brochures',
    short: 'Supports publicitaires percutants pour promouvoir vos événements et services.',
    long: "Maximisez l'impact de vos campagnes marketing avec nos flyers et brochures. Imprimés sur papier de qualité supérieure, nos supports garantissent une excellente reproduction des couleurs et des détails. Disponibles en plusieurs formats (A4, A5, A6, format personnalisé) et finitions (brillant, mat, soft-touch).",
    image: img('flyers.webp'),
    features: ['Formats A4, A5, A6 disponibles', 'Papier haute qualité', 'Finitions variées', 'Quantités flexibles'],
    featured: true,
  },
  {
    slug: 'impression-bache',
    title: 'Impression Bâche',
    short: 'Bâches publicitaires résistantes pour extérieur et événements.',
    long: "Donnez de la visibilité à vos messages avec nos impressions sur bâche. Parfaites pour la signalétique extérieure, les événements, les chantiers et les campagnes publicitaires de grande envergure. Matériaux résistants aux intempéries avec encres UV pour une durabilité maximale, avec œillets et finitions renforcées.",
    image: img('impression-bache.webp'),
    features: ['Résistant aux intempéries', "Formats jusqu'à 5 m de large", 'Encres UV durables', 'Œillets et finitions'],
    featured: true,
  },
  {
    slug: 'roll-up-et-plv',
    title: 'Roll-up et PLV',
    short: 'Supports de communication portables et efficaces pour vos événements.',
    long: "Optimisez votre communication événementielle avec nos roll-ups et solutions PLV. Supports portables, faciles à installer et réutilisables : kakémonos, totems, présentoirs, panneaux directionnels. Matériaux durables et impression haute définition. Conception graphique et conseils inclus.",
    image: img('rollup-avec-support.webp'),
    features: ['Facile à transporter', 'Installation rapide', 'Réutilisable', 'Conception incluse'],
    featured: true,
  },
  {
    slug: 'x-banner',
    title: 'X-Banner',
    short: 'Supports publicitaires économiques et pratiques pour vos promotions.',
    long: "Les X-banners sont la solution idéale pour vos communications temporaires et promotions. Légers, économiques et faciles à installer, ils sont parfaits pour les points de vente, les événements éphémères et les campagnes saisonnières. Structure aluminium robuste avec impression haute qualité sur bâche ou vinyle.",
    image: img('x-banner.webp'),
    features: ['Économique et pratique', 'Installation sans outils', 'Transport facile', 'Impression HD'],
  },
  {
    slug: 'impression-adhesif',
    title: 'Impression Adhésif',
    short: 'Autocollants et stickers personnalisés pour tous supports.',
    long: "Créez des autocollants durables et attractifs avec notre service d'impression adhésif. Stickers promotionnels, étiquettes produit, vinyle décoratif, marquage véhicule. Large choix de matériaux : vinyle, papier, matières spéciales. Découpe à la forme, impression couleur haute résolution.",
    image: img('impression-adhesif.webp'),
    features: ['Découpe à la forme', 'Adhésifs permanents ou repositionnables', 'Résistant UV', 'Tous supports'],
    featured: true,
  },
  {
    slug: 'impression-sur-t-shirts',
    title: 'Impression sur T-shirts',
    short: 'Textiles personnalisés pour vos événements et votre communication.',
    long: "Personnalisez vos textiles avec nos techniques d'impression professionnelles. T-shirts, polos, sweat-shirts, tabliers pour vos équipes, événements ou boutiques. Sérigraphie, flex, flocage, broderie selon vos besoins. Petites et grandes séries avec conseils techniques inclus.",
    image: img('impression-sur-tshirts.webp'),
    features: ['Sérigraphie et flex', 'Textiles de qualité', 'Marquage durable', 'Petites et grandes séries'],
    featured: true,
  },
  {
    slug: 'impression-sur-verre',
    title: 'Impression sur Verre',
    short: 'Décoration et signalétique sur supports verriers.',
    long: "Personnalisez vos surfaces vitrées avec nos impressions sur verre. Vitrophanie, film dépoli, impression couleur directe. Idéal pour la décoration d'intérieur, la signalétique de magasins, les séparations de bureaux. Découpe sur mesure et pose possible.",
    image: img('impression-sur-verre.webp'),
    features: ['Vitrophanie décorative', 'Film dépoli', 'Adhérence parfaite', 'Découpe sur mesure'],
  },
  {
    slug: 'tirage-de-plans',
    title: 'Tirage de Plans',
    short: "Impression technique et plans d'architecte haute précision.",
    long: "Service spécialisé dans l'impression de plans techniques, architecturaux et d'ingénierie. Formats A0, A1, A2 sur papier technique ou calque. Précision millimétrique, trait fin préservé. Idéal pour cabinets d'architectes, bureaux d'études et entreprises du BTP.",
    image: img('tirage-des-plans.webp'),
    features: ['Formats A0, A1, A2', 'Précision millimétrique', 'Papier technique', 'Livraison rapide'],
  },
  {
    slug: 'encollage-de-livres',
    title: 'Encollage de Livres',
    short: 'Reliure et façonnage professionnel de vos documents.',
    long: "Donnez une finition professionnelle à vos documents avec notre service d'encollage et reliure. Dos carré collé, spirale, agrafage, reliure cousue pour tous vos projets éditoriaux : livres, catalogues, mémoires, rapports annuels. Choix de couvertures et de papiers.",
    image: img('encollage-des-livres.webp'),
    features: ['Dos carré collé', 'Reliure spirale', 'Qualité éditoriale', 'Conseil inclus'],
  },
  {
    slug: 'trophees-personnalises',
    title: 'Trophées Personnalisés',
    short: 'Récompenses sur mesure pour vos événements et cérémonies.',
    long: "Créez des trophées uniques pour récompenser vos lauréats. Gravure sur plexi, métal, bois ou verre. Coupes, médailles, plaques commémoratives entièrement personnalisées. Design sur mesure selon votre événement : sportif, corporate, associatif.",
    image: img('trophees-personnalise.webp'),
    features: ['Gravure multi-supports', 'Design sur mesure', 'Rendu soigné', 'Tous événements'],
  },
  {
    slug: 'cachets-personnalises',
    title: 'Cachets Personnalisés',
    short: "Tampons et cachets d'entreprise sur mesure.",
    long: "Fabrication de cachets et tampons personnalisés pour tous vos besoins administratifs. Tampons encreurs automatiques, cachets à sec, numéroteurs, dateurs. Fabrication rapide avec gravure laser pour une précision parfaite. Idéal pour administrations, entreprises, professions libérales et associations.",
    image: img('cachet-personnalise.webp'),
    features: ['Gravure laser précise', 'Encres multi-couleurs', 'Fabrication rapide', 'Usage professionnel'],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
