/**
 * Configuration WhatsApp Business pour B.R.F.B Services
 */

export const WHATSAPP_CONFIG = {
  // Numéro WhatsApp Business (format international sans +)
  phoneNumber: "212689139109", // Numéro B.R.F.B Services

  // Messages prédéfinis
  messages: {
    // Message générique du site
    default: "Bonjour, je souhaiterais obtenir des informations sur vos services d'impression.",
    
    // Message pour devis produit spécifique
    productInquiry: (productName) => 
      `Bonjour, je souhaiterais obtenir un devis pour : ${productName}`,
    
    // Message du footer
    footer: "Bonjour, je souhaiterais obtenir des informations sur vos services d'impression."
  },

  // Limites
  maxMessageLength: 4096, // Limite WhatsApp
  
  // Format des messages de devis
  formatQuoteMessage: (formData) => {
    return `*NOUVELLE DEMANDE DE DEVIS*

*Client :* ${formData.firstName} ${formData.lastName}
${formData.company ? `*Société :* ${formData.company}` : ''}
*Téléphone :* ${formData.phone}
*Email :* ${formData.email}

*Produit demandé :*
${formData.product}

${formData.file ? `*RAPPEL IMPORTANT :* J'ai un fichier à joindre (${formData.file.name}) que je vais envoyer après ce message.` : ''}

Merci de me recontacter rapidement.`;
  }
};

/**
 * Génère une URL WhatsApp avec message pré-rempli
 * @param {string} message - Message à pré-remplir
 * @param {string} phoneNumber - Numéro (optionnel, utilise celui de config)
 * @returns {string} URL WhatsApp
 */
export const generateWhatsAppURL = (message, phoneNumber = null) => {
  const phone = phoneNumber || WHATSAPP_CONFIG.phoneNumber;
  
  // Vérifier la longueur du message
  if (message.length > WHATSAPP_CONFIG.maxMessageLength) {
    console.warn('Message WhatsApp trop long, il sera tronqué');
    message = message.substring(0, WHATSAPP_CONFIG.maxMessageLength - 3) + '...';
  }
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

/**
 * Ouvre WhatsApp dans un nouvel onglet
 * @param {string} message - Message à envoyer
 * @param {string} phoneNumber - Numéro (optionnel)
 */
export const openWhatsApp = (message, phoneNumber = null) => {
  const url = generateWhatsAppURL(message, phoneNumber);
  window.open(url, '_blank');
};

/**
 * Valide un numéro WhatsApp (format international)
 * @param {string} phoneNumber - Numéro à valider
 * @returns {boolean}
 */
export const isValidWhatsAppNumber = (phoneNumber) => {
  // Format international sans + : 33123456789
  const regex = /^[1-9]\d{6,14}$/;
  return regex.test(phoneNumber);
};
