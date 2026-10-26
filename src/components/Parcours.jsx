import React from 'react';
import { parcours } from '../data/parcours';
import '../styles/Parcours.css';

// Parcours scolaire, utilisé sur l'accueil et sur la page À propos
const Parcours = ({ titreId = 'parcours-titre' }) => {
  return (
    <section className="parcours lv-section" aria-labelledby={titreId}>
      <div className="lv-wrap">
        <h2 id={titreId} className="parcours-titre">Mon Parcours</h2>
        <ol className="parcours-liste">
          {parcours.map((item) => {
            const enCours = item.statut === 'En cours';
            return (
              <li key={item.titre} className={`lv-fiche ${enCours ? 'is-live' : ''}`}>
                <span className="parcours-annee">{item.annee}</span>
                <h3 className="lv-h3">{item.titre}</h3>
                <p className="parcours-etab">{item.etablissement.trim()}</p>
                <p className="lv-muted">{item.description}</p>
                <span className={enCours ? 'lv-tab' : 'parcours-statut'}>{item.statut}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Parcours;
