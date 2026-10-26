import { useEffect } from 'react';

const SITE = 'Dylan Fernandes — Développeur Full-Stack';

// Titre de l'onglet par page : sans lui, toutes les pages s'annoncent pareil
export const usePageTitle = (titre) => {
  useEffect(() => {
    document.title = titre ? `${titre} — Dylan Fernandes` : SITE;
  }, [titre]);
};
