// Configuration et utilitaires pour les cartes et géolocalisation

// Coordonnées GPS: 31°39'33.4"N 7°59'43.6"W
export const GPS_COORDINATES = {
  latitude: 31.659278,
  longitude: -7.995444,
  formatted: '31°39\'33.4"N 7°59\'43.6"W'
};

// Fonction pour ouvrir les coordonnées dans l'application de navigation
export const openLocation = () => {
  const { latitude, longitude } = GPS_COORDINATES;
  
  // Détecter le type d'appareil et ouvrir l'app appropriée
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Pour les appareils iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // Ouvrir Apple Maps
    window.open(`http://maps.apple.com/?q=${latitude},${longitude}`, '_blank');
  }
  // Pour les appareils Android
  else if (/android/i.test(userAgent)) {
    // Ouvrir Google Maps ou l'app de navigation par défaut
    window.open(`geo:${latitude},${longitude}`, '_blank');
  }
  // Pour les navigateurs desktop
  else {
    // Ouvrir Google Maps dans le navigateur
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
  }
};

// Fonction pour obtenir un lien Google Maps standard
export const getGoogleMapsLink = () => {
  const { latitude, longitude } = GPS_COORDINATES;
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
};

// Fonction pour obtenir un lien vers les directions
export const getDirectionsLink = () => {
  const { latitude, longitude } = GPS_COORDINATES;
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
};
