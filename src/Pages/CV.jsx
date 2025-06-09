import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/CV.css';

const CV = () => {
  return (
    <div>
      <Navbar />
      <section className="cv-section">
        <h2 className="section-title">Mon CV</h2>
        <div className="cv-container">
          <div className="cv-image-container">
            <img 
              src="/CV-Dylan-Fernandes.png" 
              alt="CV de Dylan Fernandes" 
              className="cv-image" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
