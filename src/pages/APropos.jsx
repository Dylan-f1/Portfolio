import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/APropos.css';

const Competences = () => {
  const [showPDF, setShowPDF] = useState(false);

  const parcours = [
    {
      annee: "2024 - 2026",
      titre: "BTS SIO SLAM",
      etablissement: "Nexa Digital School - Lyon",
      description: "Spécialisation Solutions Logicielles et Applications Métiers",
      statut: "En cours"
    },
    {
      annee: "2021 - 2023",
      titre: "Baccalauréat",
      etablissement: "Lycée Martinière Monplaisir ",
      description: "Bac Technologique STI2D",
      statut: "Obtenu"
    }
  ];

  return (
    <div>
      <Navbar />
      <section id="a-propos" className="competences-section">
        <h2 className="section-title">À Propos de Moi</h2>
        
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
              src="/Tableau-de-synthese.png"
              title="Tableau de Synthèse des Compétences"
              className="pdf-viewer"
            />
          </div>
        )}

        {/* Nouvelle section : Parcours scolaire */}
        <div className="parcours-section">
          <h2 className="section-subtitle">Mon Parcours</h2>
          <div className="timeline">
            {parcours.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.annee}</div>
                  <h3 className="timeline-title">{item.titre}</h3>
                  <h4 className="timeline-etablissement">{item.etablissement}</h4>
                  <p className="timeline-description">{item.description}</p>
                  <span className={`timeline-badge ${item.statut === 'En cours' ? 'badge-encours' : 'badge-obtenu'}`}>
                    {item.statut}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section compétences existante */}
        <h2 className="section-subtitle" style={{marginTop: '80px'}}>Mes Compétences</h2>
        <div className="competences-container">
          <div className="competence-card">
            <h3>Développement Front-end</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>GSAP</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
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
              <li>MySQL</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Outils & Méthodologies</h3>
            <ul>
              <li>Git / GitLab / GitHub</li>
              <li>Cursor / VSCode</li>
              <li>Figma</li>
              <li>Postman</li>
              <li>Cypress (Tests E2E)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;