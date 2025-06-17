import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Projets.css';

const Projets = () => {
  const projets = [
    {
      id: 1,
      title: "Geeki",
      description: "Plateforme gaming offrant une vaste collection de jeux vidéo avec guides détaillés, bestiaires de personnages et interface moderne pour passionnés",
      image: "https://geeki.fr/assets/images/logo.png",
      link: "https://www.geeki-games.fr/",
      github: "https://github.com/Dylan-f1/geeki"
    },
    {
      id: 2,
      title: "Pokedex",
      description: "Pokedex interactif moderne permettant de découvrir l'univers Pokémon avec interface intuitive et informations détaillées",
      image: "/Pokeball.webp",
      link: "https://www.pokedex-dylan.fr/",
      github: "https://github.com/Dylan-f1/pokedex"
    },
    {
      id: 3,
      title: "Site F1 (en cours de réflexion)",
      description: "Site de la F1 avec les informations de chaque pilote, de chaque écurie et de chaque circuit (en cours de réflexion)",
      image: "/F1.webp",
      link: "https://github.com/Dylan-f1/Formule-1",
      github: "https://github.com/Dylan-f1/Formule-1"
    }
  ]

   const handleProjectClick = (url) => {
    window.open(url, '_blank');
    
  };

  const handleGithubClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };
  return (
    <div className="projets-container">
        <Navbar />
        <div className="content">
            <header className="page-header">
                <h1>Mes Projets</h1>
            </header>
            
            <div className="articles-grid">
                {projets.map(projet => (
                    <div 
                        key={projet.id} 
                        className="article-card"
                        onClick={() => handleProjectClick(projet.link)}
                    >
                        <div className="card-image">
                            <img src={projet.image} alt={projet.title} />
                        </div>
                        <div className="card-content">
                            <h3>{projet.title}</h3>
                            <p className="project-description">{projet.description}</p>
                            <div className="card-actions">
                                <button 
                                    className="github-btn"
                                    onClick={(e) => handleGithubClick(e, projet.github)}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </button>
                                <div className="read-more">
                                    <span>Voir le projet →</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Projets;
