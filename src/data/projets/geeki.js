export const geeki = {
  id: 'geeki',
  type: 'personnel',
  title: "Geeki",
  subtitle: "Plateforme Gaming Complète",
  image: "Geeki-logo.png",
  liveUrl: "https://www.geeki-games.fr/",
  githubUrl: "https://github.com/Dylan-f1/Geeki",
  technologies: ["React", "JavaScript", "CSS3"],
  courteDescription: "Plateforme gaming offrant une vaste collection de jeux vidéo avec guides détaillés, bestiaires de personnages et interface moderne pour passionnés",

  conclusionOrale: "Geeki illustre mon apprentissage de l'architecture React et de la gestion d'état. Malgré les difficultés de coordination d'équipe où j'ai dû travailler principalement seul, j'ai su créer une plateforme gaming fonctionnelle avec plus de 15 jeux référencés. Le projet démontre ma capacité à maintenir la cohérence visuelle à travers des composants réutilisables et à optimiser les performances. L'évolution prévue vers une architecture par fonctionnalités montre ma compréhension de l'amélioration continue du code.",

  contexte: `Geeki est né d'une passion pour les jeux vidéo et du besoin de créer une plateforme centralisée où les gamers peuvent trouver des informations détaillées sur leurs jeux préférés. Le projet vise à créer une communauté autour du gaming avec des guides complets, des analyses de personnages.`,

  defis: [
    {
      titre: "Cohésion d'équipe",
      description: "Le projet impliquant plusieurs développeurs, j'ai rencontré des difficultés dans la coordination et les envies des autres développeurs. Il y avait que moi qui travaillait dessus.",
      solution: "Mettre un système pour faire travailler les autres développeurs."
    },
    {
      titre: "Problèmes de styling",
      description: "Garantir une cohérence visuelle sur toute l'application avec des composants multiples développés.",
      solution: "Création d'un système de design centralisé avec des variables CSS réutilisables et des composants UI de base partagés."
    },
    {
      titre: "Gestion de données volumineuses",
      description: "Afficher des centaines de jeux et personnages sans compromettre les performances.",
      solution: "Pagination côté client et optimisation des images avec des formats modernes."
    }
  ],

  solutions: {
    architecture: "Architecture par composants actuellement en place, permettant une réutilisabilité maximale. Chaque composant (Card, Header, GameDetails, etc.) est isolé et testable indépendamment.",
    evolutionPrevue: "Migration prévue vers une architecture par fonctionnalités pour améliorer l'adaptabilité. Chaque feature (games, characters, guides) aura son propre dossier avec composants, styles et logique métier.",
    techniquesUtilisees: [
      "Components React réutilisables",
      "Context API pour la gestion d'état",
      "CSS Modules pour l'isolation des styles",
    ]
  },

  resultats: {
    metriques: [
      "Interface utilisateur moderne et responsive",
      "Base de données de plus de 15 jeux référencés",
      "Système de navigation intuitive",
      "Temps de chargement optimisé"
    ],
    impact: "Le projet est actuellement en développement actif et sert de vitrine pour démontrer mes compétences en développement frontend React et en architecture d'applications web."
  },

  apprentissages: [
    "Importance des conventions de code",
    "Optimisation des performances frontend",
    "Architecture évolutive d'applications React",
  ],

  prochaines_etapes: [
    "Migration vers architecture par fonctionnalités",
    "Ajout d'un système d'authentification",
    "Implémentation d'une API backend dédiée",
    "Tests unitaires et E2E"
  ]
};
