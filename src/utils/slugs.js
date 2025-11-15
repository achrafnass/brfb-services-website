// Fonction utilitaire pour créer des slugs à partir des noms de produits
export const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '') // Supprime les caractères spéciaux
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/-+/g, '-') // Supprime les tirets multiples
    .trim('-'); // Supprime les tirets en début/fin
};

// Fonction pour retrouver un produit par son slug
export const findProductBySlug = (products, slug) => {
  return products.find(product => createSlug(product.title) === slug);
};
