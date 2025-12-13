import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Competences.css';

const Competences = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div>
      <Navbar />
      <section id="competences" className="competences-section">
        <h2 className="section-title">Mes Compétences</h2>
        
        {/* Bouton pour afficher/masquer le tableau de synthèse */}
        <div className="pdf-toggle-container">
          <button 
            className="pdf-toggle-btn"
            onClick={() => setShowPDF(!showPDF)}
          >
            {showPDF ? 'Masquer' : 'Afficher'} le Tableau de Synthèse
          </button>
        </div>

        {/* Affichage du PDF */}
        {showPDF && (
          <div className="pdf-container">
            <iframe
              src="public/BTS SIO 2025 - E4 - Tableau de synthèse .pdf "
              title="Tableau de Synthèse des Compétences"
              className="pdf-viewer"
            />
          </div>
        )}

        <div className="competences-container">
          <div className="competence-card">
            <h3>Développement Front-end</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>GSAP</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Développement Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Django</li>
              <li>MongoDB</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Outils</h3>
            <ul>
              <li>GitLab</li>
              <li>GitHub</li>
              <li>Cursor / VSCode</li>
              <li>Figma</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;