export const f1Site = {
  id: 'f1Site',
  type: 'personnel',
  title: "SpeedTrack",
  subtitle: "Plateforme Formule 1 Full-Stack (En développement actif)",
  image: "/F1-Logo.webp",
  liveUrl: null,
  githubUrl: "https://github.com/Dylan-f1/SpeedTrack-Front",
  technologies: ["Next.js 15", "React 19", "Tailwind CSS v4", "Node.js", "Express", "MongoDB Atlas", "Mongoose"],
  courteDescription: "Plateforme F1 complète — pilotes, écuries, circuits, saisons et règlements — avec API REST propre (10 collections), synchronisation avec l'API publique F1 Jolpica et classements calculés à la volée",

  conclusionOrale: "SpeedTrack est une plateforme F1 complète qui centralise pilotes, écuries, circuits, saisons et règlements dans une interface claire, pensée pour les fans débutants comme confirmés. Chaque profil pilote affiche ses vraies statistiques de carrière — courses, victoires, podiums, pole positions, titres — reconstituées saison par saison depuis l'historique réel de la F1 via l'API publique Jolpica, et non saisies à la main. Techniquement, c'est un monorepo à deux applications découplées : un backend Express/MongoDB qui expose une API REST propre sur 10 collections, et un frontend Next.js qui la consomme sans jamais parler directement à la base de données. Les classements ne sont jamais stockés — ils sont recalculés à la demande pour rester toujours exacts, y compris quand un pilote change d'écurie en cours de saison.",

  defis: [
    {
      titre: "Modélisation des relations temporelles pilote/écurie",
      description: "Un pilote change parfois d'écurie en cours de saison (remplacement, transfert). Stocker l'équipe comme un simple champ sur le pilote rend impossible de savoir pour qui il courait à une date donnée, et casse l'historique dès qu'il change d'équipe.",
      solution: "Création de collections de liaison dédiées, driverSeasonEntries et teamSeasonEntries, avec une période from/to par entrée. Chaque saison, chaque écurie et chaque pilote gardent leur historique exact, y compris les changements en cours d'année."
    },
    {
      titre: "Classements toujours exacts, jamais désynchronisés",
      description: "Stocker les classements pilotes/écuries directement en base pose un problème classique : dès qu'un résultat de course est corrigé ou ajouté, les classements stockés deviennent faux tant qu'on ne les recalcule pas manuellement.",
      solution: "Les standings ne sont jamais stockés : un service dédié (calcDriverStandings) les recalcule à la volée depuis raceResults à chaque requête, en croisant avec driverSeasonEntries pour attribuer chaque résultat à la bonne écurie même en cas de changement en cours de saison."
    },
    {
      titre: "Sécurité de l'API — entrées non fiables par défaut",
      description: "Une API REST publique reçoit des paramètres de requête, params et body qui ne doivent jamais être injectés tels quels dans les requêtes MongoDB (risque d'injection NoQL via des opérateurs comme $where ou $gt).",
      solution: "Middleware de sanitization appliqué systématiquement (body, params, headers, query) sur toutes les routes avant qu'elles n'atteignent les contrôleurs, avec une attention particulière à la compatibilité Express 5 (req.query est un getter en lecture seule, donc la sanitization mute l'objet en place plutôt que de le réassigner)."
    },
    {
      titre: "Alimenter la base sans tout saisir à la main",
      description: "Constituer une base de données F1 complète (pilotes, écuries, circuits, résultats) à la main aurait pris un temps considérable et introduit des erreurs de saisie.",
      solution: "Scripts de synchronisation dédiés qui interrogent l'API publique Jolpica-F1 et normalisent les données (mapping pays/nationalités) avant de les insérer en base, avec un script de seed séparé pour les données de référence."
    }
  ],

  solutions: {
    architecture: "Monorepo à deux applications découplées : speedtrack-backend (Node.js/Express, API REST versionnée en /api, architecture routes/controllers/services/models) et speedtrack-frontend (Next.js 15 App Router, pages par ressource : pilotes, écuries, circuits, courses, saisons, règlements). Le frontend ne parle jamais directement à MongoDB — tout passe par l'API REST du backend.",
    evolutionPrevue: "Déploiement du backend (Render ou équivalent) pour une démo live publique, ajout de pages de détail course avec résultats de qualification, et à terme un module d'affiliation billetterie GP en marge du contenu gratuit.",
    techniquesUtilisees: [
      "Next.js 15 App Router avec routes dynamiques ([slug], [year])",
      "API REST Express avec pagination (?page=, ?limit=)",
      "Mongoose avec 10 collections et relations via ObjectId",
      "Modélisation temporelle par collections de liaison plutôt que champs imbriqués",
      "Classements calculés à la demande, jamais persistés",
      "Sanitization systématique des entrées contre les injections NoSQL",
    ]
  },

  resultats: {
    metriques: [
      "Stats de carrière pilotes (courses, victoires, podiums, pole positions, titres) reconstituées depuis l'historique réel F1 via l'API Jolpica, saison par saison",
      "4 saisons scaffoldées (2023 → 2026) avec calendrier des Grands Prix par circuit",
      "10 collections MongoDB couvrant pilotes, écuries, circuits, saisons, règlements, Grands Prix, résultats de course/qualification et entrées saison",
      "6 sections frontend connectées à l'API : pilotes, écuries, circuits, courses, saisons, règlements",
      "API REST complète avec pagination sur toutes les ressources",
    ],
    impact: "Projet en développement actif, backend et frontend fonctionnels en local. C'est le projet que je mets le plus en avant aujourd'hui : il montre ma capacité à mener un projet complet en autonomie, de la modélisation de données à l'interface, avec une vraie réflexion architecture et sécurité plutôt qu'un simple exercice de style."
  },

  apprentissages: [
    "Modéliser des relations qui changent dans le temps par des collections de liaison, pas des champs imbriqués",
    "Ne jamais stocker une donnée calculable — la recalculer garantit qu'elle reste juste",
    "Sanitizer systématiquement les entrées d'une API REST, même publique et en lecture seule",
  ],

  prochaines_etapes: [
    "Peupler les résultats course par course (RaceResult, QualifyingResult) au-delà des stats de carrière agrégées",
    "Déployer le backend pour une démo live accessible publiquement",
    "Ajouter les pages de détail course avec résultats de qualification",
    "Documenter l'API REST (collection Postman déjà existante en interne)",
  ]
};
