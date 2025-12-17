export const projetsData = {
  // PROJETS PERSONNELS
  geeki: {
    id: 'geeki',
    type: 'personnel',
    title: "Geeki",
    subtitle: "Plateforme Gaming Complète",
    image: "Geeki-logo.png",
    liveUrl: "https://www.geeki-games.fr/",
    githubUrl: "https://github.com/Dylan-f1/Geeki",
    technologies: ["React", "JavaScript", "CSS3", "REST API"],
    courteDescription: "Plateforme gaming offrant une vaste collection de jeux vidéo avec guides détaillés, bestiaires de personnages et interface moderne pour passionnés",
    
    // CONTENU DÉTAILLÉ
    contexte: `Geeki est né d'une passion pour les jeux vidéo et du besoin de créer une plateforme centralisée où les gamers peuvent trouver des informations détaillées sur leurs jeux préférés. Le projet vise à créer une communauté autour du gaming avec des guides complets, des analyses de personnages et une base de données exhaustive.`,
    
    problematique: "Comment créer une expérience utilisateur fluide et engageante pour une plateforme gaming tout en gérant une grande quantité de données et en maintenant des performances optimales ?",
    
    defis: [
      {
        titre: "Cohésion d'équipe",
        description: "Le projet impliquant plusieurs développeurs, j'ai rencontré des difficultés dans la coordination et la cohérence du code. La communication et la mise en place de conventions étaient essentielles.",
        solution: "Mise en place de conventions de nommage claires, sessions de code review régulières et utilisation de Git avec une stratégie de branches structurée."
      },
      {
        titre: "Problèmes de styling",
        description: "Garantir une cohérence visuelle sur toute l'application avec des composants multiples développés par différentes personnes.",
        solution: "Création d'un système de design centralisé avec des variables CSS réutilisables et des composants UI de base partagés."
      },
      {
        titre: "Gestion de données volumineuses",
        description: "Afficher des centaines de jeux et personnages sans compromettre les performances.",
        solution: "Implémentation de lazy loading, pagination côté client et optimisation des images avec des formats modernes."
      }
    ],
    
    solutions: {
      architecture: "Architecture par composants actuellement en place, permettant une réutilisabilité maximale. Chaque composant (Card, Header, GameDetails, etc.) est isolé et testable indépendamment.",
      evolutionPrevue: "Migration prévue vers une architecture par fonctionnalités pour améliorer la scalabilité. Chaque feature (games, characters, guides) aura son propre dossier avec composants, styles et logique métier.",
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
      "Gestion de projet en équipe avec Git",
      "Importance des conventions de code",
      "Optimisation des performances frontend",
      "Architecture évolutive d'applications React",
      "Résolution de conflits de merge"
    ],
    
    prochaines_etapes: [
      "Migration vers architecture par fonctionnalités",
      "Ajout d'un système d'authentification",
      "Implémentation d'une API backend dédiée",
      "Ajout de fonctionnalités sociales (commentaires, likes)",
      "Tests unitaires et E2E"
    ]
  },

  pokedex: {
    id: 'pokedex',
    type: 'personnel',
    title: "Pokédex Interactif",
    subtitle: "Application Web Pokémon",
    image: "/Pokeball.webp",
    liveUrl: "https://www.pokedex-dylan.fr/",
    githubUrl: "https://github.com/Dylan-f1/PokedexWeb",
    technologies: ["React", "JavaScript", "PokéAPI", "CSS3"],
    courteDescription: "Pokédex interactif moderne permettant de découvrir l'univers Pokémon avec interface intuitive et informations détaillées",
    
    contexte: `Le Pokédex est un projet personnel inspiré par ma passion pour l'univers Pokémon. L'objectif était de créer une application web moderne permettant d'explorer facilement les données de tous les Pokémon en utilisant la PokéAPI.`,
    
    problematique: "Comment créer une interface utilisateur élégante pour afficher et filtrer plus de 1000 Pokémon tout en gérant les appels API de manière efficiente et en résolvant les problèmes de structuration de données complexes ?",
    
    defis: [
      {
        titre: "Design et UX",
        description: "Créer une interface à la fois fidèle à l'esprit Pokémon tout en restant moderne et intuitive. Trouver le bon équilibre entre esthétique et fonctionnalité.",
        solution: "Itérations successives du design avec focus sur la simplicité. Utilisation d'une palette de couleurs inspirée des jeux Pokémon et d'animations subtiles pour l'interactivité."
      },
      {
        titre: "Gestion du Backend",
        description: "Problèmes avec la récupération et le filtrage des données par région. La PokéAPI retourne des données imbriquées complexes nécessitant un traitement côté client.",
        solution: "Mise en place d'une couche d'abstraction pour normaliser les données de l'API. Création de helpers pour le tri et le filtrage par région, type et génération."
      },
      {
        titre: "Structure du projet",
        description: "Organisation du code en composants React pour une maintenance facile et une réutilisabilité maximale.",
        solution: "Architecture par composants bien définie : PokemonCard, PokemonDetails, FilterBar, SearchBar, chacun avec sa responsabilité unique."
      }
    ],
    
    solutions: {
      architecture: "Architecture par composants avec séparation claire des responsabilités. Services API isolés pour une meilleure testabilité.",
      gestionEtat: "Utilisation de useState et useEffect pour la gestion d'état local. Context API pour les filtres globaux.",
      techniquesUtilisees: [
        "Filtres dynamiques (type, région, génération)",
      ]
    },
    
    resultats: {
      metriques: [
        "1000 Pokémon accessibles",
        "Temps de chargement < 2s avec cache",
        "Interface responsive (mobile-first)",
      ],
      impact: "Application fonctionnelle utilisée comme portfolio pour démontrer la maîtrise des appels API, de la gestion de données complexes et du design responsive."
    },
    
    apprentissages: [
      "Manipulation de données complexes (nested objects)",
      "Design system cohérent",
      "Mobile-first approach"
    ],
    
    prochaines_etapes: [
      "Résoudre les bugs de filtrage par région",
      "Ajouter un système de favoris",
      "Implémenter une comparaison entre Pokémon",
      "Ajouter des statistiques avancées",
      "Migration vers TypeScript pour plus de robustesse"
    ]
  },
// PROJET GSB2 - Système de Gestion Médicale (C# Windows Forms)
gsb2: {
  id: 'gsb2',
  type: 'personnel',
  title: "GSB 2",
  subtitle: "Système de Gestion Médicale",
  image: "/gsb-logo.png",
  liveUrl: null,
  githubUrl: "https://github.com/Dylan-f1/GSB_2",
  technologies: ["C#", ".NET Framework", "Windows Forms", "MySQL", "ADO.NET"],
  courteDescription: "Application de bureau pour la gestion complète des patients, médicaments et prescriptions avec système de rôles (Docteur/Admin)",
  
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
},

// PROJET GSB Frontend - Application Web React
gsb_frontend: {
  id: 'gsb_frontend',
  type: 'personnel',
  title: "GSB",
  subtitle: "Application Web de Gestion de Frais",
  image: "/gsb-logo.png",
  liveUrl: null,
  githubUrl: "https://github.com/Dylan-f1/GSB_Front-End",
  technologies: ["React", "React Router", "JavaScript", "CSS3", "REST API", "Render"],
  courteDescription: "Interface web moderne pour la gestion des notes de frais avec système d'authentification complet et communication API REST",
  
  contexte: `GSB Frontend est l'interface utilisateur web du système GSB, permettant aux utilisateurs de gérer leurs notes de frais de manière intuitive. Le projet met l'accent sur une expérience utilisateur moderne, une navigation fluide et une communication efficace avec l'API backend hébergée sur Render.`,
  
  problematique: "Comment créer une interface web React performante et intuitive pour la gestion de frais tout en assurant une authentification sécurisée et une communication fluide avec une API REST distante ?",
  
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
},

  // PROJETS ENTREPRISE
  zaoMakeup: {
    id: 'zao-makeup',
    type: 'entreprise',
    title: "ZAO Makeup - Refonte Checkout",
    subtitle: "E-commerce Cosmétique Bio",
    image: "/LOGO-ZAO_VF.png",
    liveUrl: "https://shop.zaomakeup.com/fr/",
    technologies: ["React", "Tailwind CSS", "Cypress"],
    courteDescription: "Refonte complète du système de checkout d'une plateforme e-commerce de cosmétiques bio avec intégration multi-paiements",
    
    contexte: `ZAO Makeup est une marque de cosmétiques bio rechargeable. Dans le cadre de mon stage chez Sylnux, j'ai été chargé de moderniser leur système de paiement en ligne en migrant d'une solution JavaScript vanilla vers React avec Tailwind CSS, tout en maintenant 100% de fidélité au design existant.`,
    
    problematique: "Comment moderniser un système de checkout critique pour l'entreprise tout en garantissant une parfaite fidélité au design existant, en intégrant trois solutions de paiement différentes et en assurant une qualité zéro défaut ?",
    
    defis: [
      {
        titre: "Fidélité du design",
        description: "Le plus grand défi était de reproduire pixel-perfect le design existant. Chaque élément, chaque espacement, chaque animation devait être identique pour assurer la continuité de l'expérience utilisateur.",
        solution: "Utilisation intensive de Tailwind CSS avec configuration custom pour matcher exactement les couleurs et spacings. Comparaison systématique avec captures d'écran de l'ancien site. Validation par l'équipe design à chaque étape."
      },
      {
        titre: "Migration technologique",
        description: "Passer de JavaScript vanilla à React tout en intégrant Tailwind CSS représentait une réécriture complète du code.",
        solution: "Approche progressive : découpage en petits composants React réutilisables, migration page par page avec tests intensifs à chaque étape."
      },
      {
        titre: "Tests E2E avec Cypress",
        description: "Mise en place complète de la suite de tests E2E, ce qui était nouveau pour moi. Débogage des tests flaky et gestion des timeouts.",
        solution: "Apprentissage approfondi de Cypress, utilisation de fixtures pour mocker les paiements, mise en place de data-testid sur tous les éléments clés. Configuration de retry logic pour la stabilité."
      }
    ],
    
    solutions: {
      architecture: "Architecture React modulaire avec composants réutilisables (OrderSummary, StepPayment, InformationForm, etc.). Services séparés pour chaque provider de paiement.",
      qualite: "Suite de tests E2E Cypress couvrant tous les parcours utilisateur critiques : ajout au panier, modification quantité, application code promo, paiement avec chaque provider.",
      techniquesUtilisees: [
        "React Hooks (useState, useEffect, useContext)",
        "Tailwind CSS avec configuration custom",
        "Cypress pour tests E2E",
        "LocalStorage pour la persistance du panier",
        "Error boundaries pour la robustesse"
      ]
    },
    
    resultats: {
      metriques: [
        "100% de fidélité visuelle au design",
        "3 méthodes de paiement intégrées",
        "Suite de 10 tests E2E Cypress",
        "Temps de chargement réduit de 30%",
        "0 bug critique en production",
        "Code maintenance améliorée (composants réutilisables)"
      ],
      impact: "Checkout modernisé et robuste qui sert désormais de base pour d'autres projets de l'entreprise. Expérience utilisateur fluide maintenue tout en bénéficiant d'un code plus maintenable."
    },
    
    apprentissages: [
      "Gestion de contraintes strictes (100% fidélité design)",
      "Tests E2E avec Cypress",
      "Tailwind CSS à un niveau avancé",
      "Importance de la qualité en environnement production",
      "Gestion des états de transaction complexes",
      "Debugging de tests"
    ]
  },

  lamazuna: {
    id: 'lamazuna',
    type: 'entreprise',
    title: "Lamazuna - Refonte Complète",
    subtitle: "E-commerce Cosmétique Écoresponsable",
    image: "/LMA.jpg",
    liveUrl: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "API Platform"],
    courteDescription: "Refonte totale d'un site e-commerce avec migration du checkout ZAO vers Next.js et TypeScript",
    
    contexte: `Lamazuna est une entreprise pionnière dans les cosmétiques solides et zéro déchet. En alternance chez Sylnux, j'ai été chargé de la refonte complète de leur site e-commerce, incluant la migration du système de checkout développé pour ZAO vers l'écosystème Next.js avec TypeScript.`,
    
    problematique: "Comment migrer un checkout React vanilla vers Next.js App Router avec TypeScript tout en refondant l'intégralité du site, en gérant les spécificités SSR/CSR et en maintenant les performances ?",
    
    defis: [
      {
        titre: "Migration Next.js + TypeScript",
        description: "Le checkout ZAO était en JavaScript pur. Il fallait non seulement migrer vers Next.js mais aussi ajouter TypeScript, ce qui impliquait de typer toutes les props, states et fonctions.",
        solution: "Refactoring progressif : d'abord migration vers Next.js en JS, puis ajout graduel de TypeScript. Création d'interfaces et types pour tous les modèles de données (Product, Cart, Order, etc.)."
      },
      {
        titre: "App Router vs Pages Router",
        description: "Next.js 13+ utilise l'App Router qui change fondamentalement la façon de gérer le routing et les composants serveur/client.",
        solution: "Étude approfondie de la documentation Next.js. Identification claire des composants Server Components vs Client Components. Utilisation de 'use client' stratégiquement."
      },
      {
        titre: "Gestion d'état avec Next.js",
        description: "Le checkout nécessite une gestion d'état complexe (panier, étapes, paiement) qui doit fonctionner avec le SSR de Next.js.",
        solution: "Utilisation de Context API pour l'état global avec hydratation côté client. LocalStorage synchronisé uniquement côté client pour éviter les erreurs SSR."
      },
      {
        titre: "TypeScript - Erreurs de compilation",
        description: "Des centaines d'erreurs TypeScript à corriger : types manquants, any implicites, incompatibilités entre bibliothèques.",
        solution: "Approche méthodique : correction fichier par fichier, création de types utilitaires réutilisables, utilisation de Zod pour la validation runtime."
      },
      {
        titre: "Performance et SEO",
        description: "Un site e-commerce doit être rapide ET bien référencé. Next.js offre les deux mais nécessite une configuration optimale.",
        solution: "Utilisation de Server Components pour le contenu statique, lazy loading des composants lourds, optimisation des images avec next/image, sitemap et metadata pour le SEO."
      }
    ],
    
    solutions: {
      architecture: "Architecture Next.js App Router avec séparation claire Server/Client Components. Layout partagés pour performance. Checkout isolé en route group.",
      typeSafety: "TypeScript strict activé avec interfaces complètes pour tous les modèles. Zod pour validation des données API. Pas d'any (sauf exceptions documentées).",
      techniquesUtilisees: [
        "Next.js 14+ App Router",
        "TypeScript strict mode",
        "Server Components pour performance",
        "Client Components pour interactivité",
        "Tailwind CSS + configuration custom",
        "React Hook Form pour les formulaires",
      ]
    },
    
    resultats: {
      metriques: [
        "Site complet refondé et moderne",
        "TypeScript 100% - 0 erreur de compilation",
        "Lighthouse Score > 90 (Performance, SEO, Accessibility)",
        "Checkout réutilisé avec succès",
        "Code type-safe et maintenable",
        "SSR pour SEO optimal"
      ],
      impact: "Site e-commerce performant et scalable qui bénéficie de toutes les optimisations Next.js. Base de code type-safe facilitant grandement la maintenance future et l'ajout de fonctionnalités."
    },
    
    apprentissages: [
      "Maîtrise de Next.js App Router (concept avancé)",
      "TypeScript en production (types complexes, génériques)",
      "Différence Server Components vs Client Components",
      "Optimisation SEO avec Next.js",
      "Gestion du SSR et hydratation",
      "Refactoring de code legacy",
      "Importance du type safety en équipe",
      "Performance web (Core Web Vitals)"
    ]
  },

  f1Site: {
    id: 'f1-site',
    type: 'personnel',
    title: "Site F1",
    subtitle: "Plateforme Formule 1 (En cours)",
    image: "/F1-Logo.webp",
    liveUrl: "https://github.com/Dylan-f1/Formule-1",
    githubUrl: "https://github.com/Dylan-f1/Formule-1",
    technologies: ["React", "JavaScript", "API F1", "CSS3"],
    courteDescription: "Site de la F1 avec informations sur chaque pilote, écurie et circuit (en cours de réflexion)",
    
    contexte: `Projet en cours de conception visant à créer un site complet sur l'univers de la Formule 1. L'objectif est de centraliser toutes les informations sur les pilotes, écuries, circuits et résultats de course.`,
    
    problematique: "Comment structurer et présenter efficacement une grande quantité de données F1 tout en créant une expérience utilisateur engageante pour les fans de sport automobile ?",
    
    defis: [
      {
        titre: "Architecture de données",
        description: "Définir la structure de données optimale pour gérer pilotes, écuries, circuits et leurs relations.",
        solution: "En cours de réflexion - probable utilisation d'une API F1 existante ou création d'une base de données structurée."
      },
      {
        titre: "Design et UX",
        description: "Créer une identité visuelle dynamique reflétant l'univers de la F1.",
        solution: "Inspiration du design officiel F1 avec touches modernes et animations."
      }
    ],
    
    apprentissages: [
      "Phase de conception et planning",
      "Recherche d'APIs disponibles",
      "Maquettage et wireframing"
    ],
    
    prochaines_etapes: [
      "Finaliser l'architecture du projet",
      "Choisir l'API ou source de données",
      "Créer les maquettes design",
      "Développer le MVP",
      "Implémenter les fonctionnalités avancées"
    ]
  }
};

// Helper pour récupérer un projet par ID
export const getProjetById = (id) => {
  return projetsData[id] || null;
};

// Helper pour récupérer tous les projets personnels
export const getProjetsPerssonels = () => {
  return Object.values(projetsData).filter(p => p.type === 'personnel');
};

// Helper pour récupérer tous les projets entreprise
export const getProjetsEntreprise = () => {
  return Object.values(projetsData).filter(p => p.type === 'entreprise');
};