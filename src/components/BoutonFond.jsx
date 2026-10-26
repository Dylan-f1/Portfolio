import React, { useEffect, useState } from 'react';
import { lireFondEnregistre, enregistrerFond } from '../utils/fond';

// Bascule fond clair / fond noir (carbone).
// Sans choix enregistré, le site suit le réglage du système : c'est le CSS qui
// l'applique (prefers-color-scheme), ce composant ne fait que le refléter.
const systemeSombre = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const IconeSoleil = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
  </svg>
);

const IconeLune = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" aria-hidden="true">
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
  </svg>
);

const BoutonFond = () => {
  const [fond, setFond] = useState(() => lireFondEnregistre() ?? (systemeSombre() ? 'noir' : 'clair'));

  // Tant que le visiteur n'a rien choisi, on suit les changements du système
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const suivre = (event) => {
      if (!lireFondEnregistre()) setFond(event.matches ? 'noir' : 'clair');
    };
    media.addEventListener('change', suivre);
    return () => media.removeEventListener('change', suivre);
  }, []);

  const basculer = () => {
    const suivant = fond === 'noir' ? 'clair' : 'noir';
    document.documentElement.dataset.fond = suivant;
    enregistrerFond(suivant);
    setFond(suivant);
  };

  const libelle = fond === 'noir' ? 'Passer au fond clair' : 'Passer au fond noir';

  return (
    <button type="button" className="navbar-fond" onClick={basculer} aria-label={libelle} title={libelle}>
      {fond === 'noir' ? <IconeSoleil /> : <IconeLune />}
    </button>
  );
};

export default BoutonFond;
