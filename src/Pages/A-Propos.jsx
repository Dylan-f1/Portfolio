import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/a-propos.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <h2>À Propos</h2>
        <div className="contact-container">
          <p>Je suis un développeur web passionné par la création de sites web et d'applications. Je suis actuellement en formation pour devenir développeur web full stack. Je suis actuellement en stage pour valider ma formation et acquérir des compétences pratiques.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact; 