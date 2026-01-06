import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getProjetById } from '../../data/projets';
import '../../styles/ProjetDetail.css';

const ProjetDetail = () => {
  const { id } = useParams();
  const projet = getProjetById(id);

  if (!projet) {
    return (
      <div>
        <Navbar />
        <div className="error-container">
          <h2>Projet non trouvé</h2>
          <Link to="/projets" className="back-link">← Retour aux projets</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="projet-detail-container">
      <Navbar />
      
      <div className="projet-detail-content">
        {/* Header */}
        <header className="projet-header">
          <Link to="/projets" className="back-link">← Retour aux projets</Link>
          <div className="projet-hero">
            <div className="projet-hero-text">
              <span className="projet-type-badge">
                {projet.type === 'entreprise' ? '🏢 Entreprise' : '🚀 Personnel'}
              </span>
              <h1>{projet.title}</h1>
              <p className="projet-subtitle">{projet.subtitle}</p>
              <div className="projet-links">
                {projet.liveUrl && (
                  <a href={projet.liveUrl} target="_blank" rel="noopener noreferrer" className="projet-btn primary">
                    🌐 Voir le site
                  </a>
                )}
                {projet.githubUrl && (
                  <a href={projet.githubUrl} target="_blank" rel="noopener noreferrer" className="projet-btn secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <div className="projet-hero-image">
              <img src={projet.image} alt={projet.title} />
            </div>
          </div>
        </header>

        {/* Conclusion Orale - Nouvelle section */}
        {projet.conclusionOrale && (
          <section className="conclusion-orale-section">
            <div className="conclusion-header">
              <h2>🎯 Synthèse du Projet</h2>
            </div>
            <div className="conclusion-content">
              <p className="conclusion-text">{projet.conclusionOrale}</p>
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="projet-section">
          <h2>Technologies Utilisées</h2>
          <div className="tech-grid">
            {projet.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </section>

        {/* Contexte */}
        <section className="projet-section">
          <h2>📋 Contexte</h2>
          <p className="text-content">{projet.contexte}</p>
        </section>

        {/* Problématique */}
        {projet.problematique && (
          <section className="projet-section highlight-section">
            <h2>❓ Problématique</h2>
            <p className="text-content highlight">{projet.problematique}</p>
          </section>
        )}

        {/* Défis */}
        {projet.defis && projet.defis.length > 0 && (
          <section className="projet-section">
            <h2>⚡ Défis Techniques</h2>
            <div className="defis-grid">
              {projet.defis.map((defi, index) => (
                <div key={index} className="defi-card">
                  <h3>{defi.titre}</h3>
                  <div className="defi-content">
                    <div className="defi-description">
                      <strong>Problème :</strong>
                      <p>{defi.description}</p>
                    </div>
                    <div className="defi-solution">
                      <strong>Solution :</strong>
                      <p>{defi.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solutions & Architecture */}
        {projet.solutions && (
          <section className="projet-section">
            <h2>🏗️ Architecture & Solutions</h2>
            {projet.solutions.architecture && (
              <div className="solution-block">
                <h3>Architecture</h3>
                <p>{projet.solutions.architecture}</p>
              </div>
            )}
            {projet.solutions.evolutionPrevue && (
              <div className="solution-block">
                <h3>Évolution Prévue</h3>
                <p>{projet.solutions.evolutionPrevue}</p>
              </div>
            )}
            {projet.solutions.techniquesUtilisees && (
              <div className="solution-block">
                <h3>Techniques Utilisées</h3>
                <ul className="techniques-list">
                  {projet.solutions.techniquesUtilisees.map((technique, index) => (
                    <li key={index}>{technique}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Résultats */}
        {projet.resultats && (
          <section className="projet-section">
            <h2>📊 Résultats & Impact</h2>
            {projet.resultats.metriques && (
              <div className="resultats-grid">
                {projet.resultats.metriques.map((metrique, index) => (
                  <div key={index} className="resultat-card">
                    ✓ {metrique}
                  </div>
                ))}
              </div>
            )}
            {projet.resultats.impact && (
              <p className="impact-text">{projet.resultats.impact}</p>
            )}
          </section>
        )}

        {/* Apprentissages */}
        {projet.apprentissages && projet.apprentissages.length > 0 && (
          <section className="projet-section">
            <h2>💡 Apprentissages Clés</h2>
            <ul className="apprentissages-list">
              {projet.apprentissages.map((apprentissage, index) => (
                <li key={index}>{apprentissage}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Prochaines Étapes */}
        {projet.prochaines_etapes && projet.prochaines_etapes.length > 0 && (
          <section className="projet-section">
            <h2>🚀 Prochaines Étapes</h2>
            <ul className="etapes-list">
              {projet.prochaines_etapes.map((etape, index) => (
                <li key={index}>{etape}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation */}
        <div className="projet-navigation">
          <Link to="/projets" className="nav-btn">← Tous les projets</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjetDetail;