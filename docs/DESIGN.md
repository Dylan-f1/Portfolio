# Portfolio — doc design

## Concept

ADN imposé par Dylan : **bleu et rose de l'Alpine F1**. La F1 n'est pas qu'un décor : c'est la passion racontée dans « À propos » et le sujet de la veille techno et de SpeedTrack. Chaque direction tire son idée d'un objet réel du monde de la course.

## Existant avant refonte (état au 21/10/2026)

- Fond quasi noir `#06060a`, cartes translucides arrondies, nom en texte dégradé bleu → rose.
- Typo : Poppins (corps), Space Grotesk (titres), Space Mono.
- Couleurs : `#0090FF` (bleu), `#FF1493` / `#c20497` (rose).
- Signaux « look IA » relevés : Poppins, texte en dégradé, grille de cartes avec icône, hover partout, lueurs radiales en fond.
- Visuel propre au projet : `public/Fond-AlpinePortfolio.png` (Alpine de nuit, traînées roses).

## Directions proposées (prototype `/directions`)

| | A · Livrée | B · Feuille de temps | C · Course de nuit |
|---|---|---|---|
| Idée | La carrosserie de l'Alpine : aplats bleu, carbone, rose, découpes en diagonale | Les feuilles de classement FIA : papier, filets, données alignées | La photo de l'Alpine de nuit en plein écran ; la traînée rose devient la trajectoire qui descend la page |
| Fond | Clair `#f6f8fb` + aplats | Papier bleuté `#eef2f7` | Nuit `#050a24` (relevée sur la photo) |
| Bleu / rose | `#0055b8` / `#ff2e93` | `#0057c2` / `#d6006f` | `#3aa0ff` / `#ff3da5` |
| Typo | Anybody (largeur variable, italique) + Schibsted Grotesk | Archivo (étendue) + IBM Plex Mono | Big Shoulders Display + Hanken Grotesk |
| Signature | Liseré rose oblique comme sur le ponton ; bande rose qui balaie au survol | Parcours en tour de 3 secteurs, celui en cours hachuré rose | Ligne rose continue avec repères à chaque étape |
| Motion | Panneau bleu qui se découpe à l'arrivée (700 ms) | Secteurs qui se remplissent l'un après l'autre | La trajectoire se trace depuis la photo |

Toutes : contraste AA vérifié sur les couleurs de texte, `prefers-reduced-motion` respecté, polices Google Fonts (autorisées par la CSP de `vercel.json`).

**Direction retenue : A · Livrée** (choix de Dylan, 21/10/2026). Le détail du système est plus bas.

## Système « Livrée » (appliqué au site)

- **Idée** : le site se lit comme la carrosserie de l'Alpine. Aplats pleins (bleu, carbone, blanc), découpes en diagonale avec une seule pente commune, liseré rose oblique comme sur le ponton.
- **Couleurs** (`src/App.css`) :
  - `--lv-blue #0055b8` : bleu Alpine profond, fonds de panneaux, texte blanc dessus 6.6:1.
  - `--lv-blue-hi #2e9bff` : reflets sur fond sombre uniquement.
  - `--lv-pink #ff2e93` : rose BWT, aplats et liserés ; texte carbone dessus (jamais de blanc sur rose).
  - `--lv-carbon #0b1020` : barre de navigation, bandes sombres, pied de page.
  - `--lv-white #f6f8fb` : fond de page.
  - `--lv-muted #4a5672` : texte secondaire, 7:1 sur blanc.
- **Deux fonds** :
  - fond clair `#f6f8fb` ;
  - fond noir « fibre de carbone » : un tissage bleu nuit sur `#070a14`.
  - Les pages n'utilisent que des couleurs par rôle (`--lv-page`, `--lv-surface`, `--lv-panel`, `--lv-ink`, `--lv-muted`, `--lv-rule`, `--lv-link`, `--lv-alt`).
  - Ne changent jamais : le bleu des panneaux, le rose, le carbone de la barre et du pied.
  - Le site suit le système par défaut ; le visiteur peut choisir avec le bouton soleil/lune.
- **Typo** : Anybody (axe de largeur variable) pour les titres, en italique large pour les noms propres et les titres de page, en condensé pour les rubriques ; Schibsted Grotesk pour le texte courant.
- **Formes** : aucun arrondi, aucune ombre. Les étiquettes (badge, statut, « Projet phare ») sont des languettes roses à coin coupé. Les listes utilisent des carrés roses, comme le CV.
- **Signature** : le liseré rose oblique sous le panneau bleu de chaque en-tête de page. Pour une phrase mise en avant, `.lv-callout` pose un court trait rose en biais au-dessus du texte. Jamais de barre colorée épaisse sur le côté d'un bloc.
- **Boutons** : forme coupée dessinée en `::before` (jamais de `clip-path` sur l'élément focusable). Anneau de focus rose, blanc sur le bleu.
- **Étiquettes** : les technos sont un aplat léger, non cliquable ; seules les languettes roses ou bleues portent un statut.
- **Motion** : un seul moment à l'arrivée sur l'accueil (le panneau bleu se découpe, 700 ms, ease-out). Survol des bandes de l'accueil : une bande rose traverse (260 ms). Rien d'autre ne bouge. `prefers-reduced-motion` coupe tout.
- **Retiré** : les icônes décoratives devant chaque titre (Feather), le texte en dégradé, les cartes arrondies, les lueurs de fond, Poppins / Space Grotesk / Space Mono.
