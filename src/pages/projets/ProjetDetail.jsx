import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { IconGitHub } from '../../components/Icons';
import { getProjetById } from '../../data/projets';
import { usePageTitle } from '../../hooks/usePageTitle';
import NotFound from '../NotFound';
import '../../styles/ProjetDetail.css';

const ProjetDetail = () => {
  const { id } = useParams();
  const projet = getProjetById(id);
  usePageTitle(projet ? projet.title : 'Projet non trouvé');

  if (!projet) {
    return <NotFound titre="Projet non trouvé" to="/projets" libelle="← Retour aux projets" />;
  }

  return (
    <div className="projet-detail">
      <PageHero
        titre={projet.title}
        surtitre={
          <>
            <Link to="/projets" className="lv-back">← Retour aux projets</Link>
            <span className="lv-tab">{projet.type === 'entreprise' ? 'Entreprise' : 'Personnel'}</span>
          </>
        }
        aside={<img src={projet.image} alt="" />}
      >
        <p>{projet.subtitle}</p>
        <div className="projet-liens">
          {projet.liveUrl && (
            <a href={projet.liveUrl} target="_blank" rel="noopener noreferrer" className="lv-btn">
              Voir le site
            </a>
          )}
          {projet.githubUrl && (
            <a href={projet.githubUrl} target="_blank" rel="noopener noreferrer" className="lv-btn lv-btn--line">
              <IconGitHub size={18} />
              {projet.githubUrlBackend ? 'GitHub — Frontend' : 'GitHub'}
            </a>
          )}
          {projet.githubUrlBackend && (
            <a href={projet.githubUrlBackend} target="_blank" rel="noopener noreferrer" className="lv-btn lv-btn--line">
              <IconGitHub size={18} />
              GitHub — Backend
            </a>
          )}
        </div>
      </PageHero>

      <div className="lv-wrap projet-detail-corps">
        {/* Technologies */}
        <section className="projet-bloc">
          <h2 className="lv-h2">Technologies Utilisées</h2>
          <div className="lv-tags">
            {projet.technologies.map((tech) => (
              <span key={tech} className="lv-tag">{tech}</span>
            ))}
          </div>
        </section>

        {/* Synthèse du Projet */}
        {projet.conclusionOrale && (
          <section className="projet-bloc projet-synthese">
            <h2 className="lv-h2">Synthèse du Projet</h2>
            <p className="lv-prose">{projet.conclusionOrale}</p>
          </section>
        )}

        {/* Problématique */}
        {projet.problematique && (
          <section className="projet-bloc">
            <h2 className="lv-h2">Problématique</h2>
            <p className="lv-prose lv-callout projet-problematique">{projet.problematique}</p>
          </section>
        )}

        {/* Défis : chaque problème rencontré, puis la solution retenue */}
        {projet.defis && projet.defis.length > 0 && (
          <section className="projet-bloc">
            <h2 className="lv-h2">Défis & Solutions</h2>
            <div className="projet-defis">
              {projet.defis.map((defi) => (
                <article key={defi.titre} className="lv-fiche projet-defi">
                  <h3 className="lv-h3">{defi.titre}</h3>
                  <p className="lv-muted">{defi.description}</p>
                  <div className="projet-defi-solution">
                    <strong>Solution</strong>
                    <p>{defi.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Solutions & Architecture */}
        {projet.solutions && (
          <section className="projet-bloc">
            <h2 className="lv-h2">Architecture & Solutions</h2>
            <div className="projet-solutions">
              {projet.solutions.architecture && (
                <div className="lv-fiche">
                  <h3 className="lv-h3">Architecture</h3>
                  <p>{projet.solutions.architecture}</p>
                </div>
              )}
              {projet.solutions.evolutionPrevue && (
                <div className="lv-fiche">
                  <h3 className="lv-h3">Évolution Prévue</h3>
                  <p>{projet.solutions.evolutionPrevue}</p>
                </div>
              )}
              {projet.solutions.techniquesUtilisees && (
                <div className="lv-fiche projet-techniques">
                  <h3 className="lv-h3">Techniques Utilisées</h3>
                  <ul className="lv-list">
                    {projet.solutions.techniquesUtilisees.map((technique) => (
                      <li key={technique}>{technique}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Résultats */}
        {projet.resultats && (
          <section className="projet-bloc">
            <h2 className="lv-h2">Résultats & Impact</h2>
            {projet.resultats.metriques && (
              <ul className="lv-list projet-metriques">
                {projet.resultats.metriques.map((metrique) => (
                  <li key={metrique}>{metrique}</li>
                ))}
              </ul>
            )}
            {projet.resultats.impact && (
              <p className="lv-prose lv-callout projet-impact">{projet.resultats.impact}</p>
            )}
          </section>
        )}

        {/* Apprentissages */}
        {projet.apprentissages && projet.apprentissages.length > 0 && (
          <section className="projet-bloc">
            <h2 className="lv-h2">Apprentissages</h2>
            <ul className="lv-list projet-apprentissages">
              {projet.apprentissages.map((apprentissage) => (
                <li key={apprentissage}>{apprentissage}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Prochaines Étapes */}
        {projet.prochaines_etapes && projet.prochaines_etapes.length > 0 && (
          <section className="projet-bloc">
            <h2 className="lv-h2">Prochaines Étapes</h2>
            <ol className="projet-etapes">
              {projet.prochaines_etapes.map((etape) => (
                <li key={etape}>{etape}</li>
              ))}
            </ol>
          </section>
        )}

        {/* Navigation */}
        <Link to="/projets" className="lv-btn lv-btn--ink projet-retour">← Tous les projets</Link>
      </div>
    </div>
  );
};

export default ProjetDetail;
