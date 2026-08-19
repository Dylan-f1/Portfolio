export const f1Site = {
  id: 'f1Site',
  type: 'personnel',
  title: "SpeedTrack",
  subtitle: "Plateforme Formule 1 Full-Stack (déployée en ligne)",
  image: "/F1-Logo.webp",
  liveUrl: "https://speed-track-front.vercel.app/",
  githubUrl: "https://github.com/Dylan-f1/SpeedTrack-Front",
  technologies: ["Next.js 16", "React 19", "Tailwind CSS v4", "Node.js", "Express", "MongoDB Atlas", "Mongoose", "Cloudinary"],
  courteDescription: "Plateforme F1 complète — pilotes, écuries, circuits, saisons et règlements — avec API REST propre, reconstruction de 75 ans d'historique réel (881 pilotes, 214 écuries) et enrichissement média (photos, logos, biographies) depuis des sources ouvertes",

  conclusionOrale: "SpeedTrack est une plateforme F1 complète qui centralise pilotes, écuries, circuits, saisons et règlements dans une interface claire, pensée pour les fans débutants comme confirmés. Chaque profil pilote affiche ses vraies statistiques de carrière, sa photo, sa biographie et l'historique complet de ses écuries — reconstitués depuis l'historique réel de la F1 (1950 à aujourd'hui) via l'API publique Jolpica, et non saisis à la main. Les écuries qui ont changé de nom au fil du temps (ex: Sauber devenu Audi, Toleman devenu Alpine) gardent chacune leur propre fiche avec leur histoire propre, reliées entre elles par une frise de lignée. Techniquement, c'est un monorepo à deux applications découplées : un backend Express/MongoDB qui expose une API REST propre, et un frontend Next.js qui la consomme sans jamais parler directement à la base de données. Le site est déployé en ligne (Render + Vercel).",

  defis: [
    {
      titre: "Modélisation des relations temporelles pilote/écurie",
      description: "Un pilote change parfois d'écurie en cours de saison (remplacement, transfert). Stocker l'équipe comme un simple champ sur le pilote rend impossible de savoir pour qui il courait à une date donnée, et casse l'historique dès qu'il change d'équipe.",
      solution: "Création d'une collection de liaison dédiée, driverSeasonEntries, reconstruite automatiquement depuis les résultats de course réels de chaque pilote sur toute sa carrière (1950-2026). Chaque saison et chaque écurie gardent leur historique exact, y compris les changements en cours d'année (ex: un pilote qui court pour deux écuries la même saison)."
    },
    {
      titre: "Une API tierce qui tronque silencieusement les résultats",
      description: "Le script de synchronisation des statistiques carrière (courses, victoires, podiums) plafonnait involontairement à 100 résultats par pilote — l'API source limite la pagination à 100 par requête même quand on en demande plus, sans erreur ni avertissement. Conséquence : les pilotes à longue carrière (Alesi, Schumacher, Massa...) affichaient des statistiques fausses, systématiquement sous-évaluées.",
      solution: "Détection du plafond via l'inspection du champ total de la réponse API, puis pagination explicite par offset jusqu'à couverture complète. Script de recalcul dédié pour corriger rétroactivement les 88 pilotes déjà affectés en base."
    },
    {
      titre: "Distinguer contenu réutilisable et contenu protégé",
      description: "Enrichir automatiquement 881 fiches pilotes avec une vraie photo, et les écuries avec leur logo, pose une question de droit avant d'être une question technique : toute image trouvée en ligne n'est pas légalement réutilisable.",
      solution: "Pour les photos pilotes : sourcing exclusif depuis Wikimedia Commons avec vérification de licence libre (CC/domaine public) fichier par fichier, rejet automatique du contenu hors-sujet (accidents, mémorabilia, cartes génériques) et traçabilité de l'auteur/licence en base. Pour les logos d'écurie (marques déposées, pas du contenu librement réutilisable comme une photo) : usage volontairement limité à un contexte non-commercial, avec repli visuel (initiale stylisée en couleur de marque) tant qu'aucun logo officiel n'est confirmé disponible."
    },
    {
      titre: "Une lignée d'écurie sans perdre l'histoire propre de chaque nom",
      description: "Une écurie comme Audi a porté plusieurs noms au fil du temps (Sauber, BMW Sauber, Alfa Romeo Racing...). Fusionner tout ça en une seule fiche fait perdre l'identité propre de chaque époque (team principals, faits marquants) ; les traiter comme totalement indépendantes fait perdre le fil de la succession.",
      solution: "Chaque nom d'écurie garde sa propre fiche, reliée aux autres par une chaîne de succession bidirectionnelle (peu importe par quel maillon on arrive, la frise complète s'affiche), avec un récit d'héritage expliquant le contexte du changement — écarté des choix bruts d'une API qui ne modélise pas toujours la continuité réelle d'une entité."
    },
    {
      titre: "Sécurité de l'API — entrées non fiables par défaut",
      description: "Une API REST publique reçoit des paramètres de requête, params et body qui ne doivent jamais être injectés tels quels dans les requêtes MongoDB (risque d'injection NoSQL via des opérateurs comme $where ou $gt).",
      solution: "Middleware de sanitization appliqué systématiquement (body, params, headers, query) sur toutes les routes avant qu'elles n'atteignent les contrôleurs, avec une attention particulière à la compatibilité Express 5 (req.query est un getter en lecture seule, donc la sanitization mute l'objet en place plutôt que de le réassigner)."
    }
  ],

  solutions: {
    architecture: "Monorepo à deux applications découplées : speedtrack-backend (Node.js/Express, API REST versionnée en /api, architecture routes/controllers/services/models, déployé sur Render) et speedtrack-frontend (Next.js 16 App Router, pages par ressource : pilotes, écuries, circuits, courses, saisons, règlements, déployé sur Vercel). Le frontend ne parle jamais directement à MongoDB — tout passe par l'API REST du backend. Les médias (photos, logos) sont hébergés sur Cloudinary.",
    evolutionPrevue: "Ajout de pages de détail course avec résultats de qualification, extension de l'enrichissement média aux pilotes restants, et réflexion en cours sur un modèle de monétisation adapté à un site à vocation non-commerciale dans un premier temps.",
    techniquesUtilisees: [
      "Next.js 16 App Router avec routes dynamiques ([slug], [year]) et recherche/filtres pilotée par l'URL sans JS client",
      "API REST Express avec pagination (?page=, ?limit=)",
      "Mongoose avec relations via ObjectId et reconstruction de données historiques par script",
      "Modélisation temporelle par collections de liaison plutôt que champs imbriqués",
      "Import média automatisé (Cloudinary) avec vérification de licence et filtrage de contenu",
      "Sanitization systématique des entrées contre les injections NoSQL",
    ]
  },

  resultats: {
    metriques: [
      "881 pilotes couvrant l'intégralité de l'histoire F1 (1950-2026), stats de carrière exactes reconstruites depuis l'API Jolpica",
      "214 écuries, dont les 11 actuelles avec logo officiel, couleur de marque et lignée historique complète",
      "77 saisons (1950-2026) et 3 425 entrées d'historique pilote/écurie reconstruites automatiquement",
      "Photos pilotes et logos écuries sourcés et vérifiés (licence, pertinence du contenu) depuis des sources ouvertes",
      "Site déployé et accessible en ligne (Render + Vercel)",
    ],
    impact: "C'est le projet que je mets le plus en avant aujourd'hui : il montre ma capacité à mener un projet complet en autonomie, de la modélisation de données à l'interface, avec une vraie réflexion architecture, sécurité et droit (licences, marques) plutôt qu'un simple exercice de style."
  },

  apprentissages: [
    "Modéliser des relations qui changent dans le temps par des collections de liaison, pas des champs imbriqués",
    "Ne jamais faire confiance aveuglément à une API tierce — vérifier ce qu'elle renvoie réellement (pagination, plafonds silencieux) avant de considérer les données comme fiables",
    "Distinguer contenu librement réutilisable (licence libre) et contenu juridiquement protégé (marque déposée) avant d'automatiser un import média",
    "Sanitizer systématiquement les entrées d'une API REST, même publique et en lecture seule",
  ],

  prochaines_etapes: [
    "Peupler les résultats course par course (RaceResult, QualifyingResult) au-delà des stats de carrière agrégées",
    "Étendre l'enrichissement photo/biographie au reste des pilotes historiques",
    "Ajouter les pages de détail course avec résultats de qualification",
    "Documenter l'API REST (collection Postman déjà existante en interne)",
  ]
};
