import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/APropos.css';

const Competences = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const parcours = [
    {
      annee: "2024 - 2026",
      titre: "BTS SIO SLAM",
      etablissement: "Lyon",
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

        {/* Section Introduction */}
        <div className="introduction-section">
          <div className="intro-content">
            <p className="intro-text">
              Ma passion pour l'informatique est née des jeux vidéo. Ce qui m'attirait,
              ce n'était pas simplement de jouer — c'était de comprendre comment ça fonctionnait derrière l'écran,
              et un jour d'en créer moi-même. J'ai rapidement orienté cette curiosité vers le développement web
              et les applications : un domaine où je peux exprimer ma créativité tout en construisant
              des solutions concrètes qui ont un vrai impact.
            </p>
            <p className="intro-text">
              Je suis aussi passionné par la Formule 1. Plus qu'un sport, c'est un concentré de technologie,
              d'optimisation et d'innovation permanente — chaque dixième de seconde compte, chaque détail est
              poussé à l'extrême. C'est exactement la même logique que j'applique dans mon code :
              chercher constamment à faire mieux, plus propre, plus performant.
            </p>
            <p className="intro-text">
              Ces deux passions ont un point commun : la technologie au service de la performance.
              C'est ce fil rouge qui m'a naturellement conduit vers le BTS SIO option SLAM —
              pour transformer cette curiosité en un vrai savoir-faire professionnel.
            </p>
          </div>
        </div>

        {/* Section Parcours scolaire */}
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

        {/* Section CV */}
        <div className="pdf-toggle-container">
          <button
            className="pdf-toggle-btn"
            onClick={() => setShowCV(!showCV)}
          >
            {showCV ? 'Masquer' : 'Afficher'} mon CV
          </button>
        </div>

        {showCV && (
          <div className="pdf-container">
            <div className="cv-image-container">
              <img
                src="/CV-Dylan-Fernandes.png"
                alt="CV de Dylan Fernandes"
                className="cv-image"
              />
            </div>
            <div className="cv-download">
              <a
                href="/CV-Dylan-Fernandes.pdf"
                download
                className="download-button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Télécharger le CV (PDF)
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Competences;