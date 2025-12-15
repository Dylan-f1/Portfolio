import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getProjetsPerssonels, getProjetsEntreprise } from '../data/projets';
import '../styles/Projets.css';

const Projets = () => {
  const projetsPersonnels = getProjetsPerssonels();
  const projetsEntreprise = getProjetsEntreprise();

  return (
    <div className="projets-container">
      <Navbar />
      <div className="content">
        {/* Section Projets Personnels */}
        <header className="page-header">
          <h1>Mes Projets Personnels</h1>
          <p>Découvrez mes projets personnels développés par passion</p>
        </header>
        
        <div className="articles-grid">
          {projetsPersonnels.map(projet => (
            <Link 
              key={projet.id} 
              to={`/projets/${projet.id}`}
              className="article-card"
            >
              <div className="card-image">
                <img src={projet.image} alt={projet.title} />
              </div>
              <div className="card-content">
                <h3>{projet.title}</h3>
                <p className="project-subtitle">{projet.subtitle}</p>
                <p className="project-description">{projet.courteDescription}</p>
                <div className="tech-tags">
                  {projet.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="read-more">
                  <span>Voir les détails →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Projets Entreprise */}
        <header className="page-header enterprise-header">
          <h1>Projets Entreprise</h1>
          <p>Projets professionnels réalisés en stage et alternance</p>
        </header>
        
        <div className="articles-grid">
          {projetsEntreprise.map(projet => (
            <Link 
              key={projet.id} 
              to={`/projets/${projet.id}`}
              className="article-card enterprise-card"
            >
              <div className="card-image">
                <img src={projet.image} alt={projet.title} />
                <div className="enterprise-badge">Entreprise</div>
              </div>
              <div className="card-content">
                <h3>{projet.title}</h3>
                <p className="project-subtitle">{projet.subtitle}</p>
                <p className="project-description">{projet.courteDescription}</p>
                <div className="tech-tags">
                  {projet.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="read-more">
                  <span>Voir les détails →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;
