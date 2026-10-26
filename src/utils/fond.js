// Choix du fond (clair / noir) mémorisé entre les visites
export const CLE_FOND = 'fond';

export const lireFondEnregistre = () => {
  try {
    const valeur = localStorage.getItem(CLE_FOND);
    return valeur === 'noir' || valeur === 'clair' ? valeur : null;
  } catch {
    return null;
  }
};

export const enregistrerFond = (valeur) => {
  try {
    localStorage.setItem(CLE_FOND, valeur);
  } catch {
    // stockage indisponible : le choix vaut pour cette visite
  }
};
