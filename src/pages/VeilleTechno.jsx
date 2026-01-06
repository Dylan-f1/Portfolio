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
          <h3>📚 À propos de ma veille technologique</h3>
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
