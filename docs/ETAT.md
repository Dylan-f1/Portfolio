# État du projet

## Reprendre ici (30/10/2026)

**Objectif** : refaire le portfolio (dylan-fernandes.fr) en gardant l'ADN bleu/rose Alpine F1 et tous les textes existants ; ajouter le bachelor au parcours.

**Fait**
- Bachelor Chef de Projet Web & Digital dans le parcours (`src/data/parcours.js`, accueil + `/a-propos`).
- Direction « Livrée » appliquée à toutes les pages (`docs/DESIGN.md`).
- Critique Impeccable faite (21/32 avant corrections), et toutes les corrections qui ne demandaient ni nouveau texte ni choix de Dylan sont appliquées (`docs/DECISIONS.md`).
- Vérifié :
  - aucun débordement sur 12 routes en 360 / 768 / 1440 px ;
  - aucune image cassée ;
  - titres d'onglet corrects, 404 réelle ;
  - focus visible sur les boutons ;
  - lint propre, build OK.

- Fond clair ou fond noir « fibre de carbone » au choix du visiteur (bouton soleil/lune, système par défaut).
- **Commit `9cbc966` sur la branche `refonte-livree`** (26/10/2026). Branche poussée sur GitHub le 26/10/2026, mais pas fusionnée dans `main`, donc pas en production. Le dossier `.impeccable/` (archive de la critique) n'est pas commité.

- **Aligné sur le CV d'octobre 2026** (30/10/2026) : PDF + PNG, parcours, accroche, À propos, Entreprise (missions + stages), Julia App renommé MindLink. Vérifié : lint, build, pas de débordement en 375 px, image du CV chargée. **Pas encore commité.** Détail dans `docs/DECISIONS.md`.

**Pas encore fait** : `review-animations` (Emil Kowalski) non lancé.

- Pull request ouverte : https://github.com/Dylan-f1/Portfolio/pull/7. Les vérifications Vercel passent. Aperçu : https://portfolio-git-refonte-livree-dylans-projects-b0c2ed3b.vercel.app

**Prochaine action** : fusion de la PR #7 dans `main` (déploiement en production), avec l'accord de Dylan. Ensuite, les décisions ci-dessous.

## En attente d'une décision de Dylan

1. ~~Contact~~ : fait, e-mail dans le pied de page.
2. ~~Défis et apprentissages~~ : faits, affichés sur les 9 pages projet.
3. **Visuels** :
   - SpeedTrack affiche le logo officiel F1, une marque déposée : le remplacer par une capture du site ?
   - L'avatar dessiné de l'accueil : le garder, ou passer à une vraie photo ?
4. **Veille** : la mettre dans le menu ? Aujourd'hui, `/veille-techno` n'est liée nulle part.
5. ~~Phrase d'accueil~~ : faite le 30/10, alignée sur le CV.
7. ~~Julia App / MindLink~~ : renommé MindLink le 30/10.
6. « Sources : Autosport, IA paramétré » sur la page Veille peut se lire comme « écrit par une IA ».
