import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getVeilleById } from '../../data/veilleTechno';
import '../../styles/VeilleDetail.css';

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
              <span className="veille-date">📅 {article.date}</span>
              <a 
                href={article.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                🔗 Source originale
              </a>
            </div>
          </div>
        </header>

        {/* Contexte */}
        <section className="veille-section">
          <h2>📋 Contexte</h2>
          <p className="text-content">{article.contexte}</p>
        </section>

        {/* Technologies Analysées */}
        {article.technologiesAnalysees && article.technologiesAnalysees.length > 0 && (
          <section className="veille-section">
            <h2>🔬 Technologies Analysées</h2>
            <div className="tech-analyses">
              {article.technologiesAnalysees.map((tech, index) => (
                <div key={index} className="tech-analysis-card">
                  <h3>{tech.nom}</h3>
                  <p className="tech-description">{tech.description}</p>
                  {tech.avantages && (
                    <div className="tech-points">
                      <strong>✅ Avantages :</strong>
                      <ul>
                        {tech.avantages.map((av, i) => (
                          <li key={i}>{av}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tech.limitations && (
                    <div className="tech-points">
                      <strong>⚠️ Limitations :</strong>
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
            <h2>🧠 Analyse Approfondie</h2>
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
            <h2>⚖️ {article.comparaisonTechnologique.titre}</h2>
            <div className="comparaison-table">
              {article.comparaisonTechnologique.comparaisons.map((comp, index) => (
                <div key={index} className="comparaison-card">
                  <h4>{comp.concurrent || comp.entreprise || comp.aspect}</h4>
                  {comp.approche && <p><strong>Approche :</strong> {comp.approche}</p>}
                  {comp.classique && <p><strong>Classique :</strong> {comp.classique}</p>}
                  {comp.quantique && <p><strong>Quantique :</strong> {comp.quantique}</p>}
                  {comp.avantages && <p><strong>➕ Avantages :</strong> {comp.avantages}</p>}
                  {comp.inconvenients && <p><strong>➖ Inconvénients :</strong> {comp.inconvenients}</p>}
                  {comp.statut && <p><strong>📊 Statut :</strong> {comp.statut}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Use Cases */}
        {article.useCasesConcrets && article.useCasesConcrets.length > 0 && (
          <section className="veille-section">
            <h2>💼 Use Cases Concrets</h2>
            <div className="usecases-grid">
              {article.useCasesConcrets.map((usecase, index) => (
                <div key={index} className="usecase-card">
                  <h4>{usecase.domaine}</h4>
                  <p>{usecase.description}</p>
                  <div className="usecase-meta">
                    {usecase.pertinence && <span className="pertinence">{usecase.pertinence}</span>}
                    {usecase.impact && <span className="impact">{usecase.impact}</span>}
                    {usecase.echeance && <span className="echeance">⏱️ {usecase.echeance}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impact Futur */}
        {article.impactFutur && (
          <section className="veille-section">
            <h2>🔮 Impact Futur</h2>
            <div className="impact-content">
              {article.impactFutur.split('\n\n').map((paragraph, index) => (
                <div key={index} className="impact-paragraph">
                  {paragraph}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Réflexion Personnelle */}
        {article.reflexionPersonnelle && (
          <section className="veille-section reflexion-section">
            <h2>💭 Ma Réflexion Personnelle</h2>
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
            <h2>⚖️ Questions Éthiques</h2>
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
            <h2>🎯 Conclusion & Ouverture</h2>
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
            <h2>📚 Ressources Complémentaires</h2>
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
