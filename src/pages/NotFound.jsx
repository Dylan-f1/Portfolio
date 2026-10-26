import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

// Page, projet ou article introuvable : même en-tête que le reste du site
const NotFound = ({ titre = 'Page non trouvée', to = '/', libelle = "← Retour à l'accueil" }) => {
  usePageTitle(titre);

  return (
    <PageHero titre={titre}>
      <Link to={to} className="lv-btn">{libelle}</Link>
    </PageHero>
  );
};

export default NotFound;
