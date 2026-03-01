export const gsb2 = {
  id: 'gsb2',
  type: 'personnel',
  title: "GSB 2",
  subtitle: "Système de Gestion Médicale",
  image: "/gsb-logo.png",
  liveUrl: null,
  githubUrl: "https://github.com/Dylan-f1/GSB_2",
  technologies: ["C#", ".NET Framework", "Windows Forms", "MySQL"],
  courteDescription: "Application de bureau pour la gestion complète des patients, médicaments et prescriptions avec système de rôles (Docteur/Admin)",

  conclusionOrale: "GSB 2 est mon projet le plus complet en C# et démontre ma maîtrise de l'architecture en trois couches (Forms/Models/DAO). J'ai implémenté un système de rôles et permissions robuste avec gestion des relations N-N en base de données MySQL. La gestion de 5 tables relationnelles avec validation métier complète prouve ma compréhension des principes SOLID et de la sécurité applicative. Ce projet illustre ma capacité à concevoir des systèmes desktop complexes et maintenables pour des données sensibles.",

  contexte: `GSB 2 est une application de gestion médicale développée pour répondre aux besoins des professionnels de santé. Le projet vise à centraliser la gestion des patients, du catalogue de médicaments et des prescriptions dans une interface desktop sécurisée avec contrôle d'accès basé sur les rôles.`,

  problematique: "Comment créer une application desktop robuste et sécurisée permettant la gestion complète d'un système médical avec différents niveaux d'accès tout en garantissant l'intégrité des données ?",

  defis: [
    {
      titre: "Architecture en couches",
      description: "Organiser le code de manière maintenable et évolutive pour une application desktop complexe avec gestion de données médicales sensibles.",
      solution: "Implémentation d'une architecture en trois couches (Forms/Models/DAO) séparant clairement l'interface, la logique métier et l'accès aux données. Utilisation du pattern DAO pour l'abstraction de la base de données."
    },
    {
      titre: "Système de rôles et permissions",
      description: "Implémenter un système de contrôle d'accès granulaire avec des permissions différenciées entre Docteurs (lecture seule) et Administrateurs (CRUD complet).",
      solution: "Création d'un système de rôles booléen (Role = true/false) avec vérification des permissions à chaque opération. Interfaces utilisateur distinctes (FormAdmin/FormDoctor) adaptées aux droits de chaque rôle."
    },
    {
      titre: "Relations complexes N-N",
      description: "Gérer la relation many-to-many entre prescriptions et médicaments avec des quantités spécifiques pour chaque association.",
      solution: "Création d'une table de liaison 'Appartient' avec attribut 'quantite'. Développement d'un DAO dédié (AppartientDAO) pour gérer ces associations avec vérification des doublons et calcul de statistiques."
    },
    {
      titre: "Validation des données médicales",
      description: "Assurer l'intégrité des données avec validation des dates de prescriptions, vérification des médicaments expirés et contrôle des quantités.",
      solution: "Implémentation de validations côté client (Windows Forms) et côté DAO avec vérification systématique des dates, des doublons et des contraintes métier avant insertion en base."
    }
  ],

  solutions: {
    architecture: "Architecture en trois couches bien définie : Forms (UI), Models (entités métier), DAO (accès données). Séparation claire des responsabilités avec Database.cs centralisé pour la gestion des connexions MySQL.",
    evolutionPrevue: "Migration envisagée vers WPF ou .NET 6+ pour moderniser l'interface. Ajout d'un système de logs, d'exports PDF des prescriptions et d'un module de statistiques avancées.",
    techniquesUtilisees: [
      "Pattern DAO pour l'abstraction de la base de données",
      "Windows Forms avec TabControl pour navigation",
      "Paramètres SQL pour prévenir les injections",
      "DataGridView pour affichage des données tabulaires",
      "Gestion d'état avec propriétés statiques",
      "CRUD complet avec validation métier"
    ]
  },

  resultats: {
    metriques: [
      "5 tables relationnelles (Users, Patients, Medicine, Prescription, Appartient)",
      "2 rôles utilisateurs avec permissions distinctes",
      "Gestion N-N prescriptions-médicaments avec quantités",
      "Export PDF des prescriptions"
    ],
    impact: "Application fonctionnelle déployée pour la gestion quotidienne de cabinets médicaux. Permet un gain de temps significatif dans la gestion des prescriptions et améliore la traçabilité des médicaments prescrits."
  },

  apprentissages: [
    "Maîtrise de l'architecture en couches pour applications desktop",
    "Gestion avancée de MySQL avec ADO.NET et pattern DAO",
    "Compréhension profonde des relations N-N en base de données",
    "Implémentation de systèmes de permissions et contrôle d'accès",
    "Développement Windows Forms avec TabControl et DataGridView",
    "Bonnes pratiques de sécurité (paramètres SQL, validation données)"
  ],

  prochaines_etapes: [
    "Ajout d'un système de logs pour traçabilité complète",
    "Module de statistiques (médicaments les plus prescrits, etc.)",
  ]
};
