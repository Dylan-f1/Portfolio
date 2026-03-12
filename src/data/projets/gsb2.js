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

  conclusionOrale: "GSB 2 est mon projet le plus complet en C# et démontre ma maîtrise de l'architecture en trois couches (Forms/Models/DAO). J'ai implémenté un système de rôles et permissions robuste avec gestion des relations N-N en base de données MySQL. La gestion de données médicales (patients, prescriptions, médicaments) m'a imposé une réflexion RGPD concrète : ces données appartiennent à la catégorie spéciale de l'article 9, ce qui a guidé chaque décision architecturale — contrôle d'accès strict, prévention des injections SQL (OWASP A03), minimisation des données et traçabilité. Ce projet illustre ma capacité à concevoir des systèmes desktop sécurisés et conformes pour des données sensibles à fort enjeu.",

  contexte: `GSB 2 est une application de gestion médicale développée pour répondre aux besoins des professionnels de santé. Le projet vise à centraliser la gestion des patients, du catalogue de médicaments et des prescriptions dans une interface desktop sécurisée avec contrôle d'accès basé sur les rôles.`,

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
    },
    {
      titre: "Conformité RGPD — données de santé",
      description: "Les données traitées (pathologies, prescriptions, médicaments par patient) constituent des données de santé au sens de l'article 9 du RGPD — catégorie spéciale nécessitant un niveau de protection renforcé.",
      solution: "Principe de minimisation des données : seules les informations strictement nécessaires sont collectées. Contrôle d'accès basé sur le rôle (Docteur = lecture seule, Admin = CRUD) pour limiter l'exposition aux données sensibles. Prévention des injections SQL par paramètres (OWASP A03) pour garantir l'intégrité et la confidentialité. Validation systématique des entrées à chaque couche (Forms + DAO) pour écarter toute donnée corrompue ou malveillante."
    }
  ],

  solutions: {
    architecture: "Architecture en trois couches bien définie : Forms (UI), Models (entités métier), DAO (accès données). Séparation claire des responsabilités avec Database.cs centralisé pour la gestion des connexions MySQL.",
    evolutionPrevue: "Migration envisagée vers WPF ou .NET 6+ pour moderniser l'interface. Ajout d'un système de logs, d'exports PDF des prescriptions et d'un module de statistiques avancées.",
    techniquesUtilisees: [
      "Pattern DAO pour l'abstraction de la base de données",
      "Windows Forms avec TabControl pour navigation",
      "Paramètres SQL pour prévenir les injections (OWASP A03 — Injection)",
      "Contrôle d'accès basé sur les rôles (RBAC) — Docteur/Admin",
      "Minimisation des données — collecte strictement nécessaire",
      "Validation des entrées côté client et DAO (double couche)",
      "DataGridView pour affichage des données tabulaires",
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
    "Implémentation de systèmes de permissions et contrôle d'accès (RBAC)",
    "Développement Windows Forms avec TabControl et DataGridView",
    "Les données médicales sont des données de santé (RGPD art. 9) — chaque choix architectural doit intégrer la conformité dès la conception",
    "Prévention OWASP A03 : les paramètres SQL sont la première ligne de défense contre les injections dans les applications à données sensibles",
    "La validation des entrées à double couche (UI + DAO) garantit l'intégrité même en cas de contournement de l'interface"
  ],

  prochaines_etapes: [
    "Ajout d'un système de logs d'accès pour traçabilité complète (qui a consulté quoi et quand) — exigence RGPD pour les données de santé",
    "Chiffrement des données sensibles au repos (prescriptions, pathologies)",
    "Module de statistiques (médicaments les plus prescrits, etc.)",
  ]
};
