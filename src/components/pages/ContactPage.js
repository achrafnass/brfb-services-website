import React from 'react';
import Contact from '../Contact';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="page-hero" style={{paddingTop: '6rem'}}>
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Nous sommes là pour répondre à tous vos besoins</p>
        </div>
      </section>
      
      <Contact />
    </div>
  );
};

export default ContactPage;
