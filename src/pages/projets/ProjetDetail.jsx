import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getProjetById } from '../../data/projets';
import '../../styles/ProjetDetail.css';

const IconBuilding = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'6px'}}>
    <rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="9" x2="9" y2="21"/><line x1="15" y1="9" x2="15" y2="21"/>
  </svg>
);
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'6px'}}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'6px'}}>
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconClipboard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);
const IconQuestion = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconBolt = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconLayers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'6px'}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconLightbulb = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
);
const IconArrow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────────────────

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
                {projet.type === 'entreprise'
                  ? <><IconBuilding />Entreprise</>
                  : <><IconUser />Personnel</>}
              </span>
              <h1>{projet.title}</h1>
              <p className="projet-subtitle">{projet.subtitle}</p>
              <div className="projet-links">
                {projet.liveUrl && (
                  <a href={projet.liveUrl} target="_blank" rel="noopener noreferrer" className="projet-btn primary">
                    <IconGlobe />Voir le site
                  </a>
                )}
                {projet.githubUrl && (
                  <a href={projet.githubUrl} target="_blank" rel="noopener noreferrer" className="projet-btn secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

        {/* Conclusion Orale */}
        {projet.conclusionOrale && (
          <section className="conclusion-orale-section">
            <div className="conclusion-header">
              <h2><IconTarget />Synthèse du Projet</h2>
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
          <h2><IconClipboard />Contexte</h2>
          <p className="text-content">{projet.contexte}</p>
        </section>

        {/* Problématique */}
        {projet.problematique && (
          <section className="projet-section highlight-section">
            <h2><IconQuestion />Problématique</h2>
            <p className="text-content highlight">{projet.problematique}</p>
          </section>
        )}

        {/* Défis */}
        {projet.defis && projet.defis.length > 0 && (
          <section className="projet-section">
            <h2><IconBolt />Défis Techniques</h2>
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
            <h2><IconLayers />Architecture & Solutions</h2>
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
            <h2><IconBarChart />Résultats & Impact</h2>
            {projet.resultats.metriques && (
              <div className="resultats-grid">
                {projet.resultats.metriques.map((metrique, index) => (
                  <div key={index} className="resultat-card">
                    <IconCheck />{metrique}
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
            <h2><IconLightbulb />Apprentissages Clés</h2>
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
            <h2><IconArrow />Prochaines Étapes</h2>
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
