import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAllVeille } from '../data/veilleTechno';
import '../styles/VeilleTechno.css';

const VeilleTechno = () => {
  const articles = getAllVeille();

  return (
    <div className="veille-techno-container">
      <Navbar />
      <div className="content">
        <header className="page-header">
          <h1>Veille Technologique</h1>
          <p>Automobile & Formule 1 — la technologie au service de la performance</p>
          <div className="veille-source">
            <p>Sources : Autosport, Flotauto, Tech Drive Play, Daily.dev</p>
          </div>
        </header>
        
        <div className="articles-grid">
          {articles.map(article => (
            <Link 
              key={article.id} 
              to={`/veille/${article.id}`}
              className="article-card"
            >
              <div className="category-badge">{article.category}</div>
              <div className="card-content">
                <span className="article-date">{article.date}</span>
                <h3>{article.title}</h3>
                <p className="article-resume">{article.resumeCourt}</p>
                <div className="read-more">
                  <span>Lire l'analyse complète →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="veille-info">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            Pourquoi ce thème ?
          </h3>
          <p>
            Je suis passionné par la Formule 1 et l'automobile depuis toujours. Ce que j'ai réalisé,
            c'est que les voitures sont aujourd'hui parmi les objets les plus technologiques qui existent :
            télémétrie temps réel, mises à jour logicielles à distance, IA embarquée, capteurs LiDAR...
            C'est un terrain d'innovation permanent qui connecte directement mes deux passions —
            la technologie et les voitures. Je sélectionne mes sujets de veille là où la tech automobile
            rejoint le développement logiciel : architectures de données, déploiement, IA, embarqué.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VeilleTechno;
