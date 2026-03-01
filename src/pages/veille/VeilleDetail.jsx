import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getVeilleById } from '../../data/veilleTechno';
import '../../styles/VeilleDetail.css';

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const s = { verticalAlign: 'middle', marginRight: '8px' };
const ss = { verticalAlign: 'middle', marginRight: '6px' };

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={ss}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconLink = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={ss}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const IconClipboard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);
const IconSearch = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={ss}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconWarning = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={ss}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconCpu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);
const IconBalance = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 6l9 4 9-4"/><path d="M3 18l9-4 9 4"/>
    <line x1="5" y1="21" x2="19" y2="21"/>
  </svg>
);
const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={ss}>
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconMinus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={ss}>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={ss}>
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconMessage = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={ss}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────────────────

const VeilleDetail = () => {
  const { id } = useParams();
  const article = getVeilleById(id);

  if (!article) {
    return (
      <div>
        <Navbar />
        <div className="error-container">
          <h2>Article non trouvé</h2>
          <Link to="/veille-techno" className="back-link">← Retour à la veille techno</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="veille-detail-container">
      <Navbar />

      <div className="veille-detail-content">
        {/* Header */}
        <header className="veille-header">
          <Link to="/veille-techno" className="back-link">← Retour à la veille techno</Link>
          <div className="veille-hero">
            <span className="category-badge">{article.category}</span>
            <h1>{article.title}</h1>
            <div className="veille-meta">
              <span className="veille-date"><IconCalendar />{article.date}</span>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                <IconLink />Source originale
              </a>
            </div>
          </div>
        </header>

        {/* Contexte */}
        <section className="veille-section">
          <h2><IconClipboard />Contexte</h2>
          <p className="text-content">{article.contexte}</p>
        </section>

        {/* Technologies Analysées */}
        {article.technologiesAnalysees && article.technologiesAnalysees.length > 0 && (
          <section className="veille-section">
            <h2><IconSearch />Technologies Analysées</h2>
            <div className="tech-analyses">
              {article.technologiesAnalysees.map((tech, index) => (
                <div key={index} className="tech-analysis-card">
                  <h3>{tech.nom}</h3>
                  <p className="tech-description">{tech.description}</p>
                  {tech.avantages && (
                    <div className="tech-points">
                      <strong><IconCheck />Avantages :</strong>
                      <ul>
                        {tech.avantages.map((av, i) => (
                          <li key={i}>{av}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tech.limitations && (
                    <div className="tech-points">
                      <strong><IconWarning />Limitations :</strong>
                      <ul>
                        {tech.limitations.map((lim, i) => (
                          <li key={i}>{lim}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Analyse Approfondie */}
        {article.analyseApprofondie && (
          <section className="veille-section highlight-section">
            <h2><IconCpu />Analyse Approfondie</h2>
            <div className="analyse-content">
              {article.analyseApprofondie.split('\n\n').map((paragraph, index) => (
                <p key={index} className="analyse-paragraph">{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Comparaison Technologique */}
        {article.comparaisonTechnologique && (
          <section className="veille-section">
            <h2><IconBalance />{article.comparaisonTechnologique.titre}</h2>
            <div className="comparaison-table">
              {article.comparaisonTechnologique.comparaisons.map((comp, index) => (
                <div key={index} className="comparaison-card">
                  <h4>{comp.concurrent || comp.entreprise || comp.aspect}</h4>
                  {comp.approche && <p><strong>Approche :</strong> {comp.approche}</p>}
                  {comp.classique && <p><strong>Classique :</strong> {comp.classique}</p>}
                  {comp.quantique && <p><strong>Quantique :</strong> {comp.quantique}</p>}
                  {comp.avantages && <p><strong><IconPlus />Avantages :</strong> {comp.avantages}</p>}
                  {comp.inconvenients && <p><strong><IconMinus />Inconvénients :</strong> {comp.inconvenients}</p>}
                  {comp.statut && <p><strong><IconBarChart />Statut :</strong> {comp.statut}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Use Cases */}
        {article.useCasesConcrets && article.useCasesConcrets.length > 0 && (
          <section className="veille-section">
            <h2><IconBriefcase />Use Cases Concrets</h2>
            <div className="usecases-grid">
              {article.useCasesConcrets.map((usecase, index) => (
                <div key={index} className="usecase-card">
                  <h4>{usecase.domaine}</h4>
                  <p>{usecase.description}</p>
                  <div className="usecase-meta">
                    {usecase.pertinence && <span className="pertinence">{usecase.pertinence}</span>}
                    {usecase.impact && <span className="impact">{usecase.impact}</span>}
                    {usecase.echeance && <span className="echeance"><IconClock />{usecase.echeance}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impact Futur */}
        {article.impactFutur && (
          <section className="veille-section">
            <h2><IconStar />Impact Futur</h2>
            <div className="impact-content">
              {article.impactFutur.split('\n\n').map((paragraph, index) => (
                <div key={index} className="impact-paragraph">{paragraph}</div>
              ))}
            </div>
          </section>
        )}

        {/* Réflexion Personnelle */}
        {article.reflexionPersonnelle && (
          <section className="veille-section reflexion-section">
            <h2><IconMessage />Ma Réflexion Personnelle</h2>
            <div className="reflexion-content">
              {article.reflexionPersonnelle.split('\n\n').map((paragraph, index) => (
                <p key={index} className="reflexion-paragraph">{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Aspects Éthiques */}
        {article.aspectsEthiques && article.aspectsEthiques.length > 0 && (
          <section className="veille-section ethique-section">
            <h2><IconBalance />Questions Éthiques</h2>
            <div className="ethique-grid">
              {article.aspectsEthiques.map((aspect, index) => (
                <div key={index} className="ethique-card">
                  <h4>{aspect.question}</h4>
                  <p>{aspect.reflexion}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Conclusion */}
        {article.conclusionOuverture && (
          <section className="veille-section conclusion-section">
            <h2><IconTarget />Conclusion & Ouverture</h2>
            <div className="conclusion-content">
              {article.conclusionOuverture.split('\n\n').map((paragraph, index) => (
                <p key={index} className="conclusion-paragraph">{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Ressources */}
        {article.ressourcesComplementaires && article.ressourcesComplementaires.length > 0 && (
          <section className="veille-section">
            <h2><IconBook />Ressources Complémentaires</h2>
            <ul className="ressources-list">
              {article.ressourcesComplementaires.map((ressource, index) => (
                <li key={index}>{ressource}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation */}
        <div className="veille-navigation">
          <Link to="/veille-techno" className="nav-btn">← Tous les articles</Link>
        </div>
      </div>
    </div>
  );
};

export default VeilleDetail;
