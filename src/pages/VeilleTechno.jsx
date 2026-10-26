import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { getAllVeille } from '../data/veilleTechno';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/VeilleTechno.css';

const VeilleTechno = () => {
  usePageTitle('Veille Technologique');
  const articles = getAllVeille();

  return (
    <div className="veille">
      <PageHero titre="Veille Technologique">
        <p>Automobile & Formule 1 — la technologie au service de la performance</p>
        <p className="veille-source">Sources : Autosport, IA paramétré</p>
      </PageHero>

      <section className="lv-section">
        <div className="lv-wrap veille-liste">
          {articles.map((article) => (
            <Link key={article.id} to={`/veille/${article.id}`} className="veille-article" aria-labelledby={`veille-${article.id}`}>
              <div className="veille-article-meta">
                <span className="lv-tab lv-tab--blue">{article.category}</span>
                <span className="lv-muted">{article.date}</span>
              </div>
              <div>
                <h2 className="veille-article-titre" id={`veille-${article.id}`}>{article.title}</h2>
                <p className="lv-muted veille-article-resume">{article.resumeCourt}</p>
                <span className="veille-article-lien">Lire l'analyse complète →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="lv-section lv-section--suite">
        <div className="lv-wrap">
          <div className="veille-pourquoi">
            <h2 className="lv-h2">Pourquoi ce thème ?</h2>
            <ul className="lv-list">
              <li>Les voitures sont aujourd'hui parmi les objets les plus technologiques : capteurs, logiciels embarqués, IA</li>
              <li>Terrain d'innovation permanent qui connecte mes deux passions : la technologie et les voitures</li>
              <li>Sujets ciblés là où la tech automobile rejoint le dev logiciel : données, déploiement, IA, embarqué</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeilleTechno;
