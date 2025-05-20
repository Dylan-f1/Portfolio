import React from 'react';
import Navbar from '../components/Navbar';

const Projets = () => {
  return (
    <div>
      <Navbar />
      <section className="portfolio-section">
        <h2>Mes Projets Personnels</h2>
        <div className="portfolio-container">
          <p>Voici mes projets personnels et mes travaux en cours</p> 
        </div>
      </section>
    </div>
  );
};

export default Projets; 