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
          <p>Analyses approfondies des dernières innovations technologiques</p>
          <div className="veille-source">
            <img src="/daily-dev-logo.png" alt="daily.dev" className="daily-logo" />
            <p>Sources : Daily.Dev et actualités tech</p>
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
            À propos de ma veille technologique
          </h3>
          <p>
            Je réalise une veille technologique constante pour rester à jour sur les dernières innovations. 
            Chaque article que je sélectionne fait l'objet d'une analyse approfondie où j'explore les technologies, 
            compare les approches, réfléchis aux implications futures et partage ma vision personnelle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VeilleTechno;
