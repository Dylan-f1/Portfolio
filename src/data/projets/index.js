// ─── Projets personnels ──────────────────────────────────────────────────────
import { geeki }        from './geeki';
import { pokedex }      from './pokedex';
import { gsb2 }         from './gsb2';
import { gsb_frontend } from './gsb_frontend';
import { f1Site }       from './f1Site';
import { juliaApp }     from './juliaApp';

// ─── Projets entreprise ──────────────────────────────────────────────────────
import { zaoMakeup }   from './zaoMakeup';
import { lamazuna }    from './lamazuna';
import { sylnux }      from './sylnux';

// ─── Export centralisé ───────────────────────────────────────────────────────
export const projetsData = {
  // Personnels
  geeki,
  pokedex,
  gsb2,
  gsb_frontend,
  f1Site,
  juliaApp,

  // Entreprise
  zaoMakeup,
  lamazuna,
  sylnux,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Récupère un projet par son id */
export const getProjetById = (id) => projetsData[id] ?? null;

/** Récupère tous les projets personnels */
export const getProjetsPersonnels = () =>
  Object.values(projetsData).filter((p) => p.type === 'personnel');

/** Récupère tous les projets entreprise */
export const getProjetsEntreprise = () =>
  Object.values(projetsData).filter((p) => p.type === 'entreprise');

/** Récupère tous les projets (personnels + entreprise) */
export const getAllProjets = () => Object.values(projetsData);
