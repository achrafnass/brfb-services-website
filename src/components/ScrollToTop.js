import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant qui remet automatiquement en haut de page
 * à chaque changement de route
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll vers le haut à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Scroll instantané pour la navigation
    });
  }, [pathname]);

  return null; // Ce composant ne rend rien
};

export default ScrollToTop;
