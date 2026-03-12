export const gsb_frontend = {
  id: 'gsb_frontend',
  type: 'personnel',
  title: "GSB",
  subtitle: "Application Web de Gestion de Frais",
  image: "/gsb-logo.png",
  liveUrl: null,
  githubUrl: "https://github.com/Dylan-f1/GSB_Front-End",
  technologies: ["React", "React Router", "JavaScript", "CSS3", "Render"],
  courteDescription: "Interface web moderne pour la gestion des notes de frais avec système d'authentification complet et communication API REST",

  conclusionOrale: "GSB Frontend illustre ma maîtrise de React Router v6 et de la Context API pour créer une application web complète avec authentification JWT. J'ai développé une interface 100% responsive communiquant avec une API REST hébergée sur Render. La gestion des rôles utilisateurs avec routes protégées et le système d'authentification sécurisé démontrent ma compréhension des enjeux de sécurité web. Ce projet prouve ma capacité à créer des interfaces modernes et intuitives tout en maintenant une architecture propre.",

  contexte: `GSB Frontend est l'interface utilisateur web du système GSB, permettant aux utilisateurs de gérer leurs notes de frais de manière intuitive. Le projet met l'accent sur une expérience utilisateur moderne, une navigation fluide et une communication efficace avec l'API backend hébergée sur Render.`,

  defis: [
    {
      titre: "Authentification et gestion de session",
      description: "Implémenter un système d'authentification complet (inscription, connexion) avec gestion sécurisée des tokens et maintien de session utilisateur.",
      solution: "Utilisation de React Context API pour la gestion globale de l'état d'authentification, stockage sécurisé des tokens JWT, et mise en place de guards de route avec React Router pour protéger les pages privées."
    },
    {
      titre: "Communication avec API distante",
      description: "Gérer les appels API vers un backend hébergé sur Render avec gestion des erreurs, loading states et retry logic.",
      solution: "Création d'un service API centralisé avec intercepteurs pour les headers d'authentification, gestion des erreurs réseau et affichage de feedback utilisateur approprié (loading, success, error)."
    },
    {
      titre: "Interface responsive et moderne",
      description: "Créer une interface utilisateur attrayante et responsive fonctionnant sur tous les devices (desktop, tablette, mobile).",
      solution: "Utilisation de CSS personnalisé avec approche mobile-first, React Icons pour une iconographie cohérente, et composants réutilisables pour maintenir la cohérence visuelle."
    },
    {
      titre: "Gestion des rôles utilisateurs",
      description: "Afficher des interfaces et fonctionnalités différentes selon le rôle de l'utilisateur connecté (admin vs utilisateur standard).",
      solution: "Implémentation de composants conditionnels basés sur le rôle, routes protégées selon les permissions, et affichage dynamique des menus et actions disponibles."
    }
  ],

  solutions: {
    architecture: "Architecture React par composants avec React Router pour la navigation, Context API pour l'état global (auth), et services séparés pour les appels API. Organisation claire entre composants d'interface et logique métier.",
    evolutionPrevue: "Migration vers TypeScript pour type-safety, ajout de React Query pour cache et gestion d'état serveur, implémentation de tests E2E avec Cypress, et amélioration du design system.",
    techniquesUtilisees: [
      "React Hooks (useState, useEffect, useContext, useNavigate)",
      "React Router v6 pour navigation et routes protégées",
      "Context API pour gestion d'état global (authentification)",
      "Fetch API avec service centralisé pour appels REST",
      "CSS personnalisé avec approche mobile-first",
      "React Icons pour iconographie cohérente",
      "Gestion de formulaires contrôlés React"
    ]
  },

  resultats: {
    metriques: [
      "Système d'authentification complet (inscription + connexion)",
      "Interface responsive 100% (mobile, tablette, desktop)",
      "Communication API REST fonctionnelle avec Render",
      "Gestion des rôles utilisateurs avec permissions",
      "Navigation fluide avec React Router v6"
    ],
    impact: "Application web moderne permettant aux utilisateurs de gérer leurs frais efficacement avec une expérience utilisateur fluide. Interface intuitive réduisant le temps de saisie et améliorant la productivité des utilisateurs."
  },

  apprentissages: [
    "Maîtrise de React Router v6 avec routes protégées",
    "Gestion d'état global avec Context API",
    "Authentification JWT et gestion de tokens",
    "Communication avec API REST distante (Render)",
    "Création d'interfaces responsive avec CSS personnalisé",
    "Gestion des erreurs et feedback utilisateur en React",
    "Patterns de composants réutilisables"
  ]
};
