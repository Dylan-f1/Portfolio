# Journal de décisions

## 2026-10-21

- **Bachelor ajouté au parcours.** « Bachelor Chef de Projet Web & Digital, Nexa Digital School, Lyon, 2026 - 2027, en cours ». Infos reprises du CV (`public/CV-DylanFERNANDES.png`), modalité d'alternance comprise (3 semaines en entreprise, 1 semaine à l'école).
- **Parcours sorti dans `src/data/parcours.js`.** Il était codé en dur dans `APropos.jsx` ; l'accueil refondu doit pouvoir l'afficher aussi.
- **Refonte : textes conservés tels quels.** Seule la casse d'affichage des petits libellés peut changer (ex. « EN SAVOIR PLUS » affiché « En savoir plus ») : les majuscules forcées partout sont un signal générique.
- **Trois directions en prototype avant de toucher au vrai site.** Règle globale : Dylan choisit la DA. Le prototype vit dans `src/prototype/` + route `/directions`, à supprimer une fois le choix fait.
- **Direction A « Livrée » retenue par Dylan**, déclinée sur toutes les pages. Prototype `/directions` supprimé.
- **Navbar et pied de page sortis des pages** et rendus une seule fois dans `App.jsx`. Le pied « Restons en contact / Mes Réseaux », qui n'était que sur l'accueil, est maintenant sur toutes les pages.
- **Composants partagés** : `PageHero` (en-tête bleu + liseré), `Parcours`, `Icons`, `Footer`. `App.css` est importé dans `main.jsx`, avant les CSS de page, pour qu'elles puissent le surcharger.
- **Icônes décoratives retirées** devant les titres (Entreprise, détail projet, détail veille). On garde seulement LinkedIn, GitHub et Télécharger. Les textes des titres sont inchangés.
- **SpeedTrack sorti en tête de /projets** (« Projet phare » existait déjà sur sa carte).
- **Retour en haut de page à chaque navigation** (`App.jsx`) : avant, on arrivait sur une page au milieu.
- **Bug corrigé** : les logos de Geeki et Sylnux avaient un chemin relatif, donc ils étaient cassés sur `/projets/geeki` et `/projets/sylnux`. Ajout du `/` initial.
- **Menu mobile** : le `div` cliquable est remplacé par un vrai bouton avec `aria-expanded` et le libellé « Menu ». Les deux listes de liens desktop/mobile, dans un ordre différent, sont fusionnées dans l'ordre desktop.
- **Critique Impeccable** (score 21/32, rapport dans `.impeccable/critique/`). Corrections appliquées :
  - **Boutons** : la forme coupée est dessinée par `::before`. Un `clip-path` sur le lien masquait l'anneau de focus. Dans l'en-tête bleu, l'anneau est blanc.
  - **Navigation** : « Mon CV » est ajouté au menu. Le menu mobile se ferme avec Échap ou en touchant ailleurs. Lien d'évitement « Aller au contenu » ; la barre de navigation devient un `header`.
  - **Erreurs et onglets** :
    - une vraie page 404 (`NotFound`, avec l'en-tête du site) remplace le renvoi silencieux vers l'accueil ;
    - « Projet non trouvé » et « Article non trouvé » utilisent le même composant ;
    - chaque page a son titre d'onglet (`usePageTitle`).
  - **Barres roses à gauche** : les blocs avec une épaisse barre rose à gauche (cliché refusé par Impeccable) sont remplacés par `.lv-callout`, un trait rose en biais au-dessus du texte, qui reprend le liseré.
  - **Typographie** :
    - largeur de lecture en `rem` (42rem) au lieu de `ch` : mesuré sur le parent, `68ch` laissait passer des lignes de 90 caractères ;
    - `text-wrap: balance` sur les titres et `pretty` sur le texte ;
    - titres de section plus petits sur les pages de détail, qui dépassaient parfois le titre de page sur mobile.
  - **Accueil** : flèche sur chaque bande (le balayage rose n'existe pas au toucher), aperçu placé sous le titre, SpeedTrack en tête de liste, nom recentré sur tablette.
  - **Projets** :
    - logos en hauteur fixe et largeur libre : Sylnux et ZAO étaient écrasés ;
    - l'étiquette « Entreprise » est retirée des cartes : elle était redondante, la section porte déjà le titre « Projets Entreprise » ;
    - nom accessible des cartes réduit au titre (`aria-labelledby`).
  - **Entreprise** : « Sylnux », « ZAO Makeup » et « Lamazuna » mènent maintenant à leur page projet (texte inchangé).
  - **Étiquettes de techno** : en aplat léger, elles ne ressemblent plus à des boutons.
  - **Barre de défilement** : aux couleurs du site.
- **E-mail dans le pied de page** (accord de Dylan) : `dylan.fernandes.travail@gmail.com`, l'adresse du CV, en bouton rose `mailto:`. Avant, elle n'était lisible que dans l'image du CV.
- **Défis et apprentissages affichés sur les pages projet** (accord de Dylan) :
  - les textes viennent des champs `defis` et `apprentissages` des données, inchangés ;
  - deux nouveaux titres de section : « Défis & Solutions » et « Apprentissages », plus le libellé « Solution » ;
  - placement en lecture de débrief, problème puis solution puis résultat : défis après la synthèse, apprentissages après les résultats.
- **Couleurs par rôle** (`--lv-page`, `--lv-surface`, `--lv-alt`, `--lv-panel`, `--lv-ink`, `--lv-muted`, `--lv-rule`, `--lv-link` dans `App.css`) : les pages n'utilisent plus de couleur de fond ou de texte en dur. Le bleu des panneaux, le rose et le carbone de la barre et du pied ne changent pas.
- **Les deux fonds, au choix du visiteur** (décision de Dylan : « faire les deux, avec un fond noir assez cool ») :
  - **Fond noir = fibre de carbone** : un tissage sergé en bleu nuit (`--lv-texture` dans `App.css`), tiré de la carrosserie comme le reste du site, plutôt qu'un aplat noir ou des lueurs. Il est très discret ; sur sa teinte la plus claire, le texte secondaire reste à 8:1.
  - **Par défaut**, le site suit le réglage clair/sombre du système, en CSS (`prefers-color-scheme`), donc sans flash au chargement.
  - **Bouton soleil/lune** dans la barre de navigation (`BoutonFond.jsx`). Le choix est retenu (`localStorage`, clé `fond`) et appliqué avant le premier rendu (`main.jsx`).
  - En noir, le texte bleu passe à `#5aa9ff`, parce que le bleu Alpine profond tombe à 3:1 sur fond noir. Les blocs sombres passent à `#141c36`, et la barre de navigation reçoit un filet pour se détacher du carbone.
  - L'interrupteur d'essai temporaire est supprimé.
- **Fiches projet encadrées** (demande de Dylan) : fond de carte, filet fin autour, le filet épais du haut est gardé. Sans cadre, les cartes flottaient sur le fond.
- **Config de preview corrigée.** L'entrée « Portfolio » de `D:\.claude\launch.json` pointait vers un ancien chemin ; elle pointe maintenant vers `C:\Users\Utilisateur\Projet-Perso\Portfolio`, port 5175 (le 5173 est pris par Ark Breeding).

## 30/10/2026 — Alignement sur le CV d'octobre 2026

Source : `C:\Users\Utilisateur\alternance\CV-DylanFERNANDES.pdf` (version du 19/10, demande de Dylan : « le portfolio n'a pas mon CV adéquat »). Le site servait encore l'ancien PDF (identique à `CV-DylanFERNANDES.backup-avant-correction.pdf`).

- **PDF et aperçu PNG remplacés** dans `public/`. Le PNG est régénéré depuis le PDF (PyMuPDF, 300 dpi, 2481 × 3508 px, même taille qu'avant).
- **Parcours** : BTS à « Nexa Digital School, Lyon » ; bac en « 2024 », « La Martinière Monplaisir, Lyon », « Bac STI2D, option SIN » (le site disait 2021-2023, le CV fait foi).
- **Phrase d'accueil** (décision en attente n° 5) : mentionne le bachelor et l'alternance 2026-2027 « à Lyon et ses alentours », comme le titre du CV.
- **À propos** : la chute ajoute le passage du CV sur la dimension projet (SpeedTrack, Geeki) qui mène au bachelor.
- **Entreprise** : les missions du CV remplacent les trois puces génériques (conseiller beauté IA ZAO, tunnel Saleor, configurateur Lamazuna, back-office traductions, VPS OVH, Claude Code) ; « Lyon, France » devient « 100 % remote » ; nouvelle section « Stages » (Sylnux août 2025, Quevyn Rohel EI avril-juillet 2025), même titraille que « Mon Parcours ».
- **Julia App renommé MindLink** (décision de Dylan, 30/10) : titre et texte de la page projet, comme sur le CV. Les trois mentions de « Julia » comme nom de l'assistant deviennent « l'assistant IA », pour ne pas mélanger deux noms. L'id `juliaApp`, l'URL `/projets/juliaApp` et le logo `julia-logo.svg` (sans texte) ne changent pas, pour ne pas casser les liens existants.
