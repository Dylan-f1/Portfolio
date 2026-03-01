export const juliaApp = {
  id: 'juliaApp',
  type: 'personnel',
  title: "Julia App",
  subtitle: "Plateforme thérapeutique avec assistant IA 24/7",
  image: "/julia-logo.png",
  liveUrl: "",
  githubUrl: null,
  technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Google Gemini", "NativeWind", "Expo Router"],
  courteDescription: "Application thérapeutique cross-platform connectant patients et thérapeutes via un assistant IA conversationnel disponible entre les séances",

  conclusionOrale: "Julia App est le projet le plus complexe architecturalement que j'ai développé. Gérer deux interfaces distinctes (patient mobile-first, thérapeute desktop-first) avec deux systèmes d'authentification indépendants dans un seul codebase React Native a nécessité une rigueur architecturale importante. L'intégration de Gemini pour l'IA conversationnelle, la gestion du cross-platform web/mobile avec des APIs natives différentes, et la mise en place d'un système de détection de crise démontrent ma capacité à concevoir des applications complexes à fort enjeu humain.",

  contexte: `Julia App est une application thérapeutique qui connecte patients et thérapeutes via un assistant IA nommé Julia, disponible entre les séances. Les thérapeutes disposent d'un dashboard de suivi complet, tandis que les patients accèdent à leur interface via magic link — sans mot de passe. Le projet est développé en React Native avec Expo pour cibler à la fois le mobile et le web depuis un seul codebase.`,

  problematique: "Comment construire une plateforme thérapeutique cross-platform avec deux interfaces distinctes (patient mobile-first, thérapeute desktop-first), deux systèmes d'authentification différents, et une IA conversationnelle intégrée, tout en garantissant la stabilité et la sécurité des données sensibles ?",

  defis: [
    {
      titre: "Authentification multi-rôle complexe",
      description: "Deux middlewares distincts (protectProfessional et protectPatient) avec deux collections MongoDB séparées, et une logique conditionnelle défaillante qui rejetait systématiquement toutes les requêtes patients. Les routes /api/conversations et /api/patient/conversations se chevauchaient, provoquant des appels avec le mauvais token selon l'interface.",
      solution: "Séparation franche des middlewares, routes et endpoints API selon le rôle. Deux espaces de routes totalement isolés (/patient/... et /therapist/...) avec deux middlewares d'auth indépendants et des endpoints distincts."
    },
    {
      titre: "Boucle infinie — flow magic link",
      description: "Les patients vérifiant leur magic link étaient redirigés vers le dashboard thérapeute au lieu de leur propre interface. La logique de redirection dans le layout s'exécutait avant même la vérification du rôle.",
      solution: "Déplacement de la vérification d'authentification et du rôle au niveau screen plutôt qu'au niveau layout, via useEffect et AsyncStorage, évitant tout cycle de redirection."
    },
    {
      titre: "Vérification du consentement — cycle de redirection",
      description: "La vérification du consentement, placée au niveau du layout, créait un cycle infini : l'utilisateur non-consentant était redirigé vers le ConsentScreen, qui renvoyait vers le layout, qui reredirigait.",
      solution: "Descente de la vérification au niveau de chaque écran via un useEffect et AsyncStorage. Logique d'état critique toujours vérifiée au niveau screen pour éviter les cycles."
    },
    {
      titre: "Compatibilité cross-platform web/mobile",
      description: "expo-secure-store n'est pas disponible sur web, les alertes natives React Native ne fonctionnent pas sur web. Des APIs différentes selon la plateforme créaient des erreurs silencieuses.",
      solution: "Création d'un StorageService abstrait qui switche automatiquement entre SecureStore (mobile) et AsyncStorage (web). Gestion conditionnelle des alertes natives selon la plateforme cible."
    },
    {
      titre: "Expo Router — rupture avec React Navigation",
      description: "Expo Router introduit un système de navigation file-based qui casse toutes les conventions React Navigation classiques — route.params n'existe pas, navigation.navigate() non plus.",
      solution: "Migration complète vers useLocalSearchParams() et useRouter().push() sur l'ensemble des écrans, avec refonte des patterns de navigation dès l'architecture."
    },
    {
      titre: "Intégration Gemini API",
      description: "Le modèle gemini-1.5-flash-latest retournait une erreur 404 sur l'API v1beta. Identifiant incorrect qui a nécessité un debug approfondi de l'API.",
      solution: "Utilisation du bon identifiant gemini-1.5-flash (sans suffixe) après test direct du schéma API réel. Leçon généralisée à toutes les intégrations d'APIs tierces du projet."
    }
  ],

  solutions: {
    architecture: "Architecture duale avec deux espaces de routes séparés (/patient/... et /therapist/...), deux middlewares d'auth indépendants et des endpoints API distincts. Vérification d'état critique (consentement, auth) au niveau screen pour éviter les cycles de redirection.",
    responsive: "Design responsive via useWindowDimensions() avec breakpoint à 768px — un seul codebase adapte son layout entre mobile et desktop sans fichiers séparés.",
    techniquesUtilisees: [
      "React Native + Expo pour cross-platform mobile/web",
      "Expo Router (file-based navigation)",
      "Node.js + MongoDB pour le backend",
      "Google Gemini pour l'IA conversationnelle",
      "NativeWind pour le styling",
      "Magic link authentication (sans mot de passe)",
      "AWS S3 pour l'upload de notes de session",
      "12 variantes de skeleton components + hook useApiError",
      "Système de détection automatique des situations de crise"
    ]
  },

  resultats: {
    metriques: [
      "Flow complet de bout en bout : création patient → magic link → chat Julia → dashboard thérapeute",
      "Système de compte thérapeute complet (login, inscription, profil, gestion patients)",
      "Chat patient façon iMessage avec sidebar de conversations résumées par l'IA",
      "Évaluations quotidiennes : humeur, anxiété, sommeil",
      "Upload de notes de session vers AWS S3",
      "Détection automatique des situations de crise",
      "12 variantes de skeleton components pour les états de chargement"
    ],
    impact: "Plateforme thérapeutique fonctionnelle permettant un suivi continu des patients entre les séances. L'assistant IA Julia réduit le sentiment d'isolement des patients et donne aux thérapeutes une vision plus complète de l'évolution de leurs patients."
  },

  apprentissages: [
    "La gestion de l'authentification multi-rôle demande une séparation franche dès l'architecture — middleware, routes et stockage doivent être totalement isolés entre les rôles",
    "Expo Router impose un modèle de navigation fondamentalement différent de React Navigation — repenser les patterns de navigation dès le départ",
    "La vérification d'état critique (consentement, auth) au niveau screen est toujours plus robuste qu'au niveau layout pour éviter les cycles",
    "Tester chaque intégration d'API tierce (Gemini, Mailjet, Saleor) sur le schéma réel avant d'écrire la logique métier",
    "Abstraction des APIs natives pour la compatibilité cross-platform",
    "Architecture d'applications à données sensibles"
  ],

  prochaines_etapes: [
    "Implémenter les notifications de crise en temps réel (push notifications quand Julia détecte une situation grave)",
    "Affiner le système d'évaluation quotidienne avec des visualisations graphiques dans le dashboard thérapeute",
    "Ajouter une couche de tests unitaires sur les services critiques (auth, geminiService, emailService)"
  ]
};
