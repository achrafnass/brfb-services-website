import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "SERVICE RAPIDE ET SURTOUT DE QUALITÉ",
      subtitle: "Votre partenaire en print",
      buttonText: "DEMANDE DE DEVIS",
      description: "Excellence en impression depuis plus de 15 ans",
      action: () => navigate('/demande-devis')
    },
    {
      id: 2,
      title: "IMPRESSION PROFESSIONNELLE HAUTE QUALITÉ",
      subtitle: "Solutions d'impression complètes",
      buttonText: "DÉCOUVRIR NOS PRODUITS",
      description: "Cartes de visite, flyers, brochures et plus encore",
      action: () => navigate('/produits')
    },
    {
      id: 3,
      title: "DÉLAIS RESPECTÉS, RÉSULTATS GARANTIS",
      subtitle: "Votre succès, notre engagement",
      buttonText: "CONTACTEZ-NOUS",
      description: "Service client personnalisé et conseils d'experts",
      action: () => navigate('/contact')
    },
    {
      id: 4,
      title: "MATÉRIEL DERNIÈRE GÉNÉRATION",
      subtitle: "Technologie de pointe",
      buttonText: "DÉCOUVRIR NOTRE ENTREPRISE",
      description: "Qualité d'impression exceptionnelle sur tous supports",
      action: () => navigate('/a-propos')
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  // Fonctions pour le support tactile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="home" className="hero-carousel">
      <div 
        className="carousel-container"
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide-background"></div>
              <div className="slide-content">
                <div className="container">
                  <div className="content-wrapper">
                    <p className="slide-subtitle">{slide.subtitle}</p>
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-description">{slide.description}</p>
                    <button className="cta-button" onClick={slide.action}>
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
          <span>›</span>
        </button>

        {/* Dots Indicator */}
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
