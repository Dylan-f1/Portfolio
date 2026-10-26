import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { getProjetsPersonnels, getProjetsEntreprise } from '../data/projets';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/Projets.css';

const ProjetCarte = ({ projet, entreprise = false }) => (
  <Link
    to={`/projets/${projet.id}`}
    className={`projet-carte lv-fiche ${entreprise ? 'projet-carte--entreprise' : ''}`}
    aria-labelledby={`projet-${projet.id}`}
  >
    <div className="projet-carte-top">
      <span className="projet-logo">
        <img src={projet.image} alt="" />
      </span>
    </div>
    <h3 className="projet-carte-titre" id={`projet-${projet.id}`}>{projet.title}</h3>
    <p className="projet-carte-sous-titre">{projet.subtitle}</p>
    <p className="lv-muted">{projet.courteDescription}</p>
    <div className="lv-tags">
      {projet.technologies.slice(0, 4).map((tech) => (
        <span key={tech} className="lv-tag">{tech}</span>
      ))}
    </div>
    <span className="projet-carte-lien">Voir les détails →</span>
  </Link>
);

const Projets = () => {
  usePageTitle('Projets');
  const projetsPersonnels = getProjetsPersonnels();
  const projetsEntreprise = getProjetsEntreprise();
  const phare = projetsPersonnels.find((projet) => projet.id === 'f1Site');
  const autres = projetsPersonnels.filter((projet) => projet.id !== 'f1Site');

  return (
    <div className="projets">
      <PageHero titre="Mes Projets Personnels">
        <p>Découvrez mes projets personnels développés par passion</p>
      </PageHero>

      {/* Projet phare */}
      {phare && (
        <section className="lv-section">
          <div className="lv-wrap">
            <Link to={`/projets/${phare.id}`} className="projet-phare" aria-labelledby="projet-phare-titre">
              <span className="projet-phare-image">
                <img src={phare.image} alt="" />
              </span>
              <div className="projet-phare-texte">
                <span className="lv-tab">Projet phare</span>
                <h2 className="projet-phare-titre" id="projet-phare-titre">{phare.title}</h2>
                <p className="projet-carte-sous-titre">{phare.subtitle}</p>
                <p className="projet-phare-description">{phare.courteDescription}</p>
                <div className="lv-tags">
                  {phare.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="lv-tag">{tech}</span>
                  ))}
                </div>
                <span className="projet-carte-lien">Voir les détails →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Autres projets personnels */}
      <section className={`lv-section ${phare ? 'lv-section--suite' : ''}`}>
        <div className="lv-wrap projets-grille">
          {autres.map((projet) => (
            <ProjetCarte key={projet.id} projet={projet} />
          ))}
        </div>
      </section>

      {/* Projets entreprise */}
      <section className="lv-section projets-entreprise">
        <div className="lv-wrap">
          <header className="projets-entreprise-header">
            <h2 className="lv-h2">Projets Entreprise</h2>
            <p className="lv-muted">Projets professionnels réalisés en stage et alternance</p>
          </header>
          <div className="projets-grille">
            {projetsEntreprise.map((projet) => (
              <ProjetCarte key={projet.id} projet={projet} entreprise />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projets;
