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

  conclusionOrale: "Geeki est une plateforme gaming qui centralise plus de 15 jeux avec guides détaillés et bestiaires de personnages, dans une interface moderne pensée pour les passionnés. L'application repose sur une architecture React par composants réutilisables (Card, Header, GameDetails), avec pagination côté client et images optimisées pour rester fluide malgré le volume de contenu. Une migration vers une architecture par fonctionnalités est prévue pour faciliter l'ajout de nouveaux jeux et guides.",

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
