import React, { useState } from 'react';
import { WHATSAPP_CONFIG, openWhatsApp } from '../../config/whatsapp';
import '../../styles/pages.css';
import './QuoteRequestPage.css';

const QuoteRequestPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    file: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showMethodPopup, setShowMethodPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur si l'utilisateur corrige le champ
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      file: file
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation du prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est obligatoire';
    }

    // Validation du nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est obligatoire';
    }

    // Validation du téléphone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est obligatoire';
    } else if (!/^[0-9\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Format de téléphone invalide (minimum 10 chiffres)';
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide (exemple: nom@domaine.com)';
    }

    // Validation du produit
    if (!formData.product.trim()) {
      newErrors.product = 'La description du produit est obligatoire';
    } else if (formData.product.trim().length < 10) {
      newErrors.product = 'Veuillez décrire plus précisément votre produit (minimum 10 caractères)';
    }

    setErrors(newErrors);
    
    // Si erreurs, faire défiler vers le premier champ en erreur
    if (Object.keys(newErrors).length > 0) {
      scrollToFirstError(newErrors);
      return false;
    }
    
    return true;
  };

  // Fonction pour faire défiler vers le premier champ en erreur
  const scrollToFirstError = (errors) => {
    const errorFields = ['firstName', 'lastName', 'phone', 'email', 'product'];
    const firstErrorField = errorFields.find(field => errors[field]);
    
    if (firstErrorField) {
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        // Scroll avec animation douce
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        
        // Focus sur le champ après un délai pour l'animation
        setTimeout(() => {
          element.focus();
        }, 500);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérifier la validation du formulaire
    if (!validateForm()) {
      return; // Les erreurs sont déjà gérées dans validateForm()
    }

    // Afficher la popup de choix de méthode
    setShowMethodPopup(true);
  };

  const handleMethodChoice = async (method) => {
    setShowMethodPopup(false);
    setIsSubmitting(true);
    setErrors({});

    try {
      if (method === 'whatsapp') {
        // Générer le message WhatsApp formaté via la config
        const message = WHATSAPP_CONFIG.formatQuoteMessage(formData);
        
        // Ouvrir WhatsApp avec le message
        openWhatsApp(message);
      } else if (method === 'email') {
        // Créer l'email simple avec Gmail
        const emailBody = `Bonjour,

Je souhaiterais obtenir un devis pour le produit suivant :

${formData.product}

Mes coordonnées :
- Nom : ${formData.firstName} ${formData.lastName}
${formData.company ? `- Société : ${formData.company}` : ''}
- Téléphone : ${formData.phone}
- Email : ${formData.email}

${formData.file ? `⚠️ RAPPEL: J'ai un fichier à joindre (${formData.file.name}) que je vais attacher manuellement à cet email.` : ''}

Merci de me recontacter rapidement.

Cordialement,
${formData.firstName} ${formData.lastName}`;

        // URL Gmail simple
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('Brfbbureau@gmail.com')}&su=${encodeURIComponent('Demande de devis')}&body=${encodeURIComponent(emailBody)}`;
        
        // Ouvrir Gmail
        window.open(gmailUrl, '_blank');
      }
      
      setSubmitSuccess(true);
      
      // Reset form après succès
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          email: '',
          product: '',
          file: null
        });
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setErrors({ submit: 'Erreur lors de l\'envoi. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-request-page">
      <section className="page-hero">
        <div className="container">
          <h1>Demande de Devis</h1>
          <p>Obtenez un devis personnalisé pour votre projet d'impression</p>
        </div>
      </section>
      
      <section className="form-section">
        <div className="container">
          {submitSuccess ? (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>Demande envoyée avec succès !</h3>
              <p>Vous allez être redirigé vers WhatsApp pour finaliser votre demande.</p>
              <p>Nous vous recontacterons dans les plus brefs délais.</p>
            </div>
          ) : (
            <div className="form-container">
              <div className="form-header">
                <h2>Formulaire de Demande</h2>
                <p>Remplissez tous les champs obligatoires (*) pour recevoir votre devis</p>
              </div>


              <form onSubmit={handleSubmit} className="quote-form">
                {/* Nom et Prénom */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="Votre prénom"
                      autoComplete="given-name"
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Votre nom"
                      autoComplete="family-name"
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

                {/* Société */}
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Société
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Nom de votre société (optionnel)"
                    autoComplete="organization"
                  />
                </div>

                {/* Téléphone et Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+212 6XX XX XX XX"
                      autoComplete="tel"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="votre.email@exemple.com"
                      autoComplete="email"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                {/* Upload fichier */}
                <div className="form-group">
                  <label htmlFor="file" className="form-label">
                    Fichier / Photo
                  </label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="file-input"
                      accept="image/*,.pdf,.doc,.docx,.ai,.psd"
                    />
                    <label htmlFor="file" className="file-upload-label">
                      <span className="upload-icon">📎</span>
                      {formData.file ? formData.file.name : 'Cliquez pour ajouter un fichier'}
                      <span className="file-info">
                        Formats acceptés: Images, PDF, DOC, AI, PSD (Max 10MB)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Produit souhaité */}
                <div className="form-group">
                  <label htmlFor="product" className="form-label">
                    Produit(s) Souhaité(s) *
                  </label>
                  <textarea
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.product ? 'error' : ''}`}
                    placeholder="Décrivez votre projet d'impression: type de produit, quantité, format, délai souhaité, etc."
                    rows="5"
                    autoComplete="off"
                  />
                  <div className="field-help">
                    <span className="help-text">Minimum 10 caractères requis</span>
                    <span className={`char-counter ${formData.product.length >= 10 ? 'valid' : 'invalid'}`}>
                      {formData.product.length}/10
                    </span>
                  </div>
                  {errors.product && <span className="error-message">{errors.product}</span>}
                </div>

                {/* Message d'erreur général */}
                {errors.submit && (
                  <div className="error-message-global">
                    {errors.submit}
                  </div>
                )}

                {/* Bouton envoyer */}
                <div className="form-submit">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading-spinner"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <span className="submit-icon">📝</span>
                        Envoyer ma Demande
                        <span className="submit-arrow">→</span>
                      </>
                    )}
                  </button>
                  
                  <p className="submit-info">
                    Votre demande sera traitée dans les 2 heures ouvrables
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Popup de choix de méthode d'envoi */}
      {showMethodPopup && (
        <div className="method-popup-overlay">
          <div className="method-popup">
            <h3 className="popup-title">Choisir la méthode d'envoi</h3>
            <p className="popup-subtitle">Comment souhaitez-vous envoyer votre demande de devis ?</p>
            
            <div className="method-options">
              <button 
                className="method-option"
                onClick={() => handleMethodChoice('email')}
              >
                <span className="method-icon">📧</span>
                <div className="method-info">
                  <h4>Par Email</h4>
                  <p>Ouvre Gmail avec votre demande préremplie</p>
                </div>
              </button>
              
              <button 
                className="method-option"
                onClick={() => handleMethodChoice('whatsapp')}
              >
                <span className="method-icon">💬</span>
                <div className="method-info">
                  <h4>Par WhatsApp</h4>
                  <p>Ouvre WhatsApp avec le message pré-rempli</p>
                </div>
              </button>
            </div>
            
            <button 
              className="popup-close"
              onClick={() => setShowMethodPopup(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteRequestPage;
