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

  filRouge: {
    points: [
      "Full-stack", "React", "Node.js", "MongoDB", "JWT", "REST API",
      "PokéAPI", "Recherche & filtres", "Responsive", "Autonomie",
      "B3 – Développer la présence en ligne", "B4 – Travailler en mode projet", "B5 – Mettre à disposition un service", "B6 – Développement professionnel",
    ],
  },

  conclusionOrale: "ZAO Makeup et le Pokédex représentent deux facettes complémentaires de ma formation : chez Sylnux, j'ai appris la rigueur du code en production — contraintes client, qualité, délais. Sur le Pokédex, j'ai appris la liberté de concevoir — choisir sa stack, architecturer, déployer seul. L'un sans l'autre, ma formation serait incomplète. Techniquement, le projet est passé d'un simple front-end à une application full-stack avec backend Node.js, base MongoDB et authentification JWT. Dès la conception, j'ai appliqué une démarche de sécurité cohérente : CORS restreint (OWASP A05), JWT avec middleware Express (A07), variables d'environnement gitignorées (A02) — des décisions d'architecture prises dès le départ, pas en post-déploiement.",

  contexte: `ZAO Makeup m'a appris à travailler dans un cadre professionnel avec des contraintes client strictes. Avec le Pokédex, j'ai voulu aller plus loin : construire une application full-stack de A à Z, en totale autonomie, pour choisir moi-même ma stack et pousser mes compétences. L'objectif était de créer un outil simple et complet pour consulter les 1025 Pokémon avec leurs types, statistiques et évolutions — avec recherche, filtrage avancé et une interface responsive. Le projet dispose de son propre backend Express.js avec MongoDB Atlas, complété par la PokéAPI pour les sprites et les statistiques.`,

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
      titre: "Démarche de sécurité applicative — OWASP",
      description: "Un panel admin CRUD exposé en production nécessite une sécurisation multicouche : protéger l'accès (authentification), restreindre les origines (CORS), ne jamais exposer les secrets (variables d'environnement) et protéger les routes côté client.",
      solution: "Authentification JWT (token 24h) avec middleware Express vérifiant chaque requête vers les routes protégées (OWASP A07). CORS restreint : pokedex-dylan.fr en prod, localhost:5173 en dev uniquement — aucune requête cross-origin non autorisée (OWASP A05). Variables d'environnement séparées dev/prod, gitignorées — aucune clé ou secret dans le code source (OWASP A02). ProtectedRoute React côté client avec redirection vers /login. AuthContext pour la gestion du cycle de vie du token sans exposition en localStorage brut."
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
      "JWT pour l'authentification admin (token 24h) — OWASP A07",
      "React Router v6 avec routes protégées (ProtectedRoute) et URLs partageables",
      "CORS restreint aux origines autorisées — OWASP A05",
      "Variables d'environnement séparées dev/prod, gitignorées — OWASP A02",
      "PokéAPI pour les sprites, stats et chaînes d'évolution",
      "Table des types Gen 6+ (18 types, 324 interactions) — calcul côté client",
      "Pagination client-side sur 1025 Pokémon (24/page)",
      "localStorage pour favoris et langue (FR/EN)"
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
    "Démarche de sécurité applicative cohérente : JWT (A07) + CORS (A05) + variables d'environnement (A02) — penser OWASP dès l'architecture",
    "Authentification JWT avec middleware Express et contexte React",
    "Le CORS mal configuré est une faille A05 classique — restreindre les origines dès le développement, pas en post-déploiement",
    "Les variables d'environnement gitignorées ne sont pas optionnelles pour une application en production — elles protègent les secrets et les clés d'API",
    "Calcul d'algorithmes complexes côté client (table des types, efficacités cumulées)",
    "Pagination et filtres combinables sur un dataset important",
    "Conception d'un panel admin avec CRUD et retour visuel"
  ],

  prochaines_etapes: [
    "Implémenter une comparaison de plus de 2 Pokémon simultanément",
    "Ajouter des statistiques avancées (classements par stat, courbes d'évolution)",
    "Système de compte utilisateur pour synchroniser les favoris entre appareils"
  ]
};
