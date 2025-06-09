import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Projets.css';

const Projets = () => {
  const projets = [
    {
      id: 1,
      title: "Geeki",
      description: "Site bibliothèque de jeux vidéos avec de l'aide pour les nouveaux joueurs",
      image: "https://geeki.fr/assets/images/logo.png",
      link: "https://github.com/Dylan-f1/Geeki"
    },
    {
      id: 2,
      title: "Pokedex",
      description: "Site de la Pokedex avec les informations de chaque Pokémon",
      image: "/Pokeball.webp",
      link: "https://github.com/Dylan-f1/Pokedex_Web"
    },
    {
      id: 3,
      title: "Site F1 (en cours de réflexion)",
      description: "Site de la F1 avec les informations de chaque pilote, de chaque écurie et de chaque circuit (en cours de réflexion)",
      image: "/F1.webp",
      link: "https://github.com/Dylan-f1/Site_F1"
    }
  ]

   const handleArticleClick = (url) => {
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
                        onClick={() => handleArticleClick(projet.link)}
                    >
                        <div className="card-image">
                            <img src={projet.image} alt={projet.title} />
                        </div>
                        <div className="card-content">
                            <h3>{projet.title}</h3>
                            <div className="read-more">
                                <span>Voir le projet →</span>
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
