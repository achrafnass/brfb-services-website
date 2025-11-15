import React from 'react';
import HeroCarousel from '../HeroCarousel';
import About from '../About';
import DreamSection from '../DreamSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroCarousel />
      <About />
      <DreamSection />
    </div>
  );
};

export default HomePage;
