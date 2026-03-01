export const pokedex = {
  id: 'pokedex',
  type: 'personnel',
  title: "Pokédex Interactif",
  subtitle: "Application Web Full-Stack Pokémon",
  image: "/Pokeball.webp",
  liveUrl: "https://www.pokedex-dylan.fr/",
  githubUrl: "https://github.com/Dylan-f1/PokedexWeb",
  technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Vite", "Vercel", "Render"],
  courteDescription: "Pokédex full-stack avec 1025 Pokémon, système de favoris, comparaison, panel admin CRUD et authentification JWT — déployé sur Vercel + Render + MongoDB Atlas",

  conclusionOrale: "Le Pokédex est passé d'un simple front-end consommant une API publique à une application full-stack complète avec son propre backend Node.js, sa base de données MongoDB et un système d'authentification JWT. J'ai développé des fonctionnalités avancées comme le calcul des efficacités de types côté client (324 interactions), la comparaison de Pokémon, les URLs partageables et un panel admin avec CRUD complet. Le projet est déployé en production sur trois services distincts (Vercel, Render, MongoDB Atlas) avec une gestion propre des variables d'environnement et un CORS restreint aux origines autorisées.",

  contexte: `Le Pokédex est un projet personnel qui a évolué bien au-delà de sa version initiale. L'objectif était de créer une application web complète permettant d'explorer les 1025 Pokémon avec une expérience utilisateur riche : recherche avancée, filtres combinables, comparaison, favoris et une interface bilingue FR/EN. Le projet dispose désormais de son propre backend Express.js avec MongoDB Atlas pour stocker et servir les données Pokémon, complété par la PokéAPI pour les sprites et statistiques.`,

  problematique: "Comment concevoir une application full-stack Pokémon performante et maintenable, avec des fonctionnalités avancées (filtres combinables, comparaison, efficacités de types, admin CRUD) tout en assurant une expérience fluide sur 1025 entrées et un déploiement stable sur des services cloud distincts ?",

  defis: [
    {
      titre: "Architecture full-stack et déploiement multi-services",
      description: "Coordonner trois services distincts (Vercel pour le frontend, Render pour le backend, MongoDB Atlas pour la BDD) avec des variables d'environnement séparées en dev et prod, et un CORS correctement configuré.",
      solution: "Fichiers .env séparés gitignorés, variables définies directement sur Vercel et Render. CORS restreint aux origines autorisées (pokedex-dylan.fr en prod, localhost:5173 en dev) pour sécuriser les appels API."
    },
    {
      titre: "Calcul des efficacités de types côté client",
      description: "Calculer les faiblesses et résistances de chaque Pokémon en combinant ses 1 ou 2 types, en gérant les immunités et les multiplicateurs cumulés (×4, ×½, ×¼...).",
      solution: "Création d'une table des types Gen 6+ dans typeChart.js couvrant les 18 types et 324 interactions. Le calcul se fait entièrement côté client sans appel réseau, avec regroupement par multiplicateur (×4 / ×2 / ×½ / ×¼ / ×0)."
    },
    {
      titre: "Filtres combinables et pagination client-side",
      description: "Permettre la combinaison de filtres (type, génération, région, tri, recherche, favoris) sur 1025 Pokémon tout en maintenant des performances optimales et une pagination cohérente.",
      solution: "Chargement unique des 1025 Pokémon au démarrage, puis filtrage et découpage en pages (24 par page) entièrement côté React. Les filtres sont chaînés séquentiellement pour produire la liste finale paginée."
    },
    {
      titre: "Authentification JWT et panel admin",
      description: "Sécuriser le panel admin avec une authentification par token sans base d'utilisateurs complexe, et protéger la route /admin contre les accès non authentifiés.",
      solution: "Login avec mot de passe admin générant un JWT valable 24h. AuthContext React pour la gestion de session côté client. Middleware authMiddleware Express vérifiant le token sur toutes les routes protégées. ProtectedRoute redirige vers /login si non authentifié."
    },
    {
      titre: "URLs partageables et navigation directe",
      description: "Permettre l'accès direct à un Pokémon via son URL (/pokemon/25 pour Pikachu) sans passer par la liste, tout en gérant le rechargement de page.",
      solution: "React Router v6 avec route dynamique /pokemon/:id. À l'ouverture directe d'une URL, le Pokémon est chargé depuis l'API backend et le modal de détail s'ouvre immédiatement."
    }
  ],

  solutions: {
    architecture: "Architecture full-stack découplée : frontend React/Vite sur Vercel, backend Express.js sur Render, données sur MongoDB Atlas. Côté frontend, organisation en composants spécialisés (PokemonCard, PokemonModal, ComparisonModal, AdminPage, LoginPage, ProtectedRoute, Pagination) et contextes dédiés (AuthContext). Côté backend, architecture MVC avec models Mongoose, controllers et routes séparés.",
    gestionEtat: "État global via AuthContext (JWT) et localStorage pour la persistance des favoris et de la langue. Filtres gérés localement dans le composant principal avec chaînage séquentiel. Pagination client-side pour éviter des appels API répétés.",
    techniquesUtilisees: [
      "React 18 + Vite pour le frontend",
      "Node.js + Express.js pour le backend",
      "MongoDB Atlas + Mongoose pour la base de données",
      "JWT pour l'authentification admin (token 24h)",
      "React Router v6 avec routes protégées et URLs partageables",
      "PokéAPI pour les sprites, stats et chaînes d'évolution",
      "Table des types Gen 6+ (18 types, 324 interactions) — calcul côté client",
      "Pagination client-side sur 1025 Pokémon (24/page)",
      "localStorage pour favoris et langue (FR/EN)",
      "CORS restreint aux origines autorisées",
      "Variables d'environnement séparées dev/prod"
    ]
  },

  resultats: {
    metriques: [
      "1025 Pokémon consultables avec pagination (24/page)",
      "Filtres combinables : 18 types, 9 générations, régions, tri",
      "Comparaison côte à côte avec barres de stats miroir",
      "Calcul des efficacités de types (324 interactions)",
      "Panel admin CRUD complet avec authentification JWT",
      "Interface bilingue FR/EN persistée en localStorage",
      "Toggle sprite Shiny avec effet glow doré",
      "URLs partageables (/pokemon/:id)",
      "Déployé en production : Vercel + Render + MongoDB Atlas"
    ],
    impact: "Application full-stack complète et déployée en production, démontrant la maîtrise de l'ensemble de la chaîne de développement web : conception d'une API REST, modélisation de données avec Mongoose, authentification JWT, déploiement multi-services et expérience utilisateur avancée."
  },

  apprentissages: [
    "Conception et déploiement d'une architecture full-stack découplée (Vercel + Render + MongoDB Atlas)",
    "Authentification JWT avec middleware Express et contexte React",
    "Gestion du CORS en production avec origines restreintes",
    "Calcul d'algorithmes complexes côté client (table des types, efficacités cumulées)",
    "Pagination et filtres combinables sur un dataset important",
    "Gestion des variables d'environnement en développement et production",
    "Conception d'un panel admin avec CRUD et retour visuel"
  ],

  prochaines_etapes: [
    "Implémenter une comparaison de plus de 2 Pokémon simultanément",
    "Ajouter des statistiques avancées (classements par stat, courbes d'évolution)",
    "Système de compte utilisateur pour synchroniser les favoris entre appareils"
  ]
};
