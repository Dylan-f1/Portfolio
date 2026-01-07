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

        {/* Section Introduction */}
        <div className="introduction-section">
          <div className="intro-content">
            <p className="intro-text">
              Ma passion pour l'informatique est née de ma passion pour les jeux vidéo. 
              Cependant, j'ai rapidement réalisé que l'industrie du jeu vidéo, bien que fascinante, 
              est extrêmement exigeante et compétitive. J'ai donc choisi de m'orienter vers le 
              développement web et le développement d'applications, un domaine où je peux exprimer ma créativité 
              tout en construisant des solutions concrètes et innovantes.
            </p>
            <p className="intro-text">
              Au-delà de la l'informatique, je suis passionné par le sport automobile plus particulièrement la Formule 1. Ce sport représente 
              pour moi bien plus que de simples courses : c'est un concentré d'innovation technologique, 
              d'optimisation des performances et de travail d'équipe. L'analyse des données en temps réel, 
              les stratégies complexes et l'évolution constante des technologies en F1 m'inspirent dans 
              mon approche du développement logiciel. Tout comme les écuries cherchent constamment à 
              optimiser leurs performances, je m'efforce d'améliorer continuellement mes compétences 
              et d'adopter les meilleures pratiques de développement.
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
      </section>
    </div>
  );
};

export default Competences;