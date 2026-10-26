import React from 'react';
import { Link } from 'react-router-dom';
import Parcours from './Parcours';
import { IconLinkedIn, IconGitHub, IconArrow } from './Icons';
import { getProjetsPersonnels } from '../data/projets';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/Home.css';

// Rubriques de l'accueil : chaque bande prend une couleur de la livrée
const rubriques = [
  { to: '/a-propos', label: 'En savoir plus', titre: 'Sur moi', couleur: 'blanc' },
  { to: '/projets', label: 'Découvrir', titre: 'Mes Projets', apercu: 'Full-Stack, F1 & E-commerce', couleur: 'carbone' },
  { to: '/entreprise', label: 'En savoir plus sur', titre: 'Mon Entreprise', apercu: 'Sylnux', couleur: 'bleu' },
  { to: '/cv', label: 'Télécharger', titre: 'Mon CV', couleur: 'blanc' },
];

const Home = () => {
  usePageTitle(null);

  // Le projet phare passe en tête de la liste
  const projets = getProjetsPersonnels()
    .sort((a, b) => (b.id === 'f1Site') - (a.id === 'f1Site'))
    .map((projet) => projet.title);

  return (
    <div className="home">
      {/* Hero : panneau bleu coupé en biais + photo */}
      <header className="lv-hero lv-hero--split home-hero">
        <div className="lv-hero-panel">
          <span className="lv-tab">Développeur Full-Stack</span>
          <h1 className="home-name">
            <span>Dylan</span>
            <span>Fernandes</span>
          </h1>
          <p className="home-role">
            Titulaire du BTS SIO SLAM, passionné d'informatique sous toutes ses formes — disponible pour une alternance à Lyon.
          </p>
          <div className="home-social">
            <a href="https://www.linkedin.com/in/dylan-fer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
            <a href="https://github.com/Dylan-f1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <IconGitHub />
            </a>
          </div>
        </div>
        <div className="lv-hero-aside home-photo">
          <img src="/profile-photo.png" alt="Dylan Fernandes" />
        </div>
      </header>

      {/* Rubriques */}
      <nav className="home-bands" aria-label="Rubriques">
        {rubriques.map((rubrique) => {
          const titreId = `rubrique-${rubrique.to.slice(1)}`;
          return (
            <Link
              key={rubrique.to}
              to={rubrique.to}
              className={`home-band home-band--${rubrique.couleur}`}
              aria-labelledby={titreId}
            >
              <span className="home-band-label">{rubrique.label}</span>
              <span className="home-band-title" id={titreId}>{rubrique.titre}</span>
              <span className="home-band-arrow"><IconArrow /></span>
              {rubrique.apercu && <span className="home-band-apercu">{rubrique.apercu}</span>}
              {rubrique.to === '/projets' && (
                <span className="home-band-list">{projets.join(' / ')}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <Parcours titreId="home-parcours" />
    </div>
  );
};

export default Home;
