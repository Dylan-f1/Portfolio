import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { getVeilleById } from '../../data/veilleTechno';
import { usePageTitle } from '../../hooks/usePageTitle';
import NotFound from '../NotFound';
import '../../styles/VeilleDetail.css';

// Les textes longs sont découpés en paragraphes sur les lignes vides
const Paragraphes = ({ texte, className = '' }) => (
  <div className={`lv-prose ${className}`}>
    {texte.trim().split('\n\n').map((paragraphe, index) => (
      <p key={index} className="lv-pre">{paragraphe.trim()}</p>
    ))}
  </div>
);

const VeilleDetail = () => {
  const { id } = useParams();
  const article = getVeilleById(id);
  usePageTitle(article ? article.title : 'Article non trouvé');

  if (!article) {
    return <NotFound titre="Article non trouvé" to="/veille-techno" libelle="← Retour à la veille techno" />;
  }

  return (
    <div className="veille-detail">
      <PageHero
        titre={article.title}
        surtitre={
          <>
            <Link to="/veille-techno" className="lv-back">← Retour à la veille techno</Link>
            <span className="lv-tab">{article.category}</span>
          </>
        }
      >
        <p className="veille-detail-meta">
          <span>{article.date}</span>
          <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="lv-back">
            Source originale
          </a>
        </p>
      </PageHero>

      <div className="lv-wrap veille-detail-corps">
        {/* Mots-clés */}
        {article.pointsClesOral && article.pointsClesOral.length > 0 && (
          <div className="lv-tags veille-mots-cles">
            {article.pointsClesOral.map((mot) => (
              <span key={mot} className="lv-tag">{mot}</span>
            ))}
          </div>
        )}

        {/* Contexte */}
        <section className="veille-bloc">
          <h2 className="lv-h2">Contexte</h2>
          <Paragraphes texte={article.contexte} className="veille-lead" />
        </section>

        {/* Technologies Analysées */}
        {article.technologiesAnalysees && article.technologiesAnalysees.length > 0 && (
          <section className="veille-bloc">
            <h2 className="lv-h2">Technologies Analysées</h2>
            <div className="veille-grille">
              {article.technologiesAnalysees.map((tech) => (
                <div key={tech.nom} className="lv-fiche veille-fiche">
                  <h3 className="lv-h3">{tech.nom}</h3>
                  <p className="lv-muted">{tech.description}</p>
                  {tech.avantages && (
                    <div className="veille-points">
                      <strong>Avantages :</strong>
                      <ul className="lv-list">
                        {tech.avantages.map((av) => <li key={av}>{av}</li>)}
                      </ul>
                    </div>
                  )}
                  {tech.limitations && (
                    <div className="veille-points veille-points--limites">
                      <strong>Limitations :</strong>
                      <ul className="lv-list">
                        {tech.limitations.map((lim) => <li key={lim}>{lim}</li>)}
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
          <section className="veille-bloc">
            <h2 className="lv-h2">Analyse Approfondie</h2>
            <Paragraphes texte={article.analyseApprofondie} />
          </section>
        )}

        {/* Comparaison Technologique */}
        {article.comparaisonTechnologique && (
          <section className="veille-bloc">
            <h2 className="lv-h2">{article.comparaisonTechnologique.titre}</h2>
            <div className="veille-grille veille-grille--3">
              {article.comparaisonTechnologique.comparaisons.map((comp, index) => (
                <div key={index} className="lv-fiche veille-fiche">
                  <h3 className="lv-h3">{comp.concurrent || comp.entreprise || comp.aspect}</h3>
                  {comp.approche && <p><strong>Approche :</strong> {comp.approche}</p>}
                  {comp.classique && <p><strong>Classique :</strong> {comp.classique}</p>}
                  {comp.quantique && <p><strong>Quantique :</strong> {comp.quantique}</p>}
                  {comp.avantages && <p><strong>Avantages :</strong> {comp.avantages}</p>}
                  {comp.inconvenients && <p><strong>Inconvénients :</strong> {comp.inconvenients}</p>}
                  {comp.statut && <p><strong>Statut :</strong> {comp.statut}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Use Cases */}
        {article.useCasesConcrets && article.useCasesConcrets.length > 0 && (
          <section className="veille-bloc">
            <h2 className="lv-h2">Use Cases Concrets</h2>
            <div className="veille-grille veille-grille--3">
              {article.useCasesConcrets.map((usecase, index) => (
                <div key={index} className="lv-fiche veille-fiche">
                  <h3 className="lv-h3">{usecase.domaine}</h3>
                  <p>{usecase.description}</p>
                  <div className="veille-usecase-meta">
                    {usecase.pertinence && <span>{usecase.pertinence}</span>}
                    {usecase.impact && <span>{usecase.impact}</span>}
                    {usecase.echeance && <span>{usecase.echeance}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impact Futur */}
        {article.impactFutur && (
          <section className="veille-bloc">
            <h2 className="lv-h2">Impact Futur</h2>
            <Paragraphes texte={article.impactFutur} />
          </section>
        )}

        {/* Réflexion Personnelle */}
        {article.reflexionPersonnelle && (
          <section className="veille-bloc lv-callout veille-reflexion">
            <h2 className="lv-h2">Ma Réflexion Personnelle</h2>
            <Paragraphes texte={article.reflexionPersonnelle} />
          </section>
        )}

        {/* Aspects Éthiques */}
        {article.aspectsEthiques && article.aspectsEthiques.length > 0 && (
          <section className="veille-bloc">
            <h2 className="lv-h2">Questions Éthiques</h2>
            <div className="veille-grille">
              {article.aspectsEthiques.map((aspect) => (
                <div key={aspect.question} className="lv-fiche veille-fiche">
                  <h3 className="lv-h3">{aspect.question}</h3>
                  <p>{aspect.reflexion}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Conclusion */}
        {article.conclusionOuverture && (
          <section className="veille-bloc veille-conclusion">
            <h2 className="lv-h2">Conclusion & Ouverture</h2>
            <Paragraphes texte={article.conclusionOuverture} />
          </section>
        )}

        {/* Ressources */}
        {article.ressourcesComplementaires && article.ressourcesComplementaires.length > 0 && (
          <section className="veille-bloc">
            <h2 className="lv-h2">Ressources Complémentaires</h2>
            <ul className="lv-list">
              {article.ressourcesComplementaires.map((ressource) => (
                <li key={ressource}>{ressource}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation */}
        <Link to="/veille-techno" className="lv-btn lv-btn--ink">← Tous les articles</Link>
      </div>
    </div>
  );
};

export default VeilleDetail;
