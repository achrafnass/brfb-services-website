# B.R.F.B services — site v2

Refonte du site de l'imprimerie B.R.F.B services (Marrakech), construite avec Astro (HTML statique).

## Commandes
- `npm install`
- `npm run dev` — serveur de développement
- `npm run build` — génère `dist/`
- `npm run preview` — sert `dist/`

## Où modifier quoi
- Coordonnées, horaires, WhatsApp : `src/data/site.ts`
- Produits (textes, images, caractéristiques) : `src/data/products.ts`
- Couleurs (tirées du logo) : variables `:root` de `src/styles/global.css`
- SEO / GEO : `src/layouts/Layout.astro` (balises, JSON-LD), `public/llms.txt`, `public/robots.txt`

## Déploiement (Netlify ou Cloudflare Pages)
1. Pousser le projet sur GitHub.
2. Créer un site depuis ce dépôt : commande `npm run build`, dossier de publication `dist` (déjà configuré dans `netlify.toml`).
3. Ajouter le domaine `brfbservices.ma` et activer le HTTPS.
4. Après mise en ligne : soumettre `https://brfbservices.ma/sitemap-index.xml` dans Google Search Console et vérifier la fiche Google Business.
5. Les anciennes URLs `/#/produit/...` sont redirigées côté navigateur (script sur l'accueil).
